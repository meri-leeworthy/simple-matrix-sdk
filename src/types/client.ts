import * as z from "zod"

export type Params = Record<string, string | number>

export type ClientOptions = {
  userId: string
  params: Params
  fetch: any
}

export const ErrorSchema = z.object({
  errcode: z.string({ invalid_type_error: "Errcode must be a string" }),
  error: z.optional(z.string({ invalid_type_error: "Error must be a string" })),
})

export type ErrorOutput = z.infer<typeof ErrorSchema>
