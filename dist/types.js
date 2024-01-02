"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientEventSchema = exports.UnsignedDataSchema = exports.ClientEventTypeAndContentSchema = exports.ClientEventBaseSchema = exports.ContentUnionSchema = exports.EventContentSchema = exports.PowerLevelsContentSchema = exports.SpecRoomEventTypeSchema = exports.RoomMessageContentSchema = exports.KeyVerificationRequestMessageContentSchema = exports.VideoMessageContentSchema = exports.LocationMessageContentSchema = exports.AudioMessageContentSchema = exports.FileMessageContentSchema = exports.ImageMessageContentSchema = exports.NoticeMessageContentSchema = exports.EmoteMessageContentSchema = exports.TextMessageContentSchema = exports.RoomMessageTypeSchema = exports.ThumbnailInfoSchema = exports.ErrorSchema = void 0;
const valibot_1 = require("valibot");
exports.ErrorSchema = (0, valibot_1.object)({
    errcode: (0, valibot_1.string)(),
    error: (0, valibot_1.optional)((0, valibot_1.string)()),
});
exports.ThumbnailInfoSchema = (0, valibot_1.partial)((0, valibot_1.object)({
    h: (0, valibot_1.number)(),
    w: (0, valibot_1.number)(),
    mimetype: (0, valibot_1.string)(),
    size: (0, valibot_1.number)(),
}));
exports.RoomMessageTypeSchema = (0, valibot_1.enum_)({
    Text: "m.text",
    Emote: "m.emote",
    Notice: "m.notice",
    Image: "m.image",
    File: "m.file",
    Audio: "m.audio",
    Location: "m.location",
    Video: "m.video",
    KeyVerificationRequest: "m.key.verification.request",
});
exports.TextMessageContentSchema = (0, valibot_1.object)({
    msgType: (0, valibot_1.literal)("m.text"),
    body: (0, valibot_1.string)(),
    format: (0, valibot_1.optional)((0, valibot_1.string)()),
    formatted_body: (0, valibot_1.optional)((0, valibot_1.string)()),
});
exports.EmoteMessageContentSchema = (0, valibot_1.object)({
    msgType: (0, valibot_1.literal)("m.emote"),
    body: (0, valibot_1.string)(),
    format: (0, valibot_1.optional)((0, valibot_1.string)()),
    formatted_body: (0, valibot_1.optional)((0, valibot_1.string)()),
});
exports.NoticeMessageContentSchema = (0, valibot_1.object)({
    msgType: (0, valibot_1.literal)("m.notice"),
    body: (0, valibot_1.string)(),
    format: (0, valibot_1.optional)((0, valibot_1.string)()),
    formatted_body: (0, valibot_1.optional)((0, valibot_1.string)()),
});
exports.ImageMessageContentSchema = (0, valibot_1.object)({
    msgType: (0, valibot_1.literal)("m.image"),
    body: (0, valibot_1.string)(),
    info: (0, valibot_1.optional)((0, valibot_1.object)({
        h: (0, valibot_1.number)(),
        w: (0, valibot_1.number)(),
        mimetype: (0, valibot_1.string)(),
        size: (0, valibot_1.number)(),
        thumbnail_info: (0, valibot_1.optional)(exports.ThumbnailInfoSchema),
        thumbnail_url: (0, valibot_1.optional)((0, valibot_1.string)()),
    })),
    url: (0, valibot_1.optional)((0, valibot_1.string)()),
});
exports.FileMessageContentSchema = (0, valibot_1.object)({
    msgType: (0, valibot_1.literal)("m.file"),
    body: (0, valibot_1.string)(),
    filename: (0, valibot_1.string)(),
    info: (0, valibot_1.optional)((0, valibot_1.object)({
        mimetype: (0, valibot_1.optional)((0, valibot_1.string)()),
        size: (0, valibot_1.optional)((0, valibot_1.number)()),
        thumbnail_info: (0, valibot_1.optional)(exports.ThumbnailInfoSchema),
        thumbnail_url: (0, valibot_1.optional)((0, valibot_1.string)()),
    })),
    url: (0, valibot_1.optional)((0, valibot_1.string)()),
});
exports.AudioMessageContentSchema = (0, valibot_1.object)({
    msgType: (0, valibot_1.literal)("m.audio"),
    body: (0, valibot_1.string)("Body must be a string"),
    info: (0, valibot_1.optional)((0, valibot_1.object)({
        duration: (0, valibot_1.optional)((0, valibot_1.number)("Duration must be a number")),
        mimetype: (0, valibot_1.optional)((0, valibot_1.string)("Mimetype must be a string")),
        size: (0, valibot_1.optional)((0, valibot_1.number)("Size must be a number")),
    })),
    url: (0, valibot_1.optional)((0, valibot_1.string)("URL must be a string")),
});
exports.LocationMessageContentSchema = (0, valibot_1.object)({
    msgType: (0, valibot_1.literal)("m.location"),
    body: (0, valibot_1.string)("Body must be a string"),
    info: (0, valibot_1.optional)((0, valibot_1.object)({
        thumbnail_info: (0, valibot_1.optional)(exports.ThumbnailInfoSchema),
        thumbnail_url: (0, valibot_1.optional)((0, valibot_1.string)("Thumbnail URL must be a string")),
    })),
    geo_uri: (0, valibot_1.string)("Geo URI must be a string"),
});
exports.VideoMessageContentSchema = (0, valibot_1.object)({
    msgType: (0, valibot_1.literal)("m.video"),
    body: (0, valibot_1.string)("Body must be a string"),
    info: (0, valibot_1.optional)((0, valibot_1.object)({
        duration: (0, valibot_1.optional)((0, valibot_1.number)("Duration must be a number")),
        h: (0, valibot_1.optional)((0, valibot_1.number)("Height must be a number")),
        mimetype: (0, valibot_1.optional)((0, valibot_1.string)("Mimetype must be a string")),
        size: (0, valibot_1.optional)((0, valibot_1.number)("Size must be a number")),
        thumbnail_info: (0, valibot_1.optional)(exports.ThumbnailInfoSchema),
        thumbnail_url: (0, valibot_1.optional)((0, valibot_1.string)("Thumbnail URL must be a string")),
        w: (0, valibot_1.optional)((0, valibot_1.number)("Width must be a number")),
    })),
    url: (0, valibot_1.optional)((0, valibot_1.string)("URL must be a string")),
});
exports.KeyVerificationRequestMessageContentSchema = (0, valibot_1.object)({
    msgType: (0, valibot_1.literal)("m.key.verification.request"),
    body: (0, valibot_1.optional)((0, valibot_1.string)("Body must be a string")),
    format: (0, valibot_1.optional)((0, valibot_1.string)("Format must be a string")),
    formatted_body: (0, valibot_1.optional)((0, valibot_1.string)("Formatted body must be a string")),
    from_device: (0, valibot_1.string)("From device must be a string"),
    methods: (0, valibot_1.array)((0, valibot_1.string)("Methods must be a string")),
    timestamp: (0, valibot_1.number)("Timestamp must be a number"),
    transaction_id: (0, valibot_1.string)("Transaction ID must be a string"),
});
exports.RoomMessageContentSchema = (0, valibot_1.union)([
    exports.TextMessageContentSchema,
    exports.EmoteMessageContentSchema,
    exports.NoticeMessageContentSchema,
    exports.ImageMessageContentSchema,
    exports.FileMessageContentSchema,
    exports.AudioMessageContentSchema,
    exports.LocationMessageContentSchema,
    exports.VideoMessageContentSchema,
    exports.KeyVerificationRequestMessageContentSchema,
]);
exports.SpecRoomEventTypeSchema = (0, valibot_1.union)([
    (0, valibot_1.literal)("m.room.message"),
    (0, valibot_1.literal)("m.room.member"),
    (0, valibot_1.literal)("m.room.create"),
    (0, valibot_1.literal)("m.room.join_rules"),
    (0, valibot_1.literal)("m.room.power_levels"),
    (0, valibot_1.literal)("m.room.name"),
    (0, valibot_1.literal)("m.room.topic"),
    (0, valibot_1.literal)("m.room.avatar"),
    (0, valibot_1.literal)("m.room.canonical_alias"),
    (0, valibot_1.literal)("m.room.aliases"),
    (0, valibot_1.literal)("m.room.redaction"),
    (0, valibot_1.literal)("m.room.history_visibility"),
    (0, valibot_1.literal)("m.room.encryption"),
    (0, valibot_1.literal)("m.room.third_party_invite"),
    (0, valibot_1.literal)("m.room.related_groups"),
    (0, valibot_1.literal)("m.room.pinned_events"),
    (0, valibot_1.literal)("m.room.server_acl"),
    (0, valibot_1.literal)("m.room.tombstone"),
    (0, valibot_1.literal)("m.room.key"),
    (0, valibot_1.literal)("m.room.forwarded_room_key"),
    (0, valibot_1.literal)("m.room.encrypted"),
    (0, valibot_1.literal)("m.room.message.feedback"),
    (0, valibot_1.literal)("m.room.message.receipt"),
    (0, valibot_1.literal)("m.room.message.relation"),
    (0, valibot_1.literal)("m.room.message.encrypted"),
    (0, valibot_1.literal)("m.room.tag"),
    (0, valibot_1.literal)("m.room.sticker"),
    (0, valibot_1.literal)("m.room.space"),
    (0, valibot_1.literal)("m.room.guest_access"),
]);
exports.PowerLevelsContentSchema = (0, valibot_1.partial)((0, valibot_1.object)({
    ban: (0, valibot_1.number)("Ban must be a number"),
    events: (0, valibot_1.record)((0, valibot_1.string)("power level event type must be a string"), (0, valibot_1.number)("power level must be a number")),
    events_default: (0, valibot_1.number)("Events default must be a number"),
    invite: (0, valibot_1.number)("Invite must be a number"),
    kick: (0, valibot_1.number)("Kick must be a number"),
    redact: (0, valibot_1.number)("Redact must be a number"),
    state_default: (0, valibot_1.number)("State default must be a number"),
    users: (0, valibot_1.record)((0, valibot_1.string)("power level Userid must be a string"), (0, valibot_1.number)("power level must be a number")),
    users_default: (0, valibot_1.number)("Users default must be a number"),
    notifications: (0, valibot_1.object)({
        room: (0, valibot_1.number)("Room notification power level must be a number"),
    }),
}));
exports.EventContentSchema = (0, valibot_1.object)({
    body: (0, valibot_1.string)("Body must be a string"),
    msgtype: (0, valibot_1.string)("Message type must be a string"),
    "m.relates_to": (0, valibot_1.optional)((0, valibot_1.object)({
        event_id: (0, valibot_1.string)("Event ID must be a string"),
        rel_type: (0, valibot_1.string)("Relation type must be a string"),
    })),
});
exports.ContentUnionSchema = (0, valibot_1.union)([
    exports.EventContentSchema,
    exports.RoomMessageContentSchema,
    exports.PowerLevelsContentSchema,
]);
exports.ClientEventBaseSchema = (0, valibot_1.object)({
    sender: (0, valibot_1.string)("Sender must be a string"),
    room_id: (0, valibot_1.string)("Room ID must be a string"),
    event_id: (0, valibot_1.string)("Event ID must be a string"),
    state_key: (0, valibot_1.optional)((0, valibot_1.string)("State key must be a string")),
    origin_server_ts: (0, valibot_1.number)("Origin server timestamp must be a number"),
    age: (0, valibot_1.optional)((0, valibot_1.number)("Age must be a number")),
    replaces_state: (0, valibot_1.optional)((0, valibot_1.string)("Replaces state must be a string")),
    prev_content: (0, valibot_1.optional)(exports.ContentUnionSchema),
    user_id: (0, valibot_1.optional)((0, valibot_1.string)("User ID must be a string")),
});
exports.ClientEventTypeAndContentSchema = (0, valibot_1.union)([
    (0, valibot_1.object)({
        type: (0, valibot_1.string)("Event type must be a string"),
        content: exports.EventContentSchema,
    }),
    (0, valibot_1.object)({
        type: (0, valibot_1.string)("Event type must be a string"),
        content: (0, valibot_1.unknown)(),
    }),
    (0, valibot_1.object)({
        type: (0, valibot_1.literal)("m.room.message"),
        content: exports.RoomMessageContentSchema,
    }),
    (0, valibot_1.object)({
        type: (0, valibot_1.literal)("m.room.power_levels"),
        content: exports.PowerLevelsContentSchema,
    }),
]);
exports.UnsignedDataSchema = (0, valibot_1.partial)((0, valibot_1.object)({
    age: (0, valibot_1.number)("Age must be a number"),
    transaction_id: (0, valibot_1.string)("Transaction ID must be a string"),
    prev_content: exports.ContentUnionSchema,
    redacted_because: (0, valibot_1.recursive)(() => exports.ClientEventBaseSchema),
    "m.relations": (0, valibot_1.record)((0, valibot_1.string)(), (0, valibot_1.union)([(0, valibot_1.object)({}), (0, valibot_1.array)((0, valibot_1.object)({}))])),
}));
exports.ClientEventSchema = (0, valibot_1.intersect)([
    exports.ClientEventBaseSchema,
    exports.ClientEventTypeAndContentSchema,
    (0, valibot_1.object)({ unsigned: (0, valibot_1.optional)(exports.UnsignedDataSchema) }),
]);
