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
exports.ClientEventBaseSchema = void 0;
const z = __importStar(require("zod"));
const content_1 = require("./content");
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
