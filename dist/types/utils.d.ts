import * as z from "zod";
import { ErrorOutput } from "./client";
export declare function is<T>(schema: z.ZodType<T>, t: any): t is T;
export declare function isError(t: any): t is ErrorOutput;
export declare function parse<T>(schema: z.ZodType<T>, t: any): T;
export declare function deepConvertNumbersToStrings(obj: Record<string, any>): Record<string, string>;
export declare const schemaError: ErrorOutput;
