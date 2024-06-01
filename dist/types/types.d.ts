import { ContentUnionSchema } from "./content";
import * as z from "zod";
export declare const ThumbnailInfoSchema: z.ZodObject<{
    h: z.ZodOptional<z.ZodNumber>;
    w: z.ZodOptional<z.ZodNumber>;
    mimetype: z.ZodOptional<z.ZodString>;
    size: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    h?: number | undefined;
    w?: number | undefined;
    mimetype?: string | undefined;
    size?: number | undefined;
}, {
    h?: number | undefined;
    w?: number | undefined;
    mimetype?: string | undefined;
    size?: number | undefined;
}>;
export type ThumbnailInfoOutput = z.infer<typeof ThumbnailInfoSchema>;
export declare const RoomMessageTypeSchema: z.ZodEnum<["m.text", "m.emote", "m.notice", "m.image", "m.file", "m.audio", "m.location", "m.video", "m.key.verification.request"]>;
export type RoomMessageTypeOutput = z.infer<typeof RoomMessageTypeSchema>;
export declare const SpecRoomEventTypeSchema: z.ZodUnion<[z.ZodLiteral<"m.room.message">, z.ZodLiteral<"m.room.member">, z.ZodLiteral<"m.room.create">, z.ZodLiteral<"m.room.join_rules">, z.ZodLiteral<"m.room.power_levels">, z.ZodLiteral<"m.room.name">, z.ZodLiteral<"m.room.topic">, z.ZodLiteral<"m.room.avatar">, z.ZodLiteral<"m.room.canonical_alias">, z.ZodLiteral<"m.room.aliases">, z.ZodLiteral<"m.room.redaction">, z.ZodLiteral<"m.room.history_visibility">, z.ZodLiteral<"m.room.encryption">, z.ZodLiteral<"m.room.third_party_invite">, z.ZodLiteral<"m.room.related_groups">, z.ZodLiteral<"m.room.pinned_events">, z.ZodLiteral<"m.room.server_acl">, z.ZodLiteral<"m.room.tombstone">, z.ZodLiteral<"m.room.key">, z.ZodLiteral<"m.room.forwarded_room_key">, z.ZodLiteral<"m.room.encrypted">, z.ZodLiteral<"m.room.message.feedback">, z.ZodLiteral<"m.room.message.receipt">, z.ZodLiteral<"m.room.message.relation">, z.ZodLiteral<"m.room.message.encrypted">, z.ZodLiteral<"m.room.tag">, z.ZodLiteral<"m.room.sticker">, z.ZodLiteral<"m.room.space">, z.ZodLiteral<"m.room.guest_access">]>;
export type SpecRoomEventTypeOutput = z.infer<typeof SpecRoomEventTypeSchema>;
export type ContentUnionOutput = z.infer<typeof ContentUnionSchema>;
export declare const MatrixRoomMemberContent: z.ZodObject<{
    membership: z.ZodString;
    displayname: z.ZodOptional<z.ZodString>;
    avatar_url: z.ZodOptional<z.ZodString>;
    is_direct: z.ZodOptional<z.ZodBoolean>;
    third_party_invite: z.ZodOptional<z.ZodObject<{
        display_name: z.ZodString;
        signed: z.ZodObject<{
            mxid: z.ZodString;
            signatures: z.ZodObject<{
                "ed25519:": z.ZodString;
            }, "strip", z.ZodTypeAny, {
                "ed25519:": string;
            }, {
                "ed25519:": string;
            }>;
            token: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            mxid: string;
            signatures: {
                "ed25519:": string;
            };
            token: string;
        }, {
            mxid: string;
            signatures: {
                "ed25519:": string;
            };
            token: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        display_name: string;
        signed: {
            mxid: string;
            signatures: {
                "ed25519:": string;
            };
            token: string;
        };
    }, {
        display_name: string;
        signed: {
            mxid: string;
            signatures: {
                "ed25519:": string;
            };
            token: string;
        };
    }>>;
}, "strip", z.ZodTypeAny, {
    membership: string;
    displayname?: string | undefined;
    avatar_url?: string | undefined;
    is_direct?: boolean | undefined;
    third_party_invite?: {
        display_name: string;
        signed: {
            mxid: string;
            signatures: {
                "ed25519:": string;
            };
            token: string;
        };
    } | undefined;
}, {
    membership: string;
    displayname?: string | undefined;
    avatar_url?: string | undefined;
    is_direct?: boolean | undefined;
    third_party_invite?: {
        display_name: string;
        signed: {
            mxid: string;
            signatures: {
                "ed25519:": string;
            };
            token: string;
        };
    } | undefined;
}>;
export declare const MatrixRoomCreateContent: z.ZodObject<{
    creator: z.ZodString;
    room_version: z.ZodOptional<z.ZodString>;
    predecessor: z.ZodOptional<z.ZodObject<{
        event_id: z.ZodString;
        room_id: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        room_id: string;
        event_id: string;
    }, {
        room_id: string;
        event_id: string;
    }>>;
}, "strip", z.ZodTypeAny, {
    creator: string;
    room_version?: string | undefined;
    predecessor?: {
        room_id: string;
        event_id: string;
    } | undefined;
}, {
    creator: string;
    room_version?: string | undefined;
    predecessor?: {
        room_id: string;
        event_id: string;
    } | undefined;
}>;
export declare const MatrixRoomJoinRulesContent: z.ZodObject<{
    join_rule: z.ZodString;
}, "strip", z.ZodTypeAny, {
    join_rule: string;
}, {
    join_rule: string;
}>;
export declare const MatrixRoomNameContent: z.ZodObject<{
    name: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
}, {
    name: string;
}>;
export declare const MatrixRoomTopicContent: z.ZodObject<{
    topic: z.ZodString;
}, "strip", z.ZodTypeAny, {
    topic: string;
}, {
    topic: string;
}>;
export declare const MatrixRoomAvatarContent: z.ZodObject<{
    url: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    url?: string | undefined;
}, {
    url?: string | undefined;
}>;
export declare const MatrixRoomCanonicalAliasContent: z.ZodObject<{
    alias: z.ZodString;
}, "strip", z.ZodTypeAny, {
    alias: string;
}, {
    alias: string;
}>;
export declare const MatrixRoomAliasesContent: z.ZodObject<{
    aliases: z.ZodArray<z.ZodString, "many">;
}, "strip", z.ZodTypeAny, {
    aliases: string[];
}, {
    aliases: string[];
}>;
export declare const MatrixRoomRedactionContent: z.ZodObject<{
    reason: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    reason?: string | undefined;
}, {
    reason?: string | undefined;
}>;
export declare const CreateRoomOptsSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    topic: z.ZodOptional<z.ZodString>;
    invite: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    invite_3pid: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id_server: z.ZodString;
        medium: z.ZodString;
        address: z.ZodString;
        id_access_token: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id_server: string;
        medium: string;
        address: string;
        id_access_token: string;
    }, {
        id_server: string;
        medium: string;
        address: string;
        id_access_token: string;
    }>, "many">>;
    room_alias_name: z.ZodOptional<z.ZodString>;
    creation_content: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    power_level_content_override: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    visibility: z.ZodOptional<z.ZodEnum<["public", "private"]>>;
    preset: z.ZodOptional<z.ZodEnum<["public_chat", "private_chat", "trusted_private_chat"]>>;
    room_version: z.ZodOptional<z.ZodString>;
    initial_state: z.ZodOptional<z.ZodArray<z.ZodObject<{
        type: z.ZodString;
        state_key: z.ZodOptional<z.ZodString>;
        content: z.ZodRecord<z.ZodString, z.ZodUnknown>;
    }, "strip", z.ZodTypeAny, {
        type: string;
        content: Record<string, unknown>;
        state_key?: string | undefined;
    }, {
        type: string;
        content: Record<string, unknown>;
        state_key?: string | undefined;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    name?: string | undefined;
    invite?: string[] | undefined;
    room_version?: string | undefined;
    topic?: string | undefined;
    invite_3pid?: {
        id_server: string;
        medium: string;
        address: string;
        id_access_token: string;
    }[] | undefined;
    room_alias_name?: string | undefined;
    creation_content?: Record<string, unknown> | undefined;
    power_level_content_override?: Record<string, unknown> | undefined;
    visibility?: "public" | "private" | undefined;
    preset?: "public_chat" | "private_chat" | "trusted_private_chat" | undefined;
    initial_state?: {
        type: string;
        content: Record<string, unknown>;
        state_key?: string | undefined;
    }[] | undefined;
}, {
    name?: string | undefined;
    invite?: string[] | undefined;
    room_version?: string | undefined;
    topic?: string | undefined;
    invite_3pid?: {
        id_server: string;
        medium: string;
        address: string;
        id_access_token: string;
    }[] | undefined;
    room_alias_name?: string | undefined;
    creation_content?: Record<string, unknown> | undefined;
    power_level_content_override?: Record<string, unknown> | undefined;
    visibility?: "public" | "private" | undefined;
    preset?: "public_chat" | "private_chat" | "trusted_private_chat" | undefined;
    initial_state?: {
        type: string;
        content: Record<string, unknown>;
        state_key?: string | undefined;
    }[] | undefined;
}>;
export type CreateRoomOptsOutput = z.infer<typeof CreateRoomOptsSchema>;
