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