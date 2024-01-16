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
exports.IdentityClient = void 0;
class IdentityClient {
    constructor(baseUrl = "https://matrix.org/_matrix/identity/v2") {
        this.baseUrl = baseUrl;
    }
    get(url) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(`${this.baseUrl}${url}`);
            const data = yield response.json();
            return data;
        });
    }
    post(url, body) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(`${this.baseUrl}${url}`, {
                method: "POST",
                body: JSON.stringify(body),
            });
            const data = yield response.json();
            return data;
        });
    }
    put(url, body) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(`${this.baseUrl}${url}`, {
                method: "PUT",
                body: JSON.stringify(body),
            });
            const data = yield response.json();
            return data;
        });
    }
}
exports.IdentityClient = IdentityClient;
