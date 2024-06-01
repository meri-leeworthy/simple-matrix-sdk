"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetHierarchyResponse = exports.SpaceHierarchyRoomsChunk = void 0;
const zod_1 = require("zod");
const event_1 = require("./event");
const StrippedChildStateEvent = zod_1.z.object({
    content: event_1.ClientEventSchema,
    sender: zod_1.z.string(),
    origin_server_ts: zod_1.z.number().int(),
    state_key: zod_1.z.string(),
    type: zod_1.z.string(),
});
exports.SpaceHierarchyRoomsChunk = zod_1.z.object({
    avatar_url: zod_1.z.optional(zod_1.z.string()),
    canonical_alias: zod_1.z.optional(zod_1.z.string()),
    children_state: zod_1.z.array(StrippedChildStateEvent),
    guest_can_join: zod_1.z.boolean(),
    join_rule: zod_1.z.optional(zod_1.z.string()),
    name: zod_1.z.optional(zod_1.z.string()),
    num_joined_members: zod_1.z.number(),
    room_id: zod_1.z.string(),
    room_type: zod_1.z.optional(zod_1.z.string()),
    topic: zod_1.z.optional(zod_1.z.string()),
    world_readable: zod_1.z.boolean(),
});
exports.GetHierarchyResponse = zod_1.z.object({
    next_batch: zod_1.z.optional(zod_1.z.string()),
    rooms: zod_1.z.array(exports.SpaceHierarchyRoomsChunk),
});
