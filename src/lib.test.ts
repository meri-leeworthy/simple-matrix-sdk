import { authenticatedGet, authenticatedPut, login, Client, Room } from './lib';
require('dotenv').config();

const baseUrl = process.env.BASE_URL || "https://matrix.org";
const accessToken = process.env.ACCESS_TOKEN!;
const testRoomId = process.env.TEST_ROOM!;
const username = process.env.USERNAME!;
const password = process.env.PASSWORD!;

test("authenticated fetch returns something", async () => {
  const url = "https://matrix.org/_matrix/client/v3/joined_rooms";
  const response = await authenticatedGet(url, accessToken);
  // console.log(response);
  expect(response).toBeTruthy();
})

test("authenticated put returns something", async () => {
  const url = `${baseUrl}/_matrix/client/v3/rooms/${testRoomId}/send/m.room.message/m1594032550.2`;
  const body = {
    "msgtype": "m.text",
    "body": "Hello world"
  };
  const response = await authenticatedPut(url, accessToken, body);
  // console.log(response);
  expect(response).toBeTruthy();
})

test("getJoinedRooms returns something", async () => {
  const client = new Client(baseUrl, accessToken);
  const response = await client.getJoinedRooms();
  expect(response).toBeTruthy();
})

test("getRoomMessagesOneShot returns something", async () => {
  const client = new Client(baseUrl, accessToken);
  const room = new Room(testRoomId, client)
  const response = await room.getRoomMessagesOneShot();
  console.log("getRoomMessagesOneShot: ", response);
  expect(response).toBeTruthy();
})

test("getRoomMessagesOneShotParams returns something", async () => {
  const client = new Client(baseUrl, accessToken);
  const room = new Room(testRoomId, client)
  const response = await room.getRoomMessagesOneShotParams();
  console.log("getRoomMessagesOneShotParams: ", response);
  expect(response).toBeTruthy();
})

test("getRoomMessagesAsyncGenerator returns something", async () => {
  const client = new Client(baseUrl, accessToken);
  const room = new Room(testRoomId, client)
  const messagesAsyncIterator = room.getRoomMessagesAsyncGenerator()();
  const {chunk, end} = (await messagesAsyncIterator.next()).value;
  console.log("getRoomMessage chunk: ", chunk);

  //seems like this bit might not be working
  const {chunk2, end2} = (await messagesAsyncIterator.next(end)).value
  console.log("getRoomMessage chunk2: ", chunk2);
  // console.log("getRoomMessages1: ", await response().next());
  // console.log("getRoomMessages2: ", await response().next());
  expect(chunk).toBeTruthy();
})

test("sendRoomMessage returns something", async () => {
  const client = new Client(baseUrl, accessToken);
  const room = new Room(testRoomId, client)
  const response = await room.sendRoomMessage("Hello world");
  // console.log(response);
  expect(response).toBeTruthy();
})

test("login returns something", async () => {
  const response = await login(baseUrl, username, password);
  console.log(response);
  expect(response).toBeTruthy();
})
