import * as z from "zod"
import { ErrorOutput } from "./client"

export function is<T>(schema: z.ZodType<T>, t: any): t is T {
  try {
    schema.parse(t)
    return true
  } catch (e) {
    return false
  }
}

export function deepConvertNumbersToStrings(
  obj: Record<string, any>
): Record<string, string> {
  if (typeof obj !== "object" || obj === null || Array.isArray(obj)) {
    throw new Error("Not an object")
  }

  const newObj: Record<string, any> = {}
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (typeof obj[key] === "number") {
        newObj[key] = obj[key].toString()
      } else if (typeof obj[key] === "object" && obj[key] !== null) {
        newObj[key] = deepConvertNumbersToStrings(obj[key])
      } else {
        newObj[key] = obj[key]
      }
    }
  }
  return newObj
}

export const schemaError: ErrorOutput = {
  errcode: "Unknown_result",
  error: "Result did not match expected schema",
}
