type Params = Record<string, string>
export type Event = Record<string, any> & {
  type: string
  content?: Record<string, any> & { body?: string; msgtype?: string }
  sender?: any
  room_id: string
  event_id: string
  origin_server_ts: number
  unsigned?: any
}

// What do I want for this sdk?

// 1. A way to get a list of all the rooms I'm in
// 2. A way to get a list of all the messages in a room
// 3. A way to send a message to a room
// 4. A way to get a list of all the users in a room

export class Client {
  private baseUrl: string
  accessToken: string
  private userId: string
  fetch: any

  constructor(
    baseUrl: string,
    accessToken: string,
    userId: string,
    fetch?: any
  ) {
    this.baseUrl = baseUrl
    this.accessToken = accessToken
    this.userId = userId
    this.fetch = fetch || window?.fetch || undefined
  }

  static async authenticatedGet(
    url: string,
    accessToken: string,
    options?: {
      params?: Params
      fetch?: any
    }
  ) {
    // return async function (url: string) {
    if (options?.params) {
      const paramsString = new URLSearchParams(options.params).toString()
      url = `${url}?${paramsString}`
    }
    const fetch = options?.fetch || window?.fetch || undefined

    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })

    const data = await response.json()
    return data
    // }
  }

  static async authenticatedPut(
    url: string,
    accessToken: string,
    body: any,
    options?: {
      params?: Params
      fetch?: any
    }
  ) {
    const fetch = options?.fetch || window?.fetch
    if (options?.params) {
      const paramsString = new URLSearchParams(options.params).toString()
      url = `${url}?${paramsString}`
    }
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(body),
    })
    const data = await response.json()
    return data
  }

  static async authenticatedPost(
    url: string,
    accessToken: string,
    body: any,
    options?: {
      params?: Params
      fetch?: any
    }
  ) {
    if (options?.params) {
      const paramsString = new URLSearchParams(options.params).toString()
      url = `${url}?${paramsString}`
    }
    const fetch = options?.fetch || window?.fetch || undefined
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(body),
    })
    const data = await response.json()
    return data
  }

  static async login(
    baseUrl: string,
    username: string,
    password: string,
    fetch?: any
  ) {
    const fetcher = fetch || window?.fetch || undefined
    const response = await fetcher(`${baseUrl}/_matrix/client/v3/login`, {
      method: "POST",
      body: JSON.stringify({
        type: "m.login.password",
        identifier: {
          type: "m.id.user",
          user: username,
        },
        password: password,
      }),
    })
    const data = await response.json()

    if (!("access_token" in data)) {
      throw new Error("No access token in response")
    }

    return data.access_token
  }

  useBaseUrl(): string {
    return this.baseUrl
  }

  useUserId(): string {
    return this.userId
  }

  buildUrl(endpoint: string) {
    return `${this.baseUrl}/_matrix/client/v3/${endpoint}`
  }

  async get(endpoint: string, params?: Params) {
    return await Client.authenticatedGet(
      this.buildUrl(endpoint),
      this.accessToken,
      {
        params,
        fetch: this.fetch,
      }
    )
  }

  async put(endpoint: string, body: any, params?: Params) {
    return await Client.authenticatedPut(
      this.buildUrl(endpoint),
      this.accessToken,
      body,
      {
        params,
        fetch: this.fetch,
      }
    )
  }

  async post(endpoint: string, body: any, params?: Params) {
    return await Client.authenticatedPost(
      this.buildUrl(endpoint),
      this.accessToken,
      body,
      {
        params,
        fetch: this.fetch,
      }
    )
  }

  async getJoinedRooms(): Promise<{ joined_rooms: string[] }> {
    return this.get("joined_rooms")
  }

  async getProfile(userId: string): Promise<{ displayname: string }> {
    const profile = await this.get(`profile/${userId}/displayname`)
    return profile
  }

  // async createMediaId(): Promise<any> {
  //   return await Client.authenticatedPost(
  //     `${this.baseUrl}/_matrix/media/r0/createContent`,
  //     this.accessToken,
  //     {}
  //   )
  // }

  async uploadFile(file: File): Promise<any> {
    const url = `${this.baseUrl}/_matrix/media/v3/upload`

    const response = await fetch(url, {
      method: "POST",
      body: file,
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
        "Content-Type": "application/octet-stream",
      },
    })
    const data = await response.json()
    return data
  }
}

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

  async getMessagesOneShotParams(): Promise<any> {
    return this.client.get(`rooms/${this.roomId}/messages`, {
      dir: "b",
      limit: "10",
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

  // returned async generator function produces an iterator with a provided endpoint parameter
  // the resulting iterator can be called repeatedly to paginate through the messages
  getMessagesAsyncGenerator(
    direction?: "f" | "b",
    limit?: number
  ): (end?: string) => AsyncGenerator<any, void, any> {
    const dir = direction || "b"
    const lim = limit || 100

    const fetch = this.client.fetch

    const accessToken = this.client.accessToken
    const url = this.client.buildUrl(`rooms/${this.roomId}/messages`)

    async function* messagesGenerator(end?: string) {
      console.log("end", end)

      while (true) {
        const params: Params = { dir, limit: `${lim}` }
        if (end) {
          params.from = end
        }
        const response = await Client.authenticatedGet(url, accessToken, {
          params,
          fetch,
        })
        if (!("end" in response)) {
          break
        }
        yield response
        end = response.end
      }
    }
    return messagesGenerator
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
}
