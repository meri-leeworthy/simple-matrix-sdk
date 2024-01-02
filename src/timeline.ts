//intention to create a class for events timeline similiar to the matrix-js-sdl
//create a normalised, structured, validated, deduplicated tree of relations between events

import { is } from "valibot"
import { ClientEventOutput, EventContentSchema, Event } from "."

export class Timeline {
  events: Map<string, Event> = new Map<string, Event>()

  constructor(chunk: ClientEventOutput[]) {
    this.addChunk(chunk)
  }

  addChunk(chunk: ClientEventOutput[]) {
    chunk.forEach(event => {
      this.addEvent(event)
    })
  }

  addEvent(event: ClientEventOutput) {
    if (
      is(EventContentSchema, event.content) &&
      event.content["m.relates_to"] &&
      event.content["m.relates_to"].rel_type === "m.replace"
    ) {
      const id = event.content["m.relates_to"].event_id
      const eventParent = this.events.get(id)

      if (eventParent) {
        eventParent.edits.set(event.event_id, new Event(event))
      } else {
        this.events.set(event.event_id, new Event(event))
      }
    } else {
      this.events.set(event.event_id, new Event(event))
    }
  }
}
