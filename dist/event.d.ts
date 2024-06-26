import { ClientEventOutput, UnsignedDataOutput } from "./types/event";
export declare class Event {
    type: string;
    content: unknown;
    eventId: string;
    sender: string;
    roomId: string;
    originServerTs: number;
    stateKey?: string;
    unsigned?: UnsignedDataOutput;
    edits: Map<string, Event>;
    latestEditId?: string;
    constructor(event: ClientEventOutput);
    addReplacement(event: ClientEventOutput): void;
    getLatestEdit(): Event | undefined;
}
