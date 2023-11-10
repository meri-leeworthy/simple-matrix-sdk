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

export async function login(baseUrl: string, username: string, password: string) {
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

// What do I want for this sdk?

// 1. A way to get a list of all the rooms I'm in
// 2. A way to get a list of all the messages in a room
// 3. A way to send a message to a room
// 4. A way to get a list of all the users in a room

export class Client {
  private baseUrl: string;
  accessToken: string;

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
}

export class Room {
  private roomId: string;
  private client: Client;
  private name?: string;

  constructor(roomId: string, client: Client) {
    this.roomId = roomId;
    this.client = client;
  }

  useRoomName(): string | undefined {
    return this.name;
  }

  useRoomID(): string {
    return this.roomId;
  }
  
  async getRoomName(): Promise<string> {
    const name = await this.client.get(`rooms/${this.roomId}/state/m.room.name`)
    this.name = name;
    return name;
  }

  async getRoomState(): Promise<any> {
    const state: any[] = await this.client.get(`rooms/${this.roomId}/state`);
    const name = state.find(event => event.type === "m.room.name").content.name;
    this.name = name;
    return state;
  }

  async getRoomMessagesOneShot(): Promise<any> {
    return this.client.get(`rooms/${this.roomId}/messages`);
  }

  async getRoomMessagesOneShotParams(): Promise<any> {
    return this.client.get(`rooms/${this.roomId}/messages`, { dir: "b", limit: "10" });
  }

  // returned async generator function produces an iterator with a provided endpoint parameter
  // the resulting iterator can be called repeatedly to paginate through the messages
  getRoomMessagesAsyncGenerator(direction?: "f" | "b", limit?: number): (end?: string) => AsyncGenerator<any, void, any> {
    const dir = direction || "b";
    const lim = limit || 100;

    const accessToken = this.client.accessToken;
    const url = this.client.buildUrl(`rooms/${this.roomId}/messages`);

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

  async sendRoomMessage(body: any): Promise<{event_id: string}> {
    return this.client.put(`rooms/${this.roomId}/send/m.room.message/${Date.now()}`, body);
  }
}