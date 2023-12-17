import { Client, Room } from "../src"

require("dotenv").config()

const { BASE_URL_1, ACCESS_TOKEN_1, TEST_ROOM_1, USER_ID_1, TEST_SPACE_1 } =
  process.env

test("playground", async () => {
  const client = new Client(BASE_URL_1!, ACCESS_TOKEN_1!, {
    userId: USER_ID_1,
  })
  const room = new Room(TEST_ROOM_1!, client)

  const response = await room.getHierarchy()

  console.log("get hierarchy response", response)
  expect(response).toBeTruthy()
})
