import { ClientOptions, Params } from "./types"

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

  buildUrl(endpoint: string, urlType?: string) {
    const urlTypeOrDefault = urlType || "client/v3/"
    return `${this.baseUrl}/_matrix/${urlTypeOrDefault}${endpoint}`
  }

  async get(endpoint: string, params?: Params) {
    const combinedParams = { ...this.params, ...params }
    const urlType = combinedParams.urlType || undefined

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

  async createRoom(body: {
    name?: string
    topic?: string
    invite?: string[]
    room_alias_name?: string
    initial_state?: {
      type: string
      state_key?: string
      content: {
        [key: string]: any
      }
    }[]
  }): Promise<{ room_id: string } | { errcode: string; error?: string }> {
    return await this.post("createRoom", body)
  }
}
