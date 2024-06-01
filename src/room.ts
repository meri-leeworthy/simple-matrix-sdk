import * as z from "zod"
import { Client } from "./client"
import { State } from "."
import { EventContentSchema } from "./types/content"
import { ErrorOutput, ErrorSchema, Params } from "./types/client"
import {
  ClientEventBaseOutput,
  ClientEventOutput,
  ClientEventSchema,
} from "./types/event"
import { is, schemaError } from "./types/utils"
import {
  GetHierarchyResponse,
  SpaceHierarchyRoomsChunk,
} from "./types/hierarchy"

export class Room {
  roomId: string
  client: Client
  name?: string

  constructor(roomId: string, client: Client) {
    z.string()
      .trim()
      .startsWith("!")
      .regex(/![a-zA-Z0-9]*:([a-zA-Z0-9]+(\.[a-zA-Z0-9]+)*)/)
      .parse(roomId)

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
    if (is(ErrorSchema, name)) return name
    if (!is(z.object({ name: z.string() }), name)) return schemaError
    this.name = name.name
    return name
  }

  async getMembers(): Promise<
    ErrorOutput | { chunk: ClientEventBaseOutput[] }
  > {
    const res = await this.get(`members`, { debug: "true" })
    if (
      is(ErrorSchema, res) ||
      is(z.object({ chunk: z.array(ClientEventSchema) }), res)
    )
      return res
    return schemaError
  }

  async getState(): Promise<State | ErrorOutput> {
    const state = await this.client.get(`rooms/${this.roomId}/state`)
    if (is(ErrorSchema, state)) return state
    if (is(z.array(ClientEventSchema), state)) return new State(state)
    return schemaError
  }

  async getMessages(params: {
    limit?: number
    dir?: "b" | "f"
  }): Promise<{ chunk: ClientEventOutput[] } | ErrorOutput> {
    const res = await this.client.get(`rooms/${this.roomId}/messages`, {
      ...this.client.params,
      ...params,
    })

    if (is(z.object({ chunk: z.array(ClientEventSchema) }), res)) {
      return res
    }
    if (is(ErrorSchema, res)) return res
    return schemaError
  }

  async getEvent(eventId: string): Promise<ClientEventOutput | ErrorOutput> {
    const res = await this.client.get(`rooms/${this.roomId}/event/${eventId}`)
    if (is(ErrorSchema, res) || is(ClientEventSchema, res)) return res
    return schemaError
  }

  async getRelations(
    eventId: string,
    params: Params,
    relType?: string,
    eventType?: string
  ): Promise<unknown> {
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
    // const response = await this.client.get(
    //   `rooms/${this.roomId}/state/${type}/${stateKey}`
    // )
    // if ("error" in ClientEventSchema.safeParse(response)) return response
    const fullState = await this.getState()
    if ("errcode" in fullState) return fullState
    const stateEvent = fullState.get(type, stateKey)
    return stateEvent
  }

  async getPowerLevels(): Promise<
    | {
        users: Record<string, number>
        events: Record<string, number>
        state_default: number
      }
    | ErrorOutput
  > {
    const res = await this.client.get(
      `rooms/${this.roomId}/state/m.room.power_levels`
    )
    if (
      is(
        z.object({
          users: z.record(z.number()),
          events: z.record(z.number()),
          state_default: z.number(),
        }),
        res
      ) ||
      is(ErrorSchema, res)
    )
      return res
    return schemaError
  }

  async setEventPowerLevel(
    eventType: string,
    powerLevel: number
  ): Promise<unknown | ErrorOutput> {
    if (!this.client.userId) throw new Error("No user ID")
    if (powerLevel < 0 || powerLevel > 100) {
      throw new Error("Power level must be between 0 and 100")
    }

    const powerLevels = await this.getPowerLevels()

    if (is(ErrorSchema, powerLevels)) return powerLevels
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

  async getUserPowerLevel(): Promise<number | ErrorOutput> {
    const res = await this.getPowerLevels()
    if (is(ErrorSchema, res)) return res
    return res.users[this.client.userId]
  }

  async setUserPowerLevel(
    userId: string,
    powerLevel: number
  ): Promise<unknown> {
    if (powerLevel < 0 || powerLevel > 100) {
      throw new Error("Power level must be between 0 and 100")
    }
    const powerLevels = await this.getPowerLevels()
    if (is(ErrorSchema, powerLevels)) return powerLevels
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
  }): Promise<ErrorOutput | SpaceHierarchyRoomsChunk[]> {
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

    const res = await this.client.get(`rooms/${this.roomId}/hierarchy`, params)
    if (is(ErrorSchema, res)) return res
    if (is(GetHierarchyResponse, res)) return res.rooms
    return schemaError
  }

  async isUserModerator(userId?: string): Promise<boolean> {
    const powerLevels = await this.getPowerLevels()
    if (is(ErrorSchema, powerLevels)) return false
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
        const res = await Client.authenticatedGet(url, accessToken, {
          params,
          fetch,
        })

        if (
          typeof res !== "object" ||
          !res ||
          !("end" in res) ||
          typeof res.end !== "string"
        ) {
          break
        }
        yield res
        from = res.end
      }
    }
    return messagesGenerator()
  }

  async sendMessage(body: any): Promise<{ event_id: string } | ErrorOutput> {
    const res = await this.client.put(
      `rooms/${this.roomId}/send/m.room.message/${Date.now()}`,
      body
    )
    if (is(ErrorSchema, res) || is(z.object({ event_id: z.string() }), res))
      return res
    return schemaError
  }

  async sendEvent(
    type: string,
    body: any
  ): Promise<{ event_id: string } | ErrorOutput> {
    const res = await this.client.put(
      `rooms/${this.roomId}/send/${type}/${Date.now()}`,
      body
    )
    if (is(ErrorSchema, res) || is(z.object({ event_id: z.string() }), res))
      return res
    return schemaError
  }

  async sendStateEvent(
    type: string,
    body: any,
    stateKey?: string
  ): Promise<{ event_id: string } | ErrorOutput> {
    const res = await this.client.put(
      `rooms/${this.roomId}/state/${type}/${stateKey || ""}`,
      body
    )
    if (is(ErrorSchema, res) || is(z.object({ event_id: z.string() }), res))
      return res
    return schemaError
  }

  async setName(name: string): Promise<unknown | ErrorOutput> {
    return this.client.put(`rooms/${this.roomId}/state/m.room.name`, {
      name,
    })
  }

  async setTopic(topic: string): Promise<unknown | ErrorOutput> {
    return this.client.put(`rooms/${this.roomId}/state/m.room.topic`, {
      topic,
    })
  }

  async redactEvent(eventId: string): Promise<unknown | ErrorOutput> {
    return this.client.put(
      `rooms/${this.roomId}/redact/${eventId}/${Date.now()}`,
      {}
    )
  }

  async getAvatarMxc(): Promise<string | ErrorOutput> {
    const res = await this.client.get(
      `rooms/${this.roomId}/state/m.room.avatar`
    )
    if (is(ErrorSchema, res)) return res
    if (is(z.object({ url: z.string() }), res)) return res.url
    return schemaError
  }

  async getAliases(): Promise<string[] | ErrorOutput> {
    const res = await this.client.get(`rooms/${this.roomId}/aliases`)
    if (is(ErrorSchema, res) || is(z.array(z.string()), res)) return res
    return schemaError
  }

  async getCanonicalAlias(): Promise<{ alias: string } | ErrorOutput> {
    const res = await this.client.get(
      `rooms/${this.roomId}/state/m.room.canonical_alias`
    )
    if (is(ErrorSchema, res) || is(z.object({ alias: z.string() }), res))
      return res
    return schemaError
  }

  async setAlias(alias: string): Promise<unknown> {
    return this.client.put(`directory/room/${encodeURIComponent(alias)}`, {
      room_id: this.roomId,
    })
  }

  async deleteAlias(alias: string): Promise<{} | ErrorOutput> {
    const res = await this.client.delete(`directory/room/${alias}`, {})
    if (is(ErrorSchema, res) || is(z.object({}), res)) return res
    return schemaError
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
        EventContentSchema.safeParse(message.content).success
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
