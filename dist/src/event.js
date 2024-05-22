"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Event = void 0;
class Event {
    constructor(event) {
        this.edits = new Map();
        const result = ClientEventBaseSchema.safeParse(event);
        if (!result.success) {
            console.log("event", event);
            console.log("result", result);
            throw new Error("Invalid event");
        }
        this.type = event.type;
        this.content = event.content;
        this.eventId = event.event_id;
        this.sender = event.sender;
        this.roomId = event.room_id;
        this.originServerTs = event.origin_server_ts;
        this.stateKey = event.state_key;
        this.unsigned = event.unsigned;
        if (event.unsigned &&
            event.unsigned["m.relations"] &&
            event.unsigned["m.relations"]["m.replace"]) {
            const edits = event.unsigned["m.relations"]["m.replace"];
            if (Array.isArray(edits)) {
                edits.forEach(edit => {
                    "success" in ClientEventSchema.safeParse(edit) &&
                        this.addReplacement(edit);
                });
            }
            else if ("success" in ClientEventSchema.safeParse(edits)) {
                this.addReplacement(edits);
            }
        }
    }
    addReplacement(event) {
        this.edits.set(event.event_id, new Event(event));
        if (!this.latestEditId)
            this.latestEditId = event.event_id;
        const latestEdit = this.edits.get(this.latestEditId);
        if ((latestEdit === null || latestEdit === void 0 ? void 0 : latestEdit.originServerTs) &&
            event.origin_server_ts > (latestEdit === null || latestEdit === void 0 ? void 0 : latestEdit.originServerTs))
            this.latestEditId = event.event_id;
    }
    getLatestEdit() {
        if (this.latestEditId)
            return this.edits.get(this.latestEditId);
        else
            return this;
    }
}
exports.Event = Event;
