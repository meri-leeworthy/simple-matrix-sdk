import * as z from "zod"
import { ContentUnionSchema } from "./content"
import { is } from "@/types/utils"

export const ClientEventBaseSchema = z.object({
  type: z.string({ invalid_type_error: "Event type must be a string" }),
  content: z.unknown(),
  sender: z.string({ invalid_type_error: "Sender must be a string" }),
  room_id: z.string({ invalid_type_error: "Room ID must be a string" }),
  event_id: z.string({ invalid_type_error: "Event ID must be a string" }),
  state_key: z.optional(
    z.string({ invalid_type_error: "State key must be a string" })
  ),
  origin_server_ts: z.number({
    invalid_type_error: "Origin server timestamp must be a number",
  }),
  age: z.optional(z.number({ invalid_type_error: "Age must be a number" })),
  replaces_state: z.optional(
    z.string({ invalid_type_error: "Replaces state must be a string" })
  ),
  prev_content: z.optional(ContentUnionSchema),
  user_id: z.optional(
    z.string({ invalid_type_error: "User ID must be a string" })
  ),
})

export type ClientEventBaseOutput = z.infer<typeof ClientEventBaseSchema> // 'redacted_because' ClientEvent should not contain another unsigned field

export const UnsignedDataSchema = z
  .object({
    age: z.number({ invalid_type_error: "Age must be a number" }),
    transaction_id: z.string({
      invalid_type_error: "Transaction ID must be a string",
    }),
    prev_content: ContentUnionSchema,
    "m.relations": z.unknown(),
    redacted_because: ClientEventBaseSchema,
  })
  .partial()

export type UnsignedDataOutput = z.infer<typeof UnsignedDataSchema>

export const ClientEventSchema = ClientEventBaseSchema.extend({
  unsigned: z.optional(UnsignedDataSchema),
})

export type ClientEventOutput = z.infer<typeof ClientEventSchema>

export class Event {
  type: string
  content: unknown
  eventId: string
  sender: string
  roomId: string
  originServerTs: number
  stateKey?: string
  unsigned?: UnsignedDataOutput

  edits: Map<string, Event> = new Map<string, Event>()
  latestEditId?: string

  constructor(event: ClientEventOutput) {
    const result = ClientEventSchema.safeParse(event)
    if (!result.success) {
      console.log("event", event)
      console.log("result", result)
      throw new Error("Invalid event")
    }

    // event has been validated but the exact type and corresponding content is still unknown
    this.type = event.type
    this.content = event.content
    this.eventId = event.event_id
    this.sender = event.sender
    this.roomId = event.room_id
    this.originServerTs = event.origin_server_ts
    this.stateKey = event.state_key
    this.unsigned = event.unsigned

    const RelationsSchema = z.object({
      "m.replace": ClientEventBaseSchema,
    })

    if (
      event.unsigned &&
      event.unsigned["m.relations"] &&
      is(RelationsSchema, event.unsigned["m.relations"])
    ) {
      const edits = event.unsigned["m.relations"]["m.replace"]

      if (Array.isArray(edits)) {
        edits.forEach(edit => {
          "success" in ClientEventBaseSchema.safeParse(edit) &&
            this.addReplacement(edit)
        })
      } else if ("success" in ClientEventBaseSchema.safeParse(edits)) {
        this.addReplacement(edits)
      }
    }
  }

  addReplacement(event: ClientEventOutput) {
    this.edits.set(event.event_id, new Event(event))
    if (!this.latestEditId) this.latestEditId = event.event_id
    const latestEdit = this.edits.get(this.latestEditId)
    if (
      latestEdit?.originServerTs &&
      event.origin_server_ts > latestEdit?.originServerTs
    )
      this.latestEditId = event.event_id
  }

  getLatestEdit() {
    if (this.latestEditId) return this.edits.get(this.latestEditId)
    else return this
  }
}
