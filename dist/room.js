"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __await = (this && this.__await) || function (v) { return this instanceof __await ? (this.v = v, this) : new __await(v); }
var __asyncGenerator = (this && this.__asyncGenerator) || function (thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Room = void 0;
const client_1 = require("./client");
class Room {
    constructor(roomId, client) {
        this.roomId = roomId;
        this.client = client;
    }
    get(endpoint, params) {
        return __awaiter(this, void 0, void 0, function* () {
            const combinedParams = Object.assign(Object.assign({}, this.client.params), params);
            return yield client_1.Client.authenticatedGet(this.client.buildUrl(endpoint + "/rooms/" + this.roomId), this.client.accessToken, {
                params: combinedParams,
                fetch: this.client.fetch,
            });
        });
    }
    getName() {
        return __awaiter(this, void 0, void 0, function* () {
            const name = yield this.client.get(`rooms/${this.roomId}/state/m.room.name`);
            this.name = name;
            return name;
        });
    }
    getState() {
        return __awaiter(this, void 0, void 0, function* () {
            const state = yield this.client.get(`rooms/${this.roomId}/state`);
            // const name = state.find(event => event.type === "m.room.name").content.name;
            // this.name = name;
            return state;
        });
    }
    getMessagesOneShot() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.get(`rooms/${this.roomId}/messages`);
        });
    }
    getMessagesOneShotParams(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.get(`rooms/${this.roomId}/messages`, Object.assign(Object.assign({}, this.client.params), params));
        });
    }
    getEvent(eventId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.get(`rooms/${this.roomId}/event/$${eventId}`);
        });
    }
    getStateEvent(type, stateKey) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.get(`rooms/${this.roomId}/state/${type}/${stateKey}`);
        });
    }
    getPowerLevels() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.get(`rooms/${this.roomId}/state/m.room.power_levels`);
        });
    }
    setEventPowerLevel(eventType, powerLevel) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.client.userId)
                throw new Error("No user ID");
            if (powerLevel < 0 || powerLevel > 100) {
                throw new Error("Power level must be between 0 and 100");
            }
            const powerLevels = yield this.getPowerLevels();
            const events = powerLevels.events;
            const newEvents = Object.assign(Object.assign({}, events), { [eventType]: powerLevel });
            console.log("newEvents", newEvents); // needs checking :)
            const newPowerLevels = Object.assign(Object.assign({}, powerLevels), { events: newEvents });
            return this.client.put(`rooms/${this.roomId}/state/m.room.power_levels`, newPowerLevels);
        });
    }
    getUserPowerLevel() {
        return __awaiter(this, void 0, void 0, function* () {
            const { users } = yield this.getPowerLevels();
            return users[this.client.userId];
        });
    }
    getHierarchy() {
        return __awaiter(this, void 0, void 0, function* () {
            const { rooms } = yield this.client.get(`rooms/${this.roomId}/hierarchy`, {
                urlType: "client/v1/",
            });
            return rooms;
        });
    }
    isUserModerator() {
        return __awaiter(this, void 0, void 0, function* () {
            const powerLevels = yield this.getPowerLevels();
            console.log("powerLevels", powerLevels);
            if (!this.client.userId)
                throw new Error("No user ID");
            const userPowerLevel = powerLevels.users[this.client.userId];
            const modPowerLevel = powerLevels.events["m.room.power_levels"] || powerLevels.state_default;
            return userPowerLevel >= modPowerLevel;
        });
    }
    // returned async generator function produces an iterator with a provided endpoint parameter
    // the resulting iterator can be called repeatedly to paginate through the messages
    getMessagesAsyncGenerator(direction, limit) {
        const dir = direction || "b";
        const lim = limit || 100;
        const fetch = this.client.fetch;
        const accessToken = this.client.accessToken;
        const clientParams = this.client.params;
        const url = this.client.buildUrl(`rooms/${this.roomId}/messages`);
        function messagesGenerator(from) {
            return __asyncGenerator(this, arguments, function* messagesGenerator_1() {
                console.log("end", from);
                while (true) {
                    let params = Object.assign(Object.assign({}, clientParams), { dir, limit: `${lim}` });
                    if (from) {
                        params["from"] = from;
                    }
                    const response = yield __await(client_1.Client.authenticatedGet(url, accessToken, {
                        params,
                        fetch,
                    }));
                    if (!("end" in response)) {
                        break;
                    }
                    yield yield __await(response);
                    from = response.end;
                }
            });
        }
        return messagesGenerator();
    }
    sendMessage(body) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.put(`rooms/${this.roomId}/send/m.room.message/${Date.now()}`, body);
        });
    }
    sendEvent(type, body) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.put(`rooms/${this.roomId}/send/${type}/${Date.now()}`, body);
        });
    }
    sendStateEvent(type, body, stateKey) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.put(`rooms/${this.roomId}/state/${type}/${stateKey}`, body);
        });
    }
    setName(name) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.put(`rooms/${this.roomId}/state/m.room.name`, {
                name,
            });
        });
    }
    setTopic(topic) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.put(`rooms/${this.roomId}/state/m.room.topic`, {
                topic,
            });
        });
    }
    redactEvent(eventId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.put(`rooms/${this.roomId}/redact/${eventId}/${Date.now()}`, {});
        });
    }
    static sortEvents(events) {
        const sortedEvents = {};
        events.forEach(event => {
            if (!(event.type in sortedEvents)) {
                sortedEvents[event.type] = [];
            }
            sortedEvents[event.type].push(event);
        });
        return sortedEvents;
    }
    static replaceEditedMessages(messages) {
        // replaces the body of messages that have been edited with the edited body
        const editMessages = messages.filter(message => (message === null || message === void 0 ? void 0 : message.content) && "m.new_content" in message.content);
        const toBeEditedMessageIds = editMessages.map(message => (message === null || message === void 0 ? void 0 : message.content) &&
            "m.relates_to" in message.content &&
            message.content["m.relates_to"].event_id);
        const originalMessagesToBeEdited = messages.filter(message => toBeEditedMessageIds.includes(message.event_id));
        const originalMessagesStayingTheSame = messages.filter(message => !toBeEditedMessageIds.includes(message.event_id) &&
            !((message === null || message === void 0 ? void 0 : message.content) &&
                "m.relates_to" in message.content &&
                message.content["m.relates_to"]["rel_type"] === "m.replace"));
        const originalMessagesWithEditedBodies = originalMessagesToBeEdited.map(message => {
            const thisEditedMessage = editMessages.find(editMessage => (editMessage === null || editMessage === void 0 ? void 0 : editMessage.content) &&
                "m.relates_to" in editMessage.content &&
                editMessage.content["m.relates_to"].event_id === message.event_id);
            const editedContent = thisEditedMessage === null || thisEditedMessage === void 0 ? void 0 : thisEditedMessage.content;
            // "m.new_content" in thisEditedMessage.content &&
            // thisEditedMessage.content["m.new_content"].body
            return Object.assign(Object.assign({}, message), { content: Object.assign(Object.assign({}, message.content), editedContent) });
        });
        return [
            ...originalMessagesStayingTheSame,
            ...originalMessagesWithEditedBodies,
        ];
    }
    static deleteEditedMessages(messages) {
        const rootEvents = new Map();
        messages.forEach(message => {
            if ((message === null || message === void 0 ? void 0 : message.content) && "m.relates_to" in message.content) {
                const id = message.content["m.relates_to"].event_id;
                const edits = rootEvents.get(id);
                rootEvents.set(id, [...(edits || []), message]);
            }
        });
        rootEvents.forEach((edits, id) => {
            const finalEdit = edits.reduce((acc, edit) => {
                if (edit.origin_server_ts > acc.origin_server_ts) {
                    return edit;
                }
                return acc;
            });
            rootEvents.set(id, [finalEdit]);
        });
        return [...rootEvents.values()].flat();
    }
}
exports.Room = Room;
