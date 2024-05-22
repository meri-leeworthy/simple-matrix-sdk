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
exports.CreateRoomOptsSchema = exports.MatrixRoomRedactionContent = exports.MatrixRoomAliasesContent = exports.MatrixRoomCanonicalAliasContent = exports.MatrixRoomAvatarContent = exports.MatrixRoomTopicContent = exports.MatrixRoomNameContent = exports.MatrixRoomJoinRulesContent = exports.MatrixRoomCreateContent = exports.MatrixRoomMemberContent = exports.SpecRoomEventTypeSchema = exports.RoomMessageTypeSchema = exports.ThumbnailInfoSchema = void 0;
const z = __importStar(require("zod"));
exports.ThumbnailInfoSchema = z
    .object({
    h: z.z.number(),
    w: z.z.number(),
    mimetype: z.string(),
    size: z.number(),
})
    .partial();
exports.RoomMessageTypeSchema = z.enum([
    "m.text",
    "m.emote",
    "m.notice",
    "m.image",
    "m.file",
    "m.audio",
    "m.location",
    "m.video",
    "m.key.verification.request",
]);
exports.SpecRoomEventTypeSchema = z.union([
    z.literal("m.room.message"),
    z.literal("m.room.member"),
    z.literal("m.room.create"),
    z.literal("m.room.join_rules"),
    z.literal("m.room.power_levels"),
    z.literal("m.room.name"),
    z.literal("m.room.topic"),
    z.literal("m.room.avatar"),
    z.literal("m.room.canonical_alias"),
    z.literal("m.room.aliases"),
    z.literal("m.room.redaction"),
    z.literal("m.room.history_visibility"),
    z.literal("m.room.encryption"),
    z.literal("m.room.third_party_invite"),
    z.literal("m.room.related_groups"),
    z.literal("m.room.pinned_events"),
    z.literal("m.room.server_acl"),
    z.literal("m.room.tombstone"),
    z.literal("m.room.key"),
    z.literal("m.room.forwarded_room_key"),
    z.literal("m.room.encrypted"),
    z.literal("m.room.message.feedback"),
    z.literal("m.room.message.receipt"),
    z.literal("m.room.message.relation"),
    z.literal("m.room.message.encrypted"),
    z.literal("m.room.tag"),
    z.literal("m.room.sticker"),
    z.literal("m.room.space"),
    z.literal("m.room.guest_access"),
]);
exports.MatrixRoomMemberContent = z.object({
    membership: z.string({
        invalid_type_error: "Membership must be a string",
    }),
    displayname: z.optional(z.string({ invalid_type_error: "Display name must be a string" })),
    avatar_url: z.optional(z.string({ invalid_type_error: "Avatar URL must be a string" })),
    is_direct: z.optional(z.boolean({ invalid_type_error: "Is direct must be a boolean" })),
    third_party_invite: z.optional(z.object({
        display_name: z.string({
            invalid_type_error: "Display name must be a string",
        }),
        signed: z.object({
            mxid: z.string({ invalid_type_error: "MXID must be a string" }),
            signatures: z.object({
                "ed25519:": z.string({
                    invalid_type_error: "Signature must be a string",
                }),
            }),
            token: z.string({ invalid_type_error: "Token must be a string" }),
        }),
    })),
});
exports.MatrixRoomCreateContent = z.object({
    creator: z.string({ invalid_type_error: "Creator must be a string" }),
    room_version: z.optional(z.string({ invalid_type_error: "Room version must be a string" })),
    predecessor: z.optional(z.object({
        event_id: z.string({
            invalid_type_error: "Event ID must be a string",
        }),
        room_id: z.string({
            invalid_type_error: "Room ID must be a string",
        }),
    })),
});
exports.MatrixRoomJoinRulesContent = z.object({
    join_rule: z.string({
        invalid_type_error: "Join rule must be a string",
    }),
});
exports.MatrixRoomNameContent = z.object({
    name: z.string({ invalid_type_error: "Name must be a string" }),
});
exports.MatrixRoomTopicContent = z.object({
    topic: z.string({ invalid_type_error: "Topic must be a string" }),
});
exports.MatrixRoomAvatarContent = z.object({
    url: z.optional(z.string({ invalid_type_error: "URL must be a string" })),
});
exports.MatrixRoomCanonicalAliasContent = z.object({
    alias: z.string({ invalid_type_error: "Alias must be a string" }),
});
exports.MatrixRoomAliasesContent = z.object({
    aliases: z.array(z.string({ invalid_type_error: "Alias must be a string" })),
});
exports.MatrixRoomRedactionContent = z.object({
    reason: z.optional(z.string({ invalid_type_error: "Reason must be a string" })),
});
// export type ClientEventOutput = z.infer<typeof ClientEventSchema>
exports.CreateRoomOptsSchema = z.object({
    name: z.string().optional(),
    topic: z.string().optional(),
    invite: z.array(z.string()).optional(),
    invite_3pid: z
        .array(z.object({
        id_server: z.string(),
        medium: z.string(),
        address: z.string(),
        id_access_token: z.string(),
    }))
        .optional(),
    room_alias_name: z.string().optional(),
    creation_content: z.record(z.unknown()).optional(),
    power_level_content_override: z.record(z.unknown()).optional(),
    visibility: z.enum(["public", "private"]).optional(),
    preset: z
        .enum(["public_chat", "private_chat", "trusted_private_chat"])
        .optional(),
    room_version: z.string().optional(),
    initial_state: z
        .array(z.object({
        type: z.string(),
        state_key: z.string().optional(),
        content: z.record(z.unknown()),
    }))
        .optional(),
});
