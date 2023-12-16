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
// radical directory space
const testSpaceId = process.env.TEST_SPACE;
//meri's matrix.org acc
const username = process.env.USERNAME;
const password = process.env.PASSWORD;
const userId = `@${username}:${baseUrl.split("//")[1]}`;
//rd testing acc
const rdTestUserId = process.env.RD_TEST_USER_ID;
const rdTestAccessToken = process.env.RD_TEST_ACCESS_TOKEN;
const rdTestRoomId = process.env.RD_TEST_ROOM;
const rdTestSpaceId = process.env.RD_TEST_SPACE;
//open letter acc
const rdAccessToken = process.env.RD_ACCESS_TOKEN;
const rdUserId = process.env.RD_USER_ID;
describe("Test Room Static Messages Methods", () => {
    let client;
    let room;
    beforeEach(() => {
        client = new src_1.Client(baseUrl, accessToken, { userId });
        room = new src_1.Room(testRoomId, client);
    });
    test("getRoomMessagesOneShot returns something", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (room === null || room === void 0 ? void 0 : room.getMessagesOneShot());
        // console.log("getRoomMessagesOneShot: ", response);
        expect(response).toBeTruthy();
    }));
    test("getRoomMessagesOneShotParams returns something", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (room === null || room === void 0 ? void 0 : room.getMessagesOneShotParams({}));
        // console.log("getRoomMessagesOneShotParams: ", response);
        expect(response).toBeTruthy();
    }));
    test("getRoomMessagesAsyncGenerator returns something", () => __awaiter(void 0, void 0, void 0, function* () {
        const messagesAsyncIterator = room === null || room === void 0 ? void 0 : room.getMessagesAsyncGenerator();
        const response = yield (messagesAsyncIterator === null || messagesAsyncIterator === void 0 ? void 0 : messagesAsyncIterator.next());
        console.log("getRoomMessage chunk: ", response);
        //seems like this bit might not be working
        // const { chunk2, end2 } = (await messagesAsyncIterator.next(end)).value
        // console.log("getRoomMessage chunk2: ", chunk2)
        // console.log("getRoomMessages1: ", await response().next());
        // console.log("getRoomMessages2: ", await response().next());
        expect(response).toBeTruthy();
    }));
    test("sendRoomMessage returns something", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (room === null || room === void 0 ? void 0 : room.sendMessage("Hello world"));
        // console.log(response);
        expect(response).toBeTruthy();
    }));
    afterEach(() => {
        client = null;
        room = null;
    });
});
describe("Test Room Static State Methods", () => {
    let client;
    let room;
    beforeEach(() => {
        client = new src_1.Client(baseUrl, accessToken, { userId });
        room = new src_1.Room(testRoomId, client);
    });
    test("getRoomState returns something", () => __awaiter(void 0, void 0, void 0, function* () {
        const client = new src_1.Client("https://matrix.radical.directory", rdAccessToken, {
            userId: "@meri:radical.directory",
        });
        const room = new src_1.Room(testSpaceId, client);
        const response = yield room.getState();
        console.log("roomState response", response);
        expect(response).toBeTruthy();
    }));
    test("setName returns something", () => __awaiter(void 0, void 0, void 0, function* () {
        const client = new src_1.Client("https://matrix.radical.directory", rdTestAccessToken, { userId: rdTestUserId });
        const room = new src_1.Room(rdTestRoomId, client);
        const response = yield room.setName("Test Name");
        console.log("setName", response);
        expect(response).toBeTruthy();
    }));
    test("setTopic returns something", () => __awaiter(void 0, void 0, void 0, function* () {
        const client = new src_1.Client("https://matrix.radical.directory", rdTestAccessToken, { userId: rdTestUserId });
        const room = new src_1.Room(rdTestRoomId, client);
        const response = yield room.setTopic("Test Topic");
        console.log("setTopic", response);
        expect(response).toBeTruthy();
    }));
    test("sendStateEvent returns something", () => __awaiter(void 0, void 0, void 0, function* () {
        const client = new src_1.Client("https://matrix.radical.directory", rdTestAccessToken, { userId: rdTestUserId });
        const room = new src_1.Room(rdTestRoomId, client);
        const response = yield room.sendStateEvent("m.room.name", {
            name: "Test State Event",
        });
        console.log("sendStateEvent", response);
        expect(response).toBeTruthy();
    }));
    test("isUserModerator returns something", () => __awaiter(void 0, void 0, void 0, function* () {
        const client = new src_1.Client("https://matrix.radical.directory", rdTestAccessToken, { userId: rdTestUserId });
        const room = new src_1.Room(rdTestRoomId, client);
        const response = yield room.isUserModerator();
        console.log("isUserModerator", response);
        expect(response).toBeTruthy();
    }));
    afterEach(() => {
        client = null;
        room = null;
    });
});
test("sendEvent returns something", () => __awaiter(void 0, void 0, void 0, function* () {
    const client = new src_1.Client("https://matrix.radical.directory", rdTestAccessToken, { userId: rdTestUserId });
    const room = new src_1.Room(rdTestRoomId, client);
    const response = yield room.sendEvent("m.room.message", {
        body: "Test Event",
        msgtype: "m.text",
    });
    console.log("sendEvent", response);
    expect(response).toBeTruthy();
}));
