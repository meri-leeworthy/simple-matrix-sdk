type Params = Record<string, string>;

export async function authenticatedGet(url: string, accessToken: string, params?: Params) {
  // return async function (url: string) {
    if (params) {
      const paramsString = new URLSearchParams(params).toString();
      url = `${url}?${paramsString}`;
    }

    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });

    const data = await response.json();
    return data;
  // }
}

export async function authenticatedPut(url: string, accessToken:string, body: any, params?: Params) {
  if (params) {
    const paramsString = new URLSearchParams(params).toString();
    url = `${url}?${paramsString}`;
  }
  const response = await fetch(url, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${accessToken}`
    },
    body: JSON.stringify(body)
  });
  const data = await response.json();
  return data;
}

export function login(username: string, password: string) {
  return async function (baseUrl: string) {
    const response = await fetch(`${baseUrl}/_matrix/client/v3/login`, {
      method: 'POST',
      body: JSON.stringify({
        type: 'm.login.password',
        identifier: {
          type: 'm.id.user',
          user: username
        },
        password: password
      })
    });
    const data = await response.json();

    if (!("access_token" in data)) {
      throw new Error("No access token in response");
    }

    return data.access_token;
  }
}

// What do I want for this sdk?

// 1. A way to get a list of all the rooms I'm in
// 2. A way to get a list of all the messages in a room
// 3. A way to send a message to a room
// 4. A way to get a list of all the users in a room

export class Client {
  private baseUrl: string;
  private accessToken: string;

  constructor(baseUrl: string, accessToken: string) { 
    this.baseUrl = baseUrl;
    this.accessToken = accessToken;
  }

  buildUrl(endpoint: string) {
    return `${this.baseUrl}/_matrix/client/v3/${endpoint}`;
  }

  async get(endpoint: string, params?: Params) {
    return await authenticatedGet(this.buildUrl(endpoint), this.accessToken, params);
  }

  put(endpoint: string, body: any, params?: Params) {
    return authenticatedPut(this.buildUrl(endpoint), this.accessToken, body, params);
  }

  async getJoinedRooms(): Promise<{joined_rooms: string[]}> {
      return this.get('joined_rooms');
  }

  async getRoomMessagesOneShot(roomId: string): Promise<any> {
    return this.get(`rooms/${roomId}/messages`);
  }

  async getRoomMessagesOneShotParams(roomId: string): Promise<any> {
    return this.get(`rooms/${roomId}/messages`, { dir: "b", limit: "10" });
  }

  // returned async generator function produces an iterator with a provided endpoint parameter
  // the resulting iterator can be called repeatedly to paginate through the messages
  getRoomMessagesAsyncGenerator(roomId: string, direction?: "f" | "b", limit?: number): (end?: string) => AsyncGenerator<any, void, any> {
    const dir = direction || "b";
    const lim = limit || 5;

    const accessToken = this.accessToken;
    const url = this.buildUrl(`rooms/${roomId}/messages`);

    async function* messagesGenerator(end?: string) {
      console.log("end", end);

      while (true) {
        const params: Params = { dir, limit: `${lim}` }
        if (end) {
          params.from = end;
        }
        const response = await authenticatedGet(url, accessToken, params);
        if (!("end" in response)) {
          break;
        }
        yield response;
        end = response.end;
      }
    }
    return messagesGenerator;
  }

  async sendRoomMessage(roomId: string, body: any): Promise<{event_id: string}> {
    return this.put(`rooms/${roomId}/send/m.room.message/${Date.now()}`, body);
  }
}