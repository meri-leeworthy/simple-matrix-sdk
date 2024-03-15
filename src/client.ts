import { Room } from "."
import { ClientOptions, CreateRoomOpts, ErrorOutput, Params } from "./types"

export class Client {
  private baseUrl: string
  accessToken: string
  userId: string
  params: Params
  fetch: any

  constructor(
    baseUrl: string,
    accessToken: string,
    opts?: Partial<ClientOptions>
  ) {
    this.baseUrl = baseUrl
    this.accessToken = accessToken
    this.params = opts?.params || {}
    this.userId = opts?.userId || ""
    this.fetch = opts?.fetch || window?.fetch || undefined
  }

  static async authenticatedGet(
    url: string,
    accessToken: string,
    opts?: {
      params?: Params
      fetch?: any
    }
  ) {
    const params = { ...opts?.params }

    // return async function (url: string) {
    if (opts?.params) {
      const paramsString = new URLSearchParams(opts.params).toString()
      url = `${url}?${paramsString}`
    }

    const fetch = opts?.fetch || window?.fetch || undefined

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
    const fetch = options?.fetch || window?.fetch || undefined
    if (options?.params) {
      const paramsString = new URLSearchParams(options.params).toString()
      url = `${url}?${paramsString}`
    }
    if (!fetch) return
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

  static async register(username: string, password: string, baseUrl: string) {
    const response = await fetch(`${baseUrl}/_matrix/client/v3/register`, {
      method: "POST",
      body: JSON.stringify({
        auth: {
          type: "m.login.dummy",
        },
        username,
        password,
      }),
    })
    const data = await response.json()
    return data
  }

  static async isUsernameAvailable(username: string, baseUrl: string) {
    const response = await fetch(
      `${baseUrl}/_matrix/client/v3/register/available?username=${username}`
    )
    return response.ok
  }

  static async getLoginFlows(baseUrl: string) {
    const response = await fetch(`${baseUrl}/_matrix/client/v3/login`)
    const data = await response.json()
    return data
  }

  getRoom(roomId: string) {
    return new Room(roomId, this)
  }

  buildUrl(endpoint: string, urlType?: string) {
    const urlTypeOrDefault = urlType || "client/v3/"
    return `${this.baseUrl}/_matrix/${urlTypeOrDefault}${endpoint}`
  }

  async get(endpoint: string, params?: Params) {
    const combinedParams = { ...this.params, ...params }
    const urlType = combinedParams.urlType || undefined

    if (combinedParams.debug)
      console.log("url", this.buildUrl(endpoint, urlType))

    return await Client.authenticatedGet(
      this.buildUrl(endpoint, urlType),
      this.accessToken,
      {
        params: combinedParams,
        fetch: this.fetch,
      }
    )
  }

  async put(endpoint: string, body: any, params?: Params) {
    const combinedParams = { ...this.params, ...params }
    const urlType = combinedParams.urlType || undefined

    if (combinedParams.debug)
      console.log("url", this.buildUrl(endpoint, urlType))

    return await Client.authenticatedPut(
      this.buildUrl(endpoint, urlType),
      this.accessToken,
      body,
      {
        params: combinedParams,
        fetch: this.fetch,
      }
    )
  }

  async post(endpoint: string, body: any, params?: Params) {
    const combinedParams = { ...this.params, ...params }
    const urlType = combinedParams.urlType || undefined

    if (combinedParams.debug)
      console.log("url", this.buildUrl(endpoint, urlType))

    return await Client.authenticatedPost(
      this.buildUrl(endpoint, urlType),
      this.accessToken,
      body,
      {
        params: combinedParams,
        fetch: this.fetch,
      }
    )
  }

  async getJoinedRooms(): Promise<{ joined_rooms: string[] }> {
    return this.get("joined_rooms")
  }

  async getRoomIdFromAlias(alias: string): Promise<string | ErrorOutput> {
    const response = await this.get(
      `directory/room/${encodeURIComponent(alias)}`
    )
    if ("errcode" in response) return response
    return response.room_id
  }

  async getProfile(userId?: string): Promise<{ displayname: string }> {
    const profile = await this.get(
      `profile/${userId || this.userId}/displayname`
    )
    return profile
  }

  async getUser3pids(): Promise<any> {
    const response = await this.get(`account/3pid`)
    return response
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

  async joinRoom(roomIdOrAlias: string): Promise<any> {
    return await this.post(`join/${roomIdOrAlias}`, {})
  }

  async leaveRoom(roomId: string): Promise<any> {
    return await this.post(`rooms/${roomId}/leave`, {})
  }

  async createRoom(
    body: CreateRoomOpts
  ): Promise<Room | { errcode: string; error?: string }> {
    const roomId = await this.post("createRoom", body)
    if ("errcode" in roomId) {
      return roomId
    }

    try {
      const room = new Room(roomId.room_id, this)
      return room
    } catch (e) {
      return roomId.room_id
    }
  }

  async add3pid(
    body: {
      sid: string
      client_secret: string
      auth?: {
        session: string
        type: string
      }
    },
    password: string
  ): Promise<any> {
    const unauthorised = await this.post("account/3pid/add", body)
    const { session, flows } = unauthorised
    console.log(flows)
    const next = await this.post("account/3pid/add", {
      sid: body.sid,
      client_secret: body.client_secret,
      auth: {
        session,
        type: "m.login.password",
        user: this.userId,
        password,
      },
    })
    console.log("next", next)
  }

  async requestTokenEmail(
    email: string,
    clientSecret: string,
    sendAttempt: number = 1
  ) {
    const response = await this.post("register/email/requestToken", {
      email,
      client_secret: clientSecret,
      send_attempt: sendAttempt,
    })
    return response
  }
}
