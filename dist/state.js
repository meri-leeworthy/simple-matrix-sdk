"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.State = void 0;
class State {
    constructor(chunk) {
        const stateMap = new Map();
        chunk.forEach(stateEvent => {
            const prevTypeMap = stateMap.get(stateEvent.type);
            const newTypeMap = new Map(prevTypeMap);
            newTypeMap.set(stateEvent.state_key || "", stateEvent);
            stateMap.set(stateEvent.type, newTypeMap);
        });
        this.map = stateMap;
    }
    get(type, stateKey) {
        const typeMap = this.map.get(type);
        if (!typeMap)
            return typeMap;
        return typeMap.get(stateKey || "");
    }
    getAll(type) {
        return this.map.get(type);
    }
}
exports.State = State;
