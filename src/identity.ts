export class IdentityClient {
  baseUrl: string

  constructor(baseUrl: string = "https://matrix.org/_matrix/identity/v2") {
    this.baseUrl = baseUrl
  }

  async get(url: string) {
    const response = await fetch(`${this.baseUrl}${url}`)
    const data = await response.json()
    return data
  }

  async post(url: string, body: any) {
    const response = await fetch(`${this.baseUrl}${url}`, {
      method: "POST",
      body: JSON.stringify(body),
    })
    const data = await response.json()
    return data
  }

  async put(url: string, body: any) {
    const response = await fetch(`${this.baseUrl}${url}`, {
      method: "PUT",
      body: JSON.stringify(body),
    })
    const data = await response.json()
    return data
  }
}
