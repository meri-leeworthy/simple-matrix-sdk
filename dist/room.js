"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const z = __importStar(require("zod"));
const client_1 = require("./client");
const _1 = require(".");
const content_1 = require("./types/content");
const client_2 = require("./types/client");
const event_1 = require("./types/event");
const utils_1 = require("./types/utils");
const hierarchy_1 = require("./types/hierarchy");
class Room {
    constructor(roomId, client) {
        z.string()
            .trim()
            .startsWith("!")
            .regex(/![a-zA-Z0-9]*:([a-zA-Z0-9]+(\.[a-zA-Z0-9]+)*)/)
            .parse(roomId);
        this.roomId = roomId;
        this.client = client;
    }
    get(endpoint, params) {
        return __awaiter(this, void 0, void 0, function* () {
            const combinedParams = Object.assign(Object.assign({}, this.client.params), params);
            return yield this.client.get("rooms/" + this.roomId + "/" + endpoint, combinedParams);
        });
    }
    getName() {
        return __awaiter(this, void 0, void 0, function* () {
            const name = yield this.client.get(`rooms/${this.roomId}/state/m.room.name`);
            if ((0, utils_1.is)(client_2.ErrorSchema, name))
                return name;
            if (!(0, utils_1.is)(z.object({ name: z.string() }), name))
                return utils_1.schemaError;
            this.name = name.name;
            return name;
        });
    }
    getMembers() {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.get(`members`, { debug: "true" });
            if ((0, utils_1.is)(client_2.ErrorSchema, res) ||
                (0, utils_1.is)(z.object({ chunk: z.array(event_1.ClientEventSchema) }), res))
                return res;
            return utils_1.schemaError;
        });
    }
    getState() {
        return __awaiter(this, void 0, void 0, function* () {
            const state = yield this.client.get(`rooms/${this.roomId}/state`);
            if ((0, utils_1.is)(client_2.ErrorSchema, state))
                return state;
            if ((0, utils_1.is)(z.array(event_1.ClientEventSchema), state))
                return new _1.State(state);
            return utils_1.schemaError;
        });
    }
    getMessages(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.client.get(`rooms/${this.roomId}/messages`, Object.assign(Object.assign({}, this.client.params), params));
            if ((0, utils_1.is)(z.object({ chunk: z.array(event_1.ClientEventSchema) }), res)) {
                return res;
            }
            if ((0, utils_1.is)(client_2.ErrorSchema, res))
                return res;
            return utils_1.schemaError;
        });
    }
    getEvent(eventId) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.client.get(`rooms/${this.roomId}/event/${eventId}`);
            if ((0, utils_1.is)(client_2.ErrorSchema, res) || (0, utils_1.is)(event_1.ClientEventSchema, res))
                return res;
            return utils_1.schemaError;
        });
    }
    getRelations(eventId, params, relType, eventType) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.get(`rooms/${this.roomId}/relations/${eventId}${relType && "/" + relType}${eventType && "/" + eventType}`, Object.assign(Object.assign({}, this.client.params), params));
        });
    }
    getStateEvent(type, stateKey) {
        return __awaiter(this, void 0, void 0, function* () {
            // const response = await this.client.get(
            //   `rooms/${this.roomId}/state/${type}/${stateKey}`
            // )
            // if ("error" in ClientEventSchema.safeParse(response)) return response
            const fullState = yield this.getState();
            if ("errcode" in fullState)
                return fullState;
            const stateEvent = fullState.get(type, stateKey);
            return stateEvent;
        });
    }
    getPowerLevels() {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.client.get(`rooms/${this.roomId}/state/m.room.power_levels`);
            if ((0, utils_1.is)(z.object({
                users: z.record(z.number()),
                events: z.record(z.number()),
                state_default: z.number(),
            }), res) ||
                (0, utils_1.is)(client_2.ErrorSchema, res))
                return res;
            return utils_1.schemaError;
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
            if ((0, utils_1.is)(client_2.ErrorSchema, powerLevels))
                return powerLevels;
            const events = powerLevels.events;
            const newEvents = Object.assign(Object.assign({}, events), { [eventType]: powerLevel });
            console.log("newEvents", newEvents); // needs checking :)
            const newPowerLevels = Object.assign(Object.assign({}, powerLevels), { events: newEvents });
            return this.client.put(`rooms/${this.roomId}/state/m.room.power_levels`, newPowerLevels);
        });
    }
    getUserPowerLevel() {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.getPowerLevels();
            if ((0, utils_1.is)(client_2.ErrorSchema, res))
                return res;
            return res.users[this.client.userId];
        });
    }
    setUserPowerLevel(userId, powerLevel) {
        return __awaiter(this, void 0, void 0, function* () {
            if (powerLevel < 0 || powerLevel > 100) {
                throw new Error("Power level must be between 0 and 100");
            }
            const powerLevels = yield this.getPowerLevels();
            if ((0, utils_1.is)(client_2.ErrorSchema, powerLevels))
                return powerLevels;
            const users = powerLevels.users;
            const newUsers = Object.assign(Object.assign({}, users), { [userId]: powerLevel });
            const newPowerLevels = Object.assign(Object.assign({}, powerLevels), { users: newUsers });
            return this.client.put(`rooms/${this.roomId}/state/m.room.power_levels`, newPowerLevels);
        });
    }
    getHierarchy(opts) {
        return __awaiter(this, void 0, void 0, function* () {
            const params = { urlType: "client/v1/" };
            const max_depth = (opts === null || opts === void 0 ? void 0 : opts.max_depth) && opts.max_depth > 0
                ? Math.floor(opts.max_depth).toString()
                : undefined;
            const limit = (opts === null || opts === void 0 ? void 0 : opts.limit) && opts.limit > 0 ? Math.floor(opts.limit).toString() : "100";
            const from = opts === null || opts === void 0 ? void 0 : opts.from;
            const suggested_only = opts === null || opts === void 0 ? void 0 : opts.suggested_only;
            if (max_depth)
                params["max_depth"] = max_depth;
            if (limit)
                params["limit"] = limit;
            if (from)
                params["from"] = from;
            if (suggested_only)
                params["suggested_only"] = "true";
            const res = yield this.client.get(`rooms/${this.roomId}/hierarchy`, params);
            if ((0, utils_1.is)(client_2.ErrorSchema, res))
                return res;
            if ((0, utils_1.is)(hierarchy_1.GetHierarchyResponse, res))
                return res.rooms;
            return utils_1.schemaError;
        });
    }
    isUserModerator(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const powerLevels = yield this.getPowerLevels();
            if ((0, utils_1.is)(client_2.ErrorSchema, powerLevels))
                return false;
            console.log("powerLevels", powerLevels);
            if (!this.client.userId)
                return false;
            const userPowerLevel = powerLevels.users[userId || this.client.userId];
            const modPowerLevel = powerLevels.events["m.room.power_levels"] ||
                powerLevels.state_default ||
                50;
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
                // console.log("end", from)
                while (true) {
                    let params = Object.assign(Object.assign({}, clientParams), { dir, limit: `${lim}` });
                    if (from) {
                        params["from"] = from;
                    }
                    const res = yield __await(client_1.Client.authenticatedGet(url, accessToken, {
                        params,
                        fetch,
                    }));
                    if (typeof res !== "object" ||
                        !res ||
                        !("end" in res) ||
                        typeof res.end !== "string") {
                        break;
                    }
                    yield yield __await(res);
                    from = res.end;
                }
            });
        }
        return messagesGenerator();
    }
    sendMessage(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.client.put(`rooms/${this.roomId}/send/m.room.message/${Date.now()}`, body);
            if ((0, utils_1.is)(client_2.ErrorSchema, res) || (0, utils_1.is)(z.object({ event_id: z.string() }), res))
                return res;
            return utils_1.schemaError;
        });
    }
    sendEvent(type, body) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.client.put(`rooms/${this.roomId}/send/${type}/${Date.now()}`, body);
            if ((0, utils_1.is)(client_2.ErrorSchema, res) || (0, utils_1.is)(z.object({ event_id: z.string() }), res))
                return res;
            return utils_1.schemaError;
        });
    }
    sendStateEvent(type, body, stateKey) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.client.put(`rooms/${this.roomId}/state/${type}/${stateKey || ""}`, body);
            if ((0, utils_1.is)(client_2.ErrorSchema, res) || (0, utils_1.is)(z.object({ event_id: z.string() }), res))
                return res;
            return utils_1.schemaError;
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
    getAvatarMxc() {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.client.get(`rooms/${this.roomId}/state/m.room.avatar`);
            if ((0, utils_1.is)(client_2.ErrorSchema, res))
                return res;
            if ((0, utils_1.is)(z.object({ url: z.string() }), res))
                return res.url;
            return utils_1.schemaError;
        });
    }
    getAliases() {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.client.get(`rooms/${this.roomId}/aliases`);
            if ((0, utils_1.is)(client_2.ErrorSchema, res) || (0, utils_1.is)(z.array(z.string()), res))
                return res;
            return utils_1.schemaError;
        });
    }
    getCanonicalAlias() {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.client.get(`rooms/${this.roomId}/state/m.room.canonical_alias`);
            if ((0, utils_1.is)(client_2.ErrorSchema, res) || (0, utils_1.is)(z.object({ alias: z.string() }), res))
                return res;
            return utils_1.schemaError;
        });
    }
    setAlias(alias) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.put(`directory/room/${encodeURIComponent(alias)}`, {
                room_id: this.roomId,
            });
        });
    }
    deleteAlias(alias) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.client.delete(`directory/room/${alias}`, {});
            if ((0, utils_1.is)(client_2.ErrorSchema, res) || (0, utils_1.is)(z.object({}), res))
                return res;
            return utils_1.schemaError;
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
        const editMessages = messages.filter(message => (message === null || message === void 0 ? void 0 : message.content) &&
            typeof message.content === "object" &&
            message.content !== null &&
            "m.new_content" in message.content &&
            content_1.EventContentSchema.safeParse(message.content).success);
        const toBeEditedMessageIds = editMessages.map(message => {
            var _a;
            return (0, utils_1.is)(content_1.EventContentSchema, message.content) &&
                ((_a = message.content["m.relates_to"]) === null || _a === void 0 ? void 0 : _a.event_id);
        });
        const originalMessagesToBeEdited = messages.filter(message => toBeEditedMessageIds.includes(message.event_id));
        const originalMessagesStayingTheSame = messages.filter(message => !toBeEditedMessageIds.includes(message.event_id) &&
            !((0, utils_1.is)(content_1.EventContentSchema, message.content) &&
                message.content["m.relates_to"] &&
                "rel_type" in message.content["m.relates_to"] &&
                message.content["m.relates_to"]["rel_type"] === "m.replace"));
        const originalMessagesWithEditedBodies = originalMessagesToBeEdited.map(message => {
            const thisEditedMessage = editMessages.find(editMessage => {
                var _a;
                return (0, utils_1.is)(content_1.EventContentSchema, editMessage.content) &&
                    ((_a = editMessage.content["m.relates_to"]) === null || _a === void 0 ? void 0 : _a.event_id) === message.event_id;
            });
            const existingContent = (0, utils_1.is)(content_1.EventContentSchema, message.content)
                ? message.content
                : {};
            const editedContent = (0, utils_1.is)(content_1.EventContentSchema, thisEditedMessage === null || thisEditedMessage === void 0 ? void 0 : thisEditedMessage.content)
                ? thisEditedMessage === null || thisEditedMessage === void 0 ? void 0 : thisEditedMessage.content
                : {};
            // "m.new_content" in thisEditedMessage.content &&
            // thisEditedMessage.content["m.new_content"].body
            return Object.assign(Object.assign({}, message), { content: Object.assign(Object.assign({}, existingContent), editedContent) });
        });
        return [
            ...originalMessagesStayingTheSame,
            ...originalMessagesWithEditedBodies,
        ];
    }
    static deleteEditedMessages(messages) {
        const rootEvents = new Map();
        messages.forEach(message => {
            var _a;
            if ((0, utils_1.is)(content_1.EventContentSchema, message.content)) {
                const id = ((_a = message.content["m.relates_to"]) === null || _a === void 0 ? void 0 : _a.event_id) || "";
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
