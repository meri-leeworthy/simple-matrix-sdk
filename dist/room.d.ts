import { Client } from "./client";
import { Event, Params } from "./types";
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
    setEventPowerLevel(eventType: string, powerLevel: number): Promise<any>;
    getUserPowerLevel(): Promise<number>;
    isUserModerator(): Promise<boolean>;
    getMessagesAsyncGenerator(direction?: "f" | "b", limit?: number): AsyncGenerator<any, void, any>;
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
    static deleteEditedMessages(messages: Event[]): Event[];
}