type Params = Record<string, string>;
export declare function authenticatedGet(url: string, accessToken: string, params?: Params): Promise<any>;
export declare function authenticatedPut(url: string, accessToken: string, body: any, params?: Params): Promise<any>;
export declare function login(username: string, password: string): (baseUrl: string) => Promise<any>;
export declare class Client {
    private baseUrl;
    private accessToken;
    constructor(baseUrl: string, accessToken: string);
    buildUrl(endpoint: string): string;
    get(endpoint: string, params?: Params): Promise<any>;
    put(endpoint: string, body: any, params?: Params): Promise<any>;
    getJoinedRooms(): Promise<{
        joined_rooms: string[];
    }>;
    getRoomMessagesOneShot(roomId: string): Promise<any>;
    getRoomMessagesOneShotParams(roomId: string): Promise<any>;
    getRoomMessagesAsyncGenerator(roomId: string, direction?: "f" | "b", limit?: number): (end?: string) => AsyncGenerator<any, void, any>;
    sendRoomMessage(roomId: string, body: any): Promise<{
        event_id: string;
    }>;
}
export {};
