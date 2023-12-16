export type Params = Record<string, string>

export type Event = Record<string, any> & {
  type: string
  content?: Record<string, any> & { body?: string; msgtype?: string }
  sender?: any
  room_id: string
  event_id: string
  origin_server_ts: number
  unsigned?: any
}

export type ClientOptions = {
  userId: string
  params: Params
  fetch: any
}
