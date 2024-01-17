import {
  array,
  enum_,
  number,
  object,
  optional,
  partial,
  string,
  Output,
  recursive,
  intersect,
  literal,
  union,
  record,
  unknown,
  boolean,
} from "valibot"

export type Params = Record<string, string>

export type ClientOptions = {
  userId: string
  params: Params
  fetch: any
}

export const ErrorSchema = object({
  errcode: string("Errcode must be a string"),
  error: optional(string("Error must be a string")),
})

export type ErrorOutput = Output<typeof ErrorSchema>

export const ThumbnailInfoSchema = partial(
  object({
    h: number(),
    w: number(),
    mimetype: string(),
    size: number(),
  })
)

export type ThumbnailInfoOutput = Output<typeof ThumbnailInfoSchema>

export const RoomMessageTypeSchema = enum_({
  Text: "m.text",
  Emote: "m.emote",
  Notice: "m.notice",
  Image: "m.image",
  File: "m.file",
  Audio: "m.audio",
  Location: "m.location",
  Video: "m.video",
  KeyVerificationRequest: "m.key.verification.request",
})

export type RoomMessageTypeOutput = Output<typeof RoomMessageTypeSchema>

export const TextMessageContentSchema = object({
  msgtype: literal("m.text"),
  body: string(),
  format: optional(string()),
  formatted_body: optional(string()),
})

export const EmoteMessageContentSchema = object({
  msgtype: literal("m.emote"),
  body: string(),
  format: optional(string()),
  formatted_body: optional(string()),
})

export const NoticeMessageContentSchema = object({
  msgtype: literal("m.notice"),
  body: string(),
  format: optional(string()),
  formatted_body: optional(string()),
})

export const ImageMessageContentSchema = object({
  msgtype: literal("m.image"),
  body: string(),
  info: optional(
    object({
      h: number(),
      w: number(),
      mimetype: string(),
      size: number(),
      thumbnail_info: optional(ThumbnailInfoSchema),
      thumbnail_url: optional(string()),
    })
  ),
  url: optional(string()),
})

export const FileMessageContentSchema = object({
  msgtype: literal("m.file"),
  body: string(),
  filename: string(),
  info: optional(
    object({
      mimetype: optional(string()),
      size: optional(number()),
      thumbnail_info: optional(ThumbnailInfoSchema),
      thumbnail_url: optional(string()),
    })
  ),
  url: optional(string()),
})

export const AudioMessageContentSchema = object({
  msgtype: literal("m.audio"),
  body: string("Body must be a string"),
  info: optional(
    object({
      duration: optional(number("Duration must be a number")),
      mimetype: optional(string("Mimetype must be a string")),
      size: optional(number("Size must be a number")),
    })
  ),
  url: optional(string("URL must be a string")),
})

export const LocationMessageContentSchema = object({
  msgtype: literal("m.location"),
  body: string("Body must be a string"),
  info: optional(
    object({
      thumbnail_info: optional(ThumbnailInfoSchema),
      thumbnail_url: optional(string("Thumbnail URL must be a string")),
    })
  ),
  geo_uri: string("Geo URI must be a string"),
})

export const VideoMessageContentSchema = object({
  msgtype: literal("m.video"),
  body: string("Body must be a string"),
  info: optional(
    object({
      duration: optional(number("Duration must be a number")),
      h: optional(number("Height must be a number")),
      mimetype: optional(string("Mimetype must be a string")),
      size: optional(number("Size must be a number")),
      thumbnail_info: optional(ThumbnailInfoSchema),
      thumbnail_url: optional(string("Thumbnail URL must be a string")),
      w: optional(number("Width must be a number")),
    })
  ),
  url: optional(string("URL must be a string")),
})

export const KeyVerificationRequestMessageContentSchema = object({
  msgtype: literal("m.key.verification.request"),
  body: optional(string("Body must be a string")),
  format: optional(string("Format must be a string")),
  formatted_body: optional(string("Formatted body must be a string")),
  from_device: string("From device must be a string"),
  methods: array(string("Methods must be a string")),
  timestamp: number("Timestamp must be a number"),
  transaction_id: string("Transaction ID must be a string"),
})

export const RoomMessageContentSchema = union([
  TextMessageContentSchema,
  EmoteMessageContentSchema,
  NoticeMessageContentSchema,
  ImageMessageContentSchema,
  FileMessageContentSchema,
  AudioMessageContentSchema,
  LocationMessageContentSchema,
  VideoMessageContentSchema,
  KeyVerificationRequestMessageContentSchema,
  object({ msgtype: string() }),
])

export type RoomMessageContentOutput = Output<typeof RoomMessageContentSchema>

export const SpecRoomEventTypeSchema = union([
  literal("m.room.message"),
  literal("m.room.member"),
  literal("m.room.create"),
  literal("m.room.join_rules"),
  literal("m.room.power_levels"),
  literal("m.room.name"),
  literal("m.room.topic"),
  literal("m.room.avatar"),
  literal("m.room.canonical_alias"),
  literal("m.room.aliases"),
  literal("m.room.redaction"),
  literal("m.room.history_visibility"),
  literal("m.room.encryption"),
  literal("m.room.third_party_invite"),
  literal("m.room.related_groups"),
  literal("m.room.pinned_events"),
  literal("m.room.server_acl"),
  literal("m.room.tombstone"),
  literal("m.room.key"),
  literal("m.room.forwarded_room_key"),
  literal("m.room.encrypted"),
  literal("m.room.message.feedback"),
  literal("m.room.message.receipt"),
  literal("m.room.message.relation"),
  literal("m.room.message.encrypted"),
  literal("m.room.tag"),
  literal("m.room.sticker"),
  literal("m.room.space"),
  literal("m.room.guest_access"),
])

export type SpecRoomEventTypeOutput = Output<typeof SpecRoomEventTypeSchema>

export const PowerLevelsContentSchema = partial(
  object({
    ban: number("Ban must be a number"),
    events: record(
      string("power level event type must be a string"),
      number("power level must be a number")
    ),
    events_default: number("Events default must be a number"),
    invite: number("Invite must be a number"),
    kick: number("Kick must be a number"),
    redact: number("Redact must be a number"),
    state_default: number("State default must be a number"),
    users: record(
      string("power level Userid must be a string"),
      number("power level must be a number")
    ),
    users_default: number("Users default must be a number"),
    notifications: object({
      room: number("Room notification power level must be a number"),
    }),
  })
)

export const EventContentSchema = object({
  body: string("Body must be a string"),
  msgtype: string("Message type must be a string"),
  "m.relates_to": optional(
    object({
      event_id: string("Event ID must be a string"),
      rel_type: string("Relation type must be a string"),
    })
  ),
})

export type EventContentOutput = Output<typeof EventContentSchema>

export const ContentUnionSchema = union([
  EventContentSchema,
  RoomMessageContentSchema,
  PowerLevelsContentSchema,
])

export const ClientEventBaseSchema = object({
  sender: string("Sender must be a string"),
  room_id: string("Room ID must be a string"),
  event_id: string("Event ID must be a string"),
  state_key: optional(string("State key must be a string")),
  origin_server_ts: number("Origin server timestamp must be a number"),
  age: optional(number("Age must be a number")),
  replaces_state: optional(string("Replaces state must be a string")),
  prev_content: optional(ContentUnionSchema),
  user_id: optional(string("User ID must be a string")),
})

export const ClientEventTypeAndContentSchema = union([
  object({
    type: string("Event type must be a string"),
    content: EventContentSchema,
  }),
  object({
    type: string("Event type must be a string"),
    content: unknown(),
  }),
  object({
    type: literal("m.room.message"),
    content: RoomMessageContentSchema,
  }),
  object({
    type: literal("m.room.power_levels"),
    content: PowerLevelsContentSchema,
  }),
  object({
    type: literal("m.room.member"),
    content: object({
      membership: string("Membership must be a string"),
      displayname: optional(string("Display name must be a string")),
      avatar_url: optional(string("Avatar URL must be a string")),
      is_direct: optional(boolean("Is direct must be a boolean")),
      third_party_invite: optional(
        object({
          display_name: string("Display name must be a string"),
          signed: object({
            mxid: string("MXID must be a string"),
            signatures: object({
              "ed25519:": string("Signature must be a string"),
            }),
            token: string("Token must be a string"),
          }),
        })
      ),
    }),
  }),
  object({
    type: literal("m.room.create"),
    content: object({
      creator: string("Creator must be a string"),
      room_version: optional(string("Room version must be a string")),
      predecessor: optional(
        object({
          event_id: string("Event ID must be a string"),
          room_id: string("Room ID must be a string"),
        })
      ),
    }),
  }),
  object({
    type: literal("m.room.join_rules"),
    content: object({
      join_rule: string("Join rule must be a string"),
    }),
  }),
  object({
    type: literal("m.room.name"),
    content: object({
      name: string("Name must be a string"),
    }),
  }),
  object({
    type: literal("m.room.topic"),
    content: object({
      topic: string("Topic must be a string"),
    }),
  }),
  object({
    type: literal("m.room.avatar"),
    content: object({
      url: optional(string("URL must be a string")),
    }),
  }),
  object({
    type: literal("m.room.canonical_alias"),
    content: object({
      alias: string("Alias must be a string"),
    }),
  }),
  object({
    type: literal("m.room.aliases"),
    content: object({
      aliases: array(string("Alias must be a string")),
    }),
  }),
  object({
    type: literal("m.room.redaction"),
    content: object({
      reason: optional(string("Reason must be a string")),
    }),
  }),
])

export type ContentUnionOutput = Output<typeof ContentUnionSchema>

export const UnsignedDataSchema = partial(
  object({
    age: number("Age must be a number"),
    transaction_id: string("Transaction ID must be a string"),
    prev_content: ContentUnionSchema,
    redacted_because: recursive(() => ClientEventBaseSchema),
    "m.relations": record(string(), union([object({}), array(object({}))])),
  })
)

export type UnsignedDataOutput = Output<typeof UnsignedDataSchema>

export const ClientEventSchema = intersect([
  ClientEventBaseSchema,
  ClientEventTypeAndContentSchema,
  object({ unsigned: optional(UnsignedDataSchema) }),
])

export type ClientEventOutput = Output<typeof ClientEventSchema>
