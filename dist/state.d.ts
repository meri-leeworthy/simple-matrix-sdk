import { ClientEventOutput } from "./types";
export declare class State {
    map: Map<string, Map<string, any>>;
    constructor(chunk: ClientEventOutput[]);
    get(type: string, stateKey?: string): any;
    getAll(type: string): Map<string, any> | undefined;
}
