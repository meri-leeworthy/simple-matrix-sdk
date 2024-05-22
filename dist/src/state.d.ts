import { ClientEventOutput } from "./types/types";
export declare class State {
    map: Map<string, Map<string, ClientEventOutput>>;
    constructor(chunk: ClientEventOutput[]);
    get(type: string, stateKey?: string): any;
    getAll(type: string): Map<string, ClientEventOutput> | undefined;
}
