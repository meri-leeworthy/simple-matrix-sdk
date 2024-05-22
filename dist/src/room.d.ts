import { Client } from "./client";
import { ClientEventOutput, ErrorOutput, Params, State } from ".";
export declare class Room {
    roomId: string;
    client: Client;
    name?: {
        name: string;
    };
    constructor(roomId: string, client: Client);
    get(endpoint: string, params?: Params): Promise<any>;
    getName(): Promise<{
        name: string;
    } | ErrorOutput>;
    getMembers(): Promise<ErrorOutput | {
        chunk: ClientEventOutput[];
    }>;
    getState(): Promise<State | ErrorOutput>;
    getMessages(params: Record<string, any>): Promise<{
        chunk: ClientEventOutput[];
    } | ErrorOutput>;
    getEvent(eventId: string): Promise<ClientEventOutput | ErrorOutput>;
    getRelations(eventId: string, params: Record<string, any>, relType?: string, eventType?: string): Promise<any>;
    getStateEvent(type: string, stateKey?: string): Promise<ClientEventOutput | ErrorOutput | undefined>;
    getPowerLevels(): Promise<any | ErrorOutput>;
    setEventPowerLevel(eventType: string, powerLevel: number): Promise<any | ErrorOutput>;
    getUserPowerLevel(): Promise<number>;
    setUserPowerLevel(userId: string, powerLevel: number): Promise<any>;
    getHierarchy(opts?: {
        max_depth?: number;
        limit?: number;
        from?: string;
        suggested_only?: boolean;
    }): Promise<{
        [x: string]: any;
    }[] | undefined>;
    isUserModerator(userId?: string): Promise<boolean>;
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
    getAvatarMxc(): Promise<string>;
    getAliases(): Promise<string[] | ErrorOutput>;
    getCanonicalAlias(): Promise<{
        alias: string;
    } | ErrorOutput>;
    setAlias(alias: string): Promise<any>;
    deleteAlias(alias: string): Promise<any>;
    static sortEvents(events: ClientEventOutput[]): Record<string, ClientEventOutput[]>;
    static replaceEditedMessages(messages: ClientEventOutput[]): any[];
    static deleteEditedMessages(messages: ClientEventOutput[]): ClientEventOutput[];
}
