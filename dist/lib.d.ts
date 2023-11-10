type Params = Record<string, string>;
export declare function authenticatedGet(url: string, accessToken: string, params?: Params): Promise<any>;
export declare function authenticatedPut(url: string, accessToken: string, body: any, params?: Params): Promise<any>;
export declare function login(baseUrl: string, username: string, password: string): Promise<any>;
export declare class Client {
    private baseUrl;
    accessToken: string;
    constructor(baseUrl: string, accessToken: string);
    buildUrl(endpoint: string): string;
    get(endpoint: string, params?: Params): Promise<any>;
    put(endpoint: string, body: any, params?: Params): Promise<any>;
    getJoinedRooms(): Promise<{
        joined_rooms: string[];
    }>;
}
export declare class Room {
    private roomId;
    private client;
    private name?;
    constructor(roomId: string, client: Client);
    useRoomName(): string | undefined;
    useRoomID(): string;
    getRoomName(): Promise<string>;
    getRoomState(): Promise<any>;
    getRoomMessagesOneShot(): Promise<any>;
    getRoomMessagesOneShotParams(): Promise<any>;
    getRoomMessagesAsyncGenerator(direction?: "f" | "b", limit?: number): (end?: string) => AsyncGenerator<any, void, any>;
    sendRoomMessage(body: any): Promise<{
        event_id: string;
    }>;
}
export {};
