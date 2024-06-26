import { ClientEventOutput } from "./types/event"

export class State {
  map: Map<string, Map<string, ClientEventOutput>>

  constructor(chunk: ClientEventOutput[]) {
    const stateMap = new Map<string, Map<string, ClientEventOutput>>()

    chunk.forEach(stateEvent => {
      const prevTypeMap = stateMap.get(stateEvent.type)

      const newTypeMap = new Map(prevTypeMap)
      newTypeMap.set(stateEvent.state_key || "", stateEvent)

      stateMap.set(stateEvent.type, newTypeMap)
    })

    this.map = stateMap
  }

  get(type: string, stateKey?: string) {
    const typeMap = this.map.get(type)
    if (!typeMap) return typeMap
    return typeMap.get(stateKey || "")
  }

  getAll(type: string) {
    return this.map.get(type)
  }
}
