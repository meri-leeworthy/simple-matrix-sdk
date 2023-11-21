import { Client, Room } from "./lib"
require("dotenv").config()

const baseUrl = process.env.BASE_URL || "https://matrix.org"
const accessToken = process.env.ACCESS_TOKEN!

const testRoomId = process.env.TEST_ROOM!

// radical directory space
const testSpaceId = process.env.TEST_SPACE!

//meri's matrix.org acc
const username = process.env.USERNAME!
const password = process.env.PASSWORD!
const userId = `@${username}:${baseUrl.split("//")[1]}`

//open letter acc
const rdAccessToken = process.env.RD_ACCESS_TOKEN!
const rdUserId = process.env.RD_USER_ID!

//rd testing acc
const rdTestUserId = process.env.RD_TEST_USER_ID!
const rdTestAccessToken = process.env.RD_TEST_ACCESS_TOKEN!
const rdTestRoomId = process.env.RD_TEST_ROOM!
const rdTestSpaceId = process.env.RD_TEST_SPACE!

test("authenticated fetch returns something", async () => {
  const url = "https://matrix.org/_matrix/client/v3/joined_rooms"
  const response = await Client.authenticatedGet(url, accessToken)
  // console.log(response);
  expect(response).toBeTruthy()
})

test("authenticated put returns something", async () => {
  const url = `${baseUrl}/_matrix/client/v3/rooms/${testRoomId}/send/m.room.message/m1594032550.2`
  const body = {
    msgtype: "m.text",
    body: "Hello world",
  }
  const response = await Client.authenticatedPut(url, accessToken, body)
  // console.log(response);
  expect(response).toBeTruthy()
})

test("getJoinedRooms returns something", async () => {
  const client = new Client(baseUrl, accessToken, userId)
  const response = await client.getJoinedRooms()
  expect(response).toBeTruthy()
})

test("getRoomMessagesOneShot returns something", async () => {
  const client = new Client(baseUrl, accessToken, userId)
  const room = new Room(testRoomId, client)
  const response = await room.getMessagesOneShot()
  // console.log("getRoomMessagesOneShot: ", response);
  expect(response).toBeTruthy()
})

test("getRoomMessagesOneShotParams returns something", async () => {
  const client = new Client(baseUrl, accessToken, userId)
  const room = new Room(testRoomId, client)
  const response = await room.getMessagesOneShotParams()
  // console.log("getRoomMessagesOneShotParams: ", response);
  expect(response).toBeTruthy()
})

test("getRoomMessagesAsyncGenerator returns something", async () => {
  const client = new Client(baseUrl, accessToken, userId)
  const room = new Room(testRoomId, client)
  const messagesAsyncIterator = room.getMessagesAsyncGenerator()()
  const { chunk, end } = (await messagesAsyncIterator.next()).value
  // console.log("getRoomMessage chunk: ", chunk);

  //seems like this bit might not be working
  // const {chunk2, end2} = (await messagesAsyncIterator.next(end)).value
  // console.log("getRoomMessage chunk2: ", chunk2);
  // console.log("getRoomMessages1: ", await response().next());
  // console.log("getRoomMessages2: ", await response().next());
  expect(chunk).toBeTruthy()
})

test("sendRoomMessage returns something", async () => {
  const client = new Client(baseUrl, accessToken, userId)
  const room = new Room(testRoomId, client)
  const response = await room.sendMessage("Hello world")
  // console.log(response);
  expect(response).toBeTruthy()
})

test("login returns something", async () => {
  const response = await Client.login(baseUrl, username, password)
  console.log(response)
  expect(response).toBeTruthy()
})

// test ("getRoomType returns something", async () => {
//   const client = new Client("https://matrix.radical.directory", accessToken, "@meri:radical.directory");
//   const room = new Room(testSpaceId, client)
//   const response = await room.getType();
//   console.log("roomType response", response);
//   expect(response).toBeTruthy();
// })

test("getRoomState returns something", async () => {
  const client = new Client(
    "https://matrix.radical.directory",
    rdAccessToken,
    "@meri:radical.directory"
  )
  const room = new Room(testSpaceId, client)
  const response = await room.getState()
  console.log("roomState response", response)
  expect(response).toBeTruthy()
})

test("getProfile returns something", async () => {
  const client = new Client(
    "https://matrix.radical.directory",
    rdAccessToken,
    rdUserId
  )
  const response = await client.getProfile(rdUserId)
  console.log("getProfile", response)
  expect(response).toBeTruthy()
})

test("setName returns something", async () => {
  const client = new Client(
    "https://matrix.radical.directory",
    rdTestAccessToken,
    rdTestUserId
  )
  const room = new Room(rdTestRoomId, client)
  const response = await room.setName("Test Name")
  console.log("setName", response)
  expect(response).toBeTruthy()
})

test("setTopic returns something", async () => {
  const client = new Client(
    "https://matrix.radical.directory",
    rdTestAccessToken,
    rdTestUserId
  )
  const room = new Room(rdTestRoomId, client)
  const response = await room.setTopic("Test Topic")
  console.log("setTopic", response)
  expect(response).toBeTruthy()
})

test("sendEvent returns something", async () => {
  const client = new Client(
    "https://matrix.radical.directory",
    rdTestAccessToken,
    rdTestUserId
  )
  const room = new Room(rdTestRoomId, client)
  const response = await room.sendEvent("m.room.message", {
    body: "Test Event",
    msgtype: "m.text",
  })
  console.log("sendEvent", response)
  expect(response).toBeTruthy()
})

test("sendStateEvent returns something", async () => {
  const client = new Client(
    "https://matrix.radical.directory",
    rdTestAccessToken,
    rdTestUserId
  )
  const room = new Room(rdTestRoomId, client)
  const response = await room.sendStateEvent("m.room.name", {
    name: "Test State Event",
  })
  console.log("sendStateEvent", response)
  expect(response).toBeTruthy()
})
