import { Room } from ".";
import { CreateRoomOpts } from "./types/types";
import { ClientOptions, ErrorOutput, Params } from "types/client";
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
    static register(username: string, password: string, baseUrl: string): Promise<any>;
    static isUsernameAvailable(username: string, baseUrl: string): Promise<boolean>;
    static getLoginFlows(baseUrl: string): Promise<any>;
    getRoom(roomId: string): Room;
    buildUrl(endpoint: string, urlType?: string): string;
    get(endpoint: string, params?: Params): Promise<any>;
    put(endpoint: string, body: any, params?: Params): Promise<any>;
    post(endpoint: string, body: any, params?: Params): Promise<any>;
    getJoinedRooms(): Promise<{
        joined_rooms: string[];
    }>;
    getRoomIdFromAlias(alias: string): Promise<string | ErrorOutput>;
    getProfile(userId?: string): Promise<{
        displayname: string;
    }>;
    getUser3pids(): Promise<any>;
    uploadFile(file: File): Promise<any>;
    joinRoom(roomIdOrAlias: string): Promise<any>;
    leaveRoom(roomId: string): Promise<any>;
    createRoom(body: CreateRoomOpts): Promise<Room | {
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
    }, password: string): Promise<any>;
    requestTokenEmail(email: string, clientSecret: string, sendAttempt?: number): Promise<any>;
}
