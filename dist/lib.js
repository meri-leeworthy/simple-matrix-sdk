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
class Client {
    constructor(baseUrl, accessToken, opts) {
        this.baseUrl = baseUrl;
        this.accessToken = accessToken;
        this.params = (opts === null || opts === void 0 ? void 0 : opts.params) || {};
        this.userId = (opts === null || opts === void 0 ? void 0 : opts.userId) || "";
        this.fetch = (opts === null || opts === void 0 ? void 0 : opts.fetch) || (window === null || window === void 0 ? void 0 : window.fetch) || undefined;
    }
    static authenticatedGet(url, accessToken, opts) {
        return __awaiter(this, void 0, void 0, function* () {
            const params = Object.assign({}, opts === null || opts === void 0 ? void 0 : opts.params);
            // return async function (url: string) {
            if (opts === null || opts === void 0 ? void 0 : opts.params) {
                const paramsString = new URLSearchParams(opts.params).toString();
                url = `${url}?${paramsString}`;
            }
            const fetch = (opts === null || opts === void 0 ? void 0 : opts.fetch) || (window === null || window === void 0 ? void 0 : window.fetch) || undefined;
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
    static authenticatedPut(url, accessToken, body, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const fetch = (options === null || options === void 0 ? void 0 : options.fetch) || (window === null || window === void 0 ? void 0 : window.fetch) || undefined;
            if (options === null || options === void 0 ? void 0 : options.params) {
                const paramsString = new URLSearchParams(options.params).toString();
                url = `${url}?${paramsString}`;
            }
            if (!fetch)
                return;
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
    static authenticatedPost(url, accessToken, body, options) {
        return __awaiter(this, void 0, void 0, function* () {
            if (options === null || options === void 0 ? void 0 : options.params) {
                const paramsString = new URLSearchParams(options.params).toString();
                url = `${url}?${paramsString}`;
            }
            const fetch = (options === null || options === void 0 ? void 0 : options.fetch) || (window === null || window === void 0 ? void 0 : window.fetch) || undefined;
            const response = yield fetch(url, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
                body: JSON.stringify(body),
            });
            const data = yield response.json();
            return data;
        });
    }
    static login(baseUrl, username, password, fetch) {
        return __awaiter(this, void 0, void 0, function* () {
            const fetcher = fetch || (window === null || window === void 0 ? void 0 : window.fetch) || undefined;
            const response = yield fetcher(`${baseUrl}/_matrix/client/v3/login`, {
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
    useBaseUrl() {
        return this.baseUrl;
    }
    useUserId() {
        return this.userId;
    }
    buildUrl(endpoint) {
        return `${this.baseUrl}/_matrix/client/v3/${endpoint}`;
    }
    get(endpoint, params) {
        return __awaiter(this, void 0, void 0, function* () {
            const combinedParams = Object.assign(Object.assign({}, this.params), params);
            return yield Client.authenticatedGet(this.buildUrl(endpoint), this.accessToken, {
                params: combinedParams,
                fetch: this.fetch,
            });
        });
    }
    put(endpoint, body, params) {
        return __awaiter(this, void 0, void 0, function* () {
            const combinedParams = Object.assign(Object.assign({}, this.params), params);
            return yield Client.authenticatedPut(this.buildUrl(endpoint), this.accessToken, body, {
                params: combinedParams,
                fetch: this.fetch,
            });
        });
    }
    post(endpoint, body, params) {
        return __awaiter(this, void 0, void 0, function* () {
            const combinedParams = Object.assign(Object.assign({}, this.params), params);
            return yield Client.authenticatedPost(this.buildUrl(endpoint), this.accessToken, body, {
                params: combinedParams,
                fetch: this.fetch,
            });
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
    // async createMediaId(): Promise<any> {
    //   return await Client.authenticatedPost(
    //     `${this.baseUrl}/_matrix/media/r0/createContent`,
    //     this.accessToken,
    //     {}
    //   )
    // }
    uploadFile(file) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = `${this.baseUrl}/_matrix/media/v3/upload`;
            const response = yield fetch(url, {
                method: "POST",
                body: file,
                headers: {
                    Authorization: `Bearer ${this.accessToken}`,
                    "Content-Type": "application/octet-stream",
                },
            });
            const data = yield response.json();
            return data;
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
    get(endpoint, params) {
        return __awaiter(this, void 0, void 0, function* () {
            const combinedParams = Object.assign(Object.assign({}, this.client.params), params);
            return yield Client.authenticatedGet(this.client.buildUrl(endpoint + "/rooms/" + this.roomId), this.client.accessToken, {
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
    // returned async generator function produces an iterator with a provided endpoint parameter
    // the resulting iterator can be called repeatedly to paginate through the messages
    getMessagesAsyncGenerator(direction, limit) {
        const dir = direction || "b";
        const lim = limit || 100;
        const fetch = this.client.fetch;
        const accessToken = this.client.accessToken;
        const clientParams = this.client.params;
        const url = this.client.buildUrl(`rooms/${this.roomId}/messages`);
        function messagesGenerator(end) {
            return __asyncGenerator(this, arguments, function* messagesGenerator_1() {
                console.log("end", end);
                while (true) {
                    let params = Object.assign(Object.assign({}, clientParams), { dir, limit: `${lim}` });
                    if (end) {
                        params["from"] = end;
                    }
                    const response = yield __await(Client.authenticatedGet(url, accessToken, {
                        params,
                        fetch,
                    }));
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
}
exports.Room = Room;
