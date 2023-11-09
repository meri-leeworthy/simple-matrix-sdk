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
exports.Client = exports.login = exports.authenticatedPut = exports.authenticatedGet = void 0;
function authenticatedGet(url, accessToken, params) {
    return __awaiter(this, void 0, void 0, function* () {
        // return async function (url: string) {
        if (params) {
            const paramsString = new URLSearchParams(params).toString();
            url = `${url}?${paramsString}`;
        }
        const response = yield fetch(url, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });
        const data = yield response.json();
        return data;
        // }
    });
}
exports.authenticatedGet = authenticatedGet;
function authenticatedPut(url, accessToken, body, params) {
    return __awaiter(this, void 0, void 0, function* () {
        if (params) {
            const paramsString = new URLSearchParams(params).toString();
            url = `${url}?${paramsString}`;
        }
        const response = yield fetch(url, {
            method: 'PUT',
            headers: {
                Authorization: `Bearer ${accessToken}`
            },
            body: JSON.stringify(body)
        });
        const data = yield response.json();
        return data;
    });
}
exports.authenticatedPut = authenticatedPut;
function login(username, password) {
    return function (baseUrl) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(`${baseUrl}/_matrix/client/v3/login`, {
                method: 'POST',
                body: JSON.stringify({
                    type: 'm.login.password',
                    identifier: {
                        type: 'm.id.user',
                        user: username
                    },
                    password: password
                })
            });
            const data = yield response.json();
            if (!("access_token" in data)) {
                throw new Error("No access token in response");
            }
            return data.access_token;
        });
    };
}
exports.login = login;
// What do I want for this sdk?
// 1. A way to get a list of all the rooms I'm in
// 2. A way to get a list of all the messages in a room
// 3. A way to send a message to a room
// 4. A way to get a list of all the users in a room
class Client {
    constructor(baseUrl, accessToken) {
        this.baseUrl = baseUrl;
        this.accessToken = accessToken;
    }
    buildUrl(endpoint) {
        return `${this.baseUrl}/_matrix/client/v3/${endpoint}`;
    }
    get(endpoint, params) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield authenticatedGet(this.buildUrl(endpoint), this.accessToken, params);
        });
    }
    put(endpoint, body, params) {
        return authenticatedPut(this.buildUrl(endpoint), this.accessToken, body, params);
    }
    getJoinedRooms() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.get('joined_rooms');
        });
    }
    getRoomMessagesOneShot(roomId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.get(`rooms/${roomId}/messages`);
        });
    }
    getRoomMessagesOneShotParams(roomId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.get(`rooms/${roomId}/messages`, { dir: "b", limit: "10" });
        });
    }
    // returned async generator function produces an iterator with a provided endpoint parameter
    // the resulting iterator can be called repeatedly to paginate through the messages
    getRoomMessagesAsyncGenerator(roomId, direction, limit) {
        const dir = direction || "b";
        const lim = limit || 5;
        const accessToken = this.accessToken;
        const url = this.buildUrl(`rooms/${roomId}/messages`);
        function messagesGenerator(end) {
            return __asyncGenerator(this, arguments, function* messagesGenerator_1() {
                console.log("end", end);
                while (true) {
                    const params = { dir, limit: `${lim}` };
                    if (end) {
                        params.from = end;
                    }
                    const response = yield __await(authenticatedGet(url, accessToken, params));
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
    sendRoomMessage(roomId, body) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.put(`rooms/${roomId}/send/m.room.message/${Date.now()}`, body);
        });
    }
}
exports.Client = Client;
