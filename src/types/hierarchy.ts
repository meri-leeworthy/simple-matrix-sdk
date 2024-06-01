import { z } from "zod"
import { ClientEventSchema } from "./event"

const StrippedChildStateEvent = z.object({
  content: ClientEventSchema,
  sender: z.string(),
  origin_server_ts: z.number().int(),
  state_key: z.string(),
  type: z.string(),
})

export const SpaceHierarchyRoomsChunk = z.object({
  avatar_url: z.optional(z.string()),
  canonical_alias: z.optional(z.string()),
  children_state: z.array(StrippedChildStateEvent),
  guest_can_join: z.boolean(),
  join_rule: z.optional(z.string()),
  name: z.optional(z.string()),
  num_joined_members: z.number(),
  room_id: z.string(),
  room_type: z.optional(z.string()),
  topic: z.optional(z.string()),
  world_readable: z.boolean(),
})

export type SpaceHierarchyRoomsChunk = z.infer<typeof SpaceHierarchyRoomsChunk>

export const GetHierarchyResponse = z.object({
  next_batch: z.optional(z.string()),
  rooms: z.array(SpaceHierarchyRoomsChunk),
})

export type GetHierarchyResponse = z.infer<typeof GetHierarchyResponse>
