import { authenticatedGet, authenticatedPut, login, Client } from './lib';
require('dotenv').config();

const baseUrl = process.env.BASE_URL || "https://matrix.org";
const accessToken = process.env.ACCESS_TOKEN!;
const testRoomId = process.env.TEST_ROOM!;
const username = process.env.USERNAME!;
const password = process.env.PASSWORD!;

test("authenticated fetch returns something", async () => {
  const url = "https://matrix.org/_matrix/client/v3/joined_rooms";
  const response = await authenticatedGet(accessToken)(url);
  // console.log(response);
  expect(response).toBeTruthy();
})

test("authenticated put returns something", async () => {
  const url = `${baseUrl}/_matrix/client/v3/rooms/${testRoomId}/send/m.room.message/m1594032550.2`;
  const body = {
    "msgtype": "m.text",
    "body": "Hello world"
  };
  const response = await authenticatedPut(accessToken, body)(url);
  // console.log(response);
  expect(response).toBeTruthy();
})

test("getJoinedRooms returns something", async () => {
  const client = new Client(baseUrl, accessToken);
  const response = await client.getJoinedRooms();
  expect(response).toBeTruthy();
})

test("getRoomMessages returns something", async () => {
  const client = new Client(baseUrl, accessToken);
  const response = await client.getRoomMessages(testRoomId);
  // console.log(response);
  expect(response).toBeTruthy();
})

test("sendRoomMessage returns something", async () => {
  const client = new Client(baseUrl, accessToken);
  const response = await client.sendRoomMessage(testRoomId, "Hello world");
  // console.log(response);
  expect(response).toBeTruthy();
})

test("login returns something", async () => {
  const response = await login(username, password)(baseUrl);
  // console.log(response);
  expect(response).toBeTruthy();
})
