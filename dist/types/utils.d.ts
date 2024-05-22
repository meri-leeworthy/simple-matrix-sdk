import * as z from "zod";
export declare function is<T>(schema: z.ZodType<T>, t: any): t is T;
export declare function deepConvertNumbersToStrings(obj: Record<string, any>): Record<string, string>;
export declare const schemaError: {
    errcode: string;
    error: string;
};
