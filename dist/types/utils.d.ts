import * as z from "zod";
export declare function is<T>(schema: z.ZodType<T>, t: any): t is T;
