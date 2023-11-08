import { authenticatedGet, authenticatedPut, Client } from './lib';
require('dotenv').config();

test("authenticated fetch returns something", async () => {
  const url = "https://matrix.org/_matrix/client/v3/joined_rooms";
  const accessToken = process.env.ACCESS_TOKEN!;
  // console.log(accessToken);
  const response = await authenticatedGet(accessToken)(url);
  // console.log(response);
  expect(response).toBeTruthy();
})

test("authenticated put returns something", async () => {
  const url = "https://matrix.org/_matrix/client/v3/rooms/!hEWUIwyRDGoKDhbqWD:matrix.org/send/m.room.message/m1594032550.2";
  const accessToken = process.env.ACCESS_TOKEN!;
  const body = {
    "msgtype": "m.text",
    "body": "Hello world"
  };
  const response = await authenticatedPut(accessToken, body)(url);
  // console.log(response);
  expect(response).toBeTruthy();
})

test("getJoinedRooms returns something", async () => {
  const baseUrl = "https://matrix.org";
  const accessToken = process.env.ACCESS_TOKEN!;
  const client = new Client(baseUrl, accessToken);
  const response = await client.getJoinedRooms();
  expect(response).toBeTruthy();
})

test("getRoomMessages returns something", async () => {
  const baseUrl = "https://matrix.org";
  const accessToken = process.env.ACCESS_TOKEN!;
  const client = new Client(baseUrl, accessToken);
  const roomId = "!CPzuSutiNPJKNoRNVx:matrix.org";
  const response = await client.getRoomMessages(roomId);
  // console.log(response);
  expect(response).toBeTruthy();
})

test("sendRoomMessage returns something", async () => {
  const baseUrl = "https://matrix.org";
  const accessToken = process.env.ACCESS_TOKEN!;
  const client = new Client(baseUrl, accessToken);
  const roomId = "!hEWUIwyRDGoKDhbqWD:matrix.org";
  const response = await client.sendRoomMessage(roomId, "Hello world");
  // console.log(response);
  expect(response).toBeTruthy();
})
