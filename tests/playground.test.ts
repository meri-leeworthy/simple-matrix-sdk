import { Client, Event, Room, Timeline } from "../src"

require("dotenv").config()

const {
  BASE_URL_1,
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
  console.log("flows", flows.flows[0])

  // const register = await Client.register(
  //   "test1234567",
  //   "blahBlah!197Hhh",
  //   BASE_URL_2!
  // )
  // console.log("register", register)

  // const accessToken = await Client.login(
  //   BASE_URL_2!,
  //   "test1234567",
  //   "blahBlah!197Hhh"
  // )

  // console.log("accessToken", accessToken)

  // const client = new Client(BASE_URL_2!, accessToken, {
  //   userId: "@test1234567:radical.directory",
  // })

  // await client.add3pid(
  //   {
  //     sid: "test1234567",
  //     client_secret: "blahBlah!197Hhh",
  //   },
  //   "blahBlah!197Hhh"
  // )

  // const email = await client.requestTokenEmail(
  //   "meri.leeworthy.accounts@skiff.com",
  //   "jkasndfkjn",
  //   2
  // )

  // console.log("email", email)

  expect(flows).toBeTruthy()
})

// test("playground", async () => {
//   const client = new Client(BASE_URL_1!, ACCESS_TOKEN_2!, {
//     userId: USER_ID_2!,
//   })

//   const response = await client.get("/versions", {
//     urlType: "identity",
//   })

//   console.log("response", response)

//   expect(response).toBeTruthy()
// })
