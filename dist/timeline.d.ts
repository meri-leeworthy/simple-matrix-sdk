import { Event } from "./event";
import { ClientEventOutput } from "./types/event";
export declare class Timeline {
    events: Map<string, Event>;
    constructor(chunk: ClientEventOutput[]);
    addChunk(chunk: ClientEventOutput[]): void;
    addEvent(event: ClientEventOutput): void;
}
