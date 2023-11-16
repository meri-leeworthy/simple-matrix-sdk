import { Client, Room } from './lib';
require('dotenv').config();

const baseUrl = process.env.BASE_URL || "https://matrix.org";
const accessToken = process.env.ACCESS_TOKEN!;
const testRoomId = process.env.TEST_ROOM!;
const testSpaceId = process.env.TEST_SPACE!;
const username = process.env.USERNAME!;
const password = process.env.PASSWORD!;
const userId = `@${username}:${baseUrl.split("//")[1]}`;

test("authenticated fetch returns something", async () => {
  const url = "https://matrix.org/_matrix/client/v3/joined_rooms";
  const response = await Client.authenticatedGet(url, accessToken);
  // console.log(response);
  expect(response).toBeTruthy();
})

test("authenticated put returns something", async () => {
  const url = `${baseUrl}/_matrix/client/v3/rooms/${testRoomId}/send/m.room.message/m1594032550.2`;
  const body = {
    "msgtype": "m.text",
    "body": "Hello world"
  };
  const response = await Client.authenticatedPut(url, accessToken, body);
  // console.log(response);
  expect(response).toBeTruthy();
})

test("getJoinedRooms returns something", async () => {
  const client = new Client(baseUrl, accessToken, userId);
  const response = await client.getJoinedRooms();
  expect(response).toBeTruthy();
})

test("getRoomMessagesOneShot returns something", async () => {
  const client = new Client(baseUrl, accessToken, userId);
  const room = new Room(testRoomId, client)
  const response = await room.getMessagesOneShot();
  // console.log("getRoomMessagesOneShot: ", response);
  expect(response).toBeTruthy();
})

test("getRoomMessagesOneShotParams returns something", async () => {
  const client = new Client(baseUrl, accessToken, userId);
  const room = new Room(testRoomId, client)
  const response = await room.getMessagesOneShotParams();
  // console.log("getRoomMessagesOneShotParams: ", response);
  expect(response).toBeTruthy();
})

test("getRoomMessagesAsyncGenerator returns something", async () => {
  const client = new Client(baseUrl, accessToken, userId);
  const room = new Room(testRoomId, client)
  const messagesAsyncIterator = room.getMessagesAsyncGenerator()();
  const {chunk, end} = (await messagesAsyncIterator.next()).value;
  // console.log("getRoomMessage chunk: ", chunk);

  //seems like this bit might not be working
  // const {chunk2, end2} = (await messagesAsyncIterator.next(end)).value
  // console.log("getRoomMessage chunk2: ", chunk2);
  // console.log("getRoomMessages1: ", await response().next());
  // console.log("getRoomMessages2: ", await response().next());
  expect(chunk).toBeTruthy();
})

test("sendRoomMessage returns something", async () => {
  const client = new Client(baseUrl, accessToken, userId);
  const room = new Room(testRoomId, client)
  const response = await room.sendMessage("Hello world");
  // console.log(response);
  expect(response).toBeTruthy();
})

test("login returns something", async () => {
  const response = await Client.login(baseUrl, username, password);
  console.log(response);
  expect(response).toBeTruthy();
})

test ("getRoomType returns something", async () => {
  const client = new Client("https://matrix.radical.directory", accessToken, "@meri:radical.directory");
  const room = new Room(testSpaceId, client)
  const response = await room.getType();
  console.log("roomType response", response);
  expect(response).toBeTruthy();
})

test ("getRoomState returns something", async () => {
  const client = new Client("https://matrix.radical.directory", accessToken, "@meri:radical.directory");
  const room = new Room(testSpaceId, client)
  const response = await room.getState();
  console.log("roomState response", response);
  expect(response).toBeTruthy();
})