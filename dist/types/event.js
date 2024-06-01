"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Event = exports.ClientEventSchema = exports.UnsignedDataSchema = exports.ClientEventBaseSchema = void 0;
const z = __importStar(require("zod"));
const content_1 = require("./content");
const utils_1 = require("./utils");
exports.ClientEventBaseSchema = z.object({
    type: z.string({ invalid_type_error: "Event type must be a string" }),
    content: z.unknown(),
    sender: z.string({ invalid_type_error: "Sender must be a string" }),
    room_id: z.string({ invalid_type_error: "Room ID must be a string" }),
    event_id: z.string({ invalid_type_error: "Event ID must be a string" }),
    state_key: z.optional(z.string({ invalid_type_error: "State key must be a string" })),
    origin_server_ts: z.number({
        invalid_type_error: "Origin server timestamp must be a number",
    }),
    age: z.optional(z.number({ invalid_type_error: "Age must be a number" })),
    replaces_state: z.optional(z.string({ invalid_type_error: "Replaces state must be a string" })),
    prev_content: z.optional(content_1.ContentUnionSchema),
    user_id: z.optional(z.string({ invalid_type_error: "User ID must be a string" })),
});
exports.UnsignedDataSchema = z
    .object({
    age: z.number({ invalid_type_error: "Age must be a number" }),
    transaction_id: z.string({
        invalid_type_error: "Transaction ID must be a string",
    }),
    prev_content: content_1.ContentUnionSchema,
    "m.relations": z.unknown(),
    redacted_because: exports.ClientEventBaseSchema,
})
    .partial();
exports.ClientEventSchema = exports.ClientEventBaseSchema.extend({
    unsigned: z.optional(exports.UnsignedDataSchema),
});
class Event {
    constructor(event) {
        this.edits = new Map();
        const result = exports.ClientEventSchema.safeParse(event);
        if (!result.success) {
            console.log("event", event);
            console.log("result", result);
            throw new Error("Invalid event");
        }
        // event has been validated but the exact type and corresponding content is still unknown
        this.type = event.type;
        this.content = event.content;
        this.eventId = event.event_id;
        this.sender = event.sender;
        this.roomId = event.room_id;
        this.originServerTs = event.origin_server_ts;
        this.stateKey = event.state_key;
        this.unsigned = event.unsigned;
        const RelationsSchema = z.object({
            "m.replace": exports.ClientEventBaseSchema,
        });
        if (event.unsigned &&
            event.unsigned["m.relations"] &&
            (0, utils_1.is)(RelationsSchema, event.unsigned["m.relations"])) {
            const edits = event.unsigned["m.relations"]["m.replace"];
            if (Array.isArray(edits)) {
                edits.forEach(edit => {
                    "success" in exports.ClientEventBaseSchema.safeParse(edit) &&
                        this.addReplacement(edit);
                });
            }
            else if ("success" in exports.ClientEventBaseSchema.safeParse(edits)) {
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
