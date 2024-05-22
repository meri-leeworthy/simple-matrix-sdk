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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const client_1 = require("@/types/client");
const room_1 = require("./room");
const z = __importStar(require("zod"));
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
            const params = (0, client_1.deepConvertNumbersToStrings)(Object.assign({}, opts === null || opts === void 0 ? void 0 : opts.params));
            // return async function (url: string) {
            if (opts === null || opts === void 0 ? void 0 : opts.params) {
                const paramsString = new URLSearchParams(params).toString();
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
    static authenticatedPut(url, accessToken, body, opts) {
        return __awaiter(this, void 0, void 0, function* () {
            const fetch = (opts === null || opts === void 0 ? void 0 : opts.fetch) || (window === null || window === void 0 ? void 0 : window.fetch) || undefined;
            const params = (0, client_1.deepConvertNumbersToStrings)(Object.assign({}, opts === null || opts === void 0 ? void 0 : opts.params));
            if (opts === null || opts === void 0 ? void 0 : opts.params) {
                const paramsString = new URLSearchParams(params).toString();
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
    static authenticatedPost(url, accessToken, body, opts) {
        return __awaiter(this, void 0, void 0, function* () {
            const params = (0, client_1.deepConvertNumbersToStrings)(Object.assign({}, opts === null || opts === void 0 ? void 0 : opts.params));
            if (opts === null || opts === void 0 ? void 0 : opts.params) {
                const paramsString = new URLSearchParams(params).toString();
                url = `${url}?${paramsString}`;
            }
            const fetch = (opts === null || opts === void 0 ? void 0 : opts.fetch) || (window === null || window === void 0 ? void 0 : window.fetch) || undefined;
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
    static register(username, password, baseUrl) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(`${baseUrl}/_matrix/client/v3/register`, {
                method: "POST",
                body: JSON.stringify({
                    auth: {
                        type: "m.login.dummy",
                    },
                    username,
                    password,
                }),
            });
            const data = yield response.json();
            return data;
        });
    }
    static isUsernameAvailable(username, baseUrl) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(`${baseUrl}/_matrix/client/v3/register/available?username=${username}`);
            return response.ok;
        });
    }
    static getLoginFlows(baseUrl) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(`${baseUrl}/_matrix/client/v3/login`);
            const data = yield response.json();
            return data;
        });
    }
    getRoom(roomId) {
        return new room_1.Room(roomId, this);
    }
    buildUrl(endpoint, urlType) {
        const urlTypeOrDefault = urlType || "client/v3/";
        return `${this.baseUrl}/_matrix/${urlTypeOrDefault}${endpoint}`;
    }
    get(endpoint, params) {
        return __awaiter(this, void 0, void 0, function* () {
            const combinedParams = (0, client_1.deepConvertNumbersToStrings)(Object.assign(Object.assign({}, this.params), params));
            const urlType = combinedParams.urlType || undefined;
            if (combinedParams.debug)
                console.log("url", this.buildUrl(endpoint, urlType));
            return yield Client.authenticatedGet(this.buildUrl(endpoint, urlType), this.accessToken, {
                params: combinedParams,
                fetch: this.fetch,
            });
        });
    }
    put(endpoint, body, params) {
        return __awaiter(this, void 0, void 0, function* () {
            const combinedParams = (0, client_1.deepConvertNumbersToStrings)(Object.assign(Object.assign({}, this.params), params));
            const urlType = combinedParams.urlType || undefined;
            if (combinedParams.debug)
                console.log("url", this.buildUrl(endpoint, urlType));
            return yield Client.authenticatedPut(this.buildUrl(endpoint, urlType), this.accessToken, body, {
                params: combinedParams,
                fetch: this.fetch,
            });
        });
    }
    post(endpoint, body, params) {
        return __awaiter(this, void 0, void 0, function* () {
            const combinedParams = (0, client_1.deepConvertNumbersToStrings)(Object.assign(Object.assign({}, this.params), params));
            const urlType = combinedParams.urlType || undefined;
            if (combinedParams.debug)
                console.log("url", this.buildUrl(endpoint, urlType));
            return yield Client.authenticatedPost(this.buildUrl(endpoint, urlType), this.accessToken, body, {
                params: combinedParams,
                fetch: this.fetch,
            });
        });
    }
    getJoinedRooms() {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.get("joined_rooms");
            if ((0, client_1.is)(client_1.ErrorSchema, res) ||
                (0, client_1.is)(z.object({ joined_rooms: z.array(z.string()) }), res))
                return res;
            return client_1.schemaError;
        });
    }
    getRoomIdFromAlias(alias) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.get(`directory/room/${encodeURIComponent(alias)}`);
            if ((0, client_1.is)(client_1.ErrorSchema, res))
                return res;
            if ((0, client_1.is)(z.object({ room_id: z.string() }), res))
                return res.room_id;
            return client_1.schemaError;
        });
    }
    getProfile(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const profile = yield this.get(`profile/${userId || this.userId}/displayname`);
            if ((0, client_1.is)(client_1.ErrorSchema, profile) ||
                (0, client_1.is)(z.object({ displayname: z.string() }), profile))
                return profile;
            return client_1.schemaError;
        });
    }
    getUser3pids() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.get(`account/3pid`);
            return response;
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
    joinRoom(roomIdOrAlias) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.post(`join/${roomIdOrAlias}`, {});
        });
    }
    leaveRoom(roomId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.post(`rooms/${roomId}/leave`, {});
        });
    }
    createRoom(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const roomId = yield this.post("createRoom", body);
            if ((0, client_1.is)(client_1.ErrorSchema, roomId))
                return roomId;
            if ((0, client_1.is)(z.object({ room_id: z.string() }), roomId)) {
                try {
                    const room = new room_1.Room(roomId.room_id, this);
                    return room;
                }
                catch (e) {
                    return { errcode: "Received strange roomId", error: roomId.room_id };
                }
            }
            return client_1.schemaError;
        });
    }
    add3pid(body, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const unauthorised = yield this.post("account/3pid/add", body);
            if ((0, client_1.is)(client_1.ErrorSchema, unauthorised))
                return unauthorised;
            if (!(0, client_1.is)(z.object({ session: z.any(), flows: z.any() }), unauthorised))
                return client_1.schemaError;
            const { session, flows } = unauthorised;
            console.log(flows);
            const next = yield this.post("account/3pid/add", {
                sid: body.sid,
                client_secret: body.client_secret,
                auth: {
                    session,
                    type: "m.login.password",
                    user: this.userId,
                    password,
                },
            });
            console.log("next", next);
        });
    }
    requestTokenEmail(email, clientSecret, sendAttempt = 1) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.post("register/email/requestToken", {
                email,
                client_secret: clientSecret,
                send_attempt: sendAttempt,
            });
            return response;
        });
    }
}
exports.Client = Client;
