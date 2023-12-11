type Params = Record<string, string>;
export type Event = Record<string, any> & {
    type: string;
    content?: Record<string, any> & {
        body?: string;
        msgtype?: string;
    };
    sender?: any;
    room_id: string;
    event_id: string;
    origin_server_ts: number;
    unsigned?: any;
};
type ClientOptions = {
    userId: string;
    params: Params;
    fetch: any;
};
export declare class Client {
    private baseUrl;
    accessToken: string;
    userId: string;
    params: Params;
    fetch: any;
    constructor(baseUrl: string, accessToken: string, opts?: Partial<ClientOptions>);
    static authenticatedGet(url: string, accessToken: string, opts?: {
        params?: Params;
        fetch?: any;
    }): Promise<any>;
    static authenticatedPut(url: string, accessToken: string, body: any, options?: {
        params?: Params;
        fetch?: any;
    }): Promise<any>;
    static authenticatedPost(url: string, accessToken: string, body: any, options?: {
        params?: Params;
        fetch?: any;
    }): Promise<any>;
    static login(baseUrl: string, username: string, password: string, fetch?: any): Promise<any>;
    useBaseUrl(): string;
    useUserId(): string;
    buildUrl(endpoint: string): string;
    get(endpoint: string, params?: Params): Promise<any>;
    put(endpoint: string, body: any, params?: Params): Promise<any>;
    post(endpoint: string, body: any, params?: Params): Promise<any>;
    getJoinedRooms(): Promise<{
        joined_rooms: string[];
    }>;
    getProfile(userId: string): Promise<{
        displayname: string;
    }>;
    uploadFile(file: File): Promise<any>;
}
export declare class Room {
    private roomId;
    private client;
    private name?;
    constructor(roomId: string, client: Client);
    useName(): {
        name: string;
    } | undefined;
    useID(): string;
    get(endpoint: string, params?: Params): Promise<any>;
    getName(): Promise<unknown>;
    getState(): Promise<any>;
    getMessagesOneShot(): Promise<any>;
    getMessagesOneShotParams(params: Record<string, any>): Promise<any>;
    getEvent(eventId: string): Promise<Event>;
    getStateEvent(type: string, stateKey?: string): Promise<any>;
    getPowerLevels(): Promise<any>;
    getMessagesAsyncGenerator(direction?: "f" | "b", limit?: number): (end?: string) => AsyncGenerator<any, void, any>;
    sendMessage(body: any): Promise<{
        event_id: string;
    }>;
    sendEvent(type: string, body: any): Promise<{
        event_id: string;
    }>;
    sendStateEvent(type: string, body: any, stateKey?: string): Promise<{
        event_id: string;
    }>;
    setName(name: string): Promise<void>;
    setTopic(topic: string): Promise<void>;
    redactEvent(eventId: string): Promise<void>;
    static sortEvents(events: Event[]): Record<string, Event[]>;
    static replaceEditedMessages(messages: Event[]): (Event | {
        content: {
            [x: string]: any;
            body?: string | undefined;
            msgtype?: string | undefined;
        };
        type: string;
        sender?: any;
        room_id: string;
        event_id: string;
        origin_server_ts: number;
        unsigned?: any;
    })[];
}
export {};
