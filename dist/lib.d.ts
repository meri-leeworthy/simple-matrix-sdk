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
export declare class Client {
    private baseUrl;
    accessToken: string;
    private userId;
    constructor(baseUrl: string, accessToken: string, userId: string);
    static authenticatedGet(url: string, accessToken: string, params?: Params): Promise<any>;
    static authenticatedPut(url: string, accessToken: string, body: any, params?: Params): Promise<any>;
    static authenticatedPost(url: string, accessToken: string, body: any, params?: Params): Promise<any>;
    static login(baseUrl: string, username: string, password: string): Promise<any>;
    useUserId(): string;
    buildUrl(endpoint: string): string;
    get(endpoint: string, params?: Params): Promise<any>;
    put(endpoint: string, body: any, params?: Params): Promise<any>;
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
    getName(): Promise<unknown>;
    getState(): Promise<any>;
    getMessagesOneShot(): Promise<any>;
    getMessagesOneShotParams(): Promise<any>;
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
