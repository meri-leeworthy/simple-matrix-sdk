import { Client } from "./client"
import { Event, Params } from "./types"

export class Room {
  private roomId: string
  private client: Client
  private name?: { name: string }

  constructor(roomId: string, client: Client) {
    this.roomId = roomId
    this.client = client
  }

  useName(): { name: string } | undefined {
    return this.name
  }

  useID(): string {
    return this.roomId
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

  async getMessagesOneShot(): Promise<any> {
    return this.client.get(`rooms/${this.roomId}/messages`)
  }

  async getMessagesOneShotParams(params: Record<string, any>): Promise<any> {
    return this.client.get(`rooms/${this.roomId}/messages`, {
      ...this.client.params,
      ...params,
    })
  }

  async getEvent(eventId: string): Promise<Event> {
    return this.client.get(`rooms/${this.roomId}/event/$${eventId}`)
  }

  async getStateEvent(type: string, stateKey?: string): Promise<any> {
    return this.client.get(`rooms/${this.roomId}/state/${type}/${stateKey}`)
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
      console.log("end", from)

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
      `rooms/${this.roomId}/state/${type}/${stateKey}`,
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

  static sortEvents(events: Event[]): Record<string, Event[]> {
    const sortedEvents: Record<string, Event[]> = {}
    events.forEach(event => {
      if (!(event.type in sortedEvents)) {
        sortedEvents[event.type] = []
      }
      sortedEvents[event.type].push(event)
    })
    return sortedEvents
  }

  static replaceEditedMessages(messages: Event[]) {
    // replaces the body of messages that have been edited with the edited body

    const editMessages = messages.filter(
      message => message?.content && "m.new_content" in message.content
    )

    const toBeEditedMessageIds = editMessages.map(
      message =>
        message?.content &&
        "m.relates_to" in message.content &&
        message.content["m.relates_to"].event_id
    )

    const originalMessagesToBeEdited = messages.filter(message =>
      toBeEditedMessageIds.includes(message.event_id)
    )

    const originalMessagesStayingTheSame = messages.filter(
      message =>
        !toBeEditedMessageIds.includes(message.event_id) &&
        !(
          message?.content &&
          "m.relates_to" in message.content &&
          message.content["m.relates_to"]["rel_type"] === "m.replace"
        )
    )

    const originalMessagesWithEditedBodies = originalMessagesToBeEdited.map(
      message => {
        const thisEditedMessage = editMessages.find(
          editMessage =>
            editMessage?.content &&
            "m.relates_to" in editMessage.content &&
            editMessage.content["m.relates_to"].event_id === message.event_id
        )
        const editedContent = thisEditedMessage?.content
        // "m.new_content" in thisEditedMessage.content &&
        // thisEditedMessage.content["m.new_content"].body
        return { ...message, content: { ...message.content, ...editedContent } }
      }
    )
    return [
      ...originalMessagesStayingTheSame,
      ...originalMessagesWithEditedBodies,
    ]
  }

  static deleteEditedMessages(messages: Event[]) {
    const rootEvents = new Map<string, Event[]>()

    messages.forEach(message => {
      if (message?.content && "m.relates_to" in message.content) {
        const id = message.content["m.relates_to"].event_id
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
