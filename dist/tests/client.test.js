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
const src_1 = require("../src");
require("dotenv").config();
const baseUrl = process.env.BASE_URL || "https://matrix.org";
const accessToken = process.env.ACCESS_TOKEN;
const testRoomId = process.env.TEST_ROOM;
//meri's matrix.org acc
const username = process.env.USERNAME;
const password = process.env.PASSWORD;
const userId = `@${username}:${baseUrl.split("//")[1]}`;
//open letter acc
const rdAccessToken = process.env.RD_ACCESS_TOKEN;
const rdUserId = process.env.RD_USER_ID;
describe("Test Static Methods", () => {
    test("authenticated fetch returns something", () => __awaiter(void 0, void 0, void 0, function* () {
        const url = "https://matrix.org/_matrix/client/v3/joined_rooms";
        const response = yield src_1.Client.authenticatedGet(url, accessToken);
        // console.log(response);
        expect(response).toBeTruthy();
    }));
    test("authenticated put returns something", () => __awaiter(void 0, void 0, void 0, function* () {
        const url = `${baseUrl}/_matrix/client/v3/rooms/${testRoomId}/send/m.room.message/m1594032550.2`;
        const body = {
            msgtype: "m.text",
            body: "Hello world",
        };
        const response = yield src_1.Client.authenticatedPut(url, accessToken, body);
        // console.log(response);
        expect(response).toBeTruthy();
    }));
    test("login returns something", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield src_1.Client.login(baseUrl, username, password);
        console.log(response);
        expect(response).toBeTruthy();
    }));
});
// test ("getRoomType returns something", async () => {
//   const client = new Client("https://matrix.radical.directory", accessToken, "@meri:radical.directory");
//   const room = new Room(testSpaceId, client)
//   const response = await room.getType();
//   console.log("roomType response", response);
//   expect(response).toBeTruthy();
// })
describe("Test Client Getter Methods", () => {
    test("getJoinedRooms returns something", () => __awaiter(void 0, void 0, void 0, function* () {
        const client = new src_1.Client(baseUrl, accessToken, { userId });
        const response = yield client.getJoinedRooms();
        expect(response).toBeTruthy();
    }));
    test("getProfile returns something", () => __awaiter(void 0, void 0, void 0, function* () {
        const client = new src_1.Client("https://matrix.radical.directory", rdAccessToken, {
            userId: rdUserId,
        });
        const response = yield client.getProfile(rdUserId);
        console.log("getProfile", response);
        expect(response).toBeTruthy();
    }));
});
