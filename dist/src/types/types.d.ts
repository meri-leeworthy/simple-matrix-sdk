import { ContentUnionSchema } from "./content";
import * as z from "zod";
import { ClientEventBaseOutput } from "./event";
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
export declare const UnsignedDataBaseSchema: z.ZodObject<{
    age: z.ZodOptional<z.ZodNumber>;
    transaction_id: z.ZodOptional<z.ZodString>;
    prev_content: z.ZodOptional<z.ZodUnion<[z.ZodObject<{
        body: z.ZodString;
        msgtype: z.ZodString;
        "m.relates_to": z.ZodOptional<z.ZodObject<{
            event_id: z.ZodString;
            rel_type: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            rel_type: string;
            event_id: string;
        }, {
            rel_type: string;
            event_id: string;
        }>>;
    }, "strip", z.ZodTypeAny, {
        body: string;
        msgtype: string;
        "m.relates_to"?: {
            rel_type: string;
            event_id: string;
        } | undefined;
    }, {
        body: string;
        msgtype: string;
        "m.relates_to"?: {
            rel_type: string;
            event_id: string;
        } | undefined;
    }>, z.ZodUnion<[z.ZodObject<{
        msgtype: z.ZodLiteral<"m.text">;
        body: z.ZodString;
        format: z.ZodOptional<z.ZodString>;
        formatted_body: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        body: string;
        msgtype: "m.text";
        format?: string | undefined;
        formatted_body?: string | undefined;
    }, {
        body: string;
        msgtype: "m.text";
        format?: string | undefined;
        formatted_body?: string | undefined;
    }>, z.ZodObject<{
        msgtype: z.ZodLiteral<"m.emote">;
        body: z.ZodString;
        format: z.ZodOptional<z.ZodString>;
        formatted_body: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        body: string;
        msgtype: "m.emote";
        format?: string | undefined;
        formatted_body?: string | undefined;
    }, {
        body: string;
        msgtype: "m.emote";
        format?: string | undefined;
        formatted_body?: string | undefined;
    }>, z.ZodObject<{
        msgtype: z.ZodLiteral<"m.notice">;
        body: z.ZodString;
        format: z.ZodOptional<z.ZodString>;
        formatted_body: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        body: string;
        msgtype: "m.notice";
        format?: string | undefined;
        formatted_body?: string | undefined;
    }, {
        body: string;
        msgtype: "m.notice";
        format?: string | undefined;
        formatted_body?: string | undefined;
    }>, z.ZodObject<{
        msgtype: z.ZodLiteral<"m.image">;
        body: z.ZodString;
        info: z.ZodOptional<z.ZodObject<{
            h: z.ZodNumber;
            w: z.ZodNumber;
            mimetype: z.ZodString;
            size: z.ZodNumber;
            thumbnail_info: z.ZodOptional<z.ZodObject<{
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
            }>>;
            thumbnail_url: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            h: number;
            w: number;
            mimetype: string;
            size: number;
            thumbnail_info?: {
                h?: number | undefined;
                w?: number | undefined;
                mimetype?: string | undefined;
                size?: number | undefined;
            } | undefined;
            thumbnail_url?: string | undefined;
        }, {
            h: number;
            w: number;
            mimetype: string;
            size: number;
            thumbnail_info?: {
                h?: number | undefined;
                w?: number | undefined;
                mimetype?: string | undefined;
                size?: number | undefined;
            } | undefined;
            thumbnail_url?: string | undefined;
        }>>;
        url: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        body: string;
        msgtype: "m.image";
        info?: {
            h: number;
            w: number;
            mimetype: string;
            size: number;
            thumbnail_info?: {
                h?: number | undefined;
                w?: number | undefined;
                mimetype?: string | undefined;
                size?: number | undefined;
            } | undefined;
            thumbnail_url?: string | undefined;
        } | undefined;
        url?: string | undefined;
    }, {
        body: string;
        msgtype: "m.image";
        info?: {
            h: number;
            w: number;
            mimetype: string;
            size: number;
            thumbnail_info?: {
                h?: number | undefined;
                w?: number | undefined;
                mimetype?: string | undefined;
                size?: number | undefined;
            } | undefined;
            thumbnail_url?: string | undefined;
        } | undefined;
        url?: string | undefined;
    }>, z.ZodObject<{
        msgtype: z.ZodLiteral<"m.file">;
        body: z.ZodString;
        filename: z.ZodString;
        info: z.ZodOptional<z.ZodObject<{
            mimetype: z.ZodOptional<z.ZodString>;
            size: z.ZodOptional<z.ZodNumber>;
            thumbnail_info: z.ZodOptional<z.ZodObject<{
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
            }>>;
            thumbnail_url: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            mimetype?: string | undefined;
            size?: number | undefined;
            thumbnail_info?: {
                h?: number | undefined;
                w?: number | undefined;
                mimetype?: string | undefined;
                size?: number | undefined;
            } | undefined;
            thumbnail_url?: string | undefined;
        }, {
            mimetype?: string | undefined;
            size?: number | undefined;
            thumbnail_info?: {
                h?: number | undefined;
                w?: number | undefined;
                mimetype?: string | undefined;
                size?: number | undefined;
            } | undefined;
            thumbnail_url?: string | undefined;
        }>>;
        url: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        body: string;
        msgtype: "m.file";
        filename: string;
        info?: {
            mimetype?: string | undefined;
            size?: number | undefined;
            thumbnail_info?: {
                h?: number | undefined;
                w?: number | undefined;
                mimetype?: string | undefined;
                size?: number | undefined;
            } | undefined;
            thumbnail_url?: string | undefined;
        } | undefined;
        url?: string | undefined;
    }, {
        body: string;
        msgtype: "m.file";
        filename: string;
        info?: {
            mimetype?: string | undefined;
            size?: number | undefined;
            thumbnail_info?: {
                h?: number | undefined;
                w?: number | undefined;
                mimetype?: string | undefined;
                size?: number | undefined;
            } | undefined;
            thumbnail_url?: string | undefined;
        } | undefined;
        url?: string | undefined;
    }>, z.ZodObject<{
        msgtype: z.ZodLiteral<"m.audio">;
        body: z.ZodString;
        info: z.ZodOptional<z.ZodObject<{
            duration: z.ZodOptional<z.ZodNumber>;
            mimetype: z.ZodOptional<z.ZodString>;
            size: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            mimetype?: string | undefined;
            size?: number | undefined;
            duration?: number | undefined;
        }, {
            mimetype?: string | undefined;
            size?: number | undefined;
            duration?: number | undefined;
        }>>;
        url: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        body: string;
        msgtype: "m.audio";
        info?: {
            mimetype?: string | undefined;
            size?: number | undefined;
            duration?: number | undefined;
        } | undefined;
        url?: string | undefined;
    }, {
        body: string;
        msgtype: "m.audio";
        info?: {
            mimetype?: string | undefined;
            size?: number | undefined;
            duration?: number | undefined;
        } | undefined;
        url?: string | undefined;
    }>, z.ZodObject<{
        msgtype: z.ZodLiteral<"m.location">;
        body: z.ZodString;
        info: z.ZodOptional<z.ZodObject<{
            thumbnail_info: z.ZodOptional<z.ZodObject<{
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
            }>>;
            thumbnail_url: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            thumbnail_info?: {
                h?: number | undefined;
                w?: number | undefined;
                mimetype?: string | undefined;
                size?: number | undefined;
            } | undefined;
            thumbnail_url?: string | undefined;
        }, {
            thumbnail_info?: {
                h?: number | undefined;
                w?: number | undefined;
                mimetype?: string | undefined;
                size?: number | undefined;
            } | undefined;
            thumbnail_url?: string | undefined;
        }>>;
        geo_uri: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        body: string;
        msgtype: "m.location";
        geo_uri: string;
        info?: {
            thumbnail_info?: {
                h?: number | undefined;
                w?: number | undefined;
                mimetype?: string | undefined;
                size?: number | undefined;
            } | undefined;
            thumbnail_url?: string | undefined;
        } | undefined;
    }, {
        body: string;
        msgtype: "m.location";
        geo_uri: string;
        info?: {
            thumbnail_info?: {
                h?: number | undefined;
                w?: number | undefined;
                mimetype?: string | undefined;
                size?: number | undefined;
            } | undefined;
            thumbnail_url?: string | undefined;
        } | undefined;
    }>, z.ZodObject<{
        msgtype: z.ZodLiteral<"m.video">;
        body: z.ZodString;
        info: z.ZodOptional<z.ZodObject<{
            duration: z.ZodOptional<z.ZodNumber>;
            h: z.ZodOptional<z.ZodNumber>;
            mimetype: z.ZodOptional<z.ZodString>;
            size: z.ZodOptional<z.ZodNumber>;
            thumbnail_info: z.ZodOptional<z.ZodObject<{
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
            }>>;
            thumbnail_url: z.ZodOptional<z.ZodString>;
            w: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            h?: number | undefined;
            w?: number | undefined;
            mimetype?: string | undefined;
            size?: number | undefined;
            thumbnail_info?: {
                h?: number | undefined;
                w?: number | undefined;
                mimetype?: string | undefined;
                size?: number | undefined;
            } | undefined;
            thumbnail_url?: string | undefined;
            duration?: number | undefined;
        }, {
            h?: number | undefined;
            w?: number | undefined;
            mimetype?: string | undefined;
            size?: number | undefined;
            thumbnail_info?: {
                h?: number | undefined;
                w?: number | undefined;
                mimetype?: string | undefined;
                size?: number | undefined;
            } | undefined;
            thumbnail_url?: string | undefined;
            duration?: number | undefined;
        }>>;
        url: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        body: string;
        msgtype: "m.video";
        info?: {
            h?: number | undefined;
            w?: number | undefined;
            mimetype?: string | undefined;
            size?: number | undefined;
            thumbnail_info?: {
                h?: number | undefined;
                w?: number | undefined;
                mimetype?: string | undefined;
                size?: number | undefined;
            } | undefined;
            thumbnail_url?: string | undefined;
            duration?: number | undefined;
        } | undefined;
        url?: string | undefined;
    }, {
        body: string;
        msgtype: "m.video";
        info?: {
            h?: number | undefined;
            w?: number | undefined;
            mimetype?: string | undefined;
            size?: number | undefined;
            thumbnail_info?: {
                h?: number | undefined;
                w?: number | undefined;
                mimetype?: string | undefined;
                size?: number | undefined;
            } | undefined;
            thumbnail_url?: string | undefined;
            duration?: number | undefined;
        } | undefined;
        url?: string | undefined;
    }>, z.ZodObject<{
        msgtype: z.ZodLiteral<"m.key.verification.request">;
        body: z.ZodOptional<z.ZodString>;
        format: z.ZodOptional<z.ZodString>;
        formatted_body: z.ZodOptional<z.ZodString>;
        from_device: z.ZodString;
        methods: z.ZodArray<z.ZodString, "many">;
        timestamp: z.ZodNumber;
        transaction_id: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        transaction_id: string;
        msgtype: "m.key.verification.request";
        from_device: string;
        methods: string[];
        timestamp: number;
        body?: string | undefined;
        format?: string | undefined;
        formatted_body?: string | undefined;
    }, {
        transaction_id: string;
        msgtype: "m.key.verification.request";
        from_device: string;
        methods: string[];
        timestamp: number;
        body?: string | undefined;
        format?: string | undefined;
        formatted_body?: string | undefined;
    }>, z.ZodObject<{
        msgtype: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        msgtype: string;
    }, {
        msgtype: string;
    }>]>, z.ZodObject<{
        ban: z.ZodOptional<z.ZodNumber>;
        events: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
        events_default: z.ZodOptional<z.ZodNumber>;
        invite: z.ZodOptional<z.ZodNumber>;
        kick: z.ZodOptional<z.ZodNumber>;
        redact: z.ZodOptional<z.ZodNumber>;
        state_default: z.ZodOptional<z.ZodNumber>;
        users: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
        users_default: z.ZodOptional<z.ZodNumber>;
        notifications: z.ZodOptional<z.ZodObject<{
            room: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            room: number;
        }, {
            room: number;
        }>>;
    }, "strip", z.ZodTypeAny, {
        users?: Record<string, number> | undefined;
        ban?: number | undefined;
        events?: Record<string, number> | undefined;
        events_default?: number | undefined;
        invite?: number | undefined;
        kick?: number | undefined;
        redact?: number | undefined;
        state_default?: number | undefined;
        users_default?: number | undefined;
        notifications?: {
            room: number;
        } | undefined;
    }, {
        users?: Record<string, number> | undefined;
        ban?: number | undefined;
        events?: Record<string, number> | undefined;
        events_default?: number | undefined;
        invite?: number | undefined;
        kick?: number | undefined;
        redact?: number | undefined;
        state_default?: number | undefined;
        users_default?: number | undefined;
        notifications?: {
            room: number;
        } | undefined;
    }>]>>;
    "m.relations": z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>, z.ZodArray<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>, "many">]>>>;
}, "strip", z.ZodTypeAny, {
    age?: number | undefined;
    transaction_id?: string | undefined;
    prev_content?: {
        body: string;
        msgtype: string;
        "m.relates_to"?: {
            rel_type: string;
            event_id: string;
        } | undefined;
    } | {
        body: string;
        msgtype: "m.text";
        format?: string | undefined;
        formatted_body?: string | undefined;
    } | {
        body: string;
        msgtype: "m.emote";
        format?: string | undefined;
        formatted_body?: string | undefined;
    } | {
        body: string;
        msgtype: "m.notice";
        format?: string | undefined;
        formatted_body?: string | undefined;
    } | {
        body: string;
        msgtype: "m.image";
        info?: {
            h: number;
            w: number;
            mimetype: string;
            size: number;
            thumbnail_info?: {
                h?: number | undefined;
                w?: number | undefined;
                mimetype?: string | undefined;
                size?: number | undefined;
            } | undefined;
            thumbnail_url?: string | undefined;
        } | undefined;
        url?: string | undefined;
    } | {
        body: string;
        msgtype: "m.file";
        filename: string;
        info?: {
            mimetype?: string | undefined;
            size?: number | undefined;
            thumbnail_info?: {
                h?: number | undefined;
                w?: number | undefined;
                mimetype?: string | undefined;
                size?: number | undefined;
            } | undefined;
            thumbnail_url?: string | undefined;
        } | undefined;
        url?: string | undefined;
    } | {
        body: string;
        msgtype: "m.audio";
        info?: {
            mimetype?: string | undefined;
            size?: number | undefined;
            duration?: number | undefined;
        } | undefined;
        url?: string | undefined;
    } | {
        body: string;
        msgtype: "m.location";
        geo_uri: string;
        info?: {
            thumbnail_info?: {
                h?: number | undefined;
                w?: number | undefined;
                mimetype?: string | undefined;
                size?: number | undefined;
            } | undefined;
            thumbnail_url?: string | undefined;
        } | undefined;
    } | {
        body: string;
        msgtype: "m.video";
        info?: {
            h?: number | undefined;
            w?: number | undefined;
            mimetype?: string | undefined;
            size?: number | undefined;
            thumbnail_info?: {
                h?: number | undefined;
                w?: number | undefined;
                mimetype?: string | undefined;
                size?: number | undefined;
            } | undefined;
            thumbnail_url?: string | undefined;
            duration?: number | undefined;
        } | undefined;
        url?: string | undefined;
    } | {
        transaction_id: string;
        msgtype: "m.key.verification.request";
        from_device: string;
        methods: string[];
        timestamp: number;
        body?: string | undefined;
        format?: string | undefined;
        formatted_body?: string | undefined;
    } | {
        msgtype: string;
    } | {
        users?: Record<string, number> | undefined;
        ban?: number | undefined;
        events?: Record<string, number> | undefined;
        events_default?: number | undefined;
        invite?: number | undefined;
        kick?: number | undefined;
        redact?: number | undefined;
        state_default?: number | undefined;
        users_default?: number | undefined;
        notifications?: {
            room: number;
        } | undefined;
    } | undefined;
    "m.relations"?: Record<string, {} | {}[]> | undefined;
}, {
    age?: number | undefined;
    transaction_id?: string | undefined;
    prev_content?: {
        body: string;
        msgtype: string;
        "m.relates_to"?: {
            rel_type: string;
            event_id: string;
        } | undefined;
    } | {
        body: string;
        msgtype: "m.text";
        format?: string | undefined;
        formatted_body?: string | undefined;
    } | {
        body: string;
        msgtype: "m.emote";
        format?: string | undefined;
        formatted_body?: string | undefined;
    } | {
        body: string;
        msgtype: "m.notice";
        format?: string | undefined;
        formatted_body?: string | undefined;
    } | {
        body: string;
        msgtype: "m.image";
        info?: {
            h: number;
            w: number;
            mimetype: string;
            size: number;
            thumbnail_info?: {
                h?: number | undefined;
                w?: number | undefined;
                mimetype?: string | undefined;
                size?: number | undefined;
            } | undefined;
            thumbnail_url?: string | undefined;
        } | undefined;
        url?: string | undefined;
    } | {
        body: string;
        msgtype: "m.file";
        filename: string;
        info?: {
            mimetype?: string | undefined;
            size?: number | undefined;
            thumbnail_info?: {
                h?: number | undefined;
                w?: number | undefined;
                mimetype?: string | undefined;
                size?: number | undefined;
            } | undefined;
            thumbnail_url?: string | undefined;
        } | undefined;
        url?: string | undefined;
    } | {
        body: string;
        msgtype: "m.audio";
        info?: {
            mimetype?: string | undefined;
            size?: number | undefined;
            duration?: number | undefined;
        } | undefined;
        url?: string | undefined;
    } | {
        body: string;
        msgtype: "m.location";
        geo_uri: string;
        info?: {
            thumbnail_info?: {
                h?: number | undefined;
                w?: number | undefined;
                mimetype?: string | undefined;
                size?: number | undefined;
            } | undefined;
            thumbnail_url?: string | undefined;
        } | undefined;
    } | {
        body: string;
        msgtype: "m.video";
        info?: {
            h?: number | undefined;
            w?: number | undefined;
            mimetype?: string | undefined;
            size?: number | undefined;
            thumbnail_info?: {
                h?: number | undefined;
                w?: number | undefined;
                mimetype?: string | undefined;
                size?: number | undefined;
            } | undefined;
            thumbnail_url?: string | undefined;
            duration?: number | undefined;
        } | undefined;
        url?: string | undefined;
    } | {
        transaction_id: string;
        msgtype: "m.key.verification.request";
        from_device: string;
        methods: string[];
        timestamp: number;
        body?: string | undefined;
        format?: string | undefined;
        formatted_body?: string | undefined;
    } | {
        msgtype: string;
    } | {
        users?: Record<string, number> | undefined;
        ban?: number | undefined;
        events?: Record<string, number> | undefined;
        events_default?: number | undefined;
        invite?: number | undefined;
        kick?: number | undefined;
        redact?: number | undefined;
        state_default?: number | undefined;
        users_default?: number | undefined;
        notifications?: {
            room: number;
        } | undefined;
    } | undefined;
    "m.relations"?: Record<string, {} | {}[]> | undefined;
}>;
export type UnsignedDataOutput = z.infer<typeof UnsignedDataBaseSchema> & {
    redacted_because: ClientEventBaseOutput;
};
export declare const UnsignedDataSchema: z.ZodType<UnsignedDataOutput>;
export declare const ClientEventWithUnsignedSchema: z.ZodObject<z.objectUtil.extendShape<{
    type: z.ZodString;
    content: z.ZodUnknown;
    sender: z.ZodString;
    room_id: z.ZodString;
    event_id: z.ZodString;
    state_key: z.ZodOptional<z.ZodString>;
    origin_server_ts: z.ZodNumber;
    age: z.ZodOptional<z.ZodNumber>;
    replaces_state: z.ZodOptional<z.ZodString>;
    prev_content: z.ZodOptional<z.ZodUnion<[z.ZodObject<{
        body: z.ZodString;
        msgtype: z.ZodString;
        "m.relates_to": z.ZodOptional<z.ZodObject<{
            event_id: z.ZodString;
            rel_type: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            rel_type: string;
            event_id: string;
        }, {
            rel_type: string;
            event_id: string;
        }>>;
    }, "strip", z.ZodTypeAny, {
        body: string;
        msgtype: string;
        "m.relates_to"?: {
            rel_type: string;
            event_id: string;
        } | undefined;
    }, {
        body: string;
        msgtype: string;
        "m.relates_to"?: {
            rel_type: string;
            event_id: string;
        } | undefined;
    }>, z.ZodUnion<[z.ZodObject<{
        msgtype: z.ZodLiteral<"m.text">;
        body: z.ZodString;
        format: z.ZodOptional<z.ZodString>;
        formatted_body: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        body: string;
        msgtype: "m.text";
        format?: string | undefined;
        formatted_body?: string | undefined;
    }, {
        body: string;
        msgtype: "m.text";
        format?: string | undefined;
        formatted_body?: string | undefined;
    }>, z.ZodObject<{
        msgtype: z.ZodLiteral<"m.emote">;
        body: z.ZodString;
        format: z.ZodOptional<z.ZodString>;
        formatted_body: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        body: string;
        msgtype: "m.emote";
        format?: string | undefined;
        formatted_body?: string | undefined;
    }, {
        body: string;
        msgtype: "m.emote";
        format?: string | undefined;
        formatted_body?: string | undefined;
    }>, z.ZodObject<{
        msgtype: z.ZodLiteral<"m.notice">;
        body: z.ZodString;
        format: z.ZodOptional<z.ZodString>;
        formatted_body: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        body: string;
        msgtype: "m.notice";
        format?: string | undefined;
        formatted_body?: string | undefined;
    }, {
        body: string;
        msgtype: "m.notice";
        format?: string | undefined;
        formatted_body?: string | undefined;
    }>, z.ZodObject<{
        msgtype: z.ZodLiteral<"m.image">;
        body: z.ZodString;
        info: z.ZodOptional<z.ZodObject<{
            h: z.ZodNumber;
            w: z.ZodNumber;
            mimetype: z.ZodString;
            size: z.ZodNumber;
            thumbnail_info: z.ZodOptional<z.ZodObject<{
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
            }>>;
            thumbnail_url: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            h: number;
            w: number;
            mimetype: string;
            size: number;
            thumbnail_info?: {
                h?: number | undefined;
                w?: number | undefined;
                mimetype?: string | undefined;
                size?: number | undefined;
            } | undefined;
            thumbnail_url?: string | undefined;
        }, {
            h: number;
            w: number;
            mimetype: string;
            size: number;
            thumbnail_info?: {
                h?: number | undefined;
                w?: number | undefined;
                mimetype?: string | undefined;
                size?: number | undefined;
            } | undefined;
            thumbnail_url?: string | undefined;
        }>>;
        url: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        body: string;
        msgtype: "m.image";
        info?: {
            h: number;
            w: number;
            mimetype: string;
            size: number;
            thumbnail_info?: {
                h?: number | undefined;
                w?: number | undefined;
                mimetype?: string | undefined;
                size?: number | undefined;
            } | undefined;
            thumbnail_url?: string | undefined;
        } | undefined;
        url?: string | undefined;
    }, {
        body: string;
        msgtype: "m.image";
        info?: {
            h: number;
            w: number;
            mimetype: string;
            size: number;
            thumbnail_info?: {
                h?: number | undefined;
                w?: number | undefined;
                mimetype?: string | undefined;
                size?: number | undefined;
            } | undefined;
            thumbnail_url?: string | undefined;
        } | undefined;
        url?: string | undefined;
    }>, z.ZodObject<{
        msgtype: z.ZodLiteral<"m.file">;
        body: z.ZodString;
        filename: z.ZodString;
        info: z.ZodOptional<z.ZodObject<{
            mimetype: z.ZodOptional<z.ZodString>;
            size: z.ZodOptional<z.ZodNumber>;
            thumbnail_info: z.ZodOptional<z.ZodObject<{
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
            }>>;
            thumbnail_url: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            mimetype?: string | undefined;
            size?: number | undefined;
            thumbnail_info?: {
                h?: number | undefined;
                w?: number | undefined;
                mimetype?: string | undefined;
                size?: number | undefined;
            } | undefined;
            thumbnail_url?: string | undefined;
        }, {
            mimetype?: string | undefined;
            size?: number | undefined;
            thumbnail_info?: {
                h?: number | undefined;
                w?: number | undefined;
                mimetype?: string | undefined;
                size?: number | undefined;
            } | undefined;
            thumbnail_url?: string | undefined;
        }>>;
        url: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        body: string;
        msgtype: "m.file";
        filename: string;
        info?: {
            mimetype?: string | undefined;
            size?: number | undefined;
            thumbnail_info?: {
                h?: number | undefined;
                w?: number | undefined;
                mimetype?: string | undefined;
                size?: number | undefined;
            } | undefined;
            thumbnail_url?: string | undefined;
        } | undefined;
        url?: string | undefined;
    }, {
        body: string;
        msgtype: "m.file";
        filename: string;
        info?: {
            mimetype?: string | undefined;
            size?: number | undefined;
            thumbnail_info?: {
                h?: number | undefined;
                w?: number | undefined;
                mimetype?: string | undefined;
                size?: number | undefined;
            } | undefined;
            thumbnail_url?: string | undefined;
        } | undefined;
        url?: string | undefined;
    }>, z.ZodObject<{
        msgtype: z.ZodLiteral<"m.audio">;
        body: z.ZodString;
        info: z.ZodOptional<z.ZodObject<{
            duration: z.ZodOptional<z.ZodNumber>;
            mimetype: z.ZodOptional<z.ZodString>;
            size: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            mimetype?: string | undefined;
            size?: number | undefined;
            duration?: number | undefined;
        }, {
            mimetype?: string | undefined;
            size?: number | undefined;
            duration?: number | undefined;
        }>>;
        url: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        body: string;
        msgtype: "m.audio";
        info?: {
            mimetype?: string | undefined;
            size?: number | undefined;
            duration?: number | undefined;
        } | undefined;
        url?: string | undefined;
    }, {
        body: string;
        msgtype: "m.audio";
        info?: {
            mimetype?: string | undefined;
            size?: number | undefined;
            duration?: number | undefined;
        } | undefined;
        url?: string | undefined;
    }>, z.ZodObject<{
        msgtype: z.ZodLiteral<"m.location">;
        body: z.ZodString;
        info: z.ZodOptional<z.ZodObject<{
            thumbnail_info: z.ZodOptional<z.ZodObject<{
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
            }>>;
            thumbnail_url: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            thumbnail_info?: {
                h?: number | undefined;
                w?: number | undefined;
                mimetype?: string | undefined;
                size?: number | undefined;
            } | undefined;
            thumbnail_url?: string | undefined;
        }, {
            thumbnail_info?: {
                h?: number | undefined;
                w?: number | undefined;
                mimetype?: string | undefined;
                size?: number | undefined;
            } | undefined;
            thumbnail_url?: string | undefined;
        }>>;
        geo_uri: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        body: string;
        msgtype: "m.location";
        geo_uri: string;
        info?: {
            thumbnail_info?: {
                h?: number | undefined;
                w?: number | undefined;
                mimetype?: string | undefined;
                size?: number | undefined;
            } | undefined;
            thumbnail_url?: string | undefined;
        } | undefined;
    }, {
        body: string;
        msgtype: "m.location";
        geo_uri: string;
        info?: {
            thumbnail_info?: {
                h?: number | undefined;
                w?: number | undefined;
                mimetype?: string | undefined;
                size?: number | undefined;
            } | undefined;
            thumbnail_url?: string | undefined;
        } | undefined;
    }>, z.ZodObject<{
        msgtype: z.ZodLiteral<"m.video">;
        body: z.ZodString;
        info: z.ZodOptional<z.ZodObject<{
            duration: z.ZodOptional<z.ZodNumber>;
            h: z.ZodOptional<z.ZodNumber>;
            mimetype: z.ZodOptional<z.ZodString>;
            size: z.ZodOptional<z.ZodNumber>;
            thumbnail_info: z.ZodOptional<z.ZodObject<{
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
            }>>;
            thumbnail_url: z.ZodOptional<z.ZodString>;
            w: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            h?: number | undefined;
            w?: number | undefined;
            mimetype?: string | undefined;
            size?: number | undefined;
            thumbnail_info?: {
                h?: number | undefined;
                w?: number | undefined;
                mimetype?: string | undefined;
                size?: number | undefined;
            } | undefined;
            thumbnail_url?: string | undefined;
            duration?: number | undefined;
        }, {
            h?: number | undefined;
            w?: number | undefined;
            mimetype?: string | undefined;
            size?: number | undefined;
            thumbnail_info?: {
                h?: number | undefined;
                w?: number | undefined;
                mimetype?: string | undefined;
                size?: number | undefined;
            } | undefined;
            thumbnail_url?: string | undefined;
            duration?: number | undefined;
        }>>;
        url: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        body: string;
        msgtype: "m.video";
        info?: {
            h?: number | undefined;
            w?: number | undefined;
            mimetype?: string | undefined;
            size?: number | undefined;
            thumbnail_info?: {
                h?: number | undefined;
                w?: number | undefined;
                mimetype?: string | undefined;
                size?: number | undefined;
            } | undefined;
            thumbnail_url?: string | undefined;
            duration?: number | undefined;
        } | undefined;
        url?: string | undefined;
    }, {
        body: string;
        msgtype: "m.video";
        info?: {
            h?: number | undefined;
            w?: number | undefined;
            mimetype?: string | undefined;
            size?: number | undefined;
            thumbnail_info?: {
                h?: number | undefined;
                w?: number | undefined;
                mimetype?: string | undefined;
                size?: number | undefined;
            } | undefined;
            thumbnail_url?: string | undefined;
            duration?: number | undefined;
        } | undefined;
        url?: string | undefined;
    }>, z.ZodObject<{
        msgtype: z.ZodLiteral<"m.key.verification.request">;
        body: z.ZodOptional<z.ZodString>;
        format: z.ZodOptional<z.ZodString>;
        formatted_body: z.ZodOptional<z.ZodString>;
        from_device: z.ZodString;
        methods: z.ZodArray<z.ZodString, "many">;
        timestamp: z.ZodNumber;
        transaction_id: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        transaction_id: string;
        msgtype: "m.key.verification.request";
        from_device: string;
        methods: string[];
        timestamp: number;
        body?: string | undefined;
        format?: string | undefined;
        formatted_body?: string | undefined;
    }, {
        transaction_id: string;
        msgtype: "m.key.verification.request";
        from_device: string;
        methods: string[];
        timestamp: number;
        body?: string | undefined;
        format?: string | undefined;
        formatted_body?: string | undefined;
    }>, z.ZodObject<{
        msgtype: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        msgtype: string;
    }, {
        msgtype: string;
    }>]>, z.ZodObject<{
        ban: z.ZodOptional<z.ZodNumber>;
        events: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
        events_default: z.ZodOptional<z.ZodNumber>;
        invite: z.ZodOptional<z.ZodNumber>;
        kick: z.ZodOptional<z.ZodNumber>;
        redact: z.ZodOptional<z.ZodNumber>;
        state_default: z.ZodOptional<z.ZodNumber>;
        users: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
        users_default: z.ZodOptional<z.ZodNumber>;
        notifications: z.ZodOptional<z.ZodObject<{
            room: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            room: number;
        }, {
            room: number;
        }>>;
    }, "strip", z.ZodTypeAny, {
        users?: Record<string, number> | undefined;
        ban?: number | undefined;
        events?: Record<string, number> | undefined;
        events_default?: number | undefined;
        invite?: number | undefined;
        kick?: number | undefined;
        redact?: number | undefined;
        state_default?: number | undefined;
        users_default?: number | undefined;
        notifications?: {
            room: number;
        } | undefined;
    }, {
        users?: Record<string, number> | undefined;
        ban?: number | undefined;
        events?: Record<string, number> | undefined;
        events_default?: number | undefined;
        invite?: number | undefined;
        kick?: number | undefined;
        redact?: number | undefined;
        state_default?: number | undefined;
        users_default?: number | undefined;
        notifications?: {
            room: number;
        } | undefined;
    }>]>>;
    user_id: z.ZodOptional<z.ZodString>;
}, {
    unsigned: z.ZodType<UnsignedDataOutput, z.ZodTypeDef, UnsignedDataOutput>;
}>, "strip", z.ZodTypeAny, {
    type: string;
    event_id: string;
    sender: string;
    room_id: string;
    origin_server_ts: number;
    unsigned: {
        age?: number | undefined;
        transaction_id?: string | undefined;
        prev_content?: {
            body: string;
            msgtype: string;
            "m.relates_to"?: {
                rel_type: string;
                event_id: string;
            } | undefined;
        } | {
            body: string;
            msgtype: "m.text";
            format?: string | undefined;
            formatted_body?: string | undefined;
        } | {
            body: string;
            msgtype: "m.emote";
            format?: string | undefined;
            formatted_body?: string | undefined;
        } | {
            body: string;
            msgtype: "m.notice";
            format?: string | undefined;
            formatted_body?: string | undefined;
        } | {
            body: string;
            msgtype: "m.image";
            info?: {
                h: number;
                w: number;
                mimetype: string;
                size: number;
                thumbnail_info?: {
                    h?: number | undefined;
                    w?: number | undefined;
                    mimetype?: string | undefined;
                    size?: number | undefined;
                } | undefined;
                thumbnail_url?: string | undefined;
            } | undefined;
            url?: string | undefined;
        } | {
            body: string;
            msgtype: "m.file";
            filename: string;
            info?: {
                mimetype?: string | undefined;
                size?: number | undefined;
                thumbnail_info?: {
                    h?: number | undefined;
                    w?: number | undefined;
                    mimetype?: string | undefined;
                    size?: number | undefined;
                } | undefined;
                thumbnail_url?: string | undefined;
            } | undefined;
            url?: string | undefined;
        } | {
            body: string;
            msgtype: "m.audio";
            info?: {
                mimetype?: string | undefined;
                size?: number | undefined;
                duration?: number | undefined;
            } | undefined;
            url?: string | undefined;
        } | {
            body: string;
            msgtype: "m.location";
            geo_uri: string;
            info?: {
                thumbnail_info?: {
                    h?: number | undefined;
                    w?: number | undefined;
                    mimetype?: string | undefined;
                    size?: number | undefined;
                } | undefined;
                thumbnail_url?: string | undefined;
            } | undefined;
        } | {
            body: string;
            msgtype: "m.video";
            info?: {
                h?: number | undefined;
                w?: number | undefined;
                mimetype?: string | undefined;
                size?: number | undefined;
                thumbnail_info?: {
                    h?: number | undefined;
                    w?: number | undefined;
                    mimetype?: string | undefined;
                    size?: number | undefined;
                } | undefined;
                thumbnail_url?: string | undefined;
                duration?: number | undefined;
            } | undefined;
            url?: string | undefined;
        } | {
            transaction_id: string;
            msgtype: "m.key.verification.request";
            from_device: string;
            methods: string[];
            timestamp: number;
            body?: string | undefined;
            format?: string | undefined;
            formatted_body?: string | undefined;
        } | {
            msgtype: string;
        } | {
            users?: Record<string, number> | undefined;
            ban?: number | undefined;
            events?: Record<string, number> | undefined;
            events_default?: number | undefined;
            invite?: number | undefined;
            kick?: number | undefined;
            redact?: number | undefined;
            state_default?: number | undefined;
            users_default?: number | undefined;
            notifications?: {
                room: number;
            } | undefined;
        } | undefined;
        "m.relations"?: Record<string, {} | {}[]> | undefined;
    } & {
        redacted_because: ClientEventBaseOutput;
    };
    age?: number | undefined;
    prev_content?: {
        body: string;
        msgtype: string;
        "m.relates_to"?: {
            rel_type: string;
            event_id: string;
        } | undefined;
    } | {
        body: string;
        msgtype: "m.text";
        format?: string | undefined;
        formatted_body?: string | undefined;
    } | {
        body: string;
        msgtype: "m.emote";
        format?: string | undefined;
        formatted_body?: string | undefined;
    } | {
        body: string;
        msgtype: "m.notice";
        format?: string | undefined;
        formatted_body?: string | undefined;
    } | {
        body: string;
        msgtype: "m.image";
        info?: {
            h: number;
            w: number;
            mimetype: string;
            size: number;
            thumbnail_info?: {
                h?: number | undefined;
                w?: number | undefined;
                mimetype?: string | undefined;
                size?: number | undefined;
            } | undefined;
            thumbnail_url?: string | undefined;
        } | undefined;
        url?: string | undefined;
    } | {
        body: string;
        msgtype: "m.file";
        filename: string;
        info?: {
            mimetype?: string | undefined;
            size?: number | undefined;
            thumbnail_info?: {
                h?: number | undefined;
                w?: number | undefined;
                mimetype?: string | undefined;
                size?: number | undefined;
            } | undefined;
            thumbnail_url?: string | undefined;
        } | undefined;
        url?: string | undefined;
    } | {
        body: string;
        msgtype: "m.audio";
        info?: {
            mimetype?: string | undefined;
            size?: number | undefined;
            duration?: number | undefined;
        } | undefined;
        url?: string | undefined;
    } | {
        body: string;
        msgtype: "m.location";
        geo_uri: string;
        info?: {
            thumbnail_info?: {
                h?: number | undefined;
                w?: number | undefined;
                mimetype?: string | undefined;
                size?: number | undefined;
            } | undefined;
            thumbnail_url?: string | undefined;
        } | undefined;
    } | {
        body: string;
        msgtype: "m.video";
        info?: {
            h?: number | undefined;
            w?: number | undefined;
            mimetype?: string | undefined;
            size?: number | undefined;
            thumbnail_info?: {
                h?: number | undefined;
                w?: number | undefined;
                mimetype?: string | undefined;
                size?: number | undefined;
            } | undefined;
            thumbnail_url?: string | undefined;
            duration?: number | undefined;
        } | undefined;
        url?: string | undefined;
    } | {
        transaction_id: string;
        msgtype: "m.key.verification.request";
        from_device: string;
        methods: string[];
        timestamp: number;
        body?: string | undefined;
        format?: string | undefined;
        formatted_body?: string | undefined;
    } | {
        msgtype: string;
    } | {
        users?: Record<string, number> | undefined;
        ban?: number | undefined;
        events?: Record<string, number> | undefined;
        events_default?: number | undefined;
        invite?: number | undefined;
        kick?: number | undefined;
        redact?: number | undefined;
        state_default?: number | undefined;
        users_default?: number | undefined;
        notifications?: {
            room: number;
        } | undefined;
    } | undefined;
    content?: unknown;
    state_key?: string | undefined;
    replaces_state?: string | undefined;
    user_id?: string | undefined;
}, {
    type: string;
    event_id: string;
    sender: string;
    room_id: string;
    origin_server_ts: number;
    unsigned: {
        age?: number | undefined;
        transaction_id?: string | undefined;
        prev_content?: {
            body: string;
            msgtype: string;
            "m.relates_to"?: {
                rel_type: string;
                event_id: string;
            } | undefined;
        } | {
            body: string;
            msgtype: "m.text";
            format?: string | undefined;
            formatted_body?: string | undefined;
        } | {
            body: string;
            msgtype: "m.emote";
            format?: string | undefined;
            formatted_body?: string | undefined;
        } | {
            body: string;
            msgtype: "m.notice";
            format?: string | undefined;
            formatted_body?: string | undefined;
        } | {
            body: string;
            msgtype: "m.image";
            info?: {
                h: number;
                w: number;
                mimetype: string;
                size: number;
                thumbnail_info?: {
                    h?: number | undefined;
                    w?: number | undefined;
                    mimetype?: string | undefined;
                    size?: number | undefined;
                } | undefined;
                thumbnail_url?: string | undefined;
            } | undefined;
            url?: string | undefined;
        } | {
            body: string;
            msgtype: "m.file";
            filename: string;
            info?: {
                mimetype?: string | undefined;
                size?: number | undefined;
                thumbnail_info?: {
                    h?: number | undefined;
                    w?: number | undefined;
                    mimetype?: string | undefined;
                    size?: number | undefined;
                } | undefined;
                thumbnail_url?: string | undefined;
            } | undefined;
            url?: string | undefined;
        } | {
            body: string;
            msgtype: "m.audio";
            info?: {
                mimetype?: string | undefined;
                size?: number | undefined;
                duration?: number | undefined;
            } | undefined;
            url?: string | undefined;
        } | {
            body: string;
            msgtype: "m.location";
            geo_uri: string;
            info?: {
                thumbnail_info?: {
                    h?: number | undefined;
                    w?: number | undefined;
                    mimetype?: string | undefined;
                    size?: number | undefined;
                } | undefined;
                thumbnail_url?: string | undefined;
            } | undefined;
        } | {
            body: string;
            msgtype: "m.video";
            info?: {
                h?: number | undefined;
                w?: number | undefined;
                mimetype?: string | undefined;
                size?: number | undefined;
                thumbnail_info?: {
                    h?: number | undefined;
                    w?: number | undefined;
                    mimetype?: string | undefined;
                    size?: number | undefined;
                } | undefined;
                thumbnail_url?: string | undefined;
                duration?: number | undefined;
            } | undefined;
            url?: string | undefined;
        } | {
            transaction_id: string;
            msgtype: "m.key.verification.request";
            from_device: string;
            methods: string[];
            timestamp: number;
            body?: string | undefined;
            format?: string | undefined;
            formatted_body?: string | undefined;
        } | {
            msgtype: string;
        } | {
            users?: Record<string, number> | undefined;
            ban?: number | undefined;
            events?: Record<string, number> | undefined;
            events_default?: number | undefined;
            invite?: number | undefined;
            kick?: number | undefined;
            redact?: number | undefined;
            state_default?: number | undefined;
            users_default?: number | undefined;
            notifications?: {
                room: number;
            } | undefined;
        } | undefined;
        "m.relations"?: Record<string, {} | {}[]> | undefined;
    } & {
        redacted_because: ClientEventBaseOutput;
    };
    age?: number | undefined;
    prev_content?: {
        body: string;
        msgtype: string;
        "m.relates_to"?: {
            rel_type: string;
            event_id: string;
        } | undefined;
    } | {
        body: string;
        msgtype: "m.text";
        format?: string | undefined;
        formatted_body?: string | undefined;
    } | {
        body: string;
        msgtype: "m.emote";
        format?: string | undefined;
        formatted_body?: string | undefined;
    } | {
        body: string;
        msgtype: "m.notice";
        format?: string | undefined;
        formatted_body?: string | undefined;
    } | {
        body: string;
        msgtype: "m.image";
        info?: {
            h: number;
            w: number;
            mimetype: string;
            size: number;
            thumbnail_info?: {
                h?: number | undefined;
                w?: number | undefined;
                mimetype?: string | undefined;
                size?: number | undefined;
            } | undefined;
            thumbnail_url?: string | undefined;
        } | undefined;
        url?: string | undefined;
    } | {
        body: string;
        msgtype: "m.file";
        filename: string;
        info?: {
            mimetype?: string | undefined;
            size?: number | undefined;
            thumbnail_info?: {
                h?: number | undefined;
                w?: number | undefined;
                mimetype?: string | undefined;
                size?: number | undefined;
            } | undefined;
            thumbnail_url?: string | undefined;
        } | undefined;
        url?: string | undefined;
    } | {
        body: string;
        msgtype: "m.audio";
        info?: {
            mimetype?: string | undefined;
            size?: number | undefined;
            duration?: number | undefined;
        } | undefined;
        url?: string | undefined;
    } | {
        body: string;
        msgtype: "m.location";
        geo_uri: string;
        info?: {
            thumbnail_info?: {
                h?: number | undefined;
                w?: number | undefined;
                mimetype?: string | undefined;
                size?: number | undefined;
            } | undefined;
            thumbnail_url?: string | undefined;
        } | undefined;
    } | {
        body: string;
        msgtype: "m.video";
        info?: {
            h?: number | undefined;
            w?: number | undefined;
            mimetype?: string | undefined;
            size?: number | undefined;
            thumbnail_info?: {
                h?: number | undefined;
                w?: number | undefined;
                mimetype?: string | undefined;
                size?: number | undefined;
            } | undefined;
            thumbnail_url?: string | undefined;
            duration?: number | undefined;
        } | undefined;
        url?: string | undefined;
    } | {
        transaction_id: string;
        msgtype: "m.key.verification.request";
        from_device: string;
        methods: string[];
        timestamp: number;
        body?: string | undefined;
        format?: string | undefined;
        formatted_body?: string | undefined;
    } | {
        msgtype: string;
    } | {
        users?: Record<string, number> | undefined;
        ban?: number | undefined;
        events?: Record<string, number> | undefined;
        events_default?: number | undefined;
        invite?: number | undefined;
        kick?: number | undefined;
        redact?: number | undefined;
        state_default?: number | undefined;
        users_default?: number | undefined;
        notifications?: {
            room: number;
        } | undefined;
    } | undefined;
    content?: unknown;
    state_key?: string | undefined;
    replaces_state?: string | undefined;
    user_id?: string | undefined;
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
    invite?: string[] | undefined;
    name?: string | undefined;
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
    room_version?: string | undefined;
    initial_state?: {
        type: string;
        content: Record<string, unknown>;
        state_key?: string | undefined;
    }[] | undefined;
}, {
    invite?: string[] | undefined;
    name?: string | undefined;
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
    room_version?: string | undefined;
    initial_state?: {
        type: string;
        content: Record<string, unknown>;
        state_key?: string | undefined;
    }[] | undefined;
}>;
export type CreateRoomOptsOutput = z.infer<typeof CreateRoomOptsSchema>;
