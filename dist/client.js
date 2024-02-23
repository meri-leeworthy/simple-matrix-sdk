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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const _1 = require(".");
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
                    Authorization: `Bearer ${accessToken}`
                }
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
                    Authorization: `Bearer ${accessToken}`
                },
                body: JSON.stringify(body)
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
                    Authorization: `Bearer ${accessToken}`
                },
                body: JSON.stringify(body)
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
    }
    static register(username, password, baseUrl) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(`${baseUrl}/_matrix/client/v3/register`, {
                method: "POST",
                body: JSON.stringify({
                    auth: {
                        type: "m.login.dummy"
                    },
                    username,
                    password
                })
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
        return new _1.Room(roomId, this);
    }
    buildUrl(endpoint, urlType) {
        const urlTypeOrDefault = urlType || "client/v3/";
        return `${this.baseUrl}/_matrix/${urlTypeOrDefault}${endpoint}`;
    }
    get(endpoint, params) {
        return __awaiter(this, void 0, void 0, function* () {
            const combinedParams = Object.assign(Object.assign({}, this.params), params);
            const urlType = combinedParams.urlType || undefined;
            if (combinedParams.debug)
                console.log("url", this.buildUrl(endpoint, urlType));
            return yield Client.authenticatedGet(this.buildUrl(endpoint, urlType), this.accessToken, {
                params: combinedParams,
                fetch: this.fetch
            });
        });
    }
    put(endpoint, body, params) {
        return __awaiter(this, void 0, void 0, function* () {
            const combinedParams = Object.assign(Object.assign({}, this.params), params);
            const urlType = combinedParams.urlType || undefined;
            if (combinedParams.debug)
                console.log("url", this.buildUrl(endpoint, urlType));
            return yield Client.authenticatedPut(this.buildUrl(endpoint, urlType), this.accessToken, body, {
                params: combinedParams,
                fetch: this.fetch
            });
        });
    }
    post(endpoint, body, params) {
        return __awaiter(this, void 0, void 0, function* () {
            const combinedParams = Object.assign(Object.assign({}, this.params), params);
            const urlType = combinedParams.urlType || undefined;
            if (combinedParams.debug)
                console.log("url", this.buildUrl(endpoint, urlType));
            return yield Client.authenticatedPost(this.buildUrl(endpoint, urlType), this.accessToken, body, {
                params: combinedParams,
                fetch: this.fetch
            });
        });
    }
    getJoinedRooms() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.get("joined_rooms");
        });
    }
    getRoomIdFromAlias(alias) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.get(`directory/room/${alias}`);
            return response.room_id;
        });
    }
    getProfile(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const profile = yield this.get(`profile/${userId || this.userId}/displayname`);
            return profile;
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
                    "Content-Type": "application/octet-stream"
                }
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
            if ("errcode" in roomId) {
                return roomId;
            }
            return new _1.Room(roomId.room_id, this);
        });
    }
    add3pid(body, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const unauthorised = yield this.post("account/3pid/add", body);
            const { session, flows } = unauthorised;
            console.log(flows);
            const next = yield this.post("account/3pid/add", {
                sid: body.sid,
                client_secret: body.client_secret,
                auth: {
                    session,
                    type: "m.login.password",
                    user: this.userId,
                    password
                }
            });
            console.log("next", next);
        });
    }
    requestTokenEmail(email, clientSecret, sendAttempt = 1) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.post("register/email/requestToken", {
                email,
                client_secret: clientSecret,
                send_attempt: sendAttempt
            });
            return response;
        });
    }
}
exports.Client = Client;
