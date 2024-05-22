import * as z from "zod";
export type Params = Record<string, string>;
export type ClientOptions = {
    userId: string;
    params: Params;
    fetch: any;
};
export declare const ErrorSchema: z.ZodObject<{
    errcode: z.ZodString;
    error: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    errcode: string;
    error?: string | undefined;
}, {
    errcode: string;
    error?: string | undefined;
}>;
export type ErrorOutput = z.infer<typeof ErrorSchema>;
