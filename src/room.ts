import * as v from "valibot"
import { Client } from "./client"
import {
  ClientEventOutput,
  ErrorOutput,
  ErrorSchema,
  EventContentOutput,
  EventContentSchema,
  Params,
  State,
  Timeline,
} from "."

export class Room {
  roomId: string
  client: Client
  name?: { name: string }

  constructor(roomId: string, client: Client) {
    v.parse(
      v.string([
        v.toTrimmed(),
        v.startsWith("!"),
        v.regex(/![a-zA-Z0-9]*:([a-zA-Z0-9]+(\.[a-zA-Z0-9]+)*)/), //roomId pattern
      ]),
      roomId
    )

    this.roomId = roomId
    this.client = client
  }

  async get(endpoint: string, params?: Params) {
    const combinedParams = { ...this.client.params, ...params }
    return await this.client.get(
      "rooms/" + this.roomId + "/" + endpoint,
      combinedParams
    )
  }

  async getName(): Promise<{ name: string } | ErrorOutput> {
    const name = await this.client.get(`rooms/${this.roomId}/state/m.room.name`)
    this.name = name
    return name
  }

  async getMembers(): Promise<ErrorOutput | { chunk: ClientEventOutput[] }> {
    return this.get(`members`, { debug: "true" })
  }

  async getState(): Promise<State | ErrorOutput> {
    const state: any[] = await this.client.get(`rooms/${this.roomId}/state`)
    if ("errcode" in state) return state as ErrorOutput
    return new State(state)
  }

  async getMessages(
    params: Record<string, any>
  ): Promise<{ chunk: ClientEventOutput[] } | ErrorOutput> {
    return this.client.get(`rooms/${this.roomId}/messages`, {
      ...this.client.params,
      ...params,
    })
  }

  async getEvent(eventId: string): Promise<ClientEventOutput | ErrorOutput> {
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

  async getStateEvent(
    type: string,
    stateKey?: string
  ): Promise<ClientEventOutput | ErrorOutput | undefined> {
    const response = await this.client.get(
      `rooms/${this.roomId}/state/${type}/${stateKey}`
    )
    if (!v.is(ErrorSchema, response)) return response
    const fullState = await this.getState()
    if ("errcode" in fullState) return fullState
    const stateEvent = fullState.get(type, stateKey)
    return stateEvent
  }

  async getPowerLevels(): Promise<any | ErrorOutput> {
    return this.client.get(`rooms/${this.roomId}/state/m.room.power_levels`)
  }

  async setEventPowerLevel(
    eventType: string,
    powerLevel: number
  ): Promise<any | ErrorOutput> {
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

  async setUserPowerLevel(userId: string, powerLevel: number): Promise<any> {
    if (powerLevel < 0 || powerLevel > 100) {
      throw new Error("Power level must be between 0 and 100")
    }
    const powerLevels = await this.getPowerLevels()
    const users = powerLevels.users
    const newUsers = {
      ...users,
      [userId]: powerLevel,
    }
    const newPowerLevels = {
      ...powerLevels,
      users: newUsers,
    }
    return this.client.put(
      `rooms/${this.roomId}/state/m.room.power_levels`,
      newPowerLevels
    )
  }

  async getHierarchy(opts?: {
    max_depth?: number
    limit?: number
    from?: string
    suggested_only?: boolean
  }): Promise<{ [x: string]: any }[] | undefined> {
    const params: Params = { urlType: "client/v1/" }

    const max_depth =
      opts?.max_depth && opts.max_depth > 0
        ? Math.floor(opts.max_depth).toString()
        : undefined
    const limit =
      opts?.limit && opts.limit > 0 ? Math.floor(opts.limit).toString() : "100"
    const from = opts?.from
    const suggested_only = opts?.suggested_only

    if (max_depth) params["max_depth"] = max_depth
    if (limit) params["limit"] = limit
    if (from) params["from"] = from
    if (suggested_only) params["suggested_only"] = "true"

    const { rooms } = await this.client.get(
      `rooms/${this.roomId}/hierarchy`,
      params
    )
    return rooms
  }

  async isUserModerator(userId?: string): Promise<boolean> {
    const powerLevels = await this.getPowerLevels()
    console.log("powerLevels", powerLevels)
    if (!this.client.userId) return false
    const userPowerLevel = powerLevels.users[userId || this.client.userId]
    const modPowerLevel =
      powerLevels.events["m.room.power_levels"] ||
      powerLevels.state_default ||
      50
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

  async getAliases(): Promise<string[] | ErrorOutput> {
    const response = await this.client.get(`rooms/${this.roomId}/aliases`)
    if ("errcode" in response) return response
    return response
  }

  async getCanonicalAlias(): Promise<{ alias: string } | ErrorOutput> {
    const response = await this.client.get(
      `rooms/${this.roomId}/state/m.room.canonical_alias`
    )
    if ("errcode" in response) return response
    return response
  }

  async setAlias(alias: string): Promise<any> {
    return this.client.put(`directory/room/${encodeURIComponent(alias)}`, {
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
        v.safeParse(EventContentSchema, message.content).success
    )

    const toBeEditedMessageIds = editMessages.map(
      message =>
        v.is(EventContentSchema, message.content) &&
        message.content["m.relates_to"]?.event_id
    )

    const originalMessagesToBeEdited = messages.filter(message =>
      toBeEditedMessageIds.includes(message.event_id)
    )

    const originalMessagesStayingTheSame = messages.filter(
      message =>
        !toBeEditedMessageIds.includes(message.event_id) &&
        !(
          v.is(EventContentSchema, message.content) &&
          message.content["m.relates_to"] &&
          "rel_type" in message.content["m.relates_to"] &&
          message.content["m.relates_to"]["rel_type"] === "m.replace"
        )
    )

    const originalMessagesWithEditedBodies = originalMessagesToBeEdited.map(
      message => {
        const thisEditedMessage = editMessages.find(
          editMessage =>
            v.is(EventContentSchema, editMessage.content) &&
            editMessage.content["m.relates_to"]?.event_id === message.event_id
        )
        const existingContent = v.is(EventContentSchema, message.content)
          ? message.content
          : {}
        const editedContent = v.is(
          EventContentSchema,
          thisEditedMessage?.content
        )
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
      if (v.is(EventContentSchema, message.content)) {
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
