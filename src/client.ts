import {
  ClientOptions,
  ErrorOutput,
  ErrorSchema,
  Params,
  deepConvertNumbersToStrings,
  is,
  schemaError,
} from "@/types/client"
import { Room } from "./room"
import { CreateRoomOptsOutput } from "./types/types"
import * as z from "zod"

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
  ): Promise<unknown> {
    const params = deepConvertNumbersToStrings({ ...opts?.params })

    // return async function (url: string) {
    if (opts?.params) {
      const paramsString = new URLSearchParams(params).toString()
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
    opts?: {
      params?: Params
      fetch?: any
    }
  ): Promise<unknown> {
    const fetch = opts?.fetch || window?.fetch || undefined
    const params = deepConvertNumbersToStrings({ ...opts?.params })
    if (opts?.params) {
      const paramsString = new URLSearchParams(params).toString()
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
    opts?: {
      params?: Params
      fetch?: any
    }
  ): Promise<unknown> {
    const params = deepConvertNumbersToStrings({ ...opts?.params })
    if (opts?.params) {
      const paramsString = new URLSearchParams(params).toString()
      url = `${url}?${paramsString}`
    }
    const fetch = opts?.fetch || window?.fetch || undefined
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
    const combinedParams = deepConvertNumbersToStrings({
      ...this.params,
      ...params,
    })
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
    const combinedParams = deepConvertNumbersToStrings({
      ...this.params,
      ...params,
    })
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
    const combinedParams = deepConvertNumbersToStrings({
      ...this.params,
      ...params,
    })
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

  async getJoinedRooms(): Promise<{ joined_rooms: string[] } | ErrorOutput> {
    const res = await this.get("joined_rooms")
    if (
      is(ErrorSchema, res) ||
      is(z.object({ joined_rooms: z.array(z.string()) }), res)
    )
      return res
    return schemaError
  }

  async getRoomIdFromAlias(alias: string): Promise<string | ErrorOutput> {
    const res = await this.get(`directory/room/${encodeURIComponent(alias)}`)
    if (is(ErrorSchema, res)) return res
    if (is(z.object({ room_id: z.string() }), res)) return res.room_id
    return schemaError
  }

  async getProfile(
    userId?: string
  ): Promise<{ displayname: string } | ErrorOutput> {
    const profile = await this.get(
      `profile/${userId || this.userId}/displayname`
    )
    if (
      is(ErrorSchema, profile) ||
      is(z.object({ displayname: z.string() }), profile)
    )
      return profile
    return schemaError
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
    body: CreateRoomOptsOutput
  ): Promise<Room | { errcode: string; error?: string }> {
    const roomId = await this.post("createRoom", body)
    if (is(ErrorSchema, roomId)) return roomId
    if (is(z.object({ room_id: z.string() }), roomId)) {
      try {
        const room = new Room(roomId.room_id, this)
        return room
      } catch (e) {
        return { errcode: "Received strange roomId", error: roomId.room_id }
      }
    }
    return schemaError
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
  ): Promise<unknown> {
    const unauthorised = await this.post("account/3pid/add", body)
    if (is(ErrorSchema, unauthorised)) return unauthorised
    if (!is(z.object({ session: z.any(), flows: z.any() }), unauthorised))
      return schemaError
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
