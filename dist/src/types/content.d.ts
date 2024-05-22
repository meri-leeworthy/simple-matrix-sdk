import * as z from "zod";
export declare const TextMessageContentSchema: z.ZodObject<{
    msgtype: z.ZodLiteral<"m.text">;
    body: z.ZodString;
    format: z.ZodOptional<z.ZodString>;
    formatted_body: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    body: string;
    msgtype: "m.text";
    format?: string | undefined;
    formatted_body?: string | undefined;
}, {
    body: string;
    msgtype: "m.text";
    format?: string | undefined;
    formatted_body?: string | undefined;
}>;
export declare const EmoteMessageContentSchema: z.ZodObject<{
    msgtype: z.ZodLiteral<"m.emote">;
    body: z.ZodString;
    format: z.ZodOptional<z.ZodString>;
    formatted_body: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    body: string;
    msgtype: "m.emote";
    format?: string | undefined;
    formatted_body?: string | undefined;
}, {
    body: string;
    msgtype: "m.emote";
    format?: string | undefined;
    formatted_body?: string | undefined;
}>;
export declare const NoticeMessageContentSchema: z.ZodObject<{
    msgtype: z.ZodLiteral<"m.notice">;
    body: z.ZodString;
    format: z.ZodOptional<z.ZodString>;
    formatted_body: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    body: string;
    msgtype: "m.notice";
    format?: string | undefined;
    formatted_body?: string | undefined;
}, {
    body: string;
    msgtype: "m.notice";
    format?: string | undefined;
    formatted_body?: string | undefined;
}>;
export declare const ImageMessageContentSchema: z.ZodObject<{
    msgtype: z.ZodLiteral<"m.image">;
    body: z.ZodString;
    info: z.ZodOptional<z.ZodObject<{
        h: z.ZodNumber;
        w: z.ZodNumber;
        mimetype: z.ZodString;
        size: z.ZodNumber;
        thumbnail_info: z.ZodOptional<z.ZodObject<{
            h: z.ZodOptional<z.ZodNumber>;
            w: z.ZodOptional<z.ZodNumber>;
            mimetype: z.ZodOptional<z.ZodString>;
            size: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            h?: number | undefined;
            w?: number | undefined;
            mimetype?: string | undefined;
            size?: number | undefined;
        }, {
            h?: number | undefined;
            w?: number | undefined;
            mimetype?: string | undefined;
            size?: number | undefined;
        }>>;
        thumbnail_url: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        h: number;
        w: number;
        mimetype: string;
        size: number;
        thumbnail_info?: {
            h?: number | undefined;
            w?: number | undefined;
            mimetype?: string | undefined;
            size?: number | undefined;
        } | undefined;
        thumbnail_url?: string | undefined;
    }, {
        h: number;
        w: number;
        mimetype: string;
        size: number;
        thumbnail_info?: {
            h?: number | undefined;
            w?: number | undefined;
            mimetype?: string | undefined;
            size?: number | undefined;
        } | undefined;
        thumbnail_url?: string | undefined;
    }>>;
    url: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    body: string;
    msgtype: "m.image";
    info?: {
        h: number;
        w: number;
        mimetype: string;
        size: number;
        thumbnail_info?: {
            h?: number | undefined;
            w?: number | undefined;
            mimetype?: string | undefined;
            size?: number | undefined;
        } | undefined;
        thumbnail_url?: string | undefined;
    } | undefined;
    url?: string | undefined;
}, {
    body: string;
    msgtype: "m.image";
    info?: {
        h: number;
        w: number;
        mimetype: string;
        size: number;
        thumbnail_info?: {
            h?: number | undefined;
            w?: number | undefined;
            mimetype?: string | undefined;
            size?: number | undefined;
        } | undefined;
        thumbnail_url?: string | undefined;
    } | undefined;
    url?: string | undefined;
}>;
export declare const FileMessageContentSchema: z.ZodObject<{
    msgtype: z.ZodLiteral<"m.file">;
    body: z.ZodString;
    filename: z.ZodString;
    info: z.ZodOptional<z.ZodObject<{
        mimetype: z.ZodOptional<z.ZodString>;
        size: z.ZodOptional<z.ZodNumber>;
        thumbnail_info: z.ZodOptional<z.ZodObject<{
            h: z.ZodOptional<z.ZodNumber>;
            w: z.ZodOptional<z.ZodNumber>;
            mimetype: z.ZodOptional<z.ZodString>;
            size: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            h?: number | undefined;
            w?: number | undefined;
            mimetype?: string | undefined;
            size?: number | undefined;
        }, {
            h?: number | undefined;
            w?: number | undefined;
            mimetype?: string | undefined;
            size?: number | undefined;
        }>>;
        thumbnail_url: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        mimetype?: string | undefined;
        size?: number | undefined;
        thumbnail_info?: {
            h?: number | undefined;
            w?: number | undefined;
            mimetype?: string | undefined;
            size?: number | undefined;
        } | undefined;
        thumbnail_url?: string | undefined;
    }, {
        mimetype?: string | undefined;
        size?: number | undefined;
        thumbnail_info?: {
            h?: number | undefined;
            w?: number | undefined;
            mimetype?: string | undefined;
            size?: number | undefined;
        } | undefined;
        thumbnail_url?: string | undefined;
    }>>;
    url: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    body: string;
    msgtype: "m.file";
    filename: string;
    info?: {
        mimetype?: string | undefined;
        size?: number | undefined;
        thumbnail_info?: {
            h?: number | undefined;
            w?: number | undefined;
            mimetype?: string | undefined;
            size?: number | undefined;
        } | undefined;
        thumbnail_url?: string | undefined;
    } | undefined;
    url?: string | undefined;
}, {
    body: string;
    msgtype: "m.file";
    filename: string;
    info?: {
        mimetype?: string | undefined;
        size?: number | undefined;
        thumbnail_info?: {
            h?: number | undefined;
            w?: number | undefined;
            mimetype?: string | undefined;
            size?: number | undefined;
        } | undefined;
        thumbnail_url?: string | undefined;
    } | undefined;
    url?: string | undefined;
}>;
export declare const AudioMessageContentSchema: z.ZodObject<{
    msgtype: z.ZodLiteral<"m.audio">;
    body: z.ZodString;
    info: z.ZodOptional<z.ZodObject<{
        duration: z.ZodOptional<z.ZodNumber>;
        mimetype: z.ZodOptional<z.ZodString>;
        size: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        mimetype?: string | undefined;
        size?: number | undefined;
        duration?: number | undefined;
    }, {
        mimetype?: string | undefined;
        size?: number | undefined;
        duration?: number | undefined;
    }>>;
    url: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    body: string;
    msgtype: "m.audio";
    info?: {
        mimetype?: string | undefined;
        size?: number | undefined;
        duration?: number | undefined;
    } | undefined;
    url?: string | undefined;
}, {
    body: string;
    msgtype: "m.audio";
    info?: {
        mimetype?: string | undefined;
        size?: number | undefined;
        duration?: number | undefined;
    } | undefined;
    url?: string | undefined;
}>;
export declare const LocationMessageContentSchema: z.ZodObject<{
    msgtype: z.ZodLiteral<"m.location">;
    body: z.ZodString;
    info: z.ZodOptional<z.ZodObject<{
        thumbnail_info: z.ZodOptional<z.ZodObject<{
            h: z.ZodOptional<z.ZodNumber>;
            w: z.ZodOptional<z.ZodNumber>;
            mimetype: z.ZodOptional<z.ZodString>;
            size: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            h?: number | undefined;
            w?: number | undefined;
            mimetype?: string | undefined;
            size?: number | undefined;
        }, {
            h?: number | undefined;
            w?: number | undefined;
            mimetype?: string | undefined;
            size?: number | undefined;
        }>>;
        thumbnail_url: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        thumbnail_info?: {
            h?: number | undefined;
            w?: number | undefined;
            mimetype?: string | undefined;
            size?: number | undefined;
        } | undefined;
        thumbnail_url?: string | undefined;
    }, {
        thumbnail_info?: {
            h?: number | undefined;
            w?: number | undefined;
            mimetype?: string | undefined;
            size?: number | undefined;
        } | undefined;
        thumbnail_url?: string | undefined;
    }>>;
    geo_uri: z.ZodString;
}, "strip", z.ZodTypeAny, {
    body: string;
    msgtype: "m.location";
    geo_uri: string;
    info?: {
        thumbnail_info?: {
            h?: number | undefined;
            w?: number | undefined;
            mimetype?: string | undefined;
            size?: number | undefined;
        } | undefined;
        thumbnail_url?: string | undefined;
    } | undefined;
}, {
    body: string;
    msgtype: "m.location";
    geo_uri: string;
    info?: {
        thumbnail_info?: {
            h?: number | undefined;
            w?: number | undefined;
            mimetype?: string | undefined;
            size?: number | undefined;
        } | undefined;
        thumbnail_url?: string | undefined;
    } | undefined;
}>;
export declare const VideoMessageContentSchema: z.ZodObject<{
    msgtype: z.ZodLiteral<"m.video">;
    body: z.ZodString;
    info: z.ZodOptional<z.ZodObject<{
        duration: z.ZodOptional<z.ZodNumber>;
        h: z.ZodOptional<z.ZodNumber>;
        mimetype: z.ZodOptional<z.ZodString>;
        size: z.ZodOptional<z.ZodNumber>;
        thumbnail_info: z.ZodOptional<z.ZodObject<{
            h: z.ZodOptional<z.ZodNumber>;
            w: z.ZodOptional<z.ZodNumber>;
            mimetype: z.ZodOptional<z.ZodString>;
            size: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            h?: number | undefined;
            w?: number | undefined;
            mimetype?: string | undefined;
            size?: number | undefined;
        }, {
            h?: number | undefined;
            w?: number | undefined;
            mimetype?: string | undefined;
            size?: number | undefined;
        }>>;
        thumbnail_url: z.ZodOptional<z.ZodString>;
        w: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        h?: number | undefined;
        w?: number | undefined;
        mimetype?: string | undefined;
        size?: number | undefined;
        thumbnail_info?: {
            h?: number | undefined;
            w?: number | undefined;
            mimetype?: string | undefined;
            size?: number | undefined;
        } | undefined;
        thumbnail_url?: string | undefined;
        duration?: number | undefined;
    }, {
        h?: number | undefined;
        w?: number | undefined;
        mimetype?: string | undefined;
        size?: number | undefined;
        thumbnail_info?: {
            h?: number | undefined;
            w?: number | undefined;
            mimetype?: string | undefined;
            size?: number | undefined;
        } | undefined;
        thumbnail_url?: string | undefined;
        duration?: number | undefined;
    }>>;
    url: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    body: string;
    msgtype: "m.video";
    info?: {
        h?: number | undefined;
        w?: number | undefined;
        mimetype?: string | undefined;
        size?: number | undefined;
        thumbnail_info?: {
            h?: number | undefined;
            w?: number | undefined;
            mimetype?: string | undefined;
            size?: number | undefined;
        } | undefined;
        thumbnail_url?: string | undefined;
        duration?: number | undefined;
    } | undefined;
    url?: string | undefined;
}, {
    body: string;
    msgtype: "m.video";
    info?: {
        h?: number | undefined;
        w?: number | undefined;
        mimetype?: string | undefined;
        size?: number | undefined;
        thumbnail_info?: {
            h?: number | undefined;
            w?: number | undefined;
            mimetype?: string | undefined;
            size?: number | undefined;
        } | undefined;
        thumbnail_url?: string | undefined;
        duration?: number | undefined;
    } | undefined;
    url?: string | undefined;
}>;
export declare const KeyVerificationRequestMessageContentSchema: z.ZodObject<{
    msgtype: z.ZodLiteral<"m.key.verification.request">;
    body: z.ZodOptional<z.ZodString>;
    format: z.ZodOptional<z.ZodString>;
    formatted_body: z.ZodOptional<z.ZodString>;
    from_device: z.ZodString;
    methods: z.ZodArray<z.ZodString, "many">;
    timestamp: z.ZodNumber;
    transaction_id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    transaction_id: string;
    msgtype: "m.key.verification.request";
    from_device: string;
    methods: string[];
    timestamp: number;
    body?: string | undefined;
    format?: string | undefined;
    formatted_body?: string | undefined;
}, {
    transaction_id: string;
    msgtype: "m.key.verification.request";
    from_device: string;
    methods: string[];
    timestamp: number;
    body?: string | undefined;
    format?: string | undefined;
    formatted_body?: string | undefined;
}>;
export declare const RoomMessageContentSchema: z.ZodUnion<[z.ZodObject<{
    msgtype: z.ZodLiteral<"m.text">;
    body: z.ZodString;
    format: z.ZodOptional<z.ZodString>;
    formatted_body: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    body: string;
    msgtype: "m.text";
    format?: string | undefined;
    formatted_body?: string | undefined;
}, {
    body: string;
    msgtype: "m.text";
    format?: string | undefined;
    formatted_body?: string | undefined;
}>, z.ZodObject<{
    msgtype: z.ZodLiteral<"m.emote">;
    body: z.ZodString;
    format: z.ZodOptional<z.ZodString>;
    formatted_body: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    body: string;
    msgtype: "m.emote";
    format?: string | undefined;
    formatted_body?: string | undefined;
}, {
    body: string;
    msgtype: "m.emote";
    format?: string | undefined;
    formatted_body?: string | undefined;
}>, z.ZodObject<{
    msgtype: z.ZodLiteral<"m.notice">;
    body: z.ZodString;
    format: z.ZodOptional<z.ZodString>;
    formatted_body: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    body: string;
    msgtype: "m.notice";
    format?: string | undefined;
    formatted_body?: string | undefined;
}, {
    body: string;
    msgtype: "m.notice";
    format?: string | undefined;
    formatted_body?: string | undefined;
}>, z.ZodObject<{
    msgtype: z.ZodLiteral<"m.image">;
    body: z.ZodString;
    info: z.ZodOptional<z.ZodObject<{
        h: z.ZodNumber;
        w: z.ZodNumber;
        mimetype: z.ZodString;
        size: z.ZodNumber;
        thumbnail_info: z.ZodOptional<z.ZodObject<{
            h: z.ZodOptional<z.ZodNumber>;
            w: z.ZodOptional<z.ZodNumber>;
            mimetype: z.ZodOptional<z.ZodString>;
            size: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            h?: number | undefined;
            w?: number | undefined;
            mimetype?: string | undefined;
            size?: number | undefined;
        }, {
            h?: number | undefined;
            w?: number | undefined;
            mimetype?: string | undefined;
            size?: number | undefined;
        }>>;
        thumbnail_url: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        h: number;
        w: number;
        mimetype: string;
        size: number;
        thumbnail_info?: {
            h?: number | undefined;
            w?: number | undefined;
            mimetype?: string | undefined;
            size?: number | undefined;
        } | undefined;
        thumbnail_url?: string | undefined;
    }, {
        h: number;
        w: number;
        mimetype: string;
        size: number;
        thumbnail_info?: {
            h?: number | undefined;
            w?: number | undefined;
            mimetype?: string | undefined;
            size?: number | undefined;
        } | undefined;
        thumbnail_url?: string | undefined;
    }>>;
    url: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    body: string;
    msgtype: "m.image";
    info?: {
        h: number;
        w: number;
        mimetype: string;
        size: number;
        thumbnail_info?: {
            h?: number | undefined;
            w?: number | undefined;
            mimetype?: string | undefined;
            size?: number | undefined;
        } | undefined;
        thumbnail_url?: string | undefined;
    } | undefined;
    url?: string | undefined;
}, {
    body: string;
    msgtype: "m.image";
    info?: {
        h: number;
        w: number;
        mimetype: string;
        size: number;
        thumbnail_info?: {
            h?: number | undefined;
            w?: number | undefined;
            mimetype?: string | undefined;
            size?: number | undefined;
        } | undefined;
        thumbnail_url?: string | undefined;
    } | undefined;
    url?: string | undefined;
}>, z.ZodObject<{
    msgtype: z.ZodLiteral<"m.file">;
    body: z.ZodString;
    filename: z.ZodString;
    info: z.ZodOptional<z.ZodObject<{
        mimetype: z.ZodOptional<z.ZodString>;
        size: z.ZodOptional<z.ZodNumber>;
        thumbnail_info: z.ZodOptional<z.ZodObject<{
            h: z.ZodOptional<z.ZodNumber>;
            w: z.ZodOptional<z.ZodNumber>;
            mimetype: z.ZodOptional<z.ZodString>;
            size: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            h?: number | undefined;
            w?: number | undefined;
            mimetype?: string | undefined;
            size?: number | undefined;
        }, {
            h?: number | undefined;
            w?: number | undefined;
            mimetype?: string | undefined;
            size?: number | undefined;
        }>>;
        thumbnail_url: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        mimetype?: string | undefined;
        size?: number | undefined;
        thumbnail_info?: {
            h?: number | undefined;
            w?: number | undefined;
            mimetype?: string | undefined;
            size?: number | undefined;
        } | undefined;
        thumbnail_url?: string | undefined;
    }, {
        mimetype?: string | undefined;
        size?: number | undefined;
        thumbnail_info?: {
            h?: number | undefined;
            w?: number | undefined;
            mimetype?: string | undefined;
            size?: number | undefined;
        } | undefined;
        thumbnail_url?: string | undefined;
    }>>;
    url: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    body: string;
    msgtype: "m.file";
    filename: string;
    info?: {
        mimetype?: string | undefined;
        size?: number | undefined;
        thumbnail_info?: {
            h?: number | undefined;
            w?: number | undefined;
            mimetype?: string | undefined;
            size?: number | undefined;
        } | undefined;
        thumbnail_url?: string | undefined;
    } | undefined;
    url?: string | undefined;
}, {
    body: string;
    msgtype: "m.file";
    filename: string;
    info?: {
        mimetype?: string | undefined;
        size?: number | undefined;
        thumbnail_info?: {
            h?: number | undefined;
            w?: number | undefined;
            mimetype?: string | undefined;
            size?: number | undefined;
        } | undefined;
        thumbnail_url?: string | undefined;
    } | undefined;
    url?: string | undefined;
}>, z.ZodObject<{
    msgtype: z.ZodLiteral<"m.audio">;
    body: z.ZodString;
    info: z.ZodOptional<z.ZodObject<{
        duration: z.ZodOptional<z.ZodNumber>;
        mimetype: z.ZodOptional<z.ZodString>;
        size: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        mimetype?: string | undefined;
        size?: number | undefined;
        duration?: number | undefined;
    }, {
        mimetype?: string | undefined;
        size?: number | undefined;
        duration?: number | undefined;
    }>>;
    url: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    body: string;
    msgtype: "m.audio";
    info?: {
        mimetype?: string | undefined;
        size?: number | undefined;
        duration?: number | undefined;
    } | undefined;
    url?: string | undefined;
}, {
    body: string;
    msgtype: "m.audio";
    info?: {
        mimetype?: string | undefined;
        size?: number | undefined;
        duration?: number | undefined;
    } | undefined;
    url?: string | undefined;
}>, z.ZodObject<{
    msgtype: z.ZodLiteral<"m.location">;
    body: z.ZodString;
    info: z.ZodOptional<z.ZodObject<{
        thumbnail_info: z.ZodOptional<z.ZodObject<{
            h: z.ZodOptional<z.ZodNumber>;
            w: z.ZodOptional<z.ZodNumber>;
            mimetype: z.ZodOptional<z.ZodString>;
            size: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            h?: number | undefined;
            w?: number | undefined;
            mimetype?: string | undefined;
            size?: number | undefined;
        }, {
            h?: number | undefined;
            w?: number | undefined;
            mimetype?: string | undefined;
            size?: number | undefined;
        }>>;
        thumbnail_url: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        thumbnail_info?: {
            h?: number | undefined;
            w?: number | undefined;
            mimetype?: string | undefined;
            size?: number | undefined;
        } | undefined;
        thumbnail_url?: string | undefined;
    }, {
        thumbnail_info?: {
            h?: number | undefined;
            w?: number | undefined;
            mimetype?: string | undefined;
            size?: number | undefined;
        } | undefined;
        thumbnail_url?: string | undefined;
    }>>;
    geo_uri: z.ZodString;
}, "strip", z.ZodTypeAny, {
    body: string;
    msgtype: "m.location";
    geo_uri: string;
    info?: {
        thumbnail_info?: {
            h?: number | undefined;
            w?: number | undefined;
            mimetype?: string | undefined;
            size?: number | undefined;
        } | undefined;
        thumbnail_url?: string | undefined;
    } | undefined;
}, {
    body: string;
    msgtype: "m.location";
    geo_uri: string;
    info?: {
        thumbnail_info?: {
            h?: number | undefined;
            w?: number | undefined;
            mimetype?: string | undefined;
            size?: number | undefined;
        } | undefined;
        thumbnail_url?: string | undefined;
    } | undefined;
}>, z.ZodObject<{
    msgtype: z.ZodLiteral<"m.video">;
    body: z.ZodString;
    info: z.ZodOptional<z.ZodObject<{
        duration: z.ZodOptional<z.ZodNumber>;
        h: z.ZodOptional<z.ZodNumber>;
        mimetype: z.ZodOptional<z.ZodString>;
        size: z.ZodOptional<z.ZodNumber>;
        thumbnail_info: z.ZodOptional<z.ZodObject<{
            h: z.ZodOptional<z.ZodNumber>;
            w: z.ZodOptional<z.ZodNumber>;
            mimetype: z.ZodOptional<z.ZodString>;
            size: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            h?: number | undefined;
            w?: number | undefined;
            mimetype?: string | undefined;
            size?: number | undefined;
        }, {
            h?: number | undefined;
            w?: number | undefined;
            mimetype?: string | undefined;
            size?: number | undefined;
        }>>;
        thumbnail_url: z.ZodOptional<z.ZodString>;
        w: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        h?: number | undefined;
        w?: number | undefined;
        mimetype?: string | undefined;
        size?: number | undefined;
        thumbnail_info?: {
            h?: number | undefined;
            w?: number | undefined;
            mimetype?: string | undefined;
            size?: number | undefined;
        } | undefined;
        thumbnail_url?: string | undefined;
        duration?: number | undefined;
    }, {
        h?: number | undefined;
        w?: number | undefined;
        mimetype?: string | undefined;
        size?: number | undefined;
        thumbnail_info?: {
            h?: number | undefined;
            w?: number | undefined;
            mimetype?: string | undefined;
            size?: number | undefined;
        } | undefined;
        thumbnail_url?: string | undefined;
        duration?: number | undefined;
    }>>;
    url: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    body: string;
    msgtype: "m.video";
    info?: {
        h?: number | undefined;
        w?: number | undefined;
        mimetype?: string | undefined;
        size?: number | undefined;
        thumbnail_info?: {
            h?: number | undefined;
            w?: number | undefined;
            mimetype?: string | undefined;
            size?: number | undefined;
        } | undefined;
        thumbnail_url?: string | undefined;
        duration?: number | undefined;
    } | undefined;
    url?: string | undefined;
}, {
    body: string;
    msgtype: "m.video";
    info?: {
        h?: number | undefined;
        w?: number | undefined;
        mimetype?: string | undefined;
        size?: number | undefined;
        thumbnail_info?: {
            h?: number | undefined;
            w?: number | undefined;
            mimetype?: string | undefined;
            size?: number | undefined;
        } | undefined;
        thumbnail_url?: string | undefined;
        duration?: number | undefined;
    } | undefined;
    url?: string | undefined;
}>, z.ZodObject<{
    msgtype: z.ZodLiteral<"m.key.verification.request">;
    body: z.ZodOptional<z.ZodString>;
    format: z.ZodOptional<z.ZodString>;
    formatted_body: z.ZodOptional<z.ZodString>;
    from_device: z.ZodString;
    methods: z.ZodArray<z.ZodString, "many">;
    timestamp: z.ZodNumber;
    transaction_id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    transaction_id: string;
    msgtype: "m.key.verification.request";
    from_device: string;
    methods: string[];
    timestamp: number;
    body?: string | undefined;
    format?: string | undefined;
    formatted_body?: string | undefined;
}, {
    transaction_id: string;
    msgtype: "m.key.verification.request";
    from_device: string;
    methods: string[];
    timestamp: number;
    body?: string | undefined;
    format?: string | undefined;
    formatted_body?: string | undefined;
}>, z.ZodObject<{
    msgtype: z.ZodString;
}, "strip", z.ZodTypeAny, {
    msgtype: string;
}, {
    msgtype: string;
}>]>;
export type RoomMessageContentOutput = z.infer<typeof RoomMessageContentSchema>;
export declare const PowerLevelsContentSchema: z.ZodObject<{
    ban: z.ZodOptional<z.ZodNumber>;
    events: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
    events_default: z.ZodOptional<z.ZodNumber>;
    invite: z.ZodOptional<z.ZodNumber>;
    kick: z.ZodOptional<z.ZodNumber>;
    redact: z.ZodOptional<z.ZodNumber>;
    state_default: z.ZodOptional<z.ZodNumber>;
    users: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
    users_default: z.ZodOptional<z.ZodNumber>;
    notifications: z.ZodOptional<z.ZodObject<{
        room: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        room: number;
    }, {
        room: number;
    }>>;
}, "strip", z.ZodTypeAny, {
    users?: Record<string, number> | undefined;
    ban?: number | undefined;
    events?: Record<string, number> | undefined;
    events_default?: number | undefined;
    invite?: number | undefined;
    kick?: number | undefined;
    redact?: number | undefined;
    state_default?: number | undefined;
    users_default?: number | undefined;
    notifications?: {
        room: number;
    } | undefined;
}, {
    users?: Record<string, number> | undefined;
    ban?: number | undefined;
    events?: Record<string, number> | undefined;
    events_default?: number | undefined;
    invite?: number | undefined;
    kick?: number | undefined;
    redact?: number | undefined;
    state_default?: number | undefined;
    users_default?: number | undefined;
    notifications?: {
        room: number;
    } | undefined;
}>;
export declare const EventContentSchema: z.ZodObject<{
    body: z.ZodString;
    msgtype: z.ZodString;
    "m.relates_to": z.ZodOptional<z.ZodObject<{
        event_id: z.ZodString;
        rel_type: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        rel_type: string;
        event_id: string;
    }, {
        rel_type: string;
        event_id: string;
    }>>;
}, "strip", z.ZodTypeAny, {
    body: string;
    msgtype: string;
    "m.relates_to"?: {
        rel_type: string;
        event_id: string;
    } | undefined;
}, {
    body: string;
    msgtype: string;
    "m.relates_to"?: {
        rel_type: string;
        event_id: string;
    } | undefined;
}>;
export type EventContentOutput = z.infer<typeof EventContentSchema>;
export declare const ContentUnionSchema: z.ZodUnion<[z.ZodObject<{
    body: z.ZodString;
    msgtype: z.ZodString;
    "m.relates_to": z.ZodOptional<z.ZodObject<{
        event_id: z.ZodString;
        rel_type: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        rel_type: string;
        event_id: string;
    }, {
        rel_type: string;
        event_id: string;
    }>>;
}, "strip", z.ZodTypeAny, {
    body: string;
    msgtype: string;
    "m.relates_to"?: {
        rel_type: string;
        event_id: string;
    } | undefined;
}, {
    body: string;
    msgtype: string;
    "m.relates_to"?: {
        rel_type: string;
        event_id: string;
    } | undefined;
}>, z.ZodUnion<[z.ZodObject<{
    msgtype: z.ZodLiteral<"m.text">;
    body: z.ZodString;
    format: z.ZodOptional<z.ZodString>;
    formatted_body: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    body: string;
    msgtype: "m.text";
    format?: string | undefined;
    formatted_body?: string | undefined;
}, {
    body: string;
    msgtype: "m.text";
    format?: string | undefined;
    formatted_body?: string | undefined;
}>, z.ZodObject<{
    msgtype: z.ZodLiteral<"m.emote">;
    body: z.ZodString;
    format: z.ZodOptional<z.ZodString>;
    formatted_body: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    body: string;
    msgtype: "m.emote";
    format?: string | undefined;
    formatted_body?: string | undefined;
}, {
    body: string;
    msgtype: "m.emote";
    format?: string | undefined;
    formatted_body?: string | undefined;
}>, z.ZodObject<{
    msgtype: z.ZodLiteral<"m.notice">;
    body: z.ZodString;
    format: z.ZodOptional<z.ZodString>;
    formatted_body: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    body: string;
    msgtype: "m.notice";
    format?: string | undefined;
    formatted_body?: string | undefined;
}, {
    body: string;
    msgtype: "m.notice";
    format?: string | undefined;
    formatted_body?: string | undefined;
}>, z.ZodObject<{
    msgtype: z.ZodLiteral<"m.image">;
    body: z.ZodString;
    info: z.ZodOptional<z.ZodObject<{
        h: z.ZodNumber;
        w: z.ZodNumber;
        mimetype: z.ZodString;
        size: z.ZodNumber;
        thumbnail_info: z.ZodOptional<z.ZodObject<{
            h: z.ZodOptional<z.ZodNumber>;
            w: z.ZodOptional<z.ZodNumber>;
            mimetype: z.ZodOptional<z.ZodString>;
            size: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            h?: number | undefined;
            w?: number | undefined;
            mimetype?: string | undefined;
            size?: number | undefined;
        }, {
            h?: number | undefined;
            w?: number | undefined;
            mimetype?: string | undefined;
            size?: number | undefined;
        }>>;
        thumbnail_url: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        h: number;
        w: number;
        mimetype: string;
        size: number;
        thumbnail_info?: {
            h?: number | undefined;
            w?: number | undefined;
            mimetype?: string | undefined;
            size?: number | undefined;
        } | undefined;
        thumbnail_url?: string | undefined;
    }, {
        h: number;
        w: number;
        mimetype: string;
        size: number;
        thumbnail_info?: {
            h?: number | undefined;
            w?: number | undefined;
            mimetype?: string | undefined;
            size?: number | undefined;
        } | undefined;
        thumbnail_url?: string | undefined;
    }>>;
    url: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    body: string;
    msgtype: "m.image";
    info?: {
        h: number;
        w: number;
        mimetype: string;
        size: number;
        thumbnail_info?: {
            h?: number | undefined;
            w?: number | undefined;
            mimetype?: string | undefined;
            size?: number | undefined;
        } | undefined;
        thumbnail_url?: string | undefined;
    } | undefined;
    url?: string | undefined;
}, {
    body: string;
    msgtype: "m.image";
    info?: {
        h: number;
        w: number;
        mimetype: string;
        size: number;
        thumbnail_info?: {
            h?: number | undefined;
            w?: number | undefined;
            mimetype?: string | undefined;
            size?: number | undefined;
        } | undefined;
        thumbnail_url?: string | undefined;
    } | undefined;
    url?: string | undefined;
}>, z.ZodObject<{
    msgtype: z.ZodLiteral<"m.file">;
    body: z.ZodString;
    filename: z.ZodString;
    info: z.ZodOptional<z.ZodObject<{
        mimetype: z.ZodOptional<z.ZodString>;
        size: z.ZodOptional<z.ZodNumber>;
        thumbnail_info: z.ZodOptional<z.ZodObject<{
            h: z.ZodOptional<z.ZodNumber>;
            w: z.ZodOptional<z.ZodNumber>;
            mimetype: z.ZodOptional<z.ZodString>;
            size: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            h?: number | undefined;
            w?: number | undefined;
            mimetype?: string | undefined;
            size?: number | undefined;
        }, {
            h?: number | undefined;
            w?: number | undefined;
            mimetype?: string | undefined;
            size?: number | undefined;
        }>>;
        thumbnail_url: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        mimetype?: string | undefined;
        size?: number | undefined;
        thumbnail_info?: {
            h?: number | undefined;
            w?: number | undefined;
            mimetype?: string | undefined;
            size?: number | undefined;
        } | undefined;
        thumbnail_url?: string | undefined;
    }, {
        mimetype?: string | undefined;
        size?: number | undefined;
        thumbnail_info?: {
            h?: number | undefined;
            w?: number | undefined;
            mimetype?: string | undefined;
            size?: number | undefined;
        } | undefined;
        thumbnail_url?: string | undefined;
    }>>;
    url: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    body: string;
    msgtype: "m.file";
    filename: string;
    info?: {
        mimetype?: string | undefined;
        size?: number | undefined;
        thumbnail_info?: {
            h?: number | undefined;
            w?: number | undefined;
            mimetype?: string | undefined;
            size?: number | undefined;
        } | undefined;
        thumbnail_url?: string | undefined;
    } | undefined;
    url?: string | undefined;
}, {
    body: string;
    msgtype: "m.file";
    filename: string;
    info?: {
        mimetype?: string | undefined;
        size?: number | undefined;
        thumbnail_info?: {
            h?: number | undefined;
            w?: number | undefined;
            mimetype?: string | undefined;
            size?: number | undefined;
        } | undefined;
        thumbnail_url?: string | undefined;
    } | undefined;
    url?: string | undefined;
}>, z.ZodObject<{
    msgtype: z.ZodLiteral<"m.audio">;
    body: z.ZodString;
    info: z.ZodOptional<z.ZodObject<{
        duration: z.ZodOptional<z.ZodNumber>;
        mimetype: z.ZodOptional<z.ZodString>;
        size: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        mimetype?: string | undefined;
        size?: number | undefined;
        duration?: number | undefined;
    }, {
        mimetype?: string | undefined;
        size?: number | undefined;
        duration?: number | undefined;
    }>>;
    url: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    body: string;
    msgtype: "m.audio";
    info?: {
        mimetype?: string | undefined;
        size?: number | undefined;
        duration?: number | undefined;
    } | undefined;
    url?: string | undefined;
}, {
    body: string;
    msgtype: "m.audio";
    info?: {
        mimetype?: string | undefined;
        size?: number | undefined;
        duration?: number | undefined;
    } | undefined;
    url?: string | undefined;
}>, z.ZodObject<{
    msgtype: z.ZodLiteral<"m.location">;
    body: z.ZodString;
    info: z.ZodOptional<z.ZodObject<{
        thumbnail_info: z.ZodOptional<z.ZodObject<{
            h: z.ZodOptional<z.ZodNumber>;
            w: z.ZodOptional<z.ZodNumber>;
            mimetype: z.ZodOptional<z.ZodString>;
            size: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            h?: number | undefined;
            w?: number | undefined;
            mimetype?: string | undefined;
            size?: number | undefined;
        }, {
            h?: number | undefined;
            w?: number | undefined;
            mimetype?: string | undefined;
            size?: number | undefined;
        }>>;
        thumbnail_url: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        thumbnail_info?: {
            h?: number | undefined;
            w?: number | undefined;
            mimetype?: string | undefined;
            size?: number | undefined;
        } | undefined;
        thumbnail_url?: string | undefined;
    }, {
        thumbnail_info?: {
            h?: number | undefined;
            w?: number | undefined;
            mimetype?: string | undefined;
            size?: number | undefined;
        } | undefined;
        thumbnail_url?: string | undefined;
    }>>;
    geo_uri: z.ZodString;
}, "strip", z.ZodTypeAny, {
    body: string;
    msgtype: "m.location";
    geo_uri: string;
    info?: {
        thumbnail_info?: {
            h?: number | undefined;
            w?: number | undefined;
            mimetype?: string | undefined;
            size?: number | undefined;
        } | undefined;
        thumbnail_url?: string | undefined;
    } | undefined;
}, {
    body: string;
    msgtype: "m.location";
    geo_uri: string;
    info?: {
        thumbnail_info?: {
            h?: number | undefined;
            w?: number | undefined;
            mimetype?: string | undefined;
            size?: number | undefined;
        } | undefined;
        thumbnail_url?: string | undefined;
    } | undefined;
}>, z.ZodObject<{
    msgtype: z.ZodLiteral<"m.video">;
    body: z.ZodString;
    info: z.ZodOptional<z.ZodObject<{
        duration: z.ZodOptional<z.ZodNumber>;
        h: z.ZodOptional<z.ZodNumber>;
        mimetype: z.ZodOptional<z.ZodString>;
        size: z.ZodOptional<z.ZodNumber>;
        thumbnail_info: z.ZodOptional<z.ZodObject<{
            h: z.ZodOptional<z.ZodNumber>;
            w: z.ZodOptional<z.ZodNumber>;
            mimetype: z.ZodOptional<z.ZodString>;
            size: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            h?: number | undefined;
            w?: number | undefined;
            mimetype?: string | undefined;
            size?: number | undefined;
        }, {
            h?: number | undefined;
            w?: number | undefined;
            mimetype?: string | undefined;
            size?: number | undefined;
        }>>;
        thumbnail_url: z.ZodOptional<z.ZodString>;
        w: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        h?: number | undefined;
        w?: number | undefined;
        mimetype?: string | undefined;
        size?: number | undefined;
        thumbnail_info?: {
            h?: number | undefined;
            w?: number | undefined;
            mimetype?: string | undefined;
            size?: number | undefined;
        } | undefined;
        thumbnail_url?: string | undefined;
        duration?: number | undefined;
    }, {
        h?: number | undefined;
        w?: number | undefined;
        mimetype?: string | undefined;
        size?: number | undefined;
        thumbnail_info?: {
            h?: number | undefined;
            w?: number | undefined;
            mimetype?: string | undefined;
            size?: number | undefined;
        } | undefined;
        thumbnail_url?: string | undefined;
        duration?: number | undefined;
    }>>;
    url: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    body: string;
    msgtype: "m.video";
    info?: {
        h?: number | undefined;
        w?: number | undefined;
        mimetype?: string | undefined;
        size?: number | undefined;
        thumbnail_info?: {
            h?: number | undefined;
            w?: number | undefined;
            mimetype?: string | undefined;
            size?: number | undefined;
        } | undefined;
        thumbnail_url?: string | undefined;
        duration?: number | undefined;
    } | undefined;
    url?: string | undefined;
}, {
    body: string;
    msgtype: "m.video";
    info?: {
        h?: number | undefined;
        w?: number | undefined;
        mimetype?: string | undefined;
        size?: number | undefined;
        thumbnail_info?: {
            h?: number | undefined;
            w?: number | undefined;
            mimetype?: string | undefined;
            size?: number | undefined;
        } | undefined;
        thumbnail_url?: string | undefined;
        duration?: number | undefined;
    } | undefined;
    url?: string | undefined;
}>, z.ZodObject<{
    msgtype: z.ZodLiteral<"m.key.verification.request">;
    body: z.ZodOptional<z.ZodString>;
    format: z.ZodOptional<z.ZodString>;
    formatted_body: z.ZodOptional<z.ZodString>;
    from_device: z.ZodString;
    methods: z.ZodArray<z.ZodString, "many">;
    timestamp: z.ZodNumber;
    transaction_id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    transaction_id: string;
    msgtype: "m.key.verification.request";
    from_device: string;
    methods: string[];
    timestamp: number;
    body?: string | undefined;
    format?: string | undefined;
    formatted_body?: string | undefined;
}, {
    transaction_id: string;
    msgtype: "m.key.verification.request";
    from_device: string;
    methods: string[];
    timestamp: number;
    body?: string | undefined;
    format?: string | undefined;
    formatted_body?: string | undefined;
}>, z.ZodObject<{
    msgtype: z.ZodString;
}, "strip", z.ZodTypeAny, {
    msgtype: string;
}, {
    msgtype: string;
}>]>, z.ZodObject<{
    ban: z.ZodOptional<z.ZodNumber>;
    events: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
    events_default: z.ZodOptional<z.ZodNumber>;
    invite: z.ZodOptional<z.ZodNumber>;
    kick: z.ZodOptional<z.ZodNumber>;
    redact: z.ZodOptional<z.ZodNumber>;
    state_default: z.ZodOptional<z.ZodNumber>;
    users: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
    users_default: z.ZodOptional<z.ZodNumber>;
    notifications: z.ZodOptional<z.ZodObject<{
        room: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        room: number;
    }, {
        room: number;
    }>>;
}, "strip", z.ZodTypeAny, {
    users?: Record<string, number> | undefined;
    ban?: number | undefined;
    events?: Record<string, number> | undefined;
    events_default?: number | undefined;
    invite?: number | undefined;
    kick?: number | undefined;
    redact?: number | undefined;
    state_default?: number | undefined;
    users_default?: number | undefined;
    notifications?: {
        room: number;
    } | undefined;
}, {
    users?: Record<string, number> | undefined;
    ban?: number | undefined;
    events?: Record<string, number> | undefined;
    events_default?: number | undefined;
    invite?: number | undefined;
    kick?: number | undefined;
    redact?: number | undefined;
    state_default?: number | undefined;
    users_default?: number | undefined;
    notifications?: {
        room: number;
    } | undefined;
}>]>;
