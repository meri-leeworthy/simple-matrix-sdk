import { Client } from "../src"

require("dotenv").config()

const baseUrl = process.env.BASE_URL || "https://matrix.org"
const accessToken = process.env.ACCESS_TOKEN!

const testRoomId = process.env.TEST_ROOM!

//meri's matrix.org acc
const username = process.env.USERNAME!
const password = process.env.PASSWORD!
const userId = `@${username}:${baseUrl.split("//")[1]}`

//open letter acc
const rdAccessToken = process.env.RD_ACCESS_TOKEN!
const rdUserId = process.env.RD_USER_ID!

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
  const client = new Client(baseUrl, accessToken, { userId })
  const response = await client.getJoinedRooms()
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

test("getProfile returns something", async () => {
  const client = new Client("https://matrix.radical.directory", rdAccessToken, {
    userId: rdUserId,
  })
  const response = await client.getProfile(rdUserId)
  console.log("getProfile", response)
  expect(response).toBeTruthy()
})
