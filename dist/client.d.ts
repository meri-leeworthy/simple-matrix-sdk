import { ClientOptions, ErrorOutput, Params } from "./types/client";
import { Room } from "./room";
import { CreateRoomOptsOutput } from "./types/types";
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
    }): Promise<unknown>;
    static authenticatedPut(url: string, accessToken: string, body: any, opts?: {
        params?: Params;
        fetch?: any;
    }): Promise<unknown>;
    static authenticatedPost(url: string, accessToken: string, body: any, opts?: {
        params?: Params;
        fetch?: any;
    }): Promise<unknown>;
    static authenticatedDelete(url: string, accessToken: string, opts?: {
        params?: Params;
        fetch?: any;
    }): Promise<unknown>;
    static login(baseUrl: string, username: string, password: string, fetch?: any): Promise<any>;
    static register(username: string, password: string, baseUrl: string): Promise<any>;
    static isUsernameAvailable(username: string, baseUrl: string): Promise<boolean>;
    static getLoginFlows(baseUrl: string): Promise<any>;
    getRoom(roomId: string): Room;
    buildUrl(endpoint: string, urlType?: string): string;
    get(endpoint: string, params?: Params): Promise<unknown>;
    put(endpoint: string, body: any, params?: Params): Promise<unknown>;
    post(endpoint: string, body: any, params?: Params): Promise<unknown>;
    delete(endpoint: string, params?: Params): Promise<unknown>;
    getJoinedRooms(): Promise<{
        joined_rooms: string[];
    } | ErrorOutput>;
    getRoomIdFromAlias(alias: string): Promise<string | ErrorOutput>;
    getProfile(userId?: string): Promise<{
        displayname: string;
    } | ErrorOutput>;
    getUser3pids(): Promise<any>;
    uploadFile(file: File): Promise<any>;
    joinRoom(roomIdOrAlias: string, params?: Params): Promise<ErrorOutput | {
        room_id: string;
    }>;
    leaveRoom(roomId: string): Promise<any>;
    createRoom(body: CreateRoomOptsOutput): Promise<Room | {
        errcode: string;
        error?: string;
    }>;
    add3pid(body: {
        sid: string;
        client_secret: string;
        auth?: {
            session: string;
            type: string;
        };
    }, password: string): Promise<unknown>;
    requestTokenEmail(email: string, clientSecret: string, sendAttempt?: number): Promise<unknown>;
}
