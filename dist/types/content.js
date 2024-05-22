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
exports.ContentUnionSchema = exports.EventContentSchema = exports.PowerLevelsContentSchema = exports.RoomMessageContentSchema = exports.KeyVerificationRequestMessageContentSchema = exports.VideoMessageContentSchema = exports.LocationMessageContentSchema = exports.AudioMessageContentSchema = exports.FileMessageContentSchema = exports.ImageMessageContentSchema = exports.NoticeMessageContentSchema = exports.EmoteMessageContentSchema = exports.TextMessageContentSchema = void 0;
const types_1 = require("./types");
const z = __importStar(require("zod"));
exports.TextMessageContentSchema = z.object({
    msgtype: z.literal("m.text"),
    body: z.string(),
    format: z.optional(z.string()),
    formatted_body: z.optional(z.string()),
});
exports.EmoteMessageContentSchema = z.object({
    msgtype: z.literal("m.emote"),
    body: z.string(),
    format: z.optional(z.string()),
    formatted_body: z.optional(z.string()),
});
exports.NoticeMessageContentSchema = z.object({
    msgtype: z.literal("m.notice"),
    body: z.string(),
    format: z.optional(z.string()),
    formatted_body: z.optional(z.string()),
});
exports.ImageMessageContentSchema = z.object({
    msgtype: z.literal("m.image"),
    body: z.string(),
    info: z.optional(z.object({
        h: z.number(),
        w: z.number(),
        mimetype: z.string(),
        size: z.number(),
        thumbnail_info: z.optional(types_1.ThumbnailInfoSchema),
        thumbnail_url: z.optional(z.string()),
    })),
    url: z.optional(z.string()),
});
exports.FileMessageContentSchema = z.object({
    msgtype: z.literal("m.file"),
    body: z.string(),
    filename: z.string(),
    info: z.optional(z.object({
        mimetype: z.optional(z.string()),
        size: z.optional(z.number()),
        thumbnail_info: z.optional(types_1.ThumbnailInfoSchema),
        thumbnail_url: z.optional(z.string()),
    })),
    url: z.optional(z.string()),
});
exports.AudioMessageContentSchema = z.object({
    msgtype: z.literal("m.audio"),
    body: z.string({ invalid_type_error: "Body must be a string" }),
    info: z.optional(z.object({
        duration: z.optional(z.number({ invalid_type_error: "Duration must be a number" })),
        mimetype: z.optional(z.string({ invalid_type_error: "Mimetype must be a string" })),
        size: z.optional(z.number({ invalid_type_error: "Size must be a number" })),
    })),
    url: z.optional(z.string({ invalid_type_error: "URL must be a string" })),
});
exports.LocationMessageContentSchema = z.object({
    msgtype: z.literal("m.location"),
    body: z.string({ invalid_type_error: "Body must be a string" }),
    info: z.optional(z.object({
        thumbnail_info: z.optional(types_1.ThumbnailInfoSchema),
        thumbnail_url: z.optional(z.string({ invalid_type_error: "Thumbnail URL must be a string" })),
    })),
    geo_uri: z.string({ invalid_type_error: "Geo URI must be a string" }),
});
exports.VideoMessageContentSchema = z.object({
    msgtype: z.literal("m.video"),
    body: z.string({ invalid_type_error: "Body must be a string" }),
    info: z.optional(z.object({
        duration: z.optional(z.number({ invalid_type_error: "Duration must be a number" })),
        h: z.optional(z.number({ invalid_type_error: "Height must be a number" })),
        mimetype: z.optional(z.string({ invalid_type_error: "Mimetype must be a string" })),
        size: z.optional(z.number({ invalid_type_error: "Size must be a number" })),
        thumbnail_info: z.optional(types_1.ThumbnailInfoSchema),
        thumbnail_url: z.optional(z.string({ invalid_type_error: "Thumbnail URL must be a string" })),
        w: z.optional(z.number({ invalid_type_error: "Width must be a number" })),
    })),
    url: z.optional(z.string({ invalid_type_error: "URL must be a string" })),
});
exports.KeyVerificationRequestMessageContentSchema = z.object({
    msgtype: z.literal("m.key.verification.request"),
    body: z.optional(z.string({ invalid_type_error: "Body must be a string" })),
    format: z.optional(z.string({ invalid_type_error: "Format must be a string" })),
    formatted_body: z.optional(z.string({ invalid_type_error: "Formatted body must be a string" })),
    from_device: z.string({ invalid_type_error: "From device must be a string" }),
    methods: z.array(z.string({ invalid_type_error: "Methods must be a string" })),
    timestamp: z.number({ invalid_type_error: "Timestamp must be a number" }),
    transaction_id: z.string({
        invalid_type_error: "Transaction ID must be a string",
    }),
});
exports.RoomMessageContentSchema = z.union([
    exports.TextMessageContentSchema,
    exports.EmoteMessageContentSchema,
    exports.NoticeMessageContentSchema,
    exports.ImageMessageContentSchema,
    exports.FileMessageContentSchema,
    exports.AudioMessageContentSchema,
    exports.LocationMessageContentSchema,
    exports.VideoMessageContentSchema,
    exports.KeyVerificationRequestMessageContentSchema,
    z.object({ msgtype: z.string() }),
]);
exports.PowerLevelsContentSchema = z
    .object({
    ban: z.number({ invalid_type_error: "Ban must be a number" }),
    events: z.record(z.string({
        invalid_type_error: "power level event type must be a string",
    }), z.number({ invalid_type_error: "power level must be a number" })),
    events_default: z.number({
        invalid_type_error: "Events default must be a number",
    }),
    invite: z.number({ invalid_type_error: "Invite must be a number" }),
    kick: z.number({ invalid_type_error: "Kick must be a number" }),
    redact: z.number({ invalid_type_error: "Redact must be a number" }),
    state_default: z.number({
        invalid_type_error: "State default must be a number",
    }),
    users: z.record(z.string({ invalid_type_error: "power level Userid must be a string" }), z.number({ invalid_type_error: "power level must be a number" })),
    users_default: z.number({
        invalid_type_error: "Users default must be a number",
    }),
    notifications: z.object({
        room: z.number({
            invalid_type_error: "Room notification power level must be a number",
        }),
    }),
})
    .partial();
exports.EventContentSchema = z.object({
    body: z.string({ invalid_type_error: "Body must be a string" }),
    msgtype: z.string({ invalid_type_error: "Message type must be a string" }),
    "m.relates_to": z.optional(z.object({
        event_id: z.string({ invalid_type_error: "Event ID must be a string" }),
        rel_type: z.string({
            invalid_type_error: "Relation type must be a string",
        }),
    })),
});
exports.ContentUnionSchema = z.union([
    exports.EventContentSchema,
    exports.RoomMessageContentSchema,
    exports.PowerLevelsContentSchema,
]);
