import { is, parse, safeParse } from "valibot"
import { Client } from "./client"
import {
  ClientEventOutput,
  ErrorSchema,
  EventContentOutput,
  EventContentSchema,
  Params,
  Timeline,
} from "."

export class Room {
  roomId: string
  client: Client
  name?: { name: string }

  constructor(roomId: string, client: Client) {
    this.roomId = roomId
    this.client = client
  }

  async get(endpoint: string, params?: Params) {
    const combinedParams = { ...this.client.params, ...params }
    return await Client.authenticatedGet(
      this.client.buildUrl(endpoint + "/rooms/" + this.roomId),
      this.client.accessToken,
      {
        params: combinedParams,
        fetch: this.client.fetch,
      }
    )
  }

  async getName(): Promise<unknown> {
    const name: { name: string } = await this.client.get(
      `rooms/${this.roomId}/state/m.room.name`
    )
    this.name = name
    return name
  }

  async getState(): Promise<any> {
    const state: any[] = await this.client.get(`rooms/${this.roomId}/state`)
    // const name = state.find(event => event.type === "m.room.name").content.name;
    // this.name = name;
    return state
  }

  async getMessages(params: Record<string, any>): Promise<any> {
    return this.client.get(`rooms/${this.roomId}/messages`, {
      ...this.client.params,
      ...params,
    })
  }

  async getEvent(eventId: string): Promise<ClientEventOutput> {
    return this.client.get(`rooms/${this.roomId}/event/${eventId}`)
  }

  async getRelations(
    eventId: string,
    params: Record<string, any>,
    relType?: string,
    eventType?: string
  ): Promise<any> {
    return this.client.get(
      `rooms/${this.roomId}/relations/${eventId}${relType && "/" + relType}${
        eventType && "/" + eventType
      }`,
      {
        ...this.client.params,
        ...params,
      }
    )
  }

  async getStateEvent(type: string, stateKey?: string): Promise<any> {
    const response = this.client.get(
      `rooms/${this.roomId}/state/${type}/${stateKey}`
    )
    if (!is(ErrorSchema, response)) return response
    const fullState = await this.getState()
    const stateEvent = fullState.find(
      (event: any) => event.type === type && event.state_key === stateKey
    )
    return stateEvent
  }

  async getPowerLevels(): Promise<any> {
    return this.client.get(`rooms/${this.roomId}/state/m.room.power_levels`)
  }

  async setEventPowerLevel(
    eventType: string,
    powerLevel: number
  ): Promise<any> {
    if (!this.client.userId) throw new Error("No user ID")
    if (powerLevel < 0 || powerLevel > 100) {
      throw new Error("Power level must be between 0 and 100")
    }

    const powerLevels = await this.getPowerLevels()
    const events = powerLevels.events

    const newEvents = {
      ...events,
      [eventType]: powerLevel,
    }

    console.log("newEvents", newEvents) // needs checking :)

    const newPowerLevels = {
      ...powerLevels,
      events: newEvents,
    }

    return this.client.put(
      `rooms/${this.roomId}/state/m.room.power_levels`,
      newPowerLevels
    )
  }

  async getUserPowerLevel(): Promise<number> {
    const { users } = await this.getPowerLevels()
    return users[this.client.userId]
  }

  async getHierarchy(): Promise<{ [x: string]: any }[]> {
    const { rooms } = await this.client.get(`rooms/${this.roomId}/hierarchy`, {
      urlType: "client/v1/",
    })
    return rooms
  }

  async isUserModerator(): Promise<boolean> {
    const powerLevels = await this.getPowerLevels()
    console.log("powerLevels", powerLevels)
    if (!this.client.userId) throw new Error("No user ID")
    const userPowerLevel = powerLevels.users[this.client.userId]
    const modPowerLevel =
      powerLevels.events["m.room.power_levels"] || powerLevels.state_default
    return userPowerLevel >= modPowerLevel
  }

  // returned async generator function produces an iterator with a provided endpoint parameter
  // the resulting iterator can be called repeatedly to paginate through the messages
  getMessagesAsyncGenerator(
    direction?: "f" | "b",
    limit?: number
  ): AsyncGenerator<any, void, any> {
    const dir = direction || "b"
    const lim = limit || 100

    const fetch = this.client.fetch
    const accessToken = this.client.accessToken
    const clientParams = this.client.params
    const url = this.client.buildUrl(`rooms/${this.roomId}/messages`)

    async function* messagesGenerator(from?: string) {
      // console.log("end", from)

      while (true) {
        let params: Params = { ...clientParams, dir, limit: `${lim}` }
        if (from) {
          params["from"] = from
        }
        const response = await Client.authenticatedGet(url, accessToken, {
          params,
          fetch,
        })
        if (!("end" in response)) {
          break
        }
        yield response
        from = response.end
      }
    }
    return messagesGenerator()
  }

  async sendMessage(body: any): Promise<{ event_id: string }> {
    return this.client.put(
      `rooms/${this.roomId}/send/m.room.message/${Date.now()}`,
      body
    )
  }

  async sendEvent(type: string, body: any): Promise<{ event_id: string }> {
    return this.client.put(
      `rooms/${this.roomId}/send/${type}/${Date.now()}`,
      body
    )
  }

  async sendStateEvent(
    type: string,
    body: any,
    stateKey?: string
  ): Promise<{ event_id: string }> {
    return this.client.put(
      `rooms/${this.roomId}/state/${type}/${stateKey || ""}`,
      body
    )
  }

  async setName(name: string): Promise<void> {
    return this.client.put(`rooms/${this.roomId}/state/m.room.name`, {
      name,
    })
  }

  async setTopic(topic: string): Promise<void> {
    return this.client.put(`rooms/${this.roomId}/state/m.room.topic`, {
      topic,
    })
  }

  async redactEvent(eventId: string): Promise<void> {
    return this.client.put(
      `rooms/${this.roomId}/redact/${eventId}/${Date.now()}`,
      {}
    )
  }

  async getAvatarMxc(): Promise<string> {
    const response = await this.client.get(
      `rooms/${this.roomId}/state/m.room.avatar`
    )
    return response.url
  }

  async getAliases(): Promise<string[]> {
    const response = await this.get(`directory/room/${this.roomId}`)
    return response.aliases
  }

  async setAlias(alias: string): Promise<any> {
    return this.client.put(`directory/room/${alias}`, {
      room_id: this.roomId,
    })
  }

  async deleteAlias(alias: string): Promise<any> {
    return this.client.put(`directory/room/${alias}`, {})
  }

  static sortEvents(
    events: ClientEventOutput[]
  ): Record<string, ClientEventOutput[]> {
    const sortedEvents: Record<string, ClientEventOutput[]> = {}
    events.forEach(event => {
      if (!(event.type in sortedEvents)) {
        sortedEvents[event.type] = []
      }
      sortedEvents[event.type].push(event)
    })
    return sortedEvents
  }

  static replaceEditedMessages(messages: ClientEventOutput[]) {
    // replaces the body of messages that have been edited with the edited body
    const editMessages = messages.filter(
      message =>
        message?.content &&
        typeof message.content === "object" &&
        message.content !== null &&
        "m.new_content" in message.content &&
        safeParse(EventContentSchema, message.content).success
    )

    const toBeEditedMessageIds = editMessages.map(
      message =>
        is(EventContentSchema, message.content) &&
        message.content["m.relates_to"]?.event_id
    )

    const originalMessagesToBeEdited = messages.filter(message =>
      toBeEditedMessageIds.includes(message.event_id)
    )

    const originalMessagesStayingTheSame = messages.filter(
      message =>
        !toBeEditedMessageIds.includes(message.event_id) &&
        !(
          is(EventContentSchema, message.content) &&
          message.content["m.relates_to"] &&
          "rel_type" in message.content["m.relates_to"] &&
          message.content["m.relates_to"]["rel_type"] === "m.replace"
        )
    )

    const originalMessagesWithEditedBodies = originalMessagesToBeEdited.map(
      message => {
        const thisEditedMessage = editMessages.find(
          editMessage =>
            is(EventContentSchema, editMessage.content) &&
            editMessage.content["m.relates_to"]?.event_id === message.event_id
        )
        const existingContent = is(EventContentSchema, message.content)
          ? message.content
          : {}
        const editedContent = is(EventContentSchema, thisEditedMessage?.content)
          ? thisEditedMessage?.content
          : {}

        // "m.new_content" in thisEditedMessage.content &&
        // thisEditedMessage.content["m.new_content"].body

        return { ...message, content: { ...existingContent, ...editedContent } }
      }
    )
    return [
      ...originalMessagesStayingTheSame,
      ...originalMessagesWithEditedBodies,
    ]
  }

  static deleteEditedMessages(messages: ClientEventOutput[]) {
    const rootEvents = new Map<string, ClientEventOutput[]>()

    messages.forEach(message => {
      if (is(EventContentSchema, message.content)) {
        const id = message.content["m.relates_to"]?.event_id || ""
        const edits = rootEvents.get(id)
        rootEvents.set(id, [...(edits || []), message])
      }
    })

    rootEvents.forEach((edits, id) => {
      const finalEdit = edits.reduce((acc, edit) => {
        if (edit.origin_server_ts > acc.origin_server_ts) {
          return edit
        }
        return acc
      })
      rootEvents.set(id, [finalEdit])
    })

    return [...rootEvents.values()].flat()
  }
}
