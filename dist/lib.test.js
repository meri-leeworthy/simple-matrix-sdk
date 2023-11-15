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
const lib_1 = require("./lib");
require('dotenv').config();
const baseUrl = process.env.BASE_URL || "https://matrix.org";
const accessToken = process.env.ACCESS_TOKEN;
const testRoomId = process.env.TEST_ROOM;
const testSpaceId = process.env.TEST_SPACE;
const username = process.env.USERNAME;
const password = process.env.PASSWORD;
test("authenticated fetch returns something", () => __awaiter(void 0, void 0, void 0, function* () {
    const url = "https://matrix.org/_matrix/client/v3/joined_rooms";
    const response = yield lib_1.Client.authenticatedGet(url, accessToken);
    // console.log(response);
    expect(response).toBeTruthy();
}));
test("authenticated put returns something", () => __awaiter(void 0, void 0, void 0, function* () {
    const url = `${baseUrl}/_matrix/client/v3/rooms/${testRoomId}/send/m.room.message/m1594032550.2`;
    const body = {
        "msgtype": "m.text",
        "body": "Hello world"
    };
    const response = yield lib_1.Client.authenticatedPut(url, accessToken, body);
    // console.log(response);
    expect(response).toBeTruthy();
}));
test("getJoinedRooms returns something", () => __awaiter(void 0, void 0, void 0, function* () {
    const client = new lib_1.Client(baseUrl, accessToken);
    const response = yield client.getJoinedRooms();
    expect(response).toBeTruthy();
}));
test("getRoomMessagesOneShot returns something", () => __awaiter(void 0, void 0, void 0, function* () {
    const client = new lib_1.Client(baseUrl, accessToken);
    const room = new lib_1.Room(testRoomId, client);
    const response = yield room.getMessagesOneShot();
    // console.log("getRoomMessagesOneShot: ", response);
    expect(response).toBeTruthy();
}));
test("getRoomMessagesOneShotParams returns something", () => __awaiter(void 0, void 0, void 0, function* () {
    const client = new lib_1.Client(baseUrl, accessToken);
    const room = new lib_1.Room(testRoomId, client);
    const response = yield room.getMessagesOneShotParams();
    // console.log("getRoomMessagesOneShotParams: ", response);
    expect(response).toBeTruthy();
}));
test("getRoomMessagesAsyncGenerator returns something", () => __awaiter(void 0, void 0, void 0, function* () {
    const client = new lib_1.Client(baseUrl, accessToken);
    const room = new lib_1.Room(testRoomId, client);
    const messagesAsyncIterator = room.getMessagesAsyncGenerator()();
    const { chunk, end } = (yield messagesAsyncIterator.next()).value;
    // console.log("getRoomMessage chunk: ", chunk);
    //seems like this bit might not be working
    // const {chunk2, end2} = (await messagesAsyncIterator.next(end)).value
    // console.log("getRoomMessage chunk2: ", chunk2);
    // console.log("getRoomMessages1: ", await response().next());
    // console.log("getRoomMessages2: ", await response().next());
    expect(chunk).toBeTruthy();
}));
test("sendRoomMessage returns something", () => __awaiter(void 0, void 0, void 0, function* () {
    const client = new lib_1.Client(baseUrl, accessToken);
    const room = new lib_1.Room(testRoomId, client);
    const response = yield room.sendMessage("Hello world");
    // console.log(response);
    expect(response).toBeTruthy();
}));
test("login returns something", () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield lib_1.Client.login(baseUrl, username, password);
    console.log(response);
    expect(response).toBeTruthy();
}));
test("getRoomType returns something", () => __awaiter(void 0, void 0, void 0, function* () {
    const client = new lib_1.Client("https://matrix.radical.directory", accessToken);
    const room = new lib_1.Room(testSpaceId, client);
    const response = yield room.getType();
    console.log("roomType response", response);
    expect(response).toBeTruthy();
}));
test("getRoomState returns something", () => __awaiter(void 0, void 0, void 0, function* () {
    const client = new lib_1.Client("https://matrix.radical.directory", accessToken);
    const room = new lib_1.Room(testSpaceId, client);
    const response = yield room.getState();
    console.log("roomState response", response);
    expect(response).toBeTruthy();
}));
