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
exports.Room = exports.Client = void 0;
// What do I want for this sdk?
// 1. A way to get a list of all the rooms I'm in
// 2. A way to get a list of all the messages in a room
// 3. A way to send a message to a room
// 4. A way to get a list of all the users in a room
class Client {
    constructor(baseUrl, accessToken, userId) {
        this.baseUrl = baseUrl;
        this.accessToken = accessToken;
        this.userId = userId;
    }
    static authenticatedGet(url, accessToken, params) {
        return __awaiter(this, void 0, void 0, function* () {
            // return async function (url: string) {
            if (params) {
                const paramsString = new URLSearchParams(params).toString();
                url = `${url}?${paramsString}`;
            }
            const response = yield fetch(url, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            const data = yield response.json();
            return data;
            // }
        });
    }
    static authenticatedPut(url, accessToken, body, params) {
        return __awaiter(this, void 0, void 0, function* () {
            if (params) {
                const paramsString = new URLSearchParams(params).toString();
                url = `${url}?${paramsString}`;
            }
            const response = yield fetch(url, {
                method: "PUT",
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
                body: JSON.stringify(body),
            });
            const data = yield response.json();
            return data;
        });
    }
    static login(baseUrl, username, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(`${baseUrl}/_matrix/client/v3/login`, {
                method: "POST",
                body: JSON.stringify({
                    type: "m.login.password",
                    identifier: {
                        type: "m.id.user",
                        user: username,
                    },
                    password: password,
                }),
            });
            const data = yield response.json();
            if (!("access_token" in data)) {
                throw new Error("No access token in response");
            }
            return data.access_token;
        });
    }
    useUserId() {
        return this.userId;
    }
    buildUrl(endpoint) {
        return `${this.baseUrl}/_matrix/client/v3/${endpoint}`;
    }
    get(endpoint, params) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Client.authenticatedGet(this.buildUrl(endpoint), this.accessToken, params);
        });
    }
    put(endpoint, body, params) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Client.authenticatedPut(this.buildUrl(endpoint), this.accessToken, body, params);
        });
    }
    getJoinedRooms() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.get("joined_rooms");
        });
    }
    getProfile(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const profile = yield this.get(`profile/${userId}/displayname`);
            return profile;
        });
    }
}
exports.Client = Client;
class Room {
    constructor(roomId, client) {
        this.roomId = roomId;
        this.client = client;
    }
    useName() {
        return this.name;
    }
    useID() {
        return this.roomId;
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
    getMessagesOneShotParams() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.get(`rooms/${this.roomId}/messages`, {
                dir: "b",
                limit: "10",
            });
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
    // returned async generator function produces an iterator with a provided endpoint parameter
    // the resulting iterator can be called repeatedly to paginate through the messages
    getMessagesAsyncGenerator(direction, limit) {
        const dir = direction || "b";
        const lim = limit || 100;
        const accessToken = this.client.accessToken;
        const url = this.client.buildUrl(`rooms/${this.roomId}/messages`);
        function messagesGenerator(end) {
            return __asyncGenerator(this, arguments, function* messagesGenerator_1() {
                // console.log("end", end);
                while (true) {
                    const params = { dir, limit: `${lim}` };
                    if (end) {
                        params.from = end;
                    }
                    const response = yield __await(Client.authenticatedGet(url, accessToken, params));
                    if (!("end" in response)) {
                        break;
                    }
                    yield yield __await(response);
                    end = response.end;
                }
            });
        }
        return messagesGenerator;
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
        const editMessages = messages.filter(message => (message === null || message === void 0 ? void 0 : message.content) && "m.new_content" in message.content);
        const toBeEditedMessageIds = editMessages.map(message => (message === null || message === void 0 ? void 0 : message.content) &&
            "m.relates_to" in message.content &&
            message.content["m.relates_to"].event_id);
        const originalMessagesToBeEdited = messages.filter(message => toBeEditedMessageIds.includes(message.event_id));
        const originalMessagesStayingTheSame = messages.filter(message => !toBeEditedMessageIds.includes(message.event_id));
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
}
exports.Room = Room;
