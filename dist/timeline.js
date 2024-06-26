"use strict";
//intention to create a class for events timeline similiar to the matrix-js-sdl
//create a normalised, structured, validated, deduplicated tree of relations between events
Object.defineProperty(exports, "__esModule", { value: true });
exports.Timeline = void 0;
const event_1 = require("./event");
const content_1 = require("./types/content");
const utils_1 = require("./types/utils");
class Timeline {
    constructor(chunk) {
        this.events = new Map();
        this.addChunk(chunk);
    }
    addChunk(chunk) {
        chunk.forEach(event => {
            this.addEvent(event);
        });
    }
    addEvent(event) {
        if ((0, utils_1.is)(content_1.EventContentSchema, event.content) &&
            event.content["m.relates_to"] &&
            event.content["m.relates_to"].rel_type === "m.replace") {
            const id = event.content["m.relates_to"].event_id;
            const eventParent = this.events.get(id);
            if (eventParent) {
                eventParent.edits.set(event.event_id, new event_1.Event(event));
            }
            else {
                this.events.set(event.event_id, new event_1.Event(event));
            }
        }
        else {
            this.events.set(event.event_id, new event_1.Event(event));
        }
    }
}
exports.Timeline = Timeline;
