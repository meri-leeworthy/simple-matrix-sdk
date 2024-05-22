import { ContentUnionSchema } from "./content"
import * as z from "zod"

export const ThumbnailInfoSchema = z
  .object({
    h: z.z.number(),
    w: z.z.number(),
    mimetype: z.string(),
    size: z.number(),
  })
  .partial()

export type ThumbnailInfoOutput = z.infer<typeof ThumbnailInfoSchema>

export const RoomMessageTypeSchema = z.enum([
  "m.text",
  "m.emote",
  "m.notice",
  "m.image",
  "m.file",
  "m.audio",
  "m.location",
  "m.video",
  "m.key.verification.request",
])

export type RoomMessageTypeOutput = z.infer<typeof RoomMessageTypeSchema>

export const SpecRoomEventTypeSchema = z.union([
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
])

export type SpecRoomEventTypeOutput = z.infer<typeof SpecRoomEventTypeSchema>

export type ContentUnionOutput = z.infer<typeof ContentUnionSchema>

export const MatrixRoomMemberContent = z.object({
  membership: z.string({
    invalid_type_error: "Membership must be a string",
  }),
  displayname: z.optional(
    z.string({ invalid_type_error: "Display name must be a string" })
  ),
  avatar_url: z.optional(
    z.string({ invalid_type_error: "Avatar URL must be a string" })
  ),
  is_direct: z.optional(
    z.boolean({ invalid_type_error: "Is direct must be a boolean" })
  ),
  third_party_invite: z.optional(
    z.object({
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
    })
  ),
})

export const MatrixRoomCreateContent = z.object({
  creator: z.string({ invalid_type_error: "Creator must be a string" }),
  room_version: z.optional(
    z.string({ invalid_type_error: "Room version must be a string" })
  ),
  predecessor: z.optional(
    z.object({
      event_id: z.string({
        invalid_type_error: "Event ID must be a string",
      }),
      room_id: z.string({
        invalid_type_error: "Room ID must be a string",
      }),
    })
  ),
})

export const MatrixRoomJoinRulesContent = z.object({
  join_rule: z.string({
    invalid_type_error: "Join rule must be a string",
  }),
})

export const MatrixRoomNameContent = z.object({
  name: z.string({ invalid_type_error: "Name must be a string" }),
})

export const MatrixRoomTopicContent = z.object({
  topic: z.string({ invalid_type_error: "Topic must be a string" }),
})

export const MatrixRoomAvatarContent = z.object({
  url: z.optional(z.string({ invalid_type_error: "URL must be a string" })),
})

export const MatrixRoomCanonicalAliasContent = z.object({
  alias: z.string({ invalid_type_error: "Alias must be a string" }),
})

export const MatrixRoomAliasesContent = z.object({
  aliases: z.array(z.string({ invalid_type_error: "Alias must be a string" })),
})

export const MatrixRoomRedactionContent = z.object({
  reason: z.optional(
    z.string({ invalid_type_error: "Reason must be a string" })
  ),
})

// export type ClientEventOutput = z.infer<typeof ClientEventSchema>

export const CreateRoomOptsSchema = z.object({
  name: z.string().optional(),
  topic: z.string().optional(),
  invite: z.array(z.string()).optional(),
  invite_3pid: z
    .array(
      z.object({
        id_server: z.string(),
        medium: z.string(),
        address: z.string(),
        id_access_token: z.string(),
      })
    )
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
    .array(
      z.object({
        type: z.string(),
        state_key: z.string().optional(),
        content: z.record(z.unknown()),
      })
    )
    .optional(),
})

export type CreateRoomOptsOutput = z.infer<typeof CreateRoomOptsSchema>
