export declare class IdentityClient {
    baseUrl: string;
    constructor(baseUrl?: string);
    get(url: string): Promise<any>;
    post(url: string, body: any): Promise<any>;
    put(url: string, body: any): Promise<any>;
}
