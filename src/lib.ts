export function authenticatedGet(accessToken: string) {
  return async function (url: string) {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });
    const data = await response.json();
    return data;
  }
}

export function authenticatedPut(accessToken:string, body: any) {
  return async function (url: string) {
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
    return data;
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

  get(endpoint: string) {
    return authenticatedGet(this.accessToken)(this.buildUrl(endpoint));
  }

  put(endpoint: string, body: any) {
    return authenticatedPut(this.accessToken, body)(this.buildUrl(endpoint));
  }

  async getJoinedRooms(): Promise<{joined_rooms: string[]}> {
      return this.get('joined_rooms');
  }

  async getRoomMessages(roomId: string): Promise<{chunk: any[]}> {
    return this.get(`rooms/${roomId}/messages`);
  }

  async sendRoomMessage(roomId: string, body: any): Promise<{event_id: string}> {
    return this.put(`rooms/${roomId}/send/m.room.message/${Date.now()}`, body);
  }
}