import { Client, Room } from "../src"
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

//rd testing acc
const rdTestUserId = process.env.RD_TEST_USER_ID!
const rdTestAccessToken = process.env.RD_TEST_ACCESS_TOKEN!
const rdTestRoomId = process.env.RD_TEST_ROOM!
const rdTestSpaceId = process.env.RD_TEST_SPACE!

//open letter acc
const rdAccessToken = process.env.RD_ACCESS_TOKEN!
const rdUserId = process.env.RD_USER_ID!

const {
  BASE_URL_1,
  BASE_URL_2,
  ACCESS_TOKEN_2,
  AS_TOKEN,
  TEST_ROOM_2,
  USER_ID_2,
  TEST_SPACE_1,
} = process.env

describe("Test Room Static Messages Methods", () => {
  let client: Client | null
  let room: Room | null

  beforeEach(() => {
    client = new Client(baseUrl, accessToken, { userId })
    room = new Room(testRoomId, client)
  })

  test("getMessages returns something", async () => {
    const response = await room?.getMessages({})
    // console.log("getRoomMessagesOneShot: ", response);
    expect(response).toBeTruthy()
  })

  test("getRoomMessagesAsyncGenerator returns something", async () => {
    const messagesAsyncIterator = room?.getMessagesAsyncGenerator()
    const response = await messagesAsyncIterator?.next()
    console.log("getRoomMessage chunk: ", response)

    //seems like this bit might not be working
    // const { chunk2, end2 } = (await messagesAsyncIterator.next(end)).value
    // console.log("getRoomMessage chunk2: ", chunk2)
    // console.log("getRoomMessages1: ", await response().next());
    // console.log("getRoomMessages2: ", await response().next());
    expect(response).toBeTruthy()
  })

  test("sendRoomMessage returns something", async () => {
    const response = await room?.sendMessage("Hello world")
    // console.log(response);
    expect(response).toBeTruthy()
  })

  afterEach(() => {
    client = null
    room = null
  })
})

describe("Test Room Static State Methods", () => {
  let client: Client | null
  let room: Room | null

  beforeEach(() => {
    client = new Client(baseUrl, accessToken, { userId })
    room = new Room(testRoomId, client)
  })

  test("getRoomState returns something", async () => {
    const client = new Client(
      "https://matrix.radical.directory",
      rdAccessToken,
      {
        userId: "@meri:radical.directory",
      }
    )
    const room = new Room(testSpaceId, client)
    const response = await room.getState()
    console.log("roomState response", response)
    expect(response).toBeTruthy()
  })

  test("setName returns something", async () => {
    const client = new Client(
      "https://matrix.radical.directory",
      rdTestAccessToken,
      { userId: rdTestUserId }
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
      { userId: rdTestUserId }
    )
    const room = new Room(rdTestRoomId, client)
    const response = await room.setTopic("Test Topic")
    console.log("setTopic", response)
    expect(response).toBeTruthy()
  })

  test("sendStateEvent returns something", async () => {
    const client = new Client(
      "https://matrix.radical.directory",
      rdTestAccessToken,
      { userId: rdTestUserId }
    )
    const room = new Room(rdTestRoomId, client)
    const response = await room.sendStateEvent("m.room.name", {
      name: "Test State Event",
    })
    console.log("sendStateEvent", response)
    expect(response).toBeTruthy()
  })

  test("isUserModerator returns something", async () => {
    const client = new Client(
      "https://matrix.radical.directory",
      rdTestAccessToken,
      { userId: rdTestUserId }
    )
    const room = new Room(rdTestRoomId, client)
    const response = await room.isUserModerator()
    console.log("isUserModerator", response)
    expect(response).toBeTruthy()
  })

  afterEach(() => {
    client = null
    room = null
  })
})

test("sendEvent returns something", async () => {
  const client = new Client(
    "https://matrix.radical.directory",
    rdTestAccessToken,
    { userId: rdTestUserId }
  )
  const room = new Room(rdTestRoomId, client)
  const response = await room.sendEvent("m.room.message", {
    body: "Test Event",
    msgtype: "m.text",
  })
  console.log("sendEvent", response)
  expect(response).toBeTruthy()
})

test("getMembers returns something", async () => {
  const client = new Client(BASE_URL_2!, ACCESS_TOKEN_2!, { userId: USER_ID_2 })
  const room = new Room(TEST_SPACE_1!, client)
  const response = await room.getMembers()
  console.log("getMembers", response)
  expect(response).toBeTruthy()
})
