import { ClientOptions, Params } from "./types";
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
    static getLoginFlows(baseUrl: string): Promise<any>;
    buildUrl(endpoint: string, urlType?: string): string;
    get(endpoint: string, params?: Params): Promise<any>;
    put(endpoint: string, body: any, params?: Params): Promise<any>;
    post(endpoint: string, body: any, params?: Params): Promise<any>;
    getJoinedRooms(): Promise<{
        joined_rooms: string[];
    }>;
    getRoomIdFromAlias(alias: string): Promise<string>;
    getProfile(userId?: string): Promise<{
        displayname: string;
    }>;
    uploadFile(file: File): Promise<any>;
    joinRoom(roomIdOrAlias: string): Promise<any>;
    leaveRoom(roomId: string): Promise<any>;
    createRoom(body: {
        name?: string;
        topic?: string;
        invite?: string[];
        room_alias_name?: string;
        initial_state?: {
            type: string;
            state_key?: string;
            content: {
                [key: string]: any;
            };
        }[];
    }): Promise<{
        room_id: string;
    } | {
        errcode: string;
        error?: string;
    }>;
}
