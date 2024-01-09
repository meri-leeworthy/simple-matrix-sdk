import { Client, Event, Room, Timeline } from "../src"

require("dotenv").config()

const {
  BASE_URL_2,
  ACCESS_TOKEN_2,
  AS_TOKEN,
  TEST_ROOM_2,
  USER_ID_2,
  TEST_SPACE_1,
} = process.env

// test("playground", async () => {
//   const client = new Client(BASE_URL_2!, AS_TOKEN!, {
//     params: {
//       user_id: "@_relay_bot:radical.directory",
//     },
//   })
//   const room = new Room("!aClTOIoBPhZNaxWdCH:radical.directory", client)

//   const response = await room.getState()

//   console.log("get avatar response", response)

//   // const { chunk } = response
//   // chunk.forEach((event: any) => {
//   //   if (event.unsigned["m.relations"]) {
//   //     // console.log("event", event)
//   //   }
//   //   const eventInstance = new Event(event)
//   //   // console.log("eventInstance", eventInstance)
//   // })

//   // const timeline = new Timeline(chunk)

//   // console.log("timeline", timeline)
//   expect(response).toBeTruthy()
// })

test("playground", async () => {
  const flows = await Client.getLoginFlows(BASE_URL_2!)
  console.log("flows", flows)

  const register = await Client.register(
    "test1234567",
    "blahBlah!197Hhh",
    BASE_URL_2!
  )
  console.log("register", register)
  expect(flows).toBeTruthy()
})
