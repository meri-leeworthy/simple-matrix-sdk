import { is, safeParse } from "valibot"
import {
  ClientEventOutput,
  ClientEventSchema,
  EventContentSchema,
  SpecRoomEventTypeOutput,
  UnsignedDataOutput,
} from "."

export class Event {
  type: string | SpecRoomEventTypeOutput
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
    const result = safeParse(ClientEventSchema, event)
    if (!result.success) {
      console.log("event", event)
      console.log("result", result)
      throw new Error("Invalid event")
    }

    this.type = event.type
    this.content = event.content
    this.eventId = event.event_id
    this.sender = event.sender
    this.roomId = event.room_id
    this.originServerTs = event.origin_server_ts
    this.stateKey = event.state_key
    this.unsigned = event.unsigned

    if (
      event.unsigned &&
      event.unsigned["m.relations"] &&
      event.unsigned["m.relations"]["m.replace"]
    ) {
      const edits = event.unsigned["m.relations"]["m.replace"]

      if (Array.isArray(edits)) {
        edits.forEach(edit => {
          is(ClientEventSchema, edit) && this.addReplacement(edit)
        })
      } else if (is(ClientEventSchema, edits)) {
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
