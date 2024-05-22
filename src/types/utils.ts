import * as z from "zod"

export function is<T>(schema: z.ZodType<T>, t: any): t is T {
  try {
    schema.parse(t)
    return true
  } catch (e) {
    return false
  }
}
