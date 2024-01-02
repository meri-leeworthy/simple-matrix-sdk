import { Output } from "valibot";
export type Params = Record<string, string>;
export type ClientOptions = {
    userId: string;
    params: Params;
    fetch: any;
};
export declare const ErrorSchema: import("valibot").ObjectSchema<{
    errcode: import("valibot").StringSchema<string>;
    error: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
}, undefined, {
    errcode: string;
    error?: string | undefined;
}>;
export type ErrorOutput = Output<typeof ErrorSchema>;
export declare const ThumbnailInfoSchema: import("valibot").ObjectSchema<import("valibot").PartialObjectEntries<{
    h: import("valibot").NumberSchema<number>;
    w: import("valibot").NumberSchema<number>;
    mimetype: import("valibot").StringSchema<string>;
    size: import("valibot").NumberSchema<number>;
}>, undefined, {
    h?: number | undefined;
    w?: number | undefined;
    mimetype?: string | undefined;
    size?: number | undefined;
}>;
export type ThumbnailInfoOutput = Output<typeof ThumbnailInfoSchema>;
export declare const RoomMessageTypeSchema: import("valibot").EnumSchema<{
    Text: string;
    Emote: string;
    Notice: string;
    Image: string;
    File: string;
    Audio: string;
    Location: string;
    Video: string;
    KeyVerificationRequest: string;
}, string>;
export type RoomMessageTypeOutput = Output<typeof RoomMessageTypeSchema>;
export declare const TextMessageContentSchema: import("valibot").ObjectSchema<{
    msgType: import("valibot").LiteralSchema<"m.text", "m.text">;
    body: import("valibot").StringSchema<string>;
    format: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
    formatted_body: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
}, undefined, {
    msgType: "m.text";
    body: string;
    format?: string | undefined;
    formatted_body?: string | undefined;
}>;
export declare const EmoteMessageContentSchema: import("valibot").ObjectSchema<{
    msgType: import("valibot").LiteralSchema<"m.emote", "m.emote">;
    body: import("valibot").StringSchema<string>;
    format: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
    formatted_body: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
}, undefined, {
    msgType: "m.emote";
    body: string;
    format?: string | undefined;
    formatted_body?: string | undefined;
}>;
export declare const NoticeMessageContentSchema: import("valibot").ObjectSchema<{
    msgType: import("valibot").LiteralSchema<"m.notice", "m.notice">;
    body: import("valibot").StringSchema<string>;
    format: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
    formatted_body: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
}, undefined, {
    msgType: "m.notice";
    body: string;
    format?: string | undefined;
    formatted_body?: string | undefined;
}>;
export declare const ImageMessageContentSchema: import("valibot").ObjectSchema<{
    msgType: import("valibot").LiteralSchema<"m.image", "m.image">;
    body: import("valibot").StringSchema<string>;
    info: import("valibot").OptionalSchema<import("valibot").ObjectSchema<{
        h: import("valibot").NumberSchema<number>;
        w: import("valibot").NumberSchema<number>;
        mimetype: import("valibot").StringSchema<string>;
        size: import("valibot").NumberSchema<number>;
        thumbnail_info: import("valibot").OptionalSchema<import("valibot").ObjectSchema<import("valibot").PartialObjectEntries<{
            h: import("valibot").NumberSchema<number>;
            w: import("valibot").NumberSchema<number>;
            mimetype: import("valibot").StringSchema<string>;
            size: import("valibot").NumberSchema<number>;
        }>, undefined, {
            h?: number | undefined;
            w?: number | undefined;
            mimetype?: string | undefined;
            size?: number | undefined;
        }>, undefined, {
            h?: number | undefined;
            w?: number | undefined;
            mimetype?: string | undefined;
            size?: number | undefined;
        } | undefined>;
        thumbnail_url: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
    }, undefined, {
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
    }>, undefined, {
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
    } | undefined>;
    url: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
}, undefined, {
    msgType: "m.image";
    body: string;
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
export declare const FileMessageContentSchema: import("valibot").ObjectSchema<{
    msgType: import("valibot").LiteralSchema<"m.file", "m.file">;
    body: import("valibot").StringSchema<string>;
    filename: import("valibot").StringSchema<string>;
    info: import("valibot").OptionalSchema<import("valibot").ObjectSchema<{
        mimetype: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
        size: import("valibot").OptionalSchema<import("valibot").NumberSchema<number>, undefined, number | undefined>;
        thumbnail_info: import("valibot").OptionalSchema<import("valibot").ObjectSchema<import("valibot").PartialObjectEntries<{
            h: import("valibot").NumberSchema<number>;
            w: import("valibot").NumberSchema<number>;
            mimetype: import("valibot").StringSchema<string>;
            size: import("valibot").NumberSchema<number>;
        }>, undefined, {
            h?: number | undefined;
            w?: number | undefined;
            mimetype?: string | undefined;
            size?: number | undefined;
        }>, undefined, {
            h?: number | undefined;
            w?: number | undefined;
            mimetype?: string | undefined;
            size?: number | undefined;
        } | undefined>;
        thumbnail_url: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
    }, undefined, {
        mimetype?: string | undefined;
        size?: number | undefined;
        thumbnail_info?: {
            h?: number | undefined;
            w?: number | undefined;
            mimetype?: string | undefined;
            size?: number | undefined;
        } | undefined;
        thumbnail_url?: string | undefined;
    }>, undefined, {
        mimetype?: string | undefined;
        size?: number | undefined;
        thumbnail_info?: {
            h?: number | undefined;
            w?: number | undefined;
            mimetype?: string | undefined;
            size?: number | undefined;
        } | undefined;
        thumbnail_url?: string | undefined;
    } | undefined>;
    url: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
}, undefined, {
    msgType: "m.file";
    body: string;
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
export declare const AudioMessageContentSchema: import("valibot").ObjectSchema<{
    msgType: import("valibot").LiteralSchema<"m.audio", "m.audio">;
    body: import("valibot").StringSchema<string>;
    info: import("valibot").OptionalSchema<import("valibot").ObjectSchema<{
        duration: import("valibot").OptionalSchema<import("valibot").NumberSchema<number>, undefined, number | undefined>;
        mimetype: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
        size: import("valibot").OptionalSchema<import("valibot").NumberSchema<number>, undefined, number | undefined>;
    }, undefined, {
        mimetype?: string | undefined;
        size?: number | undefined;
        duration?: number | undefined;
    }>, undefined, {
        mimetype?: string | undefined;
        size?: number | undefined;
        duration?: number | undefined;
    } | undefined>;
    url: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
}, undefined, {
    msgType: "m.audio";
    body: string;
    info?: {
        mimetype?: string | undefined;
        size?: number | undefined;
        duration?: number | undefined;
    } | undefined;
    url?: string | undefined;
}>;
export declare const LocationMessageContentSchema: import("valibot").ObjectSchema<{
    msgType: import("valibot").LiteralSchema<"m.location", "m.location">;
    body: import("valibot").StringSchema<string>;
    info: import("valibot").OptionalSchema<import("valibot").ObjectSchema<{
        thumbnail_info: import("valibot").OptionalSchema<import("valibot").ObjectSchema<import("valibot").PartialObjectEntries<{
            h: import("valibot").NumberSchema<number>;
            w: import("valibot").NumberSchema<number>;
            mimetype: import("valibot").StringSchema<string>;
            size: import("valibot").NumberSchema<number>;
        }>, undefined, {
            h?: number | undefined;
            w?: number | undefined;
            mimetype?: string | undefined;
            size?: number | undefined;
        }>, undefined, {
            h?: number | undefined;
            w?: number | undefined;
            mimetype?: string | undefined;
            size?: number | undefined;
        } | undefined>;
        thumbnail_url: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
    }, undefined, {
        thumbnail_info?: {
            h?: number | undefined;
            w?: number | undefined;
            mimetype?: string | undefined;
            size?: number | undefined;
        } | undefined;
        thumbnail_url?: string | undefined;
    }>, undefined, {
        thumbnail_info?: {
            h?: number | undefined;
            w?: number | undefined;
            mimetype?: string | undefined;
            size?: number | undefined;
        } | undefined;
        thumbnail_url?: string | undefined;
    } | undefined>;
    geo_uri: import("valibot").StringSchema<string>;
}, undefined, {
    msgType: "m.location";
    body: string;
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
export declare const VideoMessageContentSchema: import("valibot").ObjectSchema<{
    msgType: import("valibot").LiteralSchema<"m.video", "m.video">;
    body: import("valibot").StringSchema<string>;
    info: import("valibot").OptionalSchema<import("valibot").ObjectSchema<{
        duration: import("valibot").OptionalSchema<import("valibot").NumberSchema<number>, undefined, number | undefined>;
        h: import("valibot").OptionalSchema<import("valibot").NumberSchema<number>, undefined, number | undefined>;
        mimetype: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
        size: import("valibot").OptionalSchema<import("valibot").NumberSchema<number>, undefined, number | undefined>;
        thumbnail_info: import("valibot").OptionalSchema<import("valibot").ObjectSchema<import("valibot").PartialObjectEntries<{
            h: import("valibot").NumberSchema<number>;
            w: import("valibot").NumberSchema<number>;
            mimetype: import("valibot").StringSchema<string>;
            size: import("valibot").NumberSchema<number>;
        }>, undefined, {
            h?: number | undefined;
            w?: number | undefined;
            mimetype?: string | undefined;
            size?: number | undefined;
        }>, undefined, {
            h?: number | undefined;
            w?: number | undefined;
            mimetype?: string | undefined;
            size?: number | undefined;
        } | undefined>;
        thumbnail_url: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
        w: import("valibot").OptionalSchema<import("valibot").NumberSchema<number>, undefined, number | undefined>;
    }, undefined, {
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
    }>, undefined, {
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
    } | undefined>;
    url: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
}, undefined, {
    msgType: "m.video";
    body: string;
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
export declare const KeyVerificationRequestMessageContentSchema: import("valibot").ObjectSchema<{
    msgType: import("valibot").LiteralSchema<"m.key.verification.request", "m.key.verification.request">;
    body: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
    format: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
    formatted_body: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
    from_device: import("valibot").StringSchema<string>;
    methods: import("valibot").ArraySchema<import("valibot").StringSchema<string>, string[]>;
    timestamp: import("valibot").NumberSchema<number>;
    transaction_id: import("valibot").StringSchema<string>;
}, undefined, {
    msgType: "m.key.verification.request";
    from_device: string;
    methods: string[];
    timestamp: number;
    transaction_id: string;
    body?: string | undefined;
    format?: string | undefined;
    formatted_body?: string | undefined;
}>;
export declare const RoomMessageContentSchema: import("valibot").UnionSchema<(import("valibot").ObjectSchema<{
    msgType: import("valibot").LiteralSchema<"m.text", "m.text">;
    body: import("valibot").StringSchema<string>;
    format: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
    formatted_body: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
}, undefined, {
    msgType: "m.text";
    body: string;
    format?: string | undefined;
    formatted_body?: string | undefined;
}> | import("valibot").ObjectSchema<{
    msgType: import("valibot").LiteralSchema<"m.emote", "m.emote">;
    body: import("valibot").StringSchema<string>;
    format: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
    formatted_body: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
}, undefined, {
    msgType: "m.emote";
    body: string;
    format?: string | undefined;
    formatted_body?: string | undefined;
}> | import("valibot").ObjectSchema<{
    msgType: import("valibot").LiteralSchema<"m.notice", "m.notice">;
    body: import("valibot").StringSchema<string>;
    format: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
    formatted_body: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
}, undefined, {
    msgType: "m.notice";
    body: string;
    format?: string | undefined;
    formatted_body?: string | undefined;
}> | import("valibot").ObjectSchema<{
    msgType: import("valibot").LiteralSchema<"m.image", "m.image">;
    body: import("valibot").StringSchema<string>;
    info: import("valibot").OptionalSchema<import("valibot").ObjectSchema<{
        h: import("valibot").NumberSchema<number>;
        w: import("valibot").NumberSchema<number>;
        mimetype: import("valibot").StringSchema<string>;
        size: import("valibot").NumberSchema<number>;
        thumbnail_info: import("valibot").OptionalSchema<import("valibot").ObjectSchema<import("valibot").PartialObjectEntries<{
            h: import("valibot").NumberSchema<number>;
            w: import("valibot").NumberSchema<number>;
            mimetype: import("valibot").StringSchema<string>;
            size: import("valibot").NumberSchema<number>;
        }>, undefined, {
            h?: number | undefined;
            w?: number | undefined;
            mimetype?: string | undefined;
            size?: number | undefined;
        }>, undefined, {
            h?: number | undefined;
            w?: number | undefined;
            mimetype?: string | undefined;
            size?: number | undefined;
        } | undefined>;
        thumbnail_url: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
    }, undefined, {
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
    }>, undefined, {
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
    } | undefined>;
    url: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
}, undefined, {
    msgType: "m.image";
    body: string;
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
}> | import("valibot").ObjectSchema<{
    msgType: import("valibot").LiteralSchema<"m.file", "m.file">;
    body: import("valibot").StringSchema<string>;
    filename: import("valibot").StringSchema<string>;
    info: import("valibot").OptionalSchema<import("valibot").ObjectSchema<{
        mimetype: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
        size: import("valibot").OptionalSchema<import("valibot").NumberSchema<number>, undefined, number | undefined>;
        thumbnail_info: import("valibot").OptionalSchema<import("valibot").ObjectSchema<import("valibot").PartialObjectEntries<{
            h: import("valibot").NumberSchema<number>;
            w: import("valibot").NumberSchema<number>;
            mimetype: import("valibot").StringSchema<string>;
            size: import("valibot").NumberSchema<number>;
        }>, undefined, {
            h?: number | undefined;
            w?: number | undefined;
            mimetype?: string | undefined;
            size?: number | undefined;
        }>, undefined, {
            h?: number | undefined;
            w?: number | undefined;
            mimetype?: string | undefined;
            size?: number | undefined;
        } | undefined>;
        thumbnail_url: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
    }, undefined, {
        mimetype?: string | undefined;
        size?: number | undefined;
        thumbnail_info?: {
            h?: number | undefined;
            w?: number | undefined;
            mimetype?: string | undefined;
            size?: number | undefined;
        } | undefined;
        thumbnail_url?: string | undefined;
    }>, undefined, {
        mimetype?: string | undefined;
        size?: number | undefined;
        thumbnail_info?: {
            h?: number | undefined;
            w?: number | undefined;
            mimetype?: string | undefined;
            size?: number | undefined;
        } | undefined;
        thumbnail_url?: string | undefined;
    } | undefined>;
    url: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
}, undefined, {
    msgType: "m.file";
    body: string;
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
}> | import("valibot").ObjectSchema<{
    msgType: import("valibot").LiteralSchema<"m.audio", "m.audio">;
    body: import("valibot").StringSchema<string>;
    info: import("valibot").OptionalSchema<import("valibot").ObjectSchema<{
        duration: import("valibot").OptionalSchema<import("valibot").NumberSchema<number>, undefined, number | undefined>;
        mimetype: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
        size: import("valibot").OptionalSchema<import("valibot").NumberSchema<number>, undefined, number | undefined>;
    }, undefined, {
        mimetype?: string | undefined;
        size?: number | undefined;
        duration?: number | undefined;
    }>, undefined, {
        mimetype?: string | undefined;
        size?: number | undefined;
        duration?: number | undefined;
    } | undefined>;
    url: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
}, undefined, {
    msgType: "m.audio";
    body: string;
    info?: {
        mimetype?: string | undefined;
        size?: number | undefined;
        duration?: number | undefined;
    } | undefined;
    url?: string | undefined;
}> | import("valibot").ObjectSchema<{
    msgType: import("valibot").LiteralSchema<"m.location", "m.location">;
    body: import("valibot").StringSchema<string>;
    info: import("valibot").OptionalSchema<import("valibot").ObjectSchema<{
        thumbnail_info: import("valibot").OptionalSchema<import("valibot").ObjectSchema<import("valibot").PartialObjectEntries<{
            h: import("valibot").NumberSchema<number>;
            w: import("valibot").NumberSchema<number>;
            mimetype: import("valibot").StringSchema<string>;
            size: import("valibot").NumberSchema<number>;
        }>, undefined, {
            h?: number | undefined;
            w?: number | undefined;
            mimetype?: string | undefined;
            size?: number | undefined;
        }>, undefined, {
            h?: number | undefined;
            w?: number | undefined;
            mimetype?: string | undefined;
            size?: number | undefined;
        } | undefined>;
        thumbnail_url: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
    }, undefined, {
        thumbnail_info?: {
            h?: number | undefined;
            w?: number | undefined;
            mimetype?: string | undefined;
            size?: number | undefined;
        } | undefined;
        thumbnail_url?: string | undefined;
    }>, undefined, {
        thumbnail_info?: {
            h?: number | undefined;
            w?: number | undefined;
            mimetype?: string | undefined;
            size?: number | undefined;
        } | undefined;
        thumbnail_url?: string | undefined;
    } | undefined>;
    geo_uri: import("valibot").StringSchema<string>;
}, undefined, {
    msgType: "m.location";
    body: string;
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
}> | import("valibot").ObjectSchema<{
    msgType: import("valibot").LiteralSchema<"m.video", "m.video">;
    body: import("valibot").StringSchema<string>;
    info: import("valibot").OptionalSchema<import("valibot").ObjectSchema<{
        duration: import("valibot").OptionalSchema<import("valibot").NumberSchema<number>, undefined, number | undefined>;
        h: import("valibot").OptionalSchema<import("valibot").NumberSchema<number>, undefined, number | undefined>;
        mimetype: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
        size: import("valibot").OptionalSchema<import("valibot").NumberSchema<number>, undefined, number | undefined>;
        thumbnail_info: import("valibot").OptionalSchema<import("valibot").ObjectSchema<import("valibot").PartialObjectEntries<{
            h: import("valibot").NumberSchema<number>;
            w: import("valibot").NumberSchema<number>;
            mimetype: import("valibot").StringSchema<string>;
            size: import("valibot").NumberSchema<number>;
        }>, undefined, {
            h?: number | undefined;
            w?: number | undefined;
            mimetype?: string | undefined;
            size?: number | undefined;
        }>, undefined, {
            h?: number | undefined;
            w?: number | undefined;
            mimetype?: string | undefined;
            size?: number | undefined;
        } | undefined>;
        thumbnail_url: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
        w: import("valibot").OptionalSchema<import("valibot").NumberSchema<number>, undefined, number | undefined>;
    }, undefined, {
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
    }>, undefined, {
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
    } | undefined>;
    url: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
}, undefined, {
    msgType: "m.video";
    body: string;
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
}> | import("valibot").ObjectSchema<{
    msgType: import("valibot").LiteralSchema<"m.key.verification.request", "m.key.verification.request">;
    body: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
    format: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
    formatted_body: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
    from_device: import("valibot").StringSchema<string>;
    methods: import("valibot").ArraySchema<import("valibot").StringSchema<string>, string[]>;
    timestamp: import("valibot").NumberSchema<number>;
    transaction_id: import("valibot").StringSchema<string>;
}, undefined, {
    msgType: "m.key.verification.request";
    from_device: string;
    methods: string[];
    timestamp: number;
    transaction_id: string;
    body?: string | undefined;
    format?: string | undefined;
    formatted_body?: string | undefined;
}>)[], {
    msgType: "m.text";
    body: string;
    format?: string | undefined;
    formatted_body?: string | undefined;
} | {
    msgType: "m.emote";
    body: string;
    format?: string | undefined;
    formatted_body?: string | undefined;
} | {
    msgType: "m.notice";
    body: string;
    format?: string | undefined;
    formatted_body?: string | undefined;
} | {
    msgType: "m.image";
    body: string;
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
} | {
    msgType: "m.file";
    body: string;
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
} | {
    msgType: "m.audio";
    body: string;
    info?: {
        mimetype?: string | undefined;
        size?: number | undefined;
        duration?: number | undefined;
    } | undefined;
    url?: string | undefined;
} | {
    msgType: "m.location";
    body: string;
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
} | {
    msgType: "m.video";
    body: string;
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
} | {
    msgType: "m.key.verification.request";
    from_device: string;
    methods: string[];
    timestamp: number;
    transaction_id: string;
    body?: string | undefined;
    format?: string | undefined;
    formatted_body?: string | undefined;
}>;
export type RoomMessageContentOutput = Output<typeof RoomMessageContentSchema>;
export declare const SpecRoomEventTypeSchema: import("valibot").UnionSchema<(import("valibot").LiteralSchema<"m.room.message", "m.room.message"> | import("valibot").LiteralSchema<"m.room.member", "m.room.member"> | import("valibot").LiteralSchema<"m.room.create", "m.room.create"> | import("valibot").LiteralSchema<"m.room.join_rules", "m.room.join_rules"> | import("valibot").LiteralSchema<"m.room.power_levels", "m.room.power_levels"> | import("valibot").LiteralSchema<"m.room.name", "m.room.name"> | import("valibot").LiteralSchema<"m.room.topic", "m.room.topic"> | import("valibot").LiteralSchema<"m.room.avatar", "m.room.avatar"> | import("valibot").LiteralSchema<"m.room.canonical_alias", "m.room.canonical_alias"> | import("valibot").LiteralSchema<"m.room.aliases", "m.room.aliases"> | import("valibot").LiteralSchema<"m.room.redaction", "m.room.redaction"> | import("valibot").LiteralSchema<"m.room.history_visibility", "m.room.history_visibility"> | import("valibot").LiteralSchema<"m.room.encryption", "m.room.encryption"> | import("valibot").LiteralSchema<"m.room.third_party_invite", "m.room.third_party_invite"> | import("valibot").LiteralSchema<"m.room.related_groups", "m.room.related_groups"> | import("valibot").LiteralSchema<"m.room.pinned_events", "m.room.pinned_events"> | import("valibot").LiteralSchema<"m.room.server_acl", "m.room.server_acl"> | import("valibot").LiteralSchema<"m.room.tombstone", "m.room.tombstone"> | import("valibot").LiteralSchema<"m.room.key", "m.room.key"> | import("valibot").LiteralSchema<"m.room.forwarded_room_key", "m.room.forwarded_room_key"> | import("valibot").LiteralSchema<"m.room.encrypted", "m.room.encrypted"> | import("valibot").LiteralSchema<"m.room.message.feedback", "m.room.message.feedback"> | import("valibot").LiteralSchema<"m.room.message.receipt", "m.room.message.receipt"> | import("valibot").LiteralSchema<"m.room.message.relation", "m.room.message.relation"> | import("valibot").LiteralSchema<"m.room.message.encrypted", "m.room.message.encrypted"> | import("valibot").LiteralSchema<"m.room.tag", "m.room.tag"> | import("valibot").LiteralSchema<"m.room.sticker", "m.room.sticker"> | import("valibot").LiteralSchema<"m.room.space", "m.room.space"> | import("valibot").LiteralSchema<"m.room.guest_access", "m.room.guest_access">)[], "m.room.message" | "m.room.member" | "m.room.create" | "m.room.join_rules" | "m.room.power_levels" | "m.room.name" | "m.room.topic" | "m.room.avatar" | "m.room.canonical_alias" | "m.room.aliases" | "m.room.redaction" | "m.room.history_visibility" | "m.room.encryption" | "m.room.third_party_invite" | "m.room.related_groups" | "m.room.pinned_events" | "m.room.server_acl" | "m.room.tombstone" | "m.room.key" | "m.room.forwarded_room_key" | "m.room.encrypted" | "m.room.message.feedback" | "m.room.message.receipt" | "m.room.message.relation" | "m.room.message.encrypted" | "m.room.tag" | "m.room.sticker" | "m.room.space" | "m.room.guest_access">;
export type SpecRoomEventTypeOutput = Output<typeof SpecRoomEventTypeSchema>;
export declare const PowerLevelsContentSchema: import("valibot").ObjectSchema<import("valibot").PartialObjectEntries<{
    ban: import("valibot").NumberSchema<number>;
    events: import("valibot").RecordSchema<import("valibot").StringSchema<string>, import("valibot").NumberSchema<number>, {
        [x: string]: number;
    }>;
    events_default: import("valibot").NumberSchema<number>;
    invite: import("valibot").NumberSchema<number>;
    kick: import("valibot").NumberSchema<number>;
    redact: import("valibot").NumberSchema<number>;
    state_default: import("valibot").NumberSchema<number>;
    users: import("valibot").RecordSchema<import("valibot").StringSchema<string>, import("valibot").NumberSchema<number>, {
        [x: string]: number;
    }>;
    users_default: import("valibot").NumberSchema<number>;
    notifications: import("valibot").ObjectSchema<{
        room: import("valibot").NumberSchema<number>;
    }, undefined, {
        room: number;
    }>;
}>, undefined, {
    ban?: number | undefined;
    events?: {
        [x: string]: number;
    } | undefined;
    events_default?: number | undefined;
    invite?: number | undefined;
    kick?: number | undefined;
    redact?: number | undefined;
    state_default?: number | undefined;
    users?: {
        [x: string]: number;
    } | undefined;
    users_default?: number | undefined;
    notifications?: {
        room: number;
    } | undefined;
}>;
export declare const EventContentSchema: import("valibot").ObjectSchema<{
    body: import("valibot").StringSchema<string>;
    msgtype: import("valibot").StringSchema<string>;
    "m.relates_to": import("valibot").OptionalSchema<import("valibot").ObjectSchema<{
        event_id: import("valibot").StringSchema<string>;
        rel_type: import("valibot").StringSchema<string>;
    }, undefined, {
        event_id: string;
        rel_type: string;
    }>, undefined, {
        event_id: string;
        rel_type: string;
    } | undefined>;
}, undefined, {
    body: string;
    msgtype: string;
    "m.relates_to"?: {
        event_id: string;
        rel_type: string;
    } | undefined;
}>;
export type EventContentOutput = Output<typeof EventContentSchema>;
export declare const ContentUnionSchema: import("valibot").UnionSchema<(import("valibot").UnionSchema<(import("valibot").ObjectSchema<{
    msgType: import("valibot").LiteralSchema<"m.text", "m.text">;
    body: import("valibot").StringSchema<string>;
    format: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
    formatted_body: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
}, undefined, {
    msgType: "m.text";
    body: string;
    format?: string | undefined;
    formatted_body?: string | undefined;
}> | import("valibot").ObjectSchema<{
    msgType: import("valibot").LiteralSchema<"m.emote", "m.emote">;
    body: import("valibot").StringSchema<string>;
    format: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
    formatted_body: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
}, undefined, {
    msgType: "m.emote";
    body: string;
    format?: string | undefined;
    formatted_body?: string | undefined;
}> | import("valibot").ObjectSchema<{
    msgType: import("valibot").LiteralSchema<"m.notice", "m.notice">;
    body: import("valibot").StringSchema<string>;
    format: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
    formatted_body: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
}, undefined, {
    msgType: "m.notice";
    body: string;
    format?: string | undefined;
    formatted_body?: string | undefined;
}> | import("valibot").ObjectSchema<{
    msgType: import("valibot").LiteralSchema<"m.image", "m.image">;
    body: import("valibot").StringSchema<string>;
    info: import("valibot").OptionalSchema<import("valibot").ObjectSchema<{
        h: import("valibot").NumberSchema<number>;
        w: import("valibot").NumberSchema<number>;
        mimetype: import("valibot").StringSchema<string>;
        size: import("valibot").NumberSchema<number>;
        thumbnail_info: import("valibot").OptionalSchema<import("valibot").ObjectSchema<import("valibot").PartialObjectEntries<{
            h: import("valibot").NumberSchema<number>;
            w: import("valibot").NumberSchema<number>;
            mimetype: import("valibot").StringSchema<string>;
            size: import("valibot").NumberSchema<number>;
        }>, undefined, {
            h?: number | undefined;
            w?: number | undefined;
            mimetype?: string | undefined;
            size?: number | undefined;
        }>, undefined, {
            h?: number | undefined;
            w?: number | undefined;
            mimetype?: string | undefined;
            size?: number | undefined;
        } | undefined>;
        thumbnail_url: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
    }, undefined, {
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
    }>, undefined, {
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
    } | undefined>;
    url: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
}, undefined, {
    msgType: "m.image";
    body: string;
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
}> | import("valibot").ObjectSchema<{
    msgType: import("valibot").LiteralSchema<"m.file", "m.file">;
    body: import("valibot").StringSchema<string>;
    filename: import("valibot").StringSchema<string>;
    info: import("valibot").OptionalSchema<import("valibot").ObjectSchema<{
        mimetype: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
        size: import("valibot").OptionalSchema<import("valibot").NumberSchema<number>, undefined, number | undefined>;
        thumbnail_info: import("valibot").OptionalSchema<import("valibot").ObjectSchema<import("valibot").PartialObjectEntries<{
            h: import("valibot").NumberSchema<number>;
            w: import("valibot").NumberSchema<number>;
            mimetype: import("valibot").StringSchema<string>;
            size: import("valibot").NumberSchema<number>;
        }>, undefined, {
            h?: number | undefined;
            w?: number | undefined;
            mimetype?: string | undefined;
            size?: number | undefined;
        }>, undefined, {
            h?: number | undefined;
            w?: number | undefined;
            mimetype?: string | undefined;
            size?: number | undefined;
        } | undefined>;
        thumbnail_url: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
    }, undefined, {
        mimetype?: string | undefined;
        size?: number | undefined;
        thumbnail_info?: {
            h?: number | undefined;
            w?: number | undefined;
            mimetype?: string | undefined;
            size?: number | undefined;
        } | undefined;
        thumbnail_url?: string | undefined;
    }>, undefined, {
        mimetype?: string | undefined;
        size?: number | undefined;
        thumbnail_info?: {
            h?: number | undefined;
            w?: number | undefined;
            mimetype?: string | undefined;
            size?: number | undefined;
        } | undefined;
        thumbnail_url?: string | undefined;
    } | undefined>;
    url: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
}, undefined, {
    msgType: "m.file";
    body: string;
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
}> | import("valibot").ObjectSchema<{
    msgType: import("valibot").LiteralSchema<"m.audio", "m.audio">;
    body: import("valibot").StringSchema<string>;
    info: import("valibot").OptionalSchema<import("valibot").ObjectSchema<{
        duration: import("valibot").OptionalSchema<import("valibot").NumberSchema<number>, undefined, number | undefined>;
        mimetype: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
        size: import("valibot").OptionalSchema<import("valibot").NumberSchema<number>, undefined, number | undefined>;
    }, undefined, {
        mimetype?: string | undefined;
        size?: number | undefined;
        duration?: number | undefined;
    }>, undefined, {
        mimetype?: string | undefined;
        size?: number | undefined;
        duration?: number | undefined;
    } | undefined>;
    url: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
}, undefined, {
    msgType: "m.audio";
    body: string;
    info?: {
        mimetype?: string | undefined;
        size?: number | undefined;
        duration?: number | undefined;
    } | undefined;
    url?: string | undefined;
}> | import("valibot").ObjectSchema<{
    msgType: import("valibot").LiteralSchema<"m.location", "m.location">;
    body: import("valibot").StringSchema<string>;
    info: import("valibot").OptionalSchema<import("valibot").ObjectSchema<{
        thumbnail_info: import("valibot").OptionalSchema<import("valibot").ObjectSchema<import("valibot").PartialObjectEntries<{
            h: import("valibot").NumberSchema<number>;
            w: import("valibot").NumberSchema<number>;
            mimetype: import("valibot").StringSchema<string>;
            size: import("valibot").NumberSchema<number>;
        }>, undefined, {
            h?: number | undefined;
            w?: number | undefined;
            mimetype?: string | undefined;
            size?: number | undefined;
        }>, undefined, {
            h?: number | undefined;
            w?: number | undefined;
            mimetype?: string | undefined;
            size?: number | undefined;
        } | undefined>;
        thumbnail_url: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
    }, undefined, {
        thumbnail_info?: {
            h?: number | undefined;
            w?: number | undefined;
            mimetype?: string | undefined;
            size?: number | undefined;
        } | undefined;
        thumbnail_url?: string | undefined;
    }>, undefined, {
        thumbnail_info?: {
            h?: number | undefined;
            w?: number | undefined;
            mimetype?: string | undefined;
            size?: number | undefined;
        } | undefined;
        thumbnail_url?: string | undefined;
    } | undefined>;
    geo_uri: import("valibot").StringSchema<string>;
}, undefined, {
    msgType: "m.location";
    body: string;
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
}> | import("valibot").ObjectSchema<{
    msgType: import("valibot").LiteralSchema<"m.video", "m.video">;
    body: import("valibot").StringSchema<string>;
    info: import("valibot").OptionalSchema<import("valibot").ObjectSchema<{
        duration: import("valibot").OptionalSchema<import("valibot").NumberSchema<number>, undefined, number | undefined>;
        h: import("valibot").OptionalSchema<import("valibot").NumberSchema<number>, undefined, number | undefined>;
        mimetype: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
        size: import("valibot").OptionalSchema<import("valibot").NumberSchema<number>, undefined, number | undefined>;
        thumbnail_info: import("valibot").OptionalSchema<import("valibot").ObjectSchema<import("valibot").PartialObjectEntries<{
            h: import("valibot").NumberSchema<number>;
            w: import("valibot").NumberSchema<number>;
            mimetype: import("valibot").StringSchema<string>;
            size: import("valibot").NumberSchema<number>;
        }>, undefined, {
            h?: number | undefined;
            w?: number | undefined;
            mimetype?: string | undefined;
            size?: number | undefined;
        }>, undefined, {
            h?: number | undefined;
            w?: number | undefined;
            mimetype?: string | undefined;
            size?: number | undefined;
        } | undefined>;
        thumbnail_url: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
        w: import("valibot").OptionalSchema<import("valibot").NumberSchema<number>, undefined, number | undefined>;
    }, undefined, {
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
    }>, undefined, {
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
    } | undefined>;
    url: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
}, undefined, {
    msgType: "m.video";
    body: string;
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
}> | import("valibot").ObjectSchema<{
    msgType: import("valibot").LiteralSchema<"m.key.verification.request", "m.key.verification.request">;
    body: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
    format: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
    formatted_body: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
    from_device: import("valibot").StringSchema<string>;
    methods: import("valibot").ArraySchema<import("valibot").StringSchema<string>, string[]>;
    timestamp: import("valibot").NumberSchema<number>;
    transaction_id: import("valibot").StringSchema<string>;
}, undefined, {
    msgType: "m.key.verification.request";
    from_device: string;
    methods: string[];
    timestamp: number;
    transaction_id: string;
    body?: string | undefined;
    format?: string | undefined;
    formatted_body?: string | undefined;
}>)[], {
    msgType: "m.text";
    body: string;
    format?: string | undefined;
    formatted_body?: string | undefined;
} | {
    msgType: "m.emote";
    body: string;
    format?: string | undefined;
    formatted_body?: string | undefined;
} | {
    msgType: "m.notice";
    body: string;
    format?: string | undefined;
    formatted_body?: string | undefined;
} | {
    msgType: "m.image";
    body: string;
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
} | {
    msgType: "m.file";
    body: string;
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
} | {
    msgType: "m.audio";
    body: string;
    info?: {
        mimetype?: string | undefined;
        size?: number | undefined;
        duration?: number | undefined;
    } | undefined;
    url?: string | undefined;
} | {
    msgType: "m.location";
    body: string;
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
} | {
    msgType: "m.video";
    body: string;
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
} | {
    msgType: "m.key.verification.request";
    from_device: string;
    methods: string[];
    timestamp: number;
    transaction_id: string;
    body?: string | undefined;
    format?: string | undefined;
    formatted_body?: string | undefined;
}> | import("valibot").ObjectSchema<import("valibot").PartialObjectEntries<{
    ban: import("valibot").NumberSchema<number>;
    events: import("valibot").RecordSchema<import("valibot").StringSchema<string>, import("valibot").NumberSchema<number>, {
        [x: string]: number;
    }>;
    events_default: import("valibot").NumberSchema<number>;
    invite: import("valibot").NumberSchema<number>;
    kick: import("valibot").NumberSchema<number>;
    redact: import("valibot").NumberSchema<number>;
    state_default: import("valibot").NumberSchema<number>;
    users: import("valibot").RecordSchema<import("valibot").StringSchema<string>, import("valibot").NumberSchema<number>, {
        [x: string]: number;
    }>;
    users_default: import("valibot").NumberSchema<number>;
    notifications: import("valibot").ObjectSchema<{
        room: import("valibot").NumberSchema<number>;
    }, undefined, {
        room: number;
    }>;
}>, undefined, {
    ban?: number | undefined;
    events?: {
        [x: string]: number;
    } | undefined;
    events_default?: number | undefined;
    invite?: number | undefined;
    kick?: number | undefined;
    redact?: number | undefined;
    state_default?: number | undefined;
    users?: {
        [x: string]: number;
    } | undefined;
    users_default?: number | undefined;
    notifications?: {
        room: number;
    } | undefined;
}> | import("valibot").ObjectSchema<{
    body: import("valibot").StringSchema<string>;
    msgtype: import("valibot").StringSchema<string>;
    "m.relates_to": import("valibot").OptionalSchema<import("valibot").ObjectSchema<{
        event_id: import("valibot").StringSchema<string>;
        rel_type: import("valibot").StringSchema<string>;
    }, undefined, {
        event_id: string;
        rel_type: string;
    }>, undefined, {
        event_id: string;
        rel_type: string;
    } | undefined>;
}, undefined, {
    body: string;
    msgtype: string;
    "m.relates_to"?: {
        event_id: string;
        rel_type: string;
    } | undefined;
}>)[], {
    msgType: "m.text";
    body: string;
    format?: string | undefined;
    formatted_body?: string | undefined;
} | {
    msgType: "m.emote";
    body: string;
    format?: string | undefined;
    formatted_body?: string | undefined;
} | {
    msgType: "m.notice";
    body: string;
    format?: string | undefined;
    formatted_body?: string | undefined;
} | {
    msgType: "m.image";
    body: string;
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
} | {
    msgType: "m.file";
    body: string;
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
} | {
    msgType: "m.audio";
    body: string;
    info?: {
        mimetype?: string | undefined;
        size?: number | undefined;
        duration?: number | undefined;
    } | undefined;
    url?: string | undefined;
} | {
    msgType: "m.location";
    body: string;
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
} | {
    msgType: "m.video";
    body: string;
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
} | {
    msgType: "m.key.verification.request";
    from_device: string;
    methods: string[];
    timestamp: number;
    transaction_id: string;
    body?: string | undefined;
    format?: string | undefined;
    formatted_body?: string | undefined;
} | {
    ban?: number | undefined;
    events?: {
        [x: string]: number;
    } | undefined;
    events_default?: number | undefined;
    invite?: number | undefined;
    kick?: number | undefined;
    redact?: number | undefined;
    state_default?: number | undefined;
    users?: {
        [x: string]: number;
    } | undefined;
    users_default?: number | undefined;
    notifications?: {
        room: number;
    } | undefined;
} | {
    body: string;
    msgtype: string;
    "m.relates_to"?: {
        event_id: string;
        rel_type: string;
    } | undefined;
}>;
export declare const ClientEventBaseSchema: import("valibot").ObjectSchema<{
    sender: import("valibot").StringSchema<string>;
    room_id: import("valibot").StringSchema<string>;
    event_id: import("valibot").StringSchema<string>;
    state_key: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
    origin_server_ts: import("valibot").NumberSchema<number>;
    age: import("valibot").OptionalSchema<import("valibot").NumberSchema<number>, undefined, number | undefined>;
    replaces_state: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
    prev_content: import("valibot").OptionalSchema<import("valibot").UnionSchema<(import("valibot").UnionSchema<(import("valibot").ObjectSchema<{
        msgType: import("valibot").LiteralSchema<"m.text", "m.text">;
        body: import("valibot").StringSchema<string>;
        format: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
        formatted_body: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
    }, undefined, {
        msgType: "m.text";
        body: string;
        format?: string | undefined;
        formatted_body?: string | undefined;
    }> | import("valibot").ObjectSchema<{
        msgType: import("valibot").LiteralSchema<"m.emote", "m.emote">;
        body: import("valibot").StringSchema<string>;
        format: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
        formatted_body: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
    }, undefined, {
        msgType: "m.emote";
        body: string;
        format?: string | undefined;
        formatted_body?: string | undefined;
    }> | import("valibot").ObjectSchema<{
        msgType: import("valibot").LiteralSchema<"m.notice", "m.notice">;
        body: import("valibot").StringSchema<string>;
        format: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
        formatted_body: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
    }, undefined, {
        msgType: "m.notice";
        body: string;
        format?: string | undefined;
        formatted_body?: string | undefined;
    }> | import("valibot").ObjectSchema<{
        msgType: import("valibot").LiteralSchema<"m.image", "m.image">;
        body: import("valibot").StringSchema<string>;
        info: import("valibot").OptionalSchema<import("valibot").ObjectSchema<{
            h: import("valibot").NumberSchema<number>;
            w: import("valibot").NumberSchema<number>;
            mimetype: import("valibot").StringSchema<string>;
            size: import("valibot").NumberSchema<number>;
            thumbnail_info: import("valibot").OptionalSchema<import("valibot").ObjectSchema<import("valibot").PartialObjectEntries<{
                h: import("valibot").NumberSchema<number>;
                w: import("valibot").NumberSchema<number>;
                mimetype: import("valibot").StringSchema<string>;
                size: import("valibot").NumberSchema<number>;
            }>, undefined, {
                h?: number | undefined;
                w?: number | undefined;
                mimetype?: string | undefined;
                size?: number | undefined;
            }>, undefined, {
                h?: number | undefined;
                w?: number | undefined;
                mimetype?: string | undefined;
                size?: number | undefined;
            } | undefined>;
            thumbnail_url: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
        }, undefined, {
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
        }>, undefined, {
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
        } | undefined>;
        url: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
    }, undefined, {
        msgType: "m.image";
        body: string;
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
    }> | import("valibot").ObjectSchema<{
        msgType: import("valibot").LiteralSchema<"m.file", "m.file">;
        body: import("valibot").StringSchema<string>;
        filename: import("valibot").StringSchema<string>;
        info: import("valibot").OptionalSchema<import("valibot").ObjectSchema<{
            mimetype: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
            size: import("valibot").OptionalSchema<import("valibot").NumberSchema<number>, undefined, number | undefined>;
            thumbnail_info: import("valibot").OptionalSchema<import("valibot").ObjectSchema<import("valibot").PartialObjectEntries<{
                h: import("valibot").NumberSchema<number>;
                w: import("valibot").NumberSchema<number>;
                mimetype: import("valibot").StringSchema<string>;
                size: import("valibot").NumberSchema<number>;
            }>, undefined, {
                h?: number | undefined;
                w?: number | undefined;
                mimetype?: string | undefined;
                size?: number | undefined;
            }>, undefined, {
                h?: number | undefined;
                w?: number | undefined;
                mimetype?: string | undefined;
                size?: number | undefined;
            } | undefined>;
            thumbnail_url: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
        }, undefined, {
            mimetype?: string | undefined;
            size?: number | undefined;
            thumbnail_info?: {
                h?: number | undefined;
                w?: number | undefined;
                mimetype?: string | undefined;
                size?: number | undefined;
            } | undefined;
            thumbnail_url?: string | undefined;
        }>, undefined, {
            mimetype?: string | undefined;
            size?: number | undefined;
            thumbnail_info?: {
                h?: number | undefined;
                w?: number | undefined;
                mimetype?: string | undefined;
                size?: number | undefined;
            } | undefined;
            thumbnail_url?: string | undefined;
        } | undefined>;
        url: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
    }, undefined, {
        msgType: "m.file";
        body: string;
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
    }> | import("valibot").ObjectSchema<{
        msgType: import("valibot").LiteralSchema<"m.audio", "m.audio">;
        body: import("valibot").StringSchema<string>;
        info: import("valibot").OptionalSchema<import("valibot").ObjectSchema<{
            duration: import("valibot").OptionalSchema<import("valibot").NumberSchema<number>, undefined, number | undefined>;
            mimetype: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
            size: import("valibot").OptionalSchema<import("valibot").NumberSchema<number>, undefined, number | undefined>;
        }, undefined, {
            mimetype?: string | undefined;
            size?: number | undefined;
            duration?: number | undefined;
        }>, undefined, {
            mimetype?: string | undefined;
            size?: number | undefined;
            duration?: number | undefined;
        } | undefined>;
        url: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
    }, undefined, {
        msgType: "m.audio";
        body: string;
        info?: {
            mimetype?: string | undefined;
            size?: number | undefined;
            duration?: number | undefined;
        } | undefined;
        url?: string | undefined;
    }> | import("valibot").ObjectSchema<{
        msgType: import("valibot").LiteralSchema<"m.location", "m.location">;
        body: import("valibot").StringSchema<string>;
        info: import("valibot").OptionalSchema<import("valibot").ObjectSchema<{
            thumbnail_info: import("valibot").OptionalSchema<import("valibot").ObjectSchema<import("valibot").PartialObjectEntries<{
                h: import("valibot").NumberSchema<number>;
                w: import("valibot").NumberSchema<number>;
                mimetype: import("valibot").StringSchema<string>;
                size: import("valibot").NumberSchema<number>;
            }>, undefined, {
                h?: number | undefined;
                w?: number | undefined;
                mimetype?: string | undefined;
                size?: number | undefined;
            }>, undefined, {
                h?: number | undefined;
                w?: number | undefined;
                mimetype?: string | undefined;
                size?: number | undefined;
            } | undefined>;
            thumbnail_url: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
        }, undefined, {
            thumbnail_info?: {
                h?: number | undefined;
                w?: number | undefined;
                mimetype?: string | undefined;
                size?: number | undefined;
            } | undefined;
            thumbnail_url?: string | undefined;
        }>, undefined, {
            thumbnail_info?: {
                h?: number | undefined;
                w?: number | undefined;
                mimetype?: string | undefined;
                size?: number | undefined;
            } | undefined;
            thumbnail_url?: string | undefined;
        } | undefined>;
        geo_uri: import("valibot").StringSchema<string>;
    }, undefined, {
        msgType: "m.location";
        body: string;
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
    }> | import("valibot").ObjectSchema<{
        msgType: import("valibot").LiteralSchema<"m.video", "m.video">;
        body: import("valibot").StringSchema<string>;
        info: import("valibot").OptionalSchema<import("valibot").ObjectSchema<{
            duration: import("valibot").OptionalSchema<import("valibot").NumberSchema<number>, undefined, number | undefined>;
            h: import("valibot").OptionalSchema<import("valibot").NumberSchema<number>, undefined, number | undefined>;
            mimetype: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
            size: import("valibot").OptionalSchema<import("valibot").NumberSchema<number>, undefined, number | undefined>;
            thumbnail_info: import("valibot").OptionalSchema<import("valibot").ObjectSchema<import("valibot").PartialObjectEntries<{
                h: import("valibot").NumberSchema<number>;
                w: import("valibot").NumberSchema<number>;
                mimetype: import("valibot").StringSchema<string>;
                size: import("valibot").NumberSchema<number>;
            }>, undefined, {
                h?: number | undefined;
                w?: number | undefined;
                mimetype?: string | undefined;
                size?: number | undefined;
            }>, undefined, {
                h?: number | undefined;
                w?: number | undefined;
                mimetype?: string | undefined;
                size?: number | undefined;
            } | undefined>;
            thumbnail_url: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
            w: import("valibot").OptionalSchema<import("valibot").NumberSchema<number>, undefined, number | undefined>;
        }, undefined, {
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
        }>, undefined, {
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
        } | undefined>;
        url: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
    }, undefined, {
        msgType: "m.video";
        body: string;
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
    }> | import("valibot").ObjectSchema<{
        msgType: import("valibot").LiteralSchema<"m.key.verification.request", "m.key.verification.request">;
        body: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
        format: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
        formatted_body: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
        from_device: import("valibot").StringSchema<string>;
        methods: import("valibot").ArraySchema<import("valibot").StringSchema<string>, string[]>;
        timestamp: import("valibot").NumberSchema<number>;
        transaction_id: import("valibot").StringSchema<string>;
    }, undefined, {
        msgType: "m.key.verification.request";
        from_device: string;
        methods: string[];
        timestamp: number;
        transaction_id: string;
        body?: string | undefined;
        format?: string | undefined;
        formatted_body?: string | undefined;
    }>)[], {
        msgType: "m.text";
        body: string;
        format?: string | undefined;
        formatted_body?: string | undefined;
    } | {
        msgType: "m.emote";
        body: string;
        format?: string | undefined;
        formatted_body?: string | undefined;
    } | {
        msgType: "m.notice";
        body: string;
        format?: string | undefined;
        formatted_body?: string | undefined;
    } | {
        msgType: "m.image";
        body: string;
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
    } | {
        msgType: "m.file";
        body: string;
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
    } | {
        msgType: "m.audio";
        body: string;
        info?: {
            mimetype?: string | undefined;
            size?: number | undefined;
            duration?: number | undefined;
        } | undefined;
        url?: string | undefined;
    } | {
        msgType: "m.location";
        body: string;
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
    } | {
        msgType: "m.video";
        body: string;
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
    } | {
        msgType: "m.key.verification.request";
        from_device: string;
        methods: string[];
        timestamp: number;
        transaction_id: string;
        body?: string | undefined;
        format?: string | undefined;
        formatted_body?: string | undefined;
    }> | import("valibot").ObjectSchema<import("valibot").PartialObjectEntries<{
        ban: import("valibot").NumberSchema<number>;
        events: import("valibot").RecordSchema<import("valibot").StringSchema<string>, import("valibot").NumberSchema<number>, {
            [x: string]: number;
        }>;
        events_default: import("valibot").NumberSchema<number>;
        invite: import("valibot").NumberSchema<number>;
        kick: import("valibot").NumberSchema<number>;
        redact: import("valibot").NumberSchema<number>;
        state_default: import("valibot").NumberSchema<number>;
        users: import("valibot").RecordSchema<import("valibot").StringSchema<string>, import("valibot").NumberSchema<number>, {
            [x: string]: number;
        }>;
        users_default: import("valibot").NumberSchema<number>;
        notifications: import("valibot").ObjectSchema<{
            room: import("valibot").NumberSchema<number>;
        }, undefined, {
            room: number;
        }>;
    }>, undefined, {
        ban?: number | undefined;
        events?: {
            [x: string]: number;
        } | undefined;
        events_default?: number | undefined;
        invite?: number | undefined;
        kick?: number | undefined;
        redact?: number | undefined;
        state_default?: number | undefined;
        users?: {
            [x: string]: number;
        } | undefined;
        users_default?: number | undefined;
        notifications?: {
            room: number;
        } | undefined;
    }> | import("valibot").ObjectSchema<{
        body: import("valibot").StringSchema<string>;
        msgtype: import("valibot").StringSchema<string>;
        "m.relates_to": import("valibot").OptionalSchema<import("valibot").ObjectSchema<{
            event_id: import("valibot").StringSchema<string>;
            rel_type: import("valibot").StringSchema<string>;
        }, undefined, {
            event_id: string;
            rel_type: string;
        }>, undefined, {
            event_id: string;
            rel_type: string;
        } | undefined>;
    }, undefined, {
        body: string;
        msgtype: string;
        "m.relates_to"?: {
            event_id: string;
            rel_type: string;
        } | undefined;
    }>)[], {
        msgType: "m.text";
        body: string;
        format?: string | undefined;
        formatted_body?: string | undefined;
    } | {
        msgType: "m.emote";
        body: string;
        format?: string | undefined;
        formatted_body?: string | undefined;
    } | {
        msgType: "m.notice";
        body: string;
        format?: string | undefined;
        formatted_body?: string | undefined;
    } | {
        msgType: "m.image";
        body: string;
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
    } | {
        msgType: "m.file";
        body: string;
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
    } | {
        msgType: "m.audio";
        body: string;
        info?: {
            mimetype?: string | undefined;
            size?: number | undefined;
            duration?: number | undefined;
        } | undefined;
        url?: string | undefined;
    } | {
        msgType: "m.location";
        body: string;
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
    } | {
        msgType: "m.video";
        body: string;
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
    } | {
        msgType: "m.key.verification.request";
        from_device: string;
        methods: string[];
        timestamp: number;
        transaction_id: string;
        body?: string | undefined;
        format?: string | undefined;
        formatted_body?: string | undefined;
    } | {
        ban?: number | undefined;
        events?: {
            [x: string]: number;
        } | undefined;
        events_default?: number | undefined;
        invite?: number | undefined;
        kick?: number | undefined;
        redact?: number | undefined;
        state_default?: number | undefined;
        users?: {
            [x: string]: number;
        } | undefined;
        users_default?: number | undefined;
        notifications?: {
            room: number;
        } | undefined;
    } | {
        body: string;
        msgtype: string;
        "m.relates_to"?: {
            event_id: string;
            rel_type: string;
        } | undefined;
    }>, undefined, {
        msgType: "m.text";
        body: string;
        format?: string | undefined;
        formatted_body?: string | undefined;
    } | {
        msgType: "m.emote";
        body: string;
        format?: string | undefined;
        formatted_body?: string | undefined;
    } | {
        msgType: "m.notice";
        body: string;
        format?: string | undefined;
        formatted_body?: string | undefined;
    } | {
        msgType: "m.image";
        body: string;
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
    } | {
        msgType: "m.file";
        body: string;
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
    } | {
        msgType: "m.audio";
        body: string;
        info?: {
            mimetype?: string | undefined;
            size?: number | undefined;
            duration?: number | undefined;
        } | undefined;
        url?: string | undefined;
    } | {
        msgType: "m.location";
        body: string;
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
    } | {
        msgType: "m.video";
        body: string;
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
    } | {
        msgType: "m.key.verification.request";
        from_device: string;
        methods: string[];
        timestamp: number;
        transaction_id: string;
        body?: string | undefined;
        format?: string | undefined;
        formatted_body?: string | undefined;
    } | {
        ban?: number | undefined;
        events?: {
            [x: string]: number;
        } | undefined;
        events_default?: number | undefined;
        invite?: number | undefined;
        kick?: number | undefined;
        redact?: number | undefined;
        state_default?: number | undefined;
        users?: {
            [x: string]: number;
        } | undefined;
        users_default?: number | undefined;
        notifications?: {
            room: number;
        } | undefined;
    } | {
        body: string;
        msgtype: string;
        "m.relates_to"?: {
            event_id: string;
            rel_type: string;
        } | undefined;
    } | undefined>;
    user_id: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
}, undefined, {
    event_id: string;
    sender: string;
    room_id: string;
    origin_server_ts: number;
    state_key?: string | undefined;
    age?: number | undefined;
    replaces_state?: string | undefined;
    prev_content?: {
        msgType: "m.text";
        body: string;
        format?: string | undefined;
        formatted_body?: string | undefined;
    } | {
        msgType: "m.emote";
        body: string;
        format?: string | undefined;
        formatted_body?: string | undefined;
    } | {
        msgType: "m.notice";
        body: string;
        format?: string | undefined;
        formatted_body?: string | undefined;
    } | {
        msgType: "m.image";
        body: string;
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
    } | {
        msgType: "m.file";
        body: string;
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
    } | {
        msgType: "m.audio";
        body: string;
        info?: {
            mimetype?: string | undefined;
            size?: number | undefined;
            duration?: number | undefined;
        } | undefined;
        url?: string | undefined;
    } | {
        msgType: "m.location";
        body: string;
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
    } | {
        msgType: "m.video";
        body: string;
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
    } | {
        msgType: "m.key.verification.request";
        from_device: string;
        methods: string[];
        timestamp: number;
        transaction_id: string;
        body?: string | undefined;
        format?: string | undefined;
        formatted_body?: string | undefined;
    } | {
        ban?: number | undefined;
        events?: {
            [x: string]: number;
        } | undefined;
        events_default?: number | undefined;
        invite?: number | undefined;
        kick?: number | undefined;
        redact?: number | undefined;
        state_default?: number | undefined;
        users?: {
            [x: string]: number;
        } | undefined;
        users_default?: number | undefined;
        notifications?: {
            room: number;
        } | undefined;
    } | {
        body: string;
        msgtype: string;
        "m.relates_to"?: {
            event_id: string;
            rel_type: string;
        } | undefined;
    } | undefined;
    user_id?: string | undefined;
}>;
export declare const ClientEventTypeAndContentSchema: import("valibot").UnionSchema<(import("valibot").ObjectSchema<{
    type: import("valibot").StringSchema<string>;
    content: import("valibot").ObjectSchema<{
        body: import("valibot").StringSchema<string>;
        msgtype: import("valibot").StringSchema<string>;
        "m.relates_to": import("valibot").OptionalSchema<import("valibot").ObjectSchema<{
            event_id: import("valibot").StringSchema<string>;
            rel_type: import("valibot").StringSchema<string>;
        }, undefined, {
            event_id: string;
            rel_type: string;
        }>, undefined, {
            event_id: string;
            rel_type: string;
        } | undefined>;
    }, undefined, {
        body: string;
        msgtype: string;
        "m.relates_to"?: {
            event_id: string;
            rel_type: string;
        } | undefined;
    }>;
}, undefined, {
    type: string;
    content: {
        body: string;
        msgtype: string;
        "m.relates_to"?: {
            event_id: string;
            rel_type: string;
        } | undefined;
    };
}> | import("valibot").ObjectSchema<{
    type: import("valibot").StringSchema<string>;
    content: import("valibot").UnknownSchema<unknown>;
}, undefined, {
    type: string;
    content: unknown;
}> | import("valibot").ObjectSchema<{
    type: import("valibot").LiteralSchema<"m.room.message", "m.room.message">;
    content: import("valibot").UnionSchema<(import("valibot").ObjectSchema<{
        msgType: import("valibot").LiteralSchema<"m.text", "m.text">;
        body: import("valibot").StringSchema<string>;
        format: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
        formatted_body: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
    }, undefined, {
        msgType: "m.text";
        body: string;
        format?: string | undefined;
        formatted_body?: string | undefined;
    }> | import("valibot").ObjectSchema<{
        msgType: import("valibot").LiteralSchema<"m.emote", "m.emote">;
        body: import("valibot").StringSchema<string>;
        format: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
        formatted_body: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
    }, undefined, {
        msgType: "m.emote";
        body: string;
        format?: string | undefined;
        formatted_body?: string | undefined;
    }> | import("valibot").ObjectSchema<{
        msgType: import("valibot").LiteralSchema<"m.notice", "m.notice">;
        body: import("valibot").StringSchema<string>;
        format: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
        formatted_body: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
    }, undefined, {
        msgType: "m.notice";
        body: string;
        format?: string | undefined;
        formatted_body?: string | undefined;
    }> | import("valibot").ObjectSchema<{
        msgType: import("valibot").LiteralSchema<"m.image", "m.image">;
        body: import("valibot").StringSchema<string>;
        info: import("valibot").OptionalSchema<import("valibot").ObjectSchema<{
            h: import("valibot").NumberSchema<number>;
            w: import("valibot").NumberSchema<number>;
            mimetype: import("valibot").StringSchema<string>;
            size: import("valibot").NumberSchema<number>;
            thumbnail_info: import("valibot").OptionalSchema<import("valibot").ObjectSchema<import("valibot").PartialObjectEntries<{
                h: import("valibot").NumberSchema<number>;
                w: import("valibot").NumberSchema<number>;
                mimetype: import("valibot").StringSchema<string>;
                size: import("valibot").NumberSchema<number>;
            }>, undefined, {
                h?: number | undefined;
                w?: number | undefined;
                mimetype?: string | undefined;
                size?: number | undefined;
            }>, undefined, {
                h?: number | undefined;
                w?: number | undefined;
                mimetype?: string | undefined;
                size?: number | undefined;
            } | undefined>;
            thumbnail_url: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
        }, undefined, {
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
        }>, undefined, {
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
        } | undefined>;
        url: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
    }, undefined, {
        msgType: "m.image";
        body: string;
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
    }> | import("valibot").ObjectSchema<{
        msgType: import("valibot").LiteralSchema<"m.file", "m.file">;
        body: import("valibot").StringSchema<string>;
        filename: import("valibot").StringSchema<string>;
        info: import("valibot").OptionalSchema<import("valibot").ObjectSchema<{
            mimetype: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
            size: import("valibot").OptionalSchema<import("valibot").NumberSchema<number>, undefined, number | undefined>;
            thumbnail_info: import("valibot").OptionalSchema<import("valibot").ObjectSchema<import("valibot").PartialObjectEntries<{
                h: import("valibot").NumberSchema<number>;
                w: import("valibot").NumberSchema<number>;
                mimetype: import("valibot").StringSchema<string>;
                size: import("valibot").NumberSchema<number>;
            }>, undefined, {
                h?: number | undefined;
                w?: number | undefined;
                mimetype?: string | undefined;
                size?: number | undefined;
            }>, undefined, {
                h?: number | undefined;
                w?: number | undefined;
                mimetype?: string | undefined;
                size?: number | undefined;
            } | undefined>;
            thumbnail_url: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
        }, undefined, {
            mimetype?: string | undefined;
            size?: number | undefined;
            thumbnail_info?: {
                h?: number | undefined;
                w?: number | undefined;
                mimetype?: string | undefined;
                size?: number | undefined;
            } | undefined;
            thumbnail_url?: string | undefined;
        }>, undefined, {
            mimetype?: string | undefined;
            size?: number | undefined;
            thumbnail_info?: {
                h?: number | undefined;
                w?: number | undefined;
                mimetype?: string | undefined;
                size?: number | undefined;
            } | undefined;
            thumbnail_url?: string | undefined;
        } | undefined>;
        url: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
    }, undefined, {
        msgType: "m.file";
        body: string;
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
    }> | import("valibot").ObjectSchema<{
        msgType: import("valibot").LiteralSchema<"m.audio", "m.audio">;
        body: import("valibot").StringSchema<string>;
        info: import("valibot").OptionalSchema<import("valibot").ObjectSchema<{
            duration: import("valibot").OptionalSchema<import("valibot").NumberSchema<number>, undefined, number | undefined>;
            mimetype: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
            size: import("valibot").OptionalSchema<import("valibot").NumberSchema<number>, undefined, number | undefined>;
        }, undefined, {
            mimetype?: string | undefined;
            size?: number | undefined;
            duration?: number | undefined;
        }>, undefined, {
            mimetype?: string | undefined;
            size?: number | undefined;
            duration?: number | undefined;
        } | undefined>;
        url: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
    }, undefined, {
        msgType: "m.audio";
        body: string;
        info?: {
            mimetype?: string | undefined;
            size?: number | undefined;
            duration?: number | undefined;
        } | undefined;
        url?: string | undefined;
    }> | import("valibot").ObjectSchema<{
        msgType: import("valibot").LiteralSchema<"m.location", "m.location">;
        body: import("valibot").StringSchema<string>;
        info: import("valibot").OptionalSchema<import("valibot").ObjectSchema<{
            thumbnail_info: import("valibot").OptionalSchema<import("valibot").ObjectSchema<import("valibot").PartialObjectEntries<{
                h: import("valibot").NumberSchema<number>;
                w: import("valibot").NumberSchema<number>;
                mimetype: import("valibot").StringSchema<string>;
                size: import("valibot").NumberSchema<number>;
            }>, undefined, {
                h?: number | undefined;
                w?: number | undefined;
                mimetype?: string | undefined;
                size?: number | undefined;
            }>, undefined, {
                h?: number | undefined;
                w?: number | undefined;
                mimetype?: string | undefined;
                size?: number | undefined;
            } | undefined>;
            thumbnail_url: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
        }, undefined, {
            thumbnail_info?: {
                h?: number | undefined;
                w?: number | undefined;
                mimetype?: string | undefined;
                size?: number | undefined;
            } | undefined;
            thumbnail_url?: string | undefined;
        }>, undefined, {
            thumbnail_info?: {
                h?: number | undefined;
                w?: number | undefined;
                mimetype?: string | undefined;
                size?: number | undefined;
            } | undefined;
            thumbnail_url?: string | undefined;
        } | undefined>;
        geo_uri: import("valibot").StringSchema<string>;
    }, undefined, {
        msgType: "m.location";
        body: string;
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
    }> | import("valibot").ObjectSchema<{
        msgType: import("valibot").LiteralSchema<"m.video", "m.video">;
        body: import("valibot").StringSchema<string>;
        info: import("valibot").OptionalSchema<import("valibot").ObjectSchema<{
            duration: import("valibot").OptionalSchema<import("valibot").NumberSchema<number>, undefined, number | undefined>;
            h: import("valibot").OptionalSchema<import("valibot").NumberSchema<number>, undefined, number | undefined>;
            mimetype: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
            size: import("valibot").OptionalSchema<import("valibot").NumberSchema<number>, undefined, number | undefined>;
            thumbnail_info: import("valibot").OptionalSchema<import("valibot").ObjectSchema<import("valibot").PartialObjectEntries<{
                h: import("valibot").NumberSchema<number>;
                w: import("valibot").NumberSchema<number>;
                mimetype: import("valibot").StringSchema<string>;
                size: import("valibot").NumberSchema<number>;
            }>, undefined, {
                h?: number | undefined;
                w?: number | undefined;
                mimetype?: string | undefined;
                size?: number | undefined;
            }>, undefined, {
                h?: number | undefined;
                w?: number | undefined;
                mimetype?: string | undefined;
                size?: number | undefined;
            } | undefined>;
            thumbnail_url: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
            w: import("valibot").OptionalSchema<import("valibot").NumberSchema<number>, undefined, number | undefined>;
        }, undefined, {
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
        }>, undefined, {
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
        } | undefined>;
        url: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
    }, undefined, {
        msgType: "m.video";
        body: string;
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
    }> | import("valibot").ObjectSchema<{
        msgType: import("valibot").LiteralSchema<"m.key.verification.request", "m.key.verification.request">;
        body: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
        format: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
        formatted_body: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
        from_device: import("valibot").StringSchema<string>;
        methods: import("valibot").ArraySchema<import("valibot").StringSchema<string>, string[]>;
        timestamp: import("valibot").NumberSchema<number>;
        transaction_id: import("valibot").StringSchema<string>;
    }, undefined, {
        msgType: "m.key.verification.request";
        from_device: string;
        methods: string[];
        timestamp: number;
        transaction_id: string;
        body?: string | undefined;
        format?: string | undefined;
        formatted_body?: string | undefined;
    }>)[], {
        msgType: "m.text";
        body: string;
        format?: string | undefined;
        formatted_body?: string | undefined;
    } | {
        msgType: "m.emote";
        body: string;
        format?: string | undefined;
        formatted_body?: string | undefined;
    } | {
        msgType: "m.notice";
        body: string;
        format?: string | undefined;
        formatted_body?: string | undefined;
    } | {
        msgType: "m.image";
        body: string;
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
    } | {
        msgType: "m.file";
        body: string;
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
    } | {
        msgType: "m.audio";
        body: string;
        info?: {
            mimetype?: string | undefined;
            size?: number | undefined;
            duration?: number | undefined;
        } | undefined;
        url?: string | undefined;
    } | {
        msgType: "m.location";
        body: string;
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
    } | {
        msgType: "m.video";
        body: string;
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
    } | {
        msgType: "m.key.verification.request";
        from_device: string;
        methods: string[];
        timestamp: number;
        transaction_id: string;
        body?: string | undefined;
        format?: string | undefined;
        formatted_body?: string | undefined;
    }>;
}, undefined, {
    type: "m.room.message";
    content: {
        msgType: "m.text";
        body: string;
        format?: string | undefined;
        formatted_body?: string | undefined;
    } | {
        msgType: "m.emote";
        body: string;
        format?: string | undefined;
        formatted_body?: string | undefined;
    } | {
        msgType: "m.notice";
        body: string;
        format?: string | undefined;
        formatted_body?: string | undefined;
    } | {
        msgType: "m.image";
        body: string;
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
    } | {
        msgType: "m.file";
        body: string;
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
    } | {
        msgType: "m.audio";
        body: string;
        info?: {
            mimetype?: string | undefined;
            size?: number | undefined;
            duration?: number | undefined;
        } | undefined;
        url?: string | undefined;
    } | {
        msgType: "m.location";
        body: string;
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
    } | {
        msgType: "m.video";
        body: string;
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
    } | {
        msgType: "m.key.verification.request";
        from_device: string;
        methods: string[];
        timestamp: number;
        transaction_id: string;
        body?: string | undefined;
        format?: string | undefined;
        formatted_body?: string | undefined;
    };
}> | import("valibot").ObjectSchema<{
    type: import("valibot").LiteralSchema<"m.room.power_levels", "m.room.power_levels">;
    content: import("valibot").ObjectSchema<import("valibot").PartialObjectEntries<{
        ban: import("valibot").NumberSchema<number>;
        events: import("valibot").RecordSchema<import("valibot").StringSchema<string>, import("valibot").NumberSchema<number>, {
            [x: string]: number;
        }>;
        events_default: import("valibot").NumberSchema<number>;
        invite: import("valibot").NumberSchema<number>;
        kick: import("valibot").NumberSchema<number>;
        redact: import("valibot").NumberSchema<number>;
        state_default: import("valibot").NumberSchema<number>;
        users: import("valibot").RecordSchema<import("valibot").StringSchema<string>, import("valibot").NumberSchema<number>, {
            [x: string]: number;
        }>;
        users_default: import("valibot").NumberSchema<number>;
        notifications: import("valibot").ObjectSchema<{
            room: import("valibot").NumberSchema<number>;
        }, undefined, {
            room: number;
        }>;
    }>, undefined, {
        ban?: number | undefined;
        events?: {
            [x: string]: number;
        } | undefined;
        events_default?: number | undefined;
        invite?: number | undefined;
        kick?: number | undefined;
        redact?: number | undefined;
        state_default?: number | undefined;
        users?: {
            [x: string]: number;
        } | undefined;
        users_default?: number | undefined;
        notifications?: {
            room: number;
        } | undefined;
    }>;
}, undefined, {
    type: "m.room.power_levels";
    content: {
        ban?: number | undefined;
        events?: {
            [x: string]: number;
        } | undefined;
        events_default?: number | undefined;
        invite?: number | undefined;
        kick?: number | undefined;
        redact?: number | undefined;
        state_default?: number | undefined;
        users?: {
            [x: string]: number;
        } | undefined;
        users_default?: number | undefined;
        notifications?: {
            room: number;
        } | undefined;
    };
}>)[], {
    type: string;
    content: {
        body: string;
        msgtype: string;
        "m.relates_to"?: {
            event_id: string;
            rel_type: string;
        } | undefined;
    };
} | {
    type: string;
    content: unknown;
} | {
    type: "m.room.message";
    content: {
        msgType: "m.text";
        body: string;
        format?: string | undefined;
        formatted_body?: string | undefined;
    } | {
        msgType: "m.emote";
        body: string;
        format?: string | undefined;
        formatted_body?: string | undefined;
    } | {
        msgType: "m.notice";
        body: string;
        format?: string | undefined;
        formatted_body?: string | undefined;
    } | {
        msgType: "m.image";
        body: string;
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
    } | {
        msgType: "m.file";
        body: string;
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
    } | {
        msgType: "m.audio";
        body: string;
        info?: {
            mimetype?: string | undefined;
            size?: number | undefined;
            duration?: number | undefined;
        } | undefined;
        url?: string | undefined;
    } | {
        msgType: "m.location";
        body: string;
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
    } | {
        msgType: "m.video";
        body: string;
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
    } | {
        msgType: "m.key.verification.request";
        from_device: string;
        methods: string[];
        timestamp: number;
        transaction_id: string;
        body?: string | undefined;
        format?: string | undefined;
        formatted_body?: string | undefined;
    };
} | {
    type: "m.room.power_levels";
    content: {
        ban?: number | undefined;
        events?: {
            [x: string]: number;
        } | undefined;
        events_default?: number | undefined;
        invite?: number | undefined;
        kick?: number | undefined;
        redact?: number | undefined;
        state_default?: number | undefined;
        users?: {
            [x: string]: number;
        } | undefined;
        users_default?: number | undefined;
        notifications?: {
            room: number;
        } | undefined;
    };
}>;
export type ContentUnionOutput = Output<typeof ContentUnionSchema>;
export declare const UnsignedDataSchema: import("valibot").ObjectSchema<import("valibot").PartialObjectEntries<{
    age: import("valibot").NumberSchema<number>;
    transaction_id: import("valibot").StringSchema<string>;
    prev_content: import("valibot").UnionSchema<(import("valibot").UnionSchema<(import("valibot").ObjectSchema<{
        msgType: import("valibot").LiteralSchema<"m.text", "m.text">;
        body: import("valibot").StringSchema<string>;
        format: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
        formatted_body: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
    }, undefined, {
        msgType: "m.text";
        body: string;
        format?: string | undefined;
        formatted_body?: string | undefined;
    }> | import("valibot").ObjectSchema<{
        msgType: import("valibot").LiteralSchema<"m.emote", "m.emote">;
        body: import("valibot").StringSchema<string>;
        format: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
        formatted_body: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
    }, undefined, {
        msgType: "m.emote";
        body: string;
        format?: string | undefined;
        formatted_body?: string | undefined;
    }> | import("valibot").ObjectSchema<{
        msgType: import("valibot").LiteralSchema<"m.notice", "m.notice">;
        body: import("valibot").StringSchema<string>;
        format: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
        formatted_body: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
    }, undefined, {
        msgType: "m.notice";
        body: string;
        format?: string | undefined;
        formatted_body?: string | undefined;
    }> | import("valibot").ObjectSchema<{
        msgType: import("valibot").LiteralSchema<"m.image", "m.image">;
        body: import("valibot").StringSchema<string>;
        info: import("valibot").OptionalSchema<import("valibot").ObjectSchema<{
            h: import("valibot").NumberSchema<number>;
            w: import("valibot").NumberSchema<number>;
            mimetype: import("valibot").StringSchema<string>;
            size: import("valibot").NumberSchema<number>;
            thumbnail_info: import("valibot").OptionalSchema<import("valibot").ObjectSchema<import("valibot").PartialObjectEntries<{
                h: import("valibot").NumberSchema<number>;
                w: import("valibot").NumberSchema<number>;
                mimetype: import("valibot").StringSchema<string>;
                size: import("valibot").NumberSchema<number>;
            }>, undefined, {
                h?: number | undefined;
                w?: number | undefined;
                mimetype?: string | undefined;
                size?: number | undefined;
            }>, undefined, {
                h?: number | undefined;
                w?: number | undefined;
                mimetype?: string | undefined;
                size?: number | undefined;
            } | undefined>;
            thumbnail_url: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
        }, undefined, {
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
        }>, undefined, {
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
        } | undefined>;
        url: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
    }, undefined, {
        msgType: "m.image";
        body: string;
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
    }> | import("valibot").ObjectSchema<{
        msgType: import("valibot").LiteralSchema<"m.file", "m.file">;
        body: import("valibot").StringSchema<string>;
        filename: import("valibot").StringSchema<string>;
        info: import("valibot").OptionalSchema<import("valibot").ObjectSchema<{
            mimetype: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
            size: import("valibot").OptionalSchema<import("valibot").NumberSchema<number>, undefined, number | undefined>;
            thumbnail_info: import("valibot").OptionalSchema<import("valibot").ObjectSchema<import("valibot").PartialObjectEntries<{
                h: import("valibot").NumberSchema<number>;
                w: import("valibot").NumberSchema<number>;
                mimetype: import("valibot").StringSchema<string>;
                size: import("valibot").NumberSchema<number>;
            }>, undefined, {
                h?: number | undefined;
                w?: number | undefined;
                mimetype?: string | undefined;
                size?: number | undefined;
            }>, undefined, {
                h?: number | undefined;
                w?: number | undefined;
                mimetype?: string | undefined;
                size?: number | undefined;
            } | undefined>;
            thumbnail_url: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
        }, undefined, {
            mimetype?: string | undefined;
            size?: number | undefined;
            thumbnail_info?: {
                h?: number | undefined;
                w?: number | undefined;
                mimetype?: string | undefined;
                size?: number | undefined;
            } | undefined;
            thumbnail_url?: string | undefined;
        }>, undefined, {
            mimetype?: string | undefined;
            size?: number | undefined;
            thumbnail_info?: {
                h?: number | undefined;
                w?: number | undefined;
                mimetype?: string | undefined;
                size?: number | undefined;
            } | undefined;
            thumbnail_url?: string | undefined;
        } | undefined>;
        url: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
    }, undefined, {
        msgType: "m.file";
        body: string;
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
    }> | import("valibot").ObjectSchema<{
        msgType: import("valibot").LiteralSchema<"m.audio", "m.audio">;
        body: import("valibot").StringSchema<string>;
        info: import("valibot").OptionalSchema<import("valibot").ObjectSchema<{
            duration: import("valibot").OptionalSchema<import("valibot").NumberSchema<number>, undefined, number | undefined>;
            mimetype: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
            size: import("valibot").OptionalSchema<import("valibot").NumberSchema<number>, undefined, number | undefined>;
        }, undefined, {
            mimetype?: string | undefined;
            size?: number | undefined;
            duration?: number | undefined;
        }>, undefined, {
            mimetype?: string | undefined;
            size?: number | undefined;
            duration?: number | undefined;
        } | undefined>;
        url: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
    }, undefined, {
        msgType: "m.audio";
        body: string;
        info?: {
            mimetype?: string | undefined;
            size?: number | undefined;
            duration?: number | undefined;
        } | undefined;
        url?: string | undefined;
    }> | import("valibot").ObjectSchema<{
        msgType: import("valibot").LiteralSchema<"m.location", "m.location">;
        body: import("valibot").StringSchema<string>;
        info: import("valibot").OptionalSchema<import("valibot").ObjectSchema<{
            thumbnail_info: import("valibot").OptionalSchema<import("valibot").ObjectSchema<import("valibot").PartialObjectEntries<{
                h: import("valibot").NumberSchema<number>;
                w: import("valibot").NumberSchema<number>;
                mimetype: import("valibot").StringSchema<string>;
                size: import("valibot").NumberSchema<number>;
            }>, undefined, {
                h?: number | undefined;
                w?: number | undefined;
                mimetype?: string | undefined;
                size?: number | undefined;
            }>, undefined, {
                h?: number | undefined;
                w?: number | undefined;
                mimetype?: string | undefined;
                size?: number | undefined;
            } | undefined>;
            thumbnail_url: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
        }, undefined, {
            thumbnail_info?: {
                h?: number | undefined;
                w?: number | undefined;
                mimetype?: string | undefined;
                size?: number | undefined;
            } | undefined;
            thumbnail_url?: string | undefined;
        }>, undefined, {
            thumbnail_info?: {
                h?: number | undefined;
                w?: number | undefined;
                mimetype?: string | undefined;
                size?: number | undefined;
            } | undefined;
            thumbnail_url?: string | undefined;
        } | undefined>;
        geo_uri: import("valibot").StringSchema<string>;
    }, undefined, {
        msgType: "m.location";
        body: string;
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
    }> | import("valibot").ObjectSchema<{
        msgType: import("valibot").LiteralSchema<"m.video", "m.video">;
        body: import("valibot").StringSchema<string>;
        info: import("valibot").OptionalSchema<import("valibot").ObjectSchema<{
            duration: import("valibot").OptionalSchema<import("valibot").NumberSchema<number>, undefined, number | undefined>;
            h: import("valibot").OptionalSchema<import("valibot").NumberSchema<number>, undefined, number | undefined>;
            mimetype: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
            size: import("valibot").OptionalSchema<import("valibot").NumberSchema<number>, undefined, number | undefined>;
            thumbnail_info: import("valibot").OptionalSchema<import("valibot").ObjectSchema<import("valibot").PartialObjectEntries<{
                h: import("valibot").NumberSchema<number>;
                w: import("valibot").NumberSchema<number>;
                mimetype: import("valibot").StringSchema<string>;
                size: import("valibot").NumberSchema<number>;
            }>, undefined, {
                h?: number | undefined;
                w?: number | undefined;
                mimetype?: string | undefined;
                size?: number | undefined;
            }>, undefined, {
                h?: number | undefined;
                w?: number | undefined;
                mimetype?: string | undefined;
                size?: number | undefined;
            } | undefined>;
            thumbnail_url: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
            w: import("valibot").OptionalSchema<import("valibot").NumberSchema<number>, undefined, number | undefined>;
        }, undefined, {
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
        }>, undefined, {
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
        } | undefined>;
        url: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
    }, undefined, {
        msgType: "m.video";
        body: string;
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
    }> | import("valibot").ObjectSchema<{
        msgType: import("valibot").LiteralSchema<"m.key.verification.request", "m.key.verification.request">;
        body: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
        format: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
        formatted_body: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
        from_device: import("valibot").StringSchema<string>;
        methods: import("valibot").ArraySchema<import("valibot").StringSchema<string>, string[]>;
        timestamp: import("valibot").NumberSchema<number>;
        transaction_id: import("valibot").StringSchema<string>;
    }, undefined, {
        msgType: "m.key.verification.request";
        from_device: string;
        methods: string[];
        timestamp: number;
        transaction_id: string;
        body?: string | undefined;
        format?: string | undefined;
        formatted_body?: string | undefined;
    }>)[], {
        msgType: "m.text";
        body: string;
        format?: string | undefined;
        formatted_body?: string | undefined;
    } | {
        msgType: "m.emote";
        body: string;
        format?: string | undefined;
        formatted_body?: string | undefined;
    } | {
        msgType: "m.notice";
        body: string;
        format?: string | undefined;
        formatted_body?: string | undefined;
    } | {
        msgType: "m.image";
        body: string;
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
    } | {
        msgType: "m.file";
        body: string;
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
    } | {
        msgType: "m.audio";
        body: string;
        info?: {
            mimetype?: string | undefined;
            size?: number | undefined;
            duration?: number | undefined;
        } | undefined;
        url?: string | undefined;
    } | {
        msgType: "m.location";
        body: string;
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
    } | {
        msgType: "m.video";
        body: string;
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
    } | {
        msgType: "m.key.verification.request";
        from_device: string;
        methods: string[];
        timestamp: number;
        transaction_id: string;
        body?: string | undefined;
        format?: string | undefined;
        formatted_body?: string | undefined;
    }> | import("valibot").ObjectSchema<import("valibot").PartialObjectEntries<{
        ban: import("valibot").NumberSchema<number>;
        events: import("valibot").RecordSchema<import("valibot").StringSchema<string>, import("valibot").NumberSchema<number>, {
            [x: string]: number;
        }>;
        events_default: import("valibot").NumberSchema<number>;
        invite: import("valibot").NumberSchema<number>;
        kick: import("valibot").NumberSchema<number>;
        redact: import("valibot").NumberSchema<number>;
        state_default: import("valibot").NumberSchema<number>;
        users: import("valibot").RecordSchema<import("valibot").StringSchema<string>, import("valibot").NumberSchema<number>, {
            [x: string]: number;
        }>;
        users_default: import("valibot").NumberSchema<number>;
        notifications: import("valibot").ObjectSchema<{
            room: import("valibot").NumberSchema<number>;
        }, undefined, {
            room: number;
        }>;
    }>, undefined, {
        ban?: number | undefined;
        events?: {
            [x: string]: number;
        } | undefined;
        events_default?: number | undefined;
        invite?: number | undefined;
        kick?: number | undefined;
        redact?: number | undefined;
        state_default?: number | undefined;
        users?: {
            [x: string]: number;
        } | undefined;
        users_default?: number | undefined;
        notifications?: {
            room: number;
        } | undefined;
    }> | import("valibot").ObjectSchema<{
        body: import("valibot").StringSchema<string>;
        msgtype: import("valibot").StringSchema<string>;
        "m.relates_to": import("valibot").OptionalSchema<import("valibot").ObjectSchema<{
            event_id: import("valibot").StringSchema<string>;
            rel_type: import("valibot").StringSchema<string>;
        }, undefined, {
            event_id: string;
            rel_type: string;
        }>, undefined, {
            event_id: string;
            rel_type: string;
        } | undefined>;
    }, undefined, {
        body: string;
        msgtype: string;
        "m.relates_to"?: {
            event_id: string;
            rel_type: string;
        } | undefined;
    }>)[], {
        msgType: "m.text";
        body: string;
        format?: string | undefined;
        formatted_body?: string | undefined;
    } | {
        msgType: "m.emote";
        body: string;
        format?: string | undefined;
        formatted_body?: string | undefined;
    } | {
        msgType: "m.notice";
        body: string;
        format?: string | undefined;
        formatted_body?: string | undefined;
    } | {
        msgType: "m.image";
        body: string;
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
    } | {
        msgType: "m.file";
        body: string;
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
    } | {
        msgType: "m.audio";
        body: string;
        info?: {
            mimetype?: string | undefined;
            size?: number | undefined;
            duration?: number | undefined;
        } | undefined;
        url?: string | undefined;
    } | {
        msgType: "m.location";
        body: string;
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
    } | {
        msgType: "m.video";
        body: string;
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
    } | {
        msgType: "m.key.verification.request";
        from_device: string;
        methods: string[];
        timestamp: number;
        transaction_id: string;
        body?: string | undefined;
        format?: string | undefined;
        formatted_body?: string | undefined;
    } | {
        ban?: number | undefined;
        events?: {
            [x: string]: number;
        } | undefined;
        events_default?: number | undefined;
        invite?: number | undefined;
        kick?: number | undefined;
        redact?: number | undefined;
        state_default?: number | undefined;
        users?: {
            [x: string]: number;
        } | undefined;
        users_default?: number | undefined;
        notifications?: {
            room: number;
        } | undefined;
    } | {
        body: string;
        msgtype: string;
        "m.relates_to"?: {
            event_id: string;
            rel_type: string;
        } | undefined;
    }>;
    redacted_because: import("valibot").RecursiveSchema<() => import("valibot").ObjectSchema<{
        sender: import("valibot").StringSchema<string>;
        room_id: import("valibot").StringSchema<string>;
        event_id: import("valibot").StringSchema<string>;
        state_key: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
        origin_server_ts: import("valibot").NumberSchema<number>;
        age: import("valibot").OptionalSchema<import("valibot").NumberSchema<number>, undefined, number | undefined>;
        replaces_state: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
        prev_content: import("valibot").OptionalSchema<import("valibot").UnionSchema<(import("valibot").UnionSchema<(import("valibot").ObjectSchema<{
            msgType: import("valibot").LiteralSchema<"m.text", "m.text">;
            body: import("valibot").StringSchema<string>;
            format: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
            formatted_body: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
        }, undefined, {
            msgType: "m.text";
            body: string;
            format?: string | undefined;
            formatted_body?: string | undefined;
        }> | import("valibot").ObjectSchema<{
            msgType: import("valibot").LiteralSchema<"m.emote", "m.emote">;
            body: import("valibot").StringSchema<string>;
            format: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
            formatted_body: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
        }, undefined, {
            msgType: "m.emote";
            body: string;
            format?: string | undefined;
            formatted_body?: string | undefined;
        }> | import("valibot").ObjectSchema<{
            msgType: import("valibot").LiteralSchema<"m.notice", "m.notice">;
            body: import("valibot").StringSchema<string>;
            format: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
            formatted_body: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
        }, undefined, {
            msgType: "m.notice";
            body: string;
            format?: string | undefined;
            formatted_body?: string | undefined;
        }> | import("valibot").ObjectSchema<{
            msgType: import("valibot").LiteralSchema<"m.image", "m.image">;
            body: import("valibot").StringSchema<string>;
            info: import("valibot").OptionalSchema<import("valibot").ObjectSchema<{
                h: import("valibot").NumberSchema<number>;
                w: import("valibot").NumberSchema<number>;
                mimetype: import("valibot").StringSchema<string>;
                size: import("valibot").NumberSchema<number>;
                thumbnail_info: import("valibot").OptionalSchema<import("valibot").ObjectSchema<import("valibot").PartialObjectEntries<{
                    h: import("valibot").NumberSchema<number>;
                    w: import("valibot").NumberSchema<number>;
                    mimetype: import("valibot").StringSchema<string>;
                    size: import("valibot").NumberSchema<number>;
                }>, undefined, {
                    h?: number | undefined;
                    w?: number | undefined;
                    mimetype?: string | undefined;
                    size?: number | undefined;
                }>, undefined, {
                    h?: number | undefined;
                    w?: number | undefined;
                    mimetype?: string | undefined;
                    size?: number | undefined;
                } | undefined>;
                thumbnail_url: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
            }, undefined, {
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
            }>, undefined, {
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
            } | undefined>;
            url: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
        }, undefined, {
            msgType: "m.image";
            body: string;
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
        }> | import("valibot").ObjectSchema<{
            msgType: import("valibot").LiteralSchema<"m.file", "m.file">;
            body: import("valibot").StringSchema<string>;
            filename: import("valibot").StringSchema<string>;
            info: import("valibot").OptionalSchema<import("valibot").ObjectSchema<{
                mimetype: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
                size: import("valibot").OptionalSchema<import("valibot").NumberSchema<number>, undefined, number | undefined>;
                thumbnail_info: import("valibot").OptionalSchema<import("valibot").ObjectSchema<import("valibot").PartialObjectEntries<{
                    h: import("valibot").NumberSchema<number>;
                    w: import("valibot").NumberSchema<number>;
                    mimetype: import("valibot").StringSchema<string>;
                    size: import("valibot").NumberSchema<number>;
                }>, undefined, {
                    h?: number | undefined;
                    w?: number | undefined;
                    mimetype?: string | undefined;
                    size?: number | undefined;
                }>, undefined, {
                    h?: number | undefined;
                    w?: number | undefined;
                    mimetype?: string | undefined;
                    size?: number | undefined;
                } | undefined>;
                thumbnail_url: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
            }, undefined, {
                mimetype?: string | undefined;
                size?: number | undefined;
                thumbnail_info?: {
                    h?: number | undefined;
                    w?: number | undefined;
                    mimetype?: string | undefined;
                    size?: number | undefined;
                } | undefined;
                thumbnail_url?: string | undefined;
            }>, undefined, {
                mimetype?: string | undefined;
                size?: number | undefined;
                thumbnail_info?: {
                    h?: number | undefined;
                    w?: number | undefined;
                    mimetype?: string | undefined;
                    size?: number | undefined;
                } | undefined;
                thumbnail_url?: string | undefined;
            } | undefined>;
            url: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
        }, undefined, {
            msgType: "m.file";
            body: string;
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
        }> | import("valibot").ObjectSchema<{
            msgType: import("valibot").LiteralSchema<"m.audio", "m.audio">;
            body: import("valibot").StringSchema<string>;
            info: import("valibot").OptionalSchema<import("valibot").ObjectSchema<{
                duration: import("valibot").OptionalSchema<import("valibot").NumberSchema<number>, undefined, number | undefined>;
                mimetype: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
                size: import("valibot").OptionalSchema<import("valibot").NumberSchema<number>, undefined, number | undefined>;
            }, undefined, {
                mimetype?: string | undefined;
                size?: number | undefined;
                duration?: number | undefined;
            }>, undefined, {
                mimetype?: string | undefined;
                size?: number | undefined;
                duration?: number | undefined;
            } | undefined>;
            url: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
        }, undefined, {
            msgType: "m.audio";
            body: string;
            info?: {
                mimetype?: string | undefined;
                size?: number | undefined;
                duration?: number | undefined;
            } | undefined;
            url?: string | undefined;
        }> | import("valibot").ObjectSchema<{
            msgType: import("valibot").LiteralSchema<"m.location", "m.location">;
            body: import("valibot").StringSchema<string>;
            info: import("valibot").OptionalSchema<import("valibot").ObjectSchema<{
                thumbnail_info: import("valibot").OptionalSchema<import("valibot").ObjectSchema<import("valibot").PartialObjectEntries<{
                    h: import("valibot").NumberSchema<number>;
                    w: import("valibot").NumberSchema<number>;
                    mimetype: import("valibot").StringSchema<string>;
                    size: import("valibot").NumberSchema<number>;
                }>, undefined, {
                    h?: number | undefined;
                    w?: number | undefined;
                    mimetype?: string | undefined;
                    size?: number | undefined;
                }>, undefined, {
                    h?: number | undefined;
                    w?: number | undefined;
                    mimetype?: string | undefined;
                    size?: number | undefined;
                } | undefined>;
                thumbnail_url: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
            }, undefined, {
                thumbnail_info?: {
                    h?: number | undefined;
                    w?: number | undefined;
                    mimetype?: string | undefined;
                    size?: number | undefined;
                } | undefined;
                thumbnail_url?: string | undefined;
            }>, undefined, {
                thumbnail_info?: {
                    h?: number | undefined;
                    w?: number | undefined;
                    mimetype?: string | undefined;
                    size?: number | undefined;
                } | undefined;
                thumbnail_url?: string | undefined;
            } | undefined>;
            geo_uri: import("valibot").StringSchema<string>;
        }, undefined, {
            msgType: "m.location";
            body: string;
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
        }> | import("valibot").ObjectSchema<{
            msgType: import("valibot").LiteralSchema<"m.video", "m.video">;
            body: import("valibot").StringSchema<string>;
            info: import("valibot").OptionalSchema<import("valibot").ObjectSchema<{
                duration: import("valibot").OptionalSchema<import("valibot").NumberSchema<number>, undefined, number | undefined>;
                h: import("valibot").OptionalSchema<import("valibot").NumberSchema<number>, undefined, number | undefined>;
                mimetype: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
                size: import("valibot").OptionalSchema<import("valibot").NumberSchema<number>, undefined, number | undefined>;
                thumbnail_info: import("valibot").OptionalSchema<import("valibot").ObjectSchema<import("valibot").PartialObjectEntries<{
                    h: import("valibot").NumberSchema<number>;
                    w: import("valibot").NumberSchema<number>;
                    mimetype: import("valibot").StringSchema<string>;
                    size: import("valibot").NumberSchema<number>;
                }>, undefined, {
                    h?: number | undefined;
                    w?: number | undefined;
                    mimetype?: string | undefined;
                    size?: number | undefined;
                }>, undefined, {
                    h?: number | undefined;
                    w?: number | undefined;
                    mimetype?: string | undefined;
                    size?: number | undefined;
                } | undefined>;
                thumbnail_url: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
                w: import("valibot").OptionalSchema<import("valibot").NumberSchema<number>, undefined, number | undefined>;
            }, undefined, {
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
            }>, undefined, {
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
            } | undefined>;
            url: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
        }, undefined, {
            msgType: "m.video";
            body: string;
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
        }> | import("valibot").ObjectSchema<{
            msgType: import("valibot").LiteralSchema<"m.key.verification.request", "m.key.verification.request">;
            body: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
            format: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
            formatted_body: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
            from_device: import("valibot").StringSchema<string>;
            methods: import("valibot").ArraySchema<import("valibot").StringSchema<string>, string[]>;
            timestamp: import("valibot").NumberSchema<number>;
            transaction_id: import("valibot").StringSchema<string>;
        }, undefined, {
            msgType: "m.key.verification.request";
            from_device: string;
            methods: string[];
            timestamp: number;
            transaction_id: string;
            body?: string | undefined;
            format?: string | undefined;
            formatted_body?: string | undefined;
        }>)[], {
            msgType: "m.text";
            body: string;
            format?: string | undefined;
            formatted_body?: string | undefined;
        } | {
            msgType: "m.emote";
            body: string;
            format?: string | undefined;
            formatted_body?: string | undefined;
        } | {
            msgType: "m.notice";
            body: string;
            format?: string | undefined;
            formatted_body?: string | undefined;
        } | {
            msgType: "m.image";
            body: string;
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
        } | {
            msgType: "m.file";
            body: string;
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
        } | {
            msgType: "m.audio";
            body: string;
            info?: {
                mimetype?: string | undefined;
                size?: number | undefined;
                duration?: number | undefined;
            } | undefined;
            url?: string | undefined;
        } | {
            msgType: "m.location";
            body: string;
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
        } | {
            msgType: "m.video";
            body: string;
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
        } | {
            msgType: "m.key.verification.request";
            from_device: string;
            methods: string[];
            timestamp: number;
            transaction_id: string;
            body?: string | undefined;
            format?: string | undefined;
            formatted_body?: string | undefined;
        }> | import("valibot").ObjectSchema<import("valibot").PartialObjectEntries<{
            ban: import("valibot").NumberSchema<number>;
            events: import("valibot").RecordSchema<import("valibot").StringSchema<string>, import("valibot").NumberSchema<number>, {
                [x: string]: number;
            }>;
            events_default: import("valibot").NumberSchema<number>;
            invite: import("valibot").NumberSchema<number>;
            kick: import("valibot").NumberSchema<number>;
            redact: import("valibot").NumberSchema<number>;
            state_default: import("valibot").NumberSchema<number>;
            users: import("valibot").RecordSchema<import("valibot").StringSchema<string>, import("valibot").NumberSchema<number>, {
                [x: string]: number;
            }>;
            users_default: import("valibot").NumberSchema<number>;
            notifications: import("valibot").ObjectSchema<{
                room: import("valibot").NumberSchema<number>;
            }, undefined, {
                room: number;
            }>;
        }>, undefined, {
            ban?: number | undefined;
            events?: {
                [x: string]: number;
            } | undefined;
            events_default?: number | undefined;
            invite?: number | undefined;
            kick?: number | undefined;
            redact?: number | undefined;
            state_default?: number | undefined;
            users?: {
                [x: string]: number;
            } | undefined;
            users_default?: number | undefined;
            notifications?: {
                room: number;
            } | undefined;
        }> | import("valibot").ObjectSchema<{
            body: import("valibot").StringSchema<string>;
            msgtype: import("valibot").StringSchema<string>;
            "m.relates_to": import("valibot").OptionalSchema<import("valibot").ObjectSchema<{
                event_id: import("valibot").StringSchema<string>;
                rel_type: import("valibot").StringSchema<string>;
            }, undefined, {
                event_id: string;
                rel_type: string;
            }>, undefined, {
                event_id: string;
                rel_type: string;
            } | undefined>;
        }, undefined, {
            body: string;
            msgtype: string;
            "m.relates_to"?: {
                event_id: string;
                rel_type: string;
            } | undefined;
        }>)[], {
            msgType: "m.text";
            body: string;
            format?: string | undefined;
            formatted_body?: string | undefined;
        } | {
            msgType: "m.emote";
            body: string;
            format?: string | undefined;
            formatted_body?: string | undefined;
        } | {
            msgType: "m.notice";
            body: string;
            format?: string | undefined;
            formatted_body?: string | undefined;
        } | {
            msgType: "m.image";
            body: string;
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
        } | {
            msgType: "m.file";
            body: string;
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
        } | {
            msgType: "m.audio";
            body: string;
            info?: {
                mimetype?: string | undefined;
                size?: number | undefined;
                duration?: number | undefined;
            } | undefined;
            url?: string | undefined;
        } | {
            msgType: "m.location";
            body: string;
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
        } | {
            msgType: "m.video";
            body: string;
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
        } | {
            msgType: "m.key.verification.request";
            from_device: string;
            methods: string[];
            timestamp: number;
            transaction_id: string;
            body?: string | undefined;
            format?: string | undefined;
            formatted_body?: string | undefined;
        } | {
            ban?: number | undefined;
            events?: {
                [x: string]: number;
            } | undefined;
            events_default?: number | undefined;
            invite?: number | undefined;
            kick?: number | undefined;
            redact?: number | undefined;
            state_default?: number | undefined;
            users?: {
                [x: string]: number;
            } | undefined;
            users_default?: number | undefined;
            notifications?: {
                room: number;
            } | undefined;
        } | {
            body: string;
            msgtype: string;
            "m.relates_to"?: {
                event_id: string;
                rel_type: string;
            } | undefined;
        }>, undefined, {
            msgType: "m.text";
            body: string;
            format?: string | undefined;
            formatted_body?: string | undefined;
        } | {
            msgType: "m.emote";
            body: string;
            format?: string | undefined;
            formatted_body?: string | undefined;
        } | {
            msgType: "m.notice";
            body: string;
            format?: string | undefined;
            formatted_body?: string | undefined;
        } | {
            msgType: "m.image";
            body: string;
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
        } | {
            msgType: "m.file";
            body: string;
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
        } | {
            msgType: "m.audio";
            body: string;
            info?: {
                mimetype?: string | undefined;
                size?: number | undefined;
                duration?: number | undefined;
            } | undefined;
            url?: string | undefined;
        } | {
            msgType: "m.location";
            body: string;
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
        } | {
            msgType: "m.video";
            body: string;
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
        } | {
            msgType: "m.key.verification.request";
            from_device: string;
            methods: string[];
            timestamp: number;
            transaction_id: string;
            body?: string | undefined;
            format?: string | undefined;
            formatted_body?: string | undefined;
        } | {
            ban?: number | undefined;
            events?: {
                [x: string]: number;
            } | undefined;
            events_default?: number | undefined;
            invite?: number | undefined;
            kick?: number | undefined;
            redact?: number | undefined;
            state_default?: number | undefined;
            users?: {
                [x: string]: number;
            } | undefined;
            users_default?: number | undefined;
            notifications?: {
                room: number;
            } | undefined;
        } | {
            body: string;
            msgtype: string;
            "m.relates_to"?: {
                event_id: string;
                rel_type: string;
            } | undefined;
        } | undefined>;
        user_id: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
    }, undefined, {
        event_id: string;
        sender: string;
        room_id: string;
        origin_server_ts: number;
        state_key?: string | undefined;
        age?: number | undefined;
        replaces_state?: string | undefined;
        prev_content?: {
            msgType: "m.text";
            body: string;
            format?: string | undefined;
            formatted_body?: string | undefined;
        } | {
            msgType: "m.emote";
            body: string;
            format?: string | undefined;
            formatted_body?: string | undefined;
        } | {
            msgType: "m.notice";
            body: string;
            format?: string | undefined;
            formatted_body?: string | undefined;
        } | {
            msgType: "m.image";
            body: string;
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
        } | {
            msgType: "m.file";
            body: string;
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
        } | {
            msgType: "m.audio";
            body: string;
            info?: {
                mimetype?: string | undefined;
                size?: number | undefined;
                duration?: number | undefined;
            } | undefined;
            url?: string | undefined;
        } | {
            msgType: "m.location";
            body: string;
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
        } | {
            msgType: "m.video";
            body: string;
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
        } | {
            msgType: "m.key.verification.request";
            from_device: string;
            methods: string[];
            timestamp: number;
            transaction_id: string;
            body?: string | undefined;
            format?: string | undefined;
            formatted_body?: string | undefined;
        } | {
            ban?: number | undefined;
            events?: {
                [x: string]: number;
            } | undefined;
            events_default?: number | undefined;
            invite?: number | undefined;
            kick?: number | undefined;
            redact?: number | undefined;
            state_default?: number | undefined;
            users?: {
                [x: string]: number;
            } | undefined;
            users_default?: number | undefined;
            notifications?: {
                room: number;
            } | undefined;
        } | {
            body: string;
            msgtype: string;
            "m.relates_to"?: {
                event_id: string;
                rel_type: string;
            } | undefined;
        } | undefined;
        user_id?: string | undefined;
    }>, {
        event_id: string;
        sender: string;
        room_id: string;
        origin_server_ts: number;
        state_key?: string | undefined;
        age?: number | undefined;
        replaces_state?: string | undefined;
        prev_content?: {
            msgType: "m.text";
            body: string;
            format?: string | undefined;
            formatted_body?: string | undefined;
        } | {
            msgType: "m.emote";
            body: string;
            format?: string | undefined;
            formatted_body?: string | undefined;
        } | {
            msgType: "m.notice";
            body: string;
            format?: string | undefined;
            formatted_body?: string | undefined;
        } | {
            msgType: "m.image";
            body: string;
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
        } | {
            msgType: "m.file";
            body: string;
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
        } | {
            msgType: "m.audio";
            body: string;
            info?: {
                mimetype?: string | undefined;
                size?: number | undefined;
                duration?: number | undefined;
            } | undefined;
            url?: string | undefined;
        } | {
            msgType: "m.location";
            body: string;
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
        } | {
            msgType: "m.video";
            body: string;
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
        } | {
            msgType: "m.key.verification.request";
            from_device: string;
            methods: string[];
            timestamp: number;
            transaction_id: string;
            body?: string | undefined;
            format?: string | undefined;
            formatted_body?: string | undefined;
        } | {
            ban?: number | undefined;
            events?: {
                [x: string]: number;
            } | undefined;
            events_default?: number | undefined;
            invite?: number | undefined;
            kick?: number | undefined;
            redact?: number | undefined;
            state_default?: number | undefined;
            users?: {
                [x: string]: number;
            } | undefined;
            users_default?: number | undefined;
            notifications?: {
                room: number;
            } | undefined;
        } | {
            body: string;
            msgtype: string;
            "m.relates_to"?: {
                event_id: string;
                rel_type: string;
            } | undefined;
        } | undefined;
        user_id?: string | undefined;
    }>;
    "m.relations": import("valibot").RecordSchema<import("valibot").StringSchema<string>, import("valibot").UnionSchema<(import("valibot").ObjectSchema<{}, undefined, {}> | import("valibot").ArraySchema<import("valibot").ObjectSchema<{}, undefined, {}>, {}[]>)[], {} | {}[]>, {
        [x: string]: {} | {}[];
    }>;
}>, undefined, {
    transaction_id?: string | undefined;
    age?: number | undefined;
    prev_content?: {
        msgType: "m.text";
        body: string;
        format?: string | undefined;
        formatted_body?: string | undefined;
    } | {
        msgType: "m.emote";
        body: string;
        format?: string | undefined;
        formatted_body?: string | undefined;
    } | {
        msgType: "m.notice";
        body: string;
        format?: string | undefined;
        formatted_body?: string | undefined;
    } | {
        msgType: "m.image";
        body: string;
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
    } | {
        msgType: "m.file";
        body: string;
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
    } | {
        msgType: "m.audio";
        body: string;
        info?: {
            mimetype?: string | undefined;
            size?: number | undefined;
            duration?: number | undefined;
        } | undefined;
        url?: string | undefined;
    } | {
        msgType: "m.location";
        body: string;
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
    } | {
        msgType: "m.video";
        body: string;
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
    } | {
        msgType: "m.key.verification.request";
        from_device: string;
        methods: string[];
        timestamp: number;
        transaction_id: string;
        body?: string | undefined;
        format?: string | undefined;
        formatted_body?: string | undefined;
    } | {
        ban?: number | undefined;
        events?: {
            [x: string]: number;
        } | undefined;
        events_default?: number | undefined;
        invite?: number | undefined;
        kick?: number | undefined;
        redact?: number | undefined;
        state_default?: number | undefined;
        users?: {
            [x: string]: number;
        } | undefined;
        users_default?: number | undefined;
        notifications?: {
            room: number;
        } | undefined;
    } | {
        body: string;
        msgtype: string;
        "m.relates_to"?: {
            event_id: string;
            rel_type: string;
        } | undefined;
    } | undefined;
    redacted_because?: {
        event_id: string;
        sender: string;
        room_id: string;
        origin_server_ts: number;
        state_key?: string | undefined;
        age?: number | undefined;
        replaces_state?: string | undefined;
        prev_content?: {
            msgType: "m.text";
            body: string;
            format?: string | undefined;
            formatted_body?: string | undefined;
        } | {
            msgType: "m.emote";
            body: string;
            format?: string | undefined;
            formatted_body?: string | undefined;
        } | {
            msgType: "m.notice";
            body: string;
            format?: string | undefined;
            formatted_body?: string | undefined;
        } | {
            msgType: "m.image";
            body: string;
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
        } | {
            msgType: "m.file";
            body: string;
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
        } | {
            msgType: "m.audio";
            body: string;
            info?: {
                mimetype?: string | undefined;
                size?: number | undefined;
                duration?: number | undefined;
            } | undefined;
            url?: string | undefined;
        } | {
            msgType: "m.location";
            body: string;
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
        } | {
            msgType: "m.video";
            body: string;
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
        } | {
            msgType: "m.key.verification.request";
            from_device: string;
            methods: string[];
            timestamp: number;
            transaction_id: string;
            body?: string | undefined;
            format?: string | undefined;
            formatted_body?: string | undefined;
        } | {
            ban?: number | undefined;
            events?: {
                [x: string]: number;
            } | undefined;
            events_default?: number | undefined;
            invite?: number | undefined;
            kick?: number | undefined;
            redact?: number | undefined;
            state_default?: number | undefined;
            users?: {
                [x: string]: number;
            } | undefined;
            users_default?: number | undefined;
            notifications?: {
                room: number;
            } | undefined;
        } | {
            body: string;
            msgtype: string;
            "m.relates_to"?: {
                event_id: string;
                rel_type: string;
            } | undefined;
        } | undefined;
        user_id?: string | undefined;
    } | undefined;
    "m.relations"?: {
        [x: string]: {} | {}[];
    } | undefined;
}>;
export type UnsignedDataOutput = Output<typeof UnsignedDataSchema>;
export declare const ClientEventSchema: import("valibot").IntersectSchema<[import("valibot").ObjectSchema<{
    sender: import("valibot").StringSchema<string>;
    room_id: import("valibot").StringSchema<string>;
    event_id: import("valibot").StringSchema<string>;
    state_key: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
    origin_server_ts: import("valibot").NumberSchema<number>;
    age: import("valibot").OptionalSchema<import("valibot").NumberSchema<number>, undefined, number | undefined>;
    replaces_state: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
    prev_content: import("valibot").OptionalSchema<import("valibot").UnionSchema<(import("valibot").UnionSchema<(import("valibot").ObjectSchema<{
        msgType: import("valibot").LiteralSchema<"m.text", "m.text">;
        body: import("valibot").StringSchema<string>;
        format: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
        formatted_body: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
    }, undefined, {
        msgType: "m.text";
        body: string;
        format?: string | undefined;
        formatted_body?: string | undefined;
    }> | import("valibot").ObjectSchema<{
        msgType: import("valibot").LiteralSchema<"m.emote", "m.emote">;
        body: import("valibot").StringSchema<string>;
        format: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
        formatted_body: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
    }, undefined, {
        msgType: "m.emote";
        body: string;
        format?: string | undefined;
        formatted_body?: string | undefined;
    }> | import("valibot").ObjectSchema<{
        msgType: import("valibot").LiteralSchema<"m.notice", "m.notice">;
        body: import("valibot").StringSchema<string>;
        format: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
        formatted_body: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
    }, undefined, {
        msgType: "m.notice";
        body: string;
        format?: string | undefined;
        formatted_body?: string | undefined;
    }> | import("valibot").ObjectSchema<{
        msgType: import("valibot").LiteralSchema<"m.image", "m.image">;
        body: import("valibot").StringSchema<string>;
        info: import("valibot").OptionalSchema<import("valibot").ObjectSchema<{
            h: import("valibot").NumberSchema<number>;
            w: import("valibot").NumberSchema<number>;
            mimetype: import("valibot").StringSchema<string>;
            size: import("valibot").NumberSchema<number>;
            thumbnail_info: import("valibot").OptionalSchema<import("valibot").ObjectSchema<import("valibot").PartialObjectEntries<{
                h: import("valibot").NumberSchema<number>;
                w: import("valibot").NumberSchema<number>;
                mimetype: import("valibot").StringSchema<string>;
                size: import("valibot").NumberSchema<number>;
            }>, undefined, {
                h?: number | undefined;
                w?: number | undefined;
                mimetype?: string | undefined;
                size?: number | undefined;
            }>, undefined, {
                h?: number | undefined;
                w?: number | undefined;
                mimetype?: string | undefined;
                size?: number | undefined;
            } | undefined>;
            thumbnail_url: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
        }, undefined, {
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
        }>, undefined, {
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
        } | undefined>;
        url: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
    }, undefined, {
        msgType: "m.image";
        body: string;
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
    }> | import("valibot").ObjectSchema<{
        msgType: import("valibot").LiteralSchema<"m.file", "m.file">;
        body: import("valibot").StringSchema<string>;
        filename: import("valibot").StringSchema<string>;
        info: import("valibot").OptionalSchema<import("valibot").ObjectSchema<{
            mimetype: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
            size: import("valibot").OptionalSchema<import("valibot").NumberSchema<number>, undefined, number | undefined>;
            thumbnail_info: import("valibot").OptionalSchema<import("valibot").ObjectSchema<import("valibot").PartialObjectEntries<{
                h: import("valibot").NumberSchema<number>;
                w: import("valibot").NumberSchema<number>;
                mimetype: import("valibot").StringSchema<string>;
                size: import("valibot").NumberSchema<number>;
            }>, undefined, {
                h?: number | undefined;
                w?: number | undefined;
                mimetype?: string | undefined;
                size?: number | undefined;
            }>, undefined, {
                h?: number | undefined;
                w?: number | undefined;
                mimetype?: string | undefined;
                size?: number | undefined;
            } | undefined>;
            thumbnail_url: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
        }, undefined, {
            mimetype?: string | undefined;
            size?: number | undefined;
            thumbnail_info?: {
                h?: number | undefined;
                w?: number | undefined;
                mimetype?: string | undefined;
                size?: number | undefined;
            } | undefined;
            thumbnail_url?: string | undefined;
        }>, undefined, {
            mimetype?: string | undefined;
            size?: number | undefined;
            thumbnail_info?: {
                h?: number | undefined;
                w?: number | undefined;
                mimetype?: string | undefined;
                size?: number | undefined;
            } | undefined;
            thumbnail_url?: string | undefined;
        } | undefined>;
        url: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
    }, undefined, {
        msgType: "m.file";
        body: string;
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
    }> | import("valibot").ObjectSchema<{
        msgType: import("valibot").LiteralSchema<"m.audio", "m.audio">;
        body: import("valibot").StringSchema<string>;
        info: import("valibot").OptionalSchema<import("valibot").ObjectSchema<{
            duration: import("valibot").OptionalSchema<import("valibot").NumberSchema<number>, undefined, number | undefined>;
            mimetype: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
            size: import("valibot").OptionalSchema<import("valibot").NumberSchema<number>, undefined, number | undefined>;
        }, undefined, {
            mimetype?: string | undefined;
            size?: number | undefined;
            duration?: number | undefined;
        }>, undefined, {
            mimetype?: string | undefined;
            size?: number | undefined;
            duration?: number | undefined;
        } | undefined>;
        url: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
    }, undefined, {
        msgType: "m.audio";
        body: string;
        info?: {
            mimetype?: string | undefined;
            size?: number | undefined;
            duration?: number | undefined;
        } | undefined;
        url?: string | undefined;
    }> | import("valibot").ObjectSchema<{
        msgType: import("valibot").LiteralSchema<"m.location", "m.location">;
        body: import("valibot").StringSchema<string>;
        info: import("valibot").OptionalSchema<import("valibot").ObjectSchema<{
            thumbnail_info: import("valibot").OptionalSchema<import("valibot").ObjectSchema<import("valibot").PartialObjectEntries<{
                h: import("valibot").NumberSchema<number>;
                w: import("valibot").NumberSchema<number>;
                mimetype: import("valibot").StringSchema<string>;
                size: import("valibot").NumberSchema<number>;
            }>, undefined, {
                h?: number | undefined;
                w?: number | undefined;
                mimetype?: string | undefined;
                size?: number | undefined;
            }>, undefined, {
                h?: number | undefined;
                w?: number | undefined;
                mimetype?: string | undefined;
                size?: number | undefined;
            } | undefined>;
            thumbnail_url: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
        }, undefined, {
            thumbnail_info?: {
                h?: number | undefined;
                w?: number | undefined;
                mimetype?: string | undefined;
                size?: number | undefined;
            } | undefined;
            thumbnail_url?: string | undefined;
        }>, undefined, {
            thumbnail_info?: {
                h?: number | undefined;
                w?: number | undefined;
                mimetype?: string | undefined;
                size?: number | undefined;
            } | undefined;
            thumbnail_url?: string | undefined;
        } | undefined>;
        geo_uri: import("valibot").StringSchema<string>;
    }, undefined, {
        msgType: "m.location";
        body: string;
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
    }> | import("valibot").ObjectSchema<{
        msgType: import("valibot").LiteralSchema<"m.video", "m.video">;
        body: import("valibot").StringSchema<string>;
        info: import("valibot").OptionalSchema<import("valibot").ObjectSchema<{
            duration: import("valibot").OptionalSchema<import("valibot").NumberSchema<number>, undefined, number | undefined>;
            h: import("valibot").OptionalSchema<import("valibot").NumberSchema<number>, undefined, number | undefined>;
            mimetype: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
            size: import("valibot").OptionalSchema<import("valibot").NumberSchema<number>, undefined, number | undefined>;
            thumbnail_info: import("valibot").OptionalSchema<import("valibot").ObjectSchema<import("valibot").PartialObjectEntries<{
                h: import("valibot").NumberSchema<number>;
                w: import("valibot").NumberSchema<number>;
                mimetype: import("valibot").StringSchema<string>;
                size: import("valibot").NumberSchema<number>;
            }>, undefined, {
                h?: number | undefined;
                w?: number | undefined;
                mimetype?: string | undefined;
                size?: number | undefined;
            }>, undefined, {
                h?: number | undefined;
                w?: number | undefined;
                mimetype?: string | undefined;
                size?: number | undefined;
            } | undefined>;
            thumbnail_url: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
            w: import("valibot").OptionalSchema<import("valibot").NumberSchema<number>, undefined, number | undefined>;
        }, undefined, {
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
        }>, undefined, {
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
        } | undefined>;
        url: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
    }, undefined, {
        msgType: "m.video";
        body: string;
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
    }> | import("valibot").ObjectSchema<{
        msgType: import("valibot").LiteralSchema<"m.key.verification.request", "m.key.verification.request">;
        body: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
        format: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
        formatted_body: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
        from_device: import("valibot").StringSchema<string>;
        methods: import("valibot").ArraySchema<import("valibot").StringSchema<string>, string[]>;
        timestamp: import("valibot").NumberSchema<number>;
        transaction_id: import("valibot").StringSchema<string>;
    }, undefined, {
        msgType: "m.key.verification.request";
        from_device: string;
        methods: string[];
        timestamp: number;
        transaction_id: string;
        body?: string | undefined;
        format?: string | undefined;
        formatted_body?: string | undefined;
    }>)[], {
        msgType: "m.text";
        body: string;
        format?: string | undefined;
        formatted_body?: string | undefined;
    } | {
        msgType: "m.emote";
        body: string;
        format?: string | undefined;
        formatted_body?: string | undefined;
    } | {
        msgType: "m.notice";
        body: string;
        format?: string | undefined;
        formatted_body?: string | undefined;
    } | {
        msgType: "m.image";
        body: string;
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
    } | {
        msgType: "m.file";
        body: string;
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
    } | {
        msgType: "m.audio";
        body: string;
        info?: {
            mimetype?: string | undefined;
            size?: number | undefined;
            duration?: number | undefined;
        } | undefined;
        url?: string | undefined;
    } | {
        msgType: "m.location";
        body: string;
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
    } | {
        msgType: "m.video";
        body: string;
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
    } | {
        msgType: "m.key.verification.request";
        from_device: string;
        methods: string[];
        timestamp: number;
        transaction_id: string;
        body?: string | undefined;
        format?: string | undefined;
        formatted_body?: string | undefined;
    }> | import("valibot").ObjectSchema<import("valibot").PartialObjectEntries<{
        ban: import("valibot").NumberSchema<number>;
        events: import("valibot").RecordSchema<import("valibot").StringSchema<string>, import("valibot").NumberSchema<number>, {
            [x: string]: number;
        }>;
        events_default: import("valibot").NumberSchema<number>;
        invite: import("valibot").NumberSchema<number>;
        kick: import("valibot").NumberSchema<number>;
        redact: import("valibot").NumberSchema<number>;
        state_default: import("valibot").NumberSchema<number>;
        users: import("valibot").RecordSchema<import("valibot").StringSchema<string>, import("valibot").NumberSchema<number>, {
            [x: string]: number;
        }>;
        users_default: import("valibot").NumberSchema<number>;
        notifications: import("valibot").ObjectSchema<{
            room: import("valibot").NumberSchema<number>;
        }, undefined, {
            room: number;
        }>;
    }>, undefined, {
        ban?: number | undefined;
        events?: {
            [x: string]: number;
        } | undefined;
        events_default?: number | undefined;
        invite?: number | undefined;
        kick?: number | undefined;
        redact?: number | undefined;
        state_default?: number | undefined;
        users?: {
            [x: string]: number;
        } | undefined;
        users_default?: number | undefined;
        notifications?: {
            room: number;
        } | undefined;
    }> | import("valibot").ObjectSchema<{
        body: import("valibot").StringSchema<string>;
        msgtype: import("valibot").StringSchema<string>;
        "m.relates_to": import("valibot").OptionalSchema<import("valibot").ObjectSchema<{
            event_id: import("valibot").StringSchema<string>;
            rel_type: import("valibot").StringSchema<string>;
        }, undefined, {
            event_id: string;
            rel_type: string;
        }>, undefined, {
            event_id: string;
            rel_type: string;
        } | undefined>;
    }, undefined, {
        body: string;
        msgtype: string;
        "m.relates_to"?: {
            event_id: string;
            rel_type: string;
        } | undefined;
    }>)[], {
        msgType: "m.text";
        body: string;
        format?: string | undefined;
        formatted_body?: string | undefined;
    } | {
        msgType: "m.emote";
        body: string;
        format?: string | undefined;
        formatted_body?: string | undefined;
    } | {
        msgType: "m.notice";
        body: string;
        format?: string | undefined;
        formatted_body?: string | undefined;
    } | {
        msgType: "m.image";
        body: string;
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
    } | {
        msgType: "m.file";
        body: string;
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
    } | {
        msgType: "m.audio";
        body: string;
        info?: {
            mimetype?: string | undefined;
            size?: number | undefined;
            duration?: number | undefined;
        } | undefined;
        url?: string | undefined;
    } | {
        msgType: "m.location";
        body: string;
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
    } | {
        msgType: "m.video";
        body: string;
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
    } | {
        msgType: "m.key.verification.request";
        from_device: string;
        methods: string[];
        timestamp: number;
        transaction_id: string;
        body?: string | undefined;
        format?: string | undefined;
        formatted_body?: string | undefined;
    } | {
        ban?: number | undefined;
        events?: {
            [x: string]: number;
        } | undefined;
        events_default?: number | undefined;
        invite?: number | undefined;
        kick?: number | undefined;
        redact?: number | undefined;
        state_default?: number | undefined;
        users?: {
            [x: string]: number;
        } | undefined;
        users_default?: number | undefined;
        notifications?: {
            room: number;
        } | undefined;
    } | {
        body: string;
        msgtype: string;
        "m.relates_to"?: {
            event_id: string;
            rel_type: string;
        } | undefined;
    }>, undefined, {
        msgType: "m.text";
        body: string;
        format?: string | undefined;
        formatted_body?: string | undefined;
    } | {
        msgType: "m.emote";
        body: string;
        format?: string | undefined;
        formatted_body?: string | undefined;
    } | {
        msgType: "m.notice";
        body: string;
        format?: string | undefined;
        formatted_body?: string | undefined;
    } | {
        msgType: "m.image";
        body: string;
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
    } | {
        msgType: "m.file";
        body: string;
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
    } | {
        msgType: "m.audio";
        body: string;
        info?: {
            mimetype?: string | undefined;
            size?: number | undefined;
            duration?: number | undefined;
        } | undefined;
        url?: string | undefined;
    } | {
        msgType: "m.location";
        body: string;
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
    } | {
        msgType: "m.video";
        body: string;
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
    } | {
        msgType: "m.key.verification.request";
        from_device: string;
        methods: string[];
        timestamp: number;
        transaction_id: string;
        body?: string | undefined;
        format?: string | undefined;
        formatted_body?: string | undefined;
    } | {
        ban?: number | undefined;
        events?: {
            [x: string]: number;
        } | undefined;
        events_default?: number | undefined;
        invite?: number | undefined;
        kick?: number | undefined;
        redact?: number | undefined;
        state_default?: number | undefined;
        users?: {
            [x: string]: number;
        } | undefined;
        users_default?: number | undefined;
        notifications?: {
            room: number;
        } | undefined;
    } | {
        body: string;
        msgtype: string;
        "m.relates_to"?: {
            event_id: string;
            rel_type: string;
        } | undefined;
    } | undefined>;
    user_id: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
}, undefined, {
    event_id: string;
    sender: string;
    room_id: string;
    origin_server_ts: number;
    state_key?: string | undefined;
    age?: number | undefined;
    replaces_state?: string | undefined;
    prev_content?: {
        msgType: "m.text";
        body: string;
        format?: string | undefined;
        formatted_body?: string | undefined;
    } | {
        msgType: "m.emote";
        body: string;
        format?: string | undefined;
        formatted_body?: string | undefined;
    } | {
        msgType: "m.notice";
        body: string;
        format?: string | undefined;
        formatted_body?: string | undefined;
    } | {
        msgType: "m.image";
        body: string;
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
    } | {
        msgType: "m.file";
        body: string;
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
    } | {
        msgType: "m.audio";
        body: string;
        info?: {
            mimetype?: string | undefined;
            size?: number | undefined;
            duration?: number | undefined;
        } | undefined;
        url?: string | undefined;
    } | {
        msgType: "m.location";
        body: string;
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
    } | {
        msgType: "m.video";
        body: string;
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
    } | {
        msgType: "m.key.verification.request";
        from_device: string;
        methods: string[];
        timestamp: number;
        transaction_id: string;
        body?: string | undefined;
        format?: string | undefined;
        formatted_body?: string | undefined;
    } | {
        ban?: number | undefined;
        events?: {
            [x: string]: number;
        } | undefined;
        events_default?: number | undefined;
        invite?: number | undefined;
        kick?: number | undefined;
        redact?: number | undefined;
        state_default?: number | undefined;
        users?: {
            [x: string]: number;
        } | undefined;
        users_default?: number | undefined;
        notifications?: {
            room: number;
        } | undefined;
    } | {
        body: string;
        msgtype: string;
        "m.relates_to"?: {
            event_id: string;
            rel_type: string;
        } | undefined;
    } | undefined;
    user_id?: string | undefined;
}>, import("valibot").UnionSchema<(import("valibot").ObjectSchema<{
    type: import("valibot").StringSchema<string>;
    content: import("valibot").ObjectSchema<{
        body: import("valibot").StringSchema<string>;
        msgtype: import("valibot").StringSchema<string>;
        "m.relates_to": import("valibot").OptionalSchema<import("valibot").ObjectSchema<{
            event_id: import("valibot").StringSchema<string>;
            rel_type: import("valibot").StringSchema<string>;
        }, undefined, {
            event_id: string;
            rel_type: string;
        }>, undefined, {
            event_id: string;
            rel_type: string;
        } | undefined>;
    }, undefined, {
        body: string;
        msgtype: string;
        "m.relates_to"?: {
            event_id: string;
            rel_type: string;
        } | undefined;
    }>;
}, undefined, {
    type: string;
    content: {
        body: string;
        msgtype: string;
        "m.relates_to"?: {
            event_id: string;
            rel_type: string;
        } | undefined;
    };
}> | import("valibot").ObjectSchema<{
    type: import("valibot").StringSchema<string>;
    content: import("valibot").UnknownSchema<unknown>;
}, undefined, {
    type: string;
    content: unknown;
}> | import("valibot").ObjectSchema<{
    type: import("valibot").LiteralSchema<"m.room.message", "m.room.message">;
    content: import("valibot").UnionSchema<(import("valibot").ObjectSchema<{
        msgType: import("valibot").LiteralSchema<"m.text", "m.text">;
        body: import("valibot").StringSchema<string>;
        format: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
        formatted_body: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
    }, undefined, {
        msgType: "m.text";
        body: string;
        format?: string | undefined;
        formatted_body?: string | undefined;
    }> | import("valibot").ObjectSchema<{
        msgType: import("valibot").LiteralSchema<"m.emote", "m.emote">;
        body: import("valibot").StringSchema<string>;
        format: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
        formatted_body: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
    }, undefined, {
        msgType: "m.emote";
        body: string;
        format?: string | undefined;
        formatted_body?: string | undefined;
    }> | import("valibot").ObjectSchema<{
        msgType: import("valibot").LiteralSchema<"m.notice", "m.notice">;
        body: import("valibot").StringSchema<string>;
        format: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
        formatted_body: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
    }, undefined, {
        msgType: "m.notice";
        body: string;
        format?: string | undefined;
        formatted_body?: string | undefined;
    }> | import("valibot").ObjectSchema<{
        msgType: import("valibot").LiteralSchema<"m.image", "m.image">;
        body: import("valibot").StringSchema<string>;
        info: import("valibot").OptionalSchema<import("valibot").ObjectSchema<{
            h: import("valibot").NumberSchema<number>;
            w: import("valibot").NumberSchema<number>;
            mimetype: import("valibot").StringSchema<string>;
            size: import("valibot").NumberSchema<number>;
            thumbnail_info: import("valibot").OptionalSchema<import("valibot").ObjectSchema<import("valibot").PartialObjectEntries<{
                h: import("valibot").NumberSchema<number>;
                w: import("valibot").NumberSchema<number>;
                mimetype: import("valibot").StringSchema<string>;
                size: import("valibot").NumberSchema<number>;
            }>, undefined, {
                h?: number | undefined;
                w?: number | undefined;
                mimetype?: string | undefined;
                size?: number | undefined;
            }>, undefined, {
                h?: number | undefined;
                w?: number | undefined;
                mimetype?: string | undefined;
                size?: number | undefined;
            } | undefined>;
            thumbnail_url: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
        }, undefined, {
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
        }>, undefined, {
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
        } | undefined>;
        url: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
    }, undefined, {
        msgType: "m.image";
        body: string;
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
    }> | import("valibot").ObjectSchema<{
        msgType: import("valibot").LiteralSchema<"m.file", "m.file">;
        body: import("valibot").StringSchema<string>;
        filename: import("valibot").StringSchema<string>;
        info: import("valibot").OptionalSchema<import("valibot").ObjectSchema<{
            mimetype: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
            size: import("valibot").OptionalSchema<import("valibot").NumberSchema<number>, undefined, number | undefined>;
            thumbnail_info: import("valibot").OptionalSchema<import("valibot").ObjectSchema<import("valibot").PartialObjectEntries<{
                h: import("valibot").NumberSchema<number>;
                w: import("valibot").NumberSchema<number>;
                mimetype: import("valibot").StringSchema<string>;
                size: import("valibot").NumberSchema<number>;
            }>, undefined, {
                h?: number | undefined;
                w?: number | undefined;
                mimetype?: string | undefined;
                size?: number | undefined;
            }>, undefined, {
                h?: number | undefined;
                w?: number | undefined;
                mimetype?: string | undefined;
                size?: number | undefined;
            } | undefined>;
            thumbnail_url: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
        }, undefined, {
            mimetype?: string | undefined;
            size?: number | undefined;
            thumbnail_info?: {
                h?: number | undefined;
                w?: number | undefined;
                mimetype?: string | undefined;
                size?: number | undefined;
            } | undefined;
            thumbnail_url?: string | undefined;
        }>, undefined, {
            mimetype?: string | undefined;
            size?: number | undefined;
            thumbnail_info?: {
                h?: number | undefined;
                w?: number | undefined;
                mimetype?: string | undefined;
                size?: number | undefined;
            } | undefined;
            thumbnail_url?: string | undefined;
        } | undefined>;
        url: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
    }, undefined, {
        msgType: "m.file";
        body: string;
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
    }> | import("valibot").ObjectSchema<{
        msgType: import("valibot").LiteralSchema<"m.audio", "m.audio">;
        body: import("valibot").StringSchema<string>;
        info: import("valibot").OptionalSchema<import("valibot").ObjectSchema<{
            duration: import("valibot").OptionalSchema<import("valibot").NumberSchema<number>, undefined, number | undefined>;
            mimetype: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
            size: import("valibot").OptionalSchema<import("valibot").NumberSchema<number>, undefined, number | undefined>;
        }, undefined, {
            mimetype?: string | undefined;
            size?: number | undefined;
            duration?: number | undefined;
        }>, undefined, {
            mimetype?: string | undefined;
            size?: number | undefined;
            duration?: number | undefined;
        } | undefined>;
        url: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
    }, undefined, {
        msgType: "m.audio";
        body: string;
        info?: {
            mimetype?: string | undefined;
            size?: number | undefined;
            duration?: number | undefined;
        } | undefined;
        url?: string | undefined;
    }> | import("valibot").ObjectSchema<{
        msgType: import("valibot").LiteralSchema<"m.location", "m.location">;
        body: import("valibot").StringSchema<string>;
        info: import("valibot").OptionalSchema<import("valibot").ObjectSchema<{
            thumbnail_info: import("valibot").OptionalSchema<import("valibot").ObjectSchema<import("valibot").PartialObjectEntries<{
                h: import("valibot").NumberSchema<number>;
                w: import("valibot").NumberSchema<number>;
                mimetype: import("valibot").StringSchema<string>;
                size: import("valibot").NumberSchema<number>;
            }>, undefined, {
                h?: number | undefined;
                w?: number | undefined;
                mimetype?: string | undefined;
                size?: number | undefined;
            }>, undefined, {
                h?: number | undefined;
                w?: number | undefined;
                mimetype?: string | undefined;
                size?: number | undefined;
            } | undefined>;
            thumbnail_url: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
        }, undefined, {
            thumbnail_info?: {
                h?: number | undefined;
                w?: number | undefined;
                mimetype?: string | undefined;
                size?: number | undefined;
            } | undefined;
            thumbnail_url?: string | undefined;
        }>, undefined, {
            thumbnail_info?: {
                h?: number | undefined;
                w?: number | undefined;
                mimetype?: string | undefined;
                size?: number | undefined;
            } | undefined;
            thumbnail_url?: string | undefined;
        } | undefined>;
        geo_uri: import("valibot").StringSchema<string>;
    }, undefined, {
        msgType: "m.location";
        body: string;
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
    }> | import("valibot").ObjectSchema<{
        msgType: import("valibot").LiteralSchema<"m.video", "m.video">;
        body: import("valibot").StringSchema<string>;
        info: import("valibot").OptionalSchema<import("valibot").ObjectSchema<{
            duration: import("valibot").OptionalSchema<import("valibot").NumberSchema<number>, undefined, number | undefined>;
            h: import("valibot").OptionalSchema<import("valibot").NumberSchema<number>, undefined, number | undefined>;
            mimetype: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
            size: import("valibot").OptionalSchema<import("valibot").NumberSchema<number>, undefined, number | undefined>;
            thumbnail_info: import("valibot").OptionalSchema<import("valibot").ObjectSchema<import("valibot").PartialObjectEntries<{
                h: import("valibot").NumberSchema<number>;
                w: import("valibot").NumberSchema<number>;
                mimetype: import("valibot").StringSchema<string>;
                size: import("valibot").NumberSchema<number>;
            }>, undefined, {
                h?: number | undefined;
                w?: number | undefined;
                mimetype?: string | undefined;
                size?: number | undefined;
            }>, undefined, {
                h?: number | undefined;
                w?: number | undefined;
                mimetype?: string | undefined;
                size?: number | undefined;
            } | undefined>;
            thumbnail_url: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
            w: import("valibot").OptionalSchema<import("valibot").NumberSchema<number>, undefined, number | undefined>;
        }, undefined, {
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
        }>, undefined, {
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
        } | undefined>;
        url: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
    }, undefined, {
        msgType: "m.video";
        body: string;
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
    }> | import("valibot").ObjectSchema<{
        msgType: import("valibot").LiteralSchema<"m.key.verification.request", "m.key.verification.request">;
        body: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
        format: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
        formatted_body: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
        from_device: import("valibot").StringSchema<string>;
        methods: import("valibot").ArraySchema<import("valibot").StringSchema<string>, string[]>;
        timestamp: import("valibot").NumberSchema<number>;
        transaction_id: import("valibot").StringSchema<string>;
    }, undefined, {
        msgType: "m.key.verification.request";
        from_device: string;
        methods: string[];
        timestamp: number;
        transaction_id: string;
        body?: string | undefined;
        format?: string | undefined;
        formatted_body?: string | undefined;
    }>)[], {
        msgType: "m.text";
        body: string;
        format?: string | undefined;
        formatted_body?: string | undefined;
    } | {
        msgType: "m.emote";
        body: string;
        format?: string | undefined;
        formatted_body?: string | undefined;
    } | {
        msgType: "m.notice";
        body: string;
        format?: string | undefined;
        formatted_body?: string | undefined;
    } | {
        msgType: "m.image";
        body: string;
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
    } | {
        msgType: "m.file";
        body: string;
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
    } | {
        msgType: "m.audio";
        body: string;
        info?: {
            mimetype?: string | undefined;
            size?: number | undefined;
            duration?: number | undefined;
        } | undefined;
        url?: string | undefined;
    } | {
        msgType: "m.location";
        body: string;
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
    } | {
        msgType: "m.video";
        body: string;
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
    } | {
        msgType: "m.key.verification.request";
        from_device: string;
        methods: string[];
        timestamp: number;
        transaction_id: string;
        body?: string | undefined;
        format?: string | undefined;
        formatted_body?: string | undefined;
    }>;
}, undefined, {
    type: "m.room.message";
    content: {
        msgType: "m.text";
        body: string;
        format?: string | undefined;
        formatted_body?: string | undefined;
    } | {
        msgType: "m.emote";
        body: string;
        format?: string | undefined;
        formatted_body?: string | undefined;
    } | {
        msgType: "m.notice";
        body: string;
        format?: string | undefined;
        formatted_body?: string | undefined;
    } | {
        msgType: "m.image";
        body: string;
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
    } | {
        msgType: "m.file";
        body: string;
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
    } | {
        msgType: "m.audio";
        body: string;
        info?: {
            mimetype?: string | undefined;
            size?: number | undefined;
            duration?: number | undefined;
        } | undefined;
        url?: string | undefined;
    } | {
        msgType: "m.location";
        body: string;
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
    } | {
        msgType: "m.video";
        body: string;
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
    } | {
        msgType: "m.key.verification.request";
        from_device: string;
        methods: string[];
        timestamp: number;
        transaction_id: string;
        body?: string | undefined;
        format?: string | undefined;
        formatted_body?: string | undefined;
    };
}> | import("valibot").ObjectSchema<{
    type: import("valibot").LiteralSchema<"m.room.power_levels", "m.room.power_levels">;
    content: import("valibot").ObjectSchema<import("valibot").PartialObjectEntries<{
        ban: import("valibot").NumberSchema<number>;
        events: import("valibot").RecordSchema<import("valibot").StringSchema<string>, import("valibot").NumberSchema<number>, {
            [x: string]: number;
        }>;
        events_default: import("valibot").NumberSchema<number>;
        invite: import("valibot").NumberSchema<number>;
        kick: import("valibot").NumberSchema<number>;
        redact: import("valibot").NumberSchema<number>;
        state_default: import("valibot").NumberSchema<number>;
        users: import("valibot").RecordSchema<import("valibot").StringSchema<string>, import("valibot").NumberSchema<number>, {
            [x: string]: number;
        }>;
        users_default: import("valibot").NumberSchema<number>;
        notifications: import("valibot").ObjectSchema<{
            room: import("valibot").NumberSchema<number>;
        }, undefined, {
            room: number;
        }>;
    }>, undefined, {
        ban?: number | undefined;
        events?: {
            [x: string]: number;
        } | undefined;
        events_default?: number | undefined;
        invite?: number | undefined;
        kick?: number | undefined;
        redact?: number | undefined;
        state_default?: number | undefined;
        users?: {
            [x: string]: number;
        } | undefined;
        users_default?: number | undefined;
        notifications?: {
            room: number;
        } | undefined;
    }>;
}, undefined, {
    type: "m.room.power_levels";
    content: {
        ban?: number | undefined;
        events?: {
            [x: string]: number;
        } | undefined;
        events_default?: number | undefined;
        invite?: number | undefined;
        kick?: number | undefined;
        redact?: number | undefined;
        state_default?: number | undefined;
        users?: {
            [x: string]: number;
        } | undefined;
        users_default?: number | undefined;
        notifications?: {
            room: number;
        } | undefined;
    };
}>)[], {
    type: string;
    content: {
        body: string;
        msgtype: string;
        "m.relates_to"?: {
            event_id: string;
            rel_type: string;
        } | undefined;
    };
} | {
    type: string;
    content: unknown;
} | {
    type: "m.room.message";
    content: {
        msgType: "m.text";
        body: string;
        format?: string | undefined;
        formatted_body?: string | undefined;
    } | {
        msgType: "m.emote";
        body: string;
        format?: string | undefined;
        formatted_body?: string | undefined;
    } | {
        msgType: "m.notice";
        body: string;
        format?: string | undefined;
        formatted_body?: string | undefined;
    } | {
        msgType: "m.image";
        body: string;
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
    } | {
        msgType: "m.file";
        body: string;
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
    } | {
        msgType: "m.audio";
        body: string;
        info?: {
            mimetype?: string | undefined;
            size?: number | undefined;
            duration?: number | undefined;
        } | undefined;
        url?: string | undefined;
    } | {
        msgType: "m.location";
        body: string;
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
    } | {
        msgType: "m.video";
        body: string;
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
    } | {
        msgType: "m.key.verification.request";
        from_device: string;
        methods: string[];
        timestamp: number;
        transaction_id: string;
        body?: string | undefined;
        format?: string | undefined;
        formatted_body?: string | undefined;
    };
} | {
    type: "m.room.power_levels";
    content: {
        ban?: number | undefined;
        events?: {
            [x: string]: number;
        } | undefined;
        events_default?: number | undefined;
        invite?: number | undefined;
        kick?: number | undefined;
        redact?: number | undefined;
        state_default?: number | undefined;
        users?: {
            [x: string]: number;
        } | undefined;
        users_default?: number | undefined;
        notifications?: {
            room: number;
        } | undefined;
    };
}>, import("valibot").ObjectSchema<{
    unsigned: import("valibot").OptionalSchema<import("valibot").ObjectSchema<import("valibot").PartialObjectEntries<{
        age: import("valibot").NumberSchema<number>;
        transaction_id: import("valibot").StringSchema<string>;
        prev_content: import("valibot").UnionSchema<(import("valibot").UnionSchema<(import("valibot").ObjectSchema<{
            msgType: import("valibot").LiteralSchema<"m.text", "m.text">;
            body: import("valibot").StringSchema<string>;
            format: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
            formatted_body: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
        }, undefined, {
            msgType: "m.text";
            body: string;
            format?: string | undefined;
            formatted_body?: string | undefined;
        }> | import("valibot").ObjectSchema<{
            msgType: import("valibot").LiteralSchema<"m.emote", "m.emote">;
            body: import("valibot").StringSchema<string>;
            format: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
            formatted_body: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
        }, undefined, {
            msgType: "m.emote";
            body: string;
            format?: string | undefined;
            formatted_body?: string | undefined;
        }> | import("valibot").ObjectSchema<{
            msgType: import("valibot").LiteralSchema<"m.notice", "m.notice">;
            body: import("valibot").StringSchema<string>;
            format: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
            formatted_body: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
        }, undefined, {
            msgType: "m.notice";
            body: string;
            format?: string | undefined;
            formatted_body?: string | undefined;
        }> | import("valibot").ObjectSchema<{
            msgType: import("valibot").LiteralSchema<"m.image", "m.image">;
            body: import("valibot").StringSchema<string>;
            info: import("valibot").OptionalSchema<import("valibot").ObjectSchema<{
                h: import("valibot").NumberSchema<number>;
                w: import("valibot").NumberSchema<number>;
                mimetype: import("valibot").StringSchema<string>;
                size: import("valibot").NumberSchema<number>;
                thumbnail_info: import("valibot").OptionalSchema<import("valibot").ObjectSchema<import("valibot").PartialObjectEntries<{
                    h: import("valibot").NumberSchema<number>;
                    w: import("valibot").NumberSchema<number>;
                    mimetype: import("valibot").StringSchema<string>;
                    size: import("valibot").NumberSchema<number>;
                }>, undefined, {
                    h?: number | undefined;
                    w?: number | undefined;
                    mimetype?: string | undefined;
                    size?: number | undefined;
                }>, undefined, {
                    h?: number | undefined;
                    w?: number | undefined;
                    mimetype?: string | undefined;
                    size?: number | undefined;
                } | undefined>;
                thumbnail_url: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
            }, undefined, {
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
            }>, undefined, {
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
            } | undefined>;
            url: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
        }, undefined, {
            msgType: "m.image";
            body: string;
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
        }> | import("valibot").ObjectSchema<{
            msgType: import("valibot").LiteralSchema<"m.file", "m.file">;
            body: import("valibot").StringSchema<string>;
            filename: import("valibot").StringSchema<string>;
            info: import("valibot").OptionalSchema<import("valibot").ObjectSchema<{
                mimetype: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
                size: import("valibot").OptionalSchema<import("valibot").NumberSchema<number>, undefined, number | undefined>;
                thumbnail_info: import("valibot").OptionalSchema<import("valibot").ObjectSchema<import("valibot").PartialObjectEntries<{
                    h: import("valibot").NumberSchema<number>;
                    w: import("valibot").NumberSchema<number>;
                    mimetype: import("valibot").StringSchema<string>;
                    size: import("valibot").NumberSchema<number>;
                }>, undefined, {
                    h?: number | undefined;
                    w?: number | undefined;
                    mimetype?: string | undefined;
                    size?: number | undefined;
                }>, undefined, {
                    h?: number | undefined;
                    w?: number | undefined;
                    mimetype?: string | undefined;
                    size?: number | undefined;
                } | undefined>;
                thumbnail_url: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
            }, undefined, {
                mimetype?: string | undefined;
                size?: number | undefined;
                thumbnail_info?: {
                    h?: number | undefined;
                    w?: number | undefined;
                    mimetype?: string | undefined;
                    size?: number | undefined;
                } | undefined;
                thumbnail_url?: string | undefined;
            }>, undefined, {
                mimetype?: string | undefined;
                size?: number | undefined;
                thumbnail_info?: {
                    h?: number | undefined;
                    w?: number | undefined;
                    mimetype?: string | undefined;
                    size?: number | undefined;
                } | undefined;
                thumbnail_url?: string | undefined;
            } | undefined>;
            url: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
        }, undefined, {
            msgType: "m.file";
            body: string;
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
        }> | import("valibot").ObjectSchema<{
            msgType: import("valibot").LiteralSchema<"m.audio", "m.audio">;
            body: import("valibot").StringSchema<string>;
            info: import("valibot").OptionalSchema<import("valibot").ObjectSchema<{
                duration: import("valibot").OptionalSchema<import("valibot").NumberSchema<number>, undefined, number | undefined>;
                mimetype: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
                size: import("valibot").OptionalSchema<import("valibot").NumberSchema<number>, undefined, number | undefined>;
            }, undefined, {
                mimetype?: string | undefined;
                size?: number | undefined;
                duration?: number | undefined;
            }>, undefined, {
                mimetype?: string | undefined;
                size?: number | undefined;
                duration?: number | undefined;
            } | undefined>;
            url: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
        }, undefined, {
            msgType: "m.audio";
            body: string;
            info?: {
                mimetype?: string | undefined;
                size?: number | undefined;
                duration?: number | undefined;
            } | undefined;
            url?: string | undefined;
        }> | import("valibot").ObjectSchema<{
            msgType: import("valibot").LiteralSchema<"m.location", "m.location">;
            body: import("valibot").StringSchema<string>;
            info: import("valibot").OptionalSchema<import("valibot").ObjectSchema<{
                thumbnail_info: import("valibot").OptionalSchema<import("valibot").ObjectSchema<import("valibot").PartialObjectEntries<{
                    h: import("valibot").NumberSchema<number>;
                    w: import("valibot").NumberSchema<number>;
                    mimetype: import("valibot").StringSchema<string>;
                    size: import("valibot").NumberSchema<number>;
                }>, undefined, {
                    h?: number | undefined;
                    w?: number | undefined;
                    mimetype?: string | undefined;
                    size?: number | undefined;
                }>, undefined, {
                    h?: number | undefined;
                    w?: number | undefined;
                    mimetype?: string | undefined;
                    size?: number | undefined;
                } | undefined>;
                thumbnail_url: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
            }, undefined, {
                thumbnail_info?: {
                    h?: number | undefined;
                    w?: number | undefined;
                    mimetype?: string | undefined;
                    size?: number | undefined;
                } | undefined;
                thumbnail_url?: string | undefined;
            }>, undefined, {
                thumbnail_info?: {
                    h?: number | undefined;
                    w?: number | undefined;
                    mimetype?: string | undefined;
                    size?: number | undefined;
                } | undefined;
                thumbnail_url?: string | undefined;
            } | undefined>;
            geo_uri: import("valibot").StringSchema<string>;
        }, undefined, {
            msgType: "m.location";
            body: string;
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
        }> | import("valibot").ObjectSchema<{
            msgType: import("valibot").LiteralSchema<"m.video", "m.video">;
            body: import("valibot").StringSchema<string>;
            info: import("valibot").OptionalSchema<import("valibot").ObjectSchema<{
                duration: import("valibot").OptionalSchema<import("valibot").NumberSchema<number>, undefined, number | undefined>;
                h: import("valibot").OptionalSchema<import("valibot").NumberSchema<number>, undefined, number | undefined>;
                mimetype: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
                size: import("valibot").OptionalSchema<import("valibot").NumberSchema<number>, undefined, number | undefined>;
                thumbnail_info: import("valibot").OptionalSchema<import("valibot").ObjectSchema<import("valibot").PartialObjectEntries<{
                    h: import("valibot").NumberSchema<number>;
                    w: import("valibot").NumberSchema<number>;
                    mimetype: import("valibot").StringSchema<string>;
                    size: import("valibot").NumberSchema<number>;
                }>, undefined, {
                    h?: number | undefined;
                    w?: number | undefined;
                    mimetype?: string | undefined;
                    size?: number | undefined;
                }>, undefined, {
                    h?: number | undefined;
                    w?: number | undefined;
                    mimetype?: string | undefined;
                    size?: number | undefined;
                } | undefined>;
                thumbnail_url: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
                w: import("valibot").OptionalSchema<import("valibot").NumberSchema<number>, undefined, number | undefined>;
            }, undefined, {
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
            }>, undefined, {
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
            } | undefined>;
            url: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
        }, undefined, {
            msgType: "m.video";
            body: string;
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
        }> | import("valibot").ObjectSchema<{
            msgType: import("valibot").LiteralSchema<"m.key.verification.request", "m.key.verification.request">;
            body: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
            format: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
            formatted_body: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
            from_device: import("valibot").StringSchema<string>;
            methods: import("valibot").ArraySchema<import("valibot").StringSchema<string>, string[]>;
            timestamp: import("valibot").NumberSchema<number>;
            transaction_id: import("valibot").StringSchema<string>;
        }, undefined, {
            msgType: "m.key.verification.request";
            from_device: string;
            methods: string[];
            timestamp: number;
            transaction_id: string;
            body?: string | undefined;
            format?: string | undefined;
            formatted_body?: string | undefined;
        }>)[], {
            msgType: "m.text";
            body: string;
            format?: string | undefined;
            formatted_body?: string | undefined;
        } | {
            msgType: "m.emote";
            body: string;
            format?: string | undefined;
            formatted_body?: string | undefined;
        } | {
            msgType: "m.notice";
            body: string;
            format?: string | undefined;
            formatted_body?: string | undefined;
        } | {
            msgType: "m.image";
            body: string;
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
        } | {
            msgType: "m.file";
            body: string;
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
        } | {
            msgType: "m.audio";
            body: string;
            info?: {
                mimetype?: string | undefined;
                size?: number | undefined;
                duration?: number | undefined;
            } | undefined;
            url?: string | undefined;
        } | {
            msgType: "m.location";
            body: string;
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
        } | {
            msgType: "m.video";
            body: string;
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
        } | {
            msgType: "m.key.verification.request";
            from_device: string;
            methods: string[];
            timestamp: number;
            transaction_id: string;
            body?: string | undefined;
            format?: string | undefined;
            formatted_body?: string | undefined;
        }> | import("valibot").ObjectSchema<import("valibot").PartialObjectEntries<{
            ban: import("valibot").NumberSchema<number>;
            events: import("valibot").RecordSchema<import("valibot").StringSchema<string>, import("valibot").NumberSchema<number>, {
                [x: string]: number;
            }>;
            events_default: import("valibot").NumberSchema<number>;
            invite: import("valibot").NumberSchema<number>;
            kick: import("valibot").NumberSchema<number>;
            redact: import("valibot").NumberSchema<number>;
            state_default: import("valibot").NumberSchema<number>;
            users: import("valibot").RecordSchema<import("valibot").StringSchema<string>, import("valibot").NumberSchema<number>, {
                [x: string]: number;
            }>;
            users_default: import("valibot").NumberSchema<number>;
            notifications: import("valibot").ObjectSchema<{
                room: import("valibot").NumberSchema<number>;
            }, undefined, {
                room: number;
            }>;
        }>, undefined, {
            ban?: number | undefined;
            events?: {
                [x: string]: number;
            } | undefined;
            events_default?: number | undefined;
            invite?: number | undefined;
            kick?: number | undefined;
            redact?: number | undefined;
            state_default?: number | undefined;
            users?: {
                [x: string]: number;
            } | undefined;
            users_default?: number | undefined;
            notifications?: {
                room: number;
            } | undefined;
        }> | import("valibot").ObjectSchema<{
            body: import("valibot").StringSchema<string>;
            msgtype: import("valibot").StringSchema<string>;
            "m.relates_to": import("valibot").OptionalSchema<import("valibot").ObjectSchema<{
                event_id: import("valibot").StringSchema<string>;
                rel_type: import("valibot").StringSchema<string>;
            }, undefined, {
                event_id: string;
                rel_type: string;
            }>, undefined, {
                event_id: string;
                rel_type: string;
            } | undefined>;
        }, undefined, {
            body: string;
            msgtype: string;
            "m.relates_to"?: {
                event_id: string;
                rel_type: string;
            } | undefined;
        }>)[], {
            msgType: "m.text";
            body: string;
            format?: string | undefined;
            formatted_body?: string | undefined;
        } | {
            msgType: "m.emote";
            body: string;
            format?: string | undefined;
            formatted_body?: string | undefined;
        } | {
            msgType: "m.notice";
            body: string;
            format?: string | undefined;
            formatted_body?: string | undefined;
        } | {
            msgType: "m.image";
            body: string;
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
        } | {
            msgType: "m.file";
            body: string;
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
        } | {
            msgType: "m.audio";
            body: string;
            info?: {
                mimetype?: string | undefined;
                size?: number | undefined;
                duration?: number | undefined;
            } | undefined;
            url?: string | undefined;
        } | {
            msgType: "m.location";
            body: string;
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
        } | {
            msgType: "m.video";
            body: string;
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
        } | {
            msgType: "m.key.verification.request";
            from_device: string;
            methods: string[];
            timestamp: number;
            transaction_id: string;
            body?: string | undefined;
            format?: string | undefined;
            formatted_body?: string | undefined;
        } | {
            ban?: number | undefined;
            events?: {
                [x: string]: number;
            } | undefined;
            events_default?: number | undefined;
            invite?: number | undefined;
            kick?: number | undefined;
            redact?: number | undefined;
            state_default?: number | undefined;
            users?: {
                [x: string]: number;
            } | undefined;
            users_default?: number | undefined;
            notifications?: {
                room: number;
            } | undefined;
        } | {
            body: string;
            msgtype: string;
            "m.relates_to"?: {
                event_id: string;
                rel_type: string;
            } | undefined;
        }>;
        redacted_because: import("valibot").RecursiveSchema<() => import("valibot").ObjectSchema<{
            sender: import("valibot").StringSchema<string>;
            room_id: import("valibot").StringSchema<string>;
            event_id: import("valibot").StringSchema<string>;
            state_key: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
            origin_server_ts: import("valibot").NumberSchema<number>;
            age: import("valibot").OptionalSchema<import("valibot").NumberSchema<number>, undefined, number | undefined>;
            replaces_state: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
            prev_content: import("valibot").OptionalSchema<import("valibot").UnionSchema<(import("valibot").UnionSchema<(import("valibot").ObjectSchema<{
                msgType: import("valibot").LiteralSchema<"m.text", "m.text">;
                body: import("valibot").StringSchema<string>;
                format: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
                formatted_body: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
            }, undefined, {
                msgType: "m.text";
                body: string;
                format?: string | undefined;
                formatted_body?: string | undefined;
            }> | import("valibot").ObjectSchema<{
                msgType: import("valibot").LiteralSchema<"m.emote", "m.emote">;
                body: import("valibot").StringSchema<string>;
                format: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
                formatted_body: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
            }, undefined, {
                msgType: "m.emote";
                body: string;
                format?: string | undefined;
                formatted_body?: string | undefined;
            }> | import("valibot").ObjectSchema<{
                msgType: import("valibot").LiteralSchema<"m.notice", "m.notice">;
                body: import("valibot").StringSchema<string>;
                format: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
                formatted_body: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
            }, undefined, {
                msgType: "m.notice";
                body: string;
                format?: string | undefined;
                formatted_body?: string | undefined;
            }> | import("valibot").ObjectSchema<{
                msgType: import("valibot").LiteralSchema<"m.image", "m.image">;
                body: import("valibot").StringSchema<string>;
                info: import("valibot").OptionalSchema<import("valibot").ObjectSchema<{
                    h: import("valibot").NumberSchema<number>;
                    w: import("valibot").NumberSchema<number>;
                    mimetype: import("valibot").StringSchema<string>;
                    size: import("valibot").NumberSchema<number>;
                    thumbnail_info: import("valibot").OptionalSchema<import("valibot").ObjectSchema<import("valibot").PartialObjectEntries<{
                        h: import("valibot").NumberSchema<number>;
                        w: import("valibot").NumberSchema<number>;
                        mimetype: import("valibot").StringSchema<string>;
                        size: import("valibot").NumberSchema<number>;
                    }>, undefined, {
                        h?: number | undefined;
                        w?: number | undefined;
                        mimetype?: string | undefined;
                        size?: number | undefined;
                    }>, undefined, {
                        h?: number | undefined;
                        w?: number | undefined;
                        mimetype?: string | undefined;
                        size?: number | undefined;
                    } | undefined>;
                    thumbnail_url: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
                }, undefined, {
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
                }>, undefined, {
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
                } | undefined>;
                url: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
            }, undefined, {
                msgType: "m.image";
                body: string;
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
            }> | import("valibot").ObjectSchema<{
                msgType: import("valibot").LiteralSchema<"m.file", "m.file">;
                body: import("valibot").StringSchema<string>;
                filename: import("valibot").StringSchema<string>;
                info: import("valibot").OptionalSchema<import("valibot").ObjectSchema<{
                    mimetype: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
                    size: import("valibot").OptionalSchema<import("valibot").NumberSchema<number>, undefined, number | undefined>;
                    thumbnail_info: import("valibot").OptionalSchema<import("valibot").ObjectSchema<import("valibot").PartialObjectEntries<{
                        h: import("valibot").NumberSchema<number>;
                        w: import("valibot").NumberSchema<number>;
                        mimetype: import("valibot").StringSchema<string>;
                        size: import("valibot").NumberSchema<number>;
                    }>, undefined, {
                        h?: number | undefined;
                        w?: number | undefined;
                        mimetype?: string | undefined;
                        size?: number | undefined;
                    }>, undefined, {
                        h?: number | undefined;
                        w?: number | undefined;
                        mimetype?: string | undefined;
                        size?: number | undefined;
                    } | undefined>;
                    thumbnail_url: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
                }, undefined, {
                    mimetype?: string | undefined;
                    size?: number | undefined;
                    thumbnail_info?: {
                        h?: number | undefined;
                        w?: number | undefined;
                        mimetype?: string | undefined;
                        size?: number | undefined;
                    } | undefined;
                    thumbnail_url?: string | undefined;
                }>, undefined, {
                    mimetype?: string | undefined;
                    size?: number | undefined;
                    thumbnail_info?: {
                        h?: number | undefined;
                        w?: number | undefined;
                        mimetype?: string | undefined;
                        size?: number | undefined;
                    } | undefined;
                    thumbnail_url?: string | undefined;
                } | undefined>;
                url: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
            }, undefined, {
                msgType: "m.file";
                body: string;
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
            }> | import("valibot").ObjectSchema<{
                msgType: import("valibot").LiteralSchema<"m.audio", "m.audio">;
                body: import("valibot").StringSchema<string>;
                info: import("valibot").OptionalSchema<import("valibot").ObjectSchema<{
                    duration: import("valibot").OptionalSchema<import("valibot").NumberSchema<number>, undefined, number | undefined>;
                    mimetype: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
                    size: import("valibot").OptionalSchema<import("valibot").NumberSchema<number>, undefined, number | undefined>;
                }, undefined, {
                    mimetype?: string | undefined;
                    size?: number | undefined;
                    duration?: number | undefined;
                }>, undefined, {
                    mimetype?: string | undefined;
                    size?: number | undefined;
                    duration?: number | undefined;
                } | undefined>;
                url: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
            }, undefined, {
                msgType: "m.audio";
                body: string;
                info?: {
                    mimetype?: string | undefined;
                    size?: number | undefined;
                    duration?: number | undefined;
                } | undefined;
                url?: string | undefined;
            }> | import("valibot").ObjectSchema<{
                msgType: import("valibot").LiteralSchema<"m.location", "m.location">;
                body: import("valibot").StringSchema<string>;
                info: import("valibot").OptionalSchema<import("valibot").ObjectSchema<{
                    thumbnail_info: import("valibot").OptionalSchema<import("valibot").ObjectSchema<import("valibot").PartialObjectEntries<{
                        h: import("valibot").NumberSchema<number>;
                        w: import("valibot").NumberSchema<number>;
                        mimetype: import("valibot").StringSchema<string>;
                        size: import("valibot").NumberSchema<number>;
                    }>, undefined, {
                        h?: number | undefined;
                        w?: number | undefined;
                        mimetype?: string | undefined;
                        size?: number | undefined;
                    }>, undefined, {
                        h?: number | undefined;
                        w?: number | undefined;
                        mimetype?: string | undefined;
                        size?: number | undefined;
                    } | undefined>;
                    thumbnail_url: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
                }, undefined, {
                    thumbnail_info?: {
                        h?: number | undefined;
                        w?: number | undefined;
                        mimetype?: string | undefined;
                        size?: number | undefined;
                    } | undefined;
                    thumbnail_url?: string | undefined;
                }>, undefined, {
                    thumbnail_info?: {
                        h?: number | undefined;
                        w?: number | undefined;
                        mimetype?: string | undefined;
                        size?: number | undefined;
                    } | undefined;
                    thumbnail_url?: string | undefined;
                } | undefined>;
                geo_uri: import("valibot").StringSchema<string>;
            }, undefined, {
                msgType: "m.location";
                body: string;
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
            }> | import("valibot").ObjectSchema<{
                msgType: import("valibot").LiteralSchema<"m.video", "m.video">;
                body: import("valibot").StringSchema<string>;
                info: import("valibot").OptionalSchema<import("valibot").ObjectSchema<{
                    duration: import("valibot").OptionalSchema<import("valibot").NumberSchema<number>, undefined, number | undefined>;
                    h: import("valibot").OptionalSchema<import("valibot").NumberSchema<number>, undefined, number | undefined>;
                    mimetype: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
                    size: import("valibot").OptionalSchema<import("valibot").NumberSchema<number>, undefined, number | undefined>;
                    thumbnail_info: import("valibot").OptionalSchema<import("valibot").ObjectSchema<import("valibot").PartialObjectEntries<{
                        h: import("valibot").NumberSchema<number>;
                        w: import("valibot").NumberSchema<number>;
                        mimetype: import("valibot").StringSchema<string>;
                        size: import("valibot").NumberSchema<number>;
                    }>, undefined, {
                        h?: number | undefined;
                        w?: number | undefined;
                        mimetype?: string | undefined;
                        size?: number | undefined;
                    }>, undefined, {
                        h?: number | undefined;
                        w?: number | undefined;
                        mimetype?: string | undefined;
                        size?: number | undefined;
                    } | undefined>;
                    thumbnail_url: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
                    w: import("valibot").OptionalSchema<import("valibot").NumberSchema<number>, undefined, number | undefined>;
                }, undefined, {
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
                }>, undefined, {
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
                } | undefined>;
                url: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
            }, undefined, {
                msgType: "m.video";
                body: string;
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
            }> | import("valibot").ObjectSchema<{
                msgType: import("valibot").LiteralSchema<"m.key.verification.request", "m.key.verification.request">;
                body: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
                format: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
                formatted_body: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
                from_device: import("valibot").StringSchema<string>;
                methods: import("valibot").ArraySchema<import("valibot").StringSchema<string>, string[]>;
                timestamp: import("valibot").NumberSchema<number>;
                transaction_id: import("valibot").StringSchema<string>;
            }, undefined, {
                msgType: "m.key.verification.request";
                from_device: string;
                methods: string[];
                timestamp: number;
                transaction_id: string;
                body?: string | undefined;
                format?: string | undefined;
                formatted_body?: string | undefined;
            }>)[], {
                msgType: "m.text";
                body: string;
                format?: string | undefined;
                formatted_body?: string | undefined;
            } | {
                msgType: "m.emote";
                body: string;
                format?: string | undefined;
                formatted_body?: string | undefined;
            } | {
                msgType: "m.notice";
                body: string;
                format?: string | undefined;
                formatted_body?: string | undefined;
            } | {
                msgType: "m.image";
                body: string;
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
            } | {
                msgType: "m.file";
                body: string;
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
            } | {
                msgType: "m.audio";
                body: string;
                info?: {
                    mimetype?: string | undefined;
                    size?: number | undefined;
                    duration?: number | undefined;
                } | undefined;
                url?: string | undefined;
            } | {
                msgType: "m.location";
                body: string;
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
            } | {
                msgType: "m.video";
                body: string;
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
            } | {
                msgType: "m.key.verification.request";
                from_device: string;
                methods: string[];
                timestamp: number;
                transaction_id: string;
                body?: string | undefined;
                format?: string | undefined;
                formatted_body?: string | undefined;
            }> | import("valibot").ObjectSchema<import("valibot").PartialObjectEntries<{
                ban: import("valibot").NumberSchema<number>;
                events: import("valibot").RecordSchema<import("valibot").StringSchema<string>, import("valibot").NumberSchema<number>, {
                    [x: string]: number;
                }>;
                events_default: import("valibot").NumberSchema<number>;
                invite: import("valibot").NumberSchema<number>;
                kick: import("valibot").NumberSchema<number>;
                redact: import("valibot").NumberSchema<number>;
                state_default: import("valibot").NumberSchema<number>;
                users: import("valibot").RecordSchema<import("valibot").StringSchema<string>, import("valibot").NumberSchema<number>, {
                    [x: string]: number;
                }>;
                users_default: import("valibot").NumberSchema<number>;
                notifications: import("valibot").ObjectSchema<{
                    room: import("valibot").NumberSchema<number>;
                }, undefined, {
                    room: number;
                }>;
            }>, undefined, {
                ban?: number | undefined;
                events?: {
                    [x: string]: number;
                } | undefined;
                events_default?: number | undefined;
                invite?: number | undefined;
                kick?: number | undefined;
                redact?: number | undefined;
                state_default?: number | undefined;
                users?: {
                    [x: string]: number;
                } | undefined;
                users_default?: number | undefined;
                notifications?: {
                    room: number;
                } | undefined;
            }> | import("valibot").ObjectSchema<{
                body: import("valibot").StringSchema<string>;
                msgtype: import("valibot").StringSchema<string>;
                "m.relates_to": import("valibot").OptionalSchema<import("valibot").ObjectSchema<{
                    event_id: import("valibot").StringSchema<string>;
                    rel_type: import("valibot").StringSchema<string>;
                }, undefined, {
                    event_id: string;
                    rel_type: string;
                }>, undefined, {
                    event_id: string;
                    rel_type: string;
                } | undefined>;
            }, undefined, {
                body: string;
                msgtype: string;
                "m.relates_to"?: {
                    event_id: string;
                    rel_type: string;
                } | undefined;
            }>)[], {
                msgType: "m.text";
                body: string;
                format?: string | undefined;
                formatted_body?: string | undefined;
            } | {
                msgType: "m.emote";
                body: string;
                format?: string | undefined;
                formatted_body?: string | undefined;
            } | {
                msgType: "m.notice";
                body: string;
                format?: string | undefined;
                formatted_body?: string | undefined;
            } | {
                msgType: "m.image";
                body: string;
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
            } | {
                msgType: "m.file";
                body: string;
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
            } | {
                msgType: "m.audio";
                body: string;
                info?: {
                    mimetype?: string | undefined;
                    size?: number | undefined;
                    duration?: number | undefined;
                } | undefined;
                url?: string | undefined;
            } | {
                msgType: "m.location";
                body: string;
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
            } | {
                msgType: "m.video";
                body: string;
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
            } | {
                msgType: "m.key.verification.request";
                from_device: string;
                methods: string[];
                timestamp: number;
                transaction_id: string;
                body?: string | undefined;
                format?: string | undefined;
                formatted_body?: string | undefined;
            } | {
                ban?: number | undefined;
                events?: {
                    [x: string]: number;
                } | undefined;
                events_default?: number | undefined;
                invite?: number | undefined;
                kick?: number | undefined;
                redact?: number | undefined;
                state_default?: number | undefined;
                users?: {
                    [x: string]: number;
                } | undefined;
                users_default?: number | undefined;
                notifications?: {
                    room: number;
                } | undefined;
            } | {
                body: string;
                msgtype: string;
                "m.relates_to"?: {
                    event_id: string;
                    rel_type: string;
                } | undefined;
            }>, undefined, {
                msgType: "m.text";
                body: string;
                format?: string | undefined;
                formatted_body?: string | undefined;
            } | {
                msgType: "m.emote";
                body: string;
                format?: string | undefined;
                formatted_body?: string | undefined;
            } | {
                msgType: "m.notice";
                body: string;
                format?: string | undefined;
                formatted_body?: string | undefined;
            } | {
                msgType: "m.image";
                body: string;
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
            } | {
                msgType: "m.file";
                body: string;
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
            } | {
                msgType: "m.audio";
                body: string;
                info?: {
                    mimetype?: string | undefined;
                    size?: number | undefined;
                    duration?: number | undefined;
                } | undefined;
                url?: string | undefined;
            } | {
                msgType: "m.location";
                body: string;
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
            } | {
                msgType: "m.video";
                body: string;
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
            } | {
                msgType: "m.key.verification.request";
                from_device: string;
                methods: string[];
                timestamp: number;
                transaction_id: string;
                body?: string | undefined;
                format?: string | undefined;
                formatted_body?: string | undefined;
            } | {
                ban?: number | undefined;
                events?: {
                    [x: string]: number;
                } | undefined;
                events_default?: number | undefined;
                invite?: number | undefined;
                kick?: number | undefined;
                redact?: number | undefined;
                state_default?: number | undefined;
                users?: {
                    [x: string]: number;
                } | undefined;
                users_default?: number | undefined;
                notifications?: {
                    room: number;
                } | undefined;
            } | {
                body: string;
                msgtype: string;
                "m.relates_to"?: {
                    event_id: string;
                    rel_type: string;
                } | undefined;
            } | undefined>;
            user_id: import("valibot").OptionalSchema<import("valibot").StringSchema<string>, undefined, string | undefined>;
        }, undefined, {
            event_id: string;
            sender: string;
            room_id: string;
            origin_server_ts: number;
            state_key?: string | undefined;
            age?: number | undefined;
            replaces_state?: string | undefined;
            prev_content?: {
                msgType: "m.text";
                body: string;
                format?: string | undefined;
                formatted_body?: string | undefined;
            } | {
                msgType: "m.emote";
                body: string;
                format?: string | undefined;
                formatted_body?: string | undefined;
            } | {
                msgType: "m.notice";
                body: string;
                format?: string | undefined;
                formatted_body?: string | undefined;
            } | {
                msgType: "m.image";
                body: string;
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
            } | {
                msgType: "m.file";
                body: string;
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
            } | {
                msgType: "m.audio";
                body: string;
                info?: {
                    mimetype?: string | undefined;
                    size?: number | undefined;
                    duration?: number | undefined;
                } | undefined;
                url?: string | undefined;
            } | {
                msgType: "m.location";
                body: string;
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
            } | {
                msgType: "m.video";
                body: string;
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
            } | {
                msgType: "m.key.verification.request";
                from_device: string;
                methods: string[];
                timestamp: number;
                transaction_id: string;
                body?: string | undefined;
                format?: string | undefined;
                formatted_body?: string | undefined;
            } | {
                ban?: number | undefined;
                events?: {
                    [x: string]: number;
                } | undefined;
                events_default?: number | undefined;
                invite?: number | undefined;
                kick?: number | undefined;
                redact?: number | undefined;
                state_default?: number | undefined;
                users?: {
                    [x: string]: number;
                } | undefined;
                users_default?: number | undefined;
                notifications?: {
                    room: number;
                } | undefined;
            } | {
                body: string;
                msgtype: string;
                "m.relates_to"?: {
                    event_id: string;
                    rel_type: string;
                } | undefined;
            } | undefined;
            user_id?: string | undefined;
        }>, {
            event_id: string;
            sender: string;
            room_id: string;
            origin_server_ts: number;
            state_key?: string | undefined;
            age?: number | undefined;
            replaces_state?: string | undefined;
            prev_content?: {
                msgType: "m.text";
                body: string;
                format?: string | undefined;
                formatted_body?: string | undefined;
            } | {
                msgType: "m.emote";
                body: string;
                format?: string | undefined;
                formatted_body?: string | undefined;
            } | {
                msgType: "m.notice";
                body: string;
                format?: string | undefined;
                formatted_body?: string | undefined;
            } | {
                msgType: "m.image";
                body: string;
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
            } | {
                msgType: "m.file";
                body: string;
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
            } | {
                msgType: "m.audio";
                body: string;
                info?: {
                    mimetype?: string | undefined;
                    size?: number | undefined;
                    duration?: number | undefined;
                } | undefined;
                url?: string | undefined;
            } | {
                msgType: "m.location";
                body: string;
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
            } | {
                msgType: "m.video";
                body: string;
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
            } | {
                msgType: "m.key.verification.request";
                from_device: string;
                methods: string[];
                timestamp: number;
                transaction_id: string;
                body?: string | undefined;
                format?: string | undefined;
                formatted_body?: string | undefined;
            } | {
                ban?: number | undefined;
                events?: {
                    [x: string]: number;
                } | undefined;
                events_default?: number | undefined;
                invite?: number | undefined;
                kick?: number | undefined;
                redact?: number | undefined;
                state_default?: number | undefined;
                users?: {
                    [x: string]: number;
                } | undefined;
                users_default?: number | undefined;
                notifications?: {
                    room: number;
                } | undefined;
            } | {
                body: string;
                msgtype: string;
                "m.relates_to"?: {
                    event_id: string;
                    rel_type: string;
                } | undefined;
            } | undefined;
            user_id?: string | undefined;
        }>;
        "m.relations": import("valibot").RecordSchema<import("valibot").StringSchema<string>, import("valibot").UnionSchema<(import("valibot").ObjectSchema<{}, undefined, {}> | import("valibot").ArraySchema<import("valibot").ObjectSchema<{}, undefined, {}>, {}[]>)[], {} | {}[]>, {
            [x: string]: {} | {}[];
        }>;
    }>, undefined, {
        transaction_id?: string | undefined;
        age?: number | undefined;
        prev_content?: {
            msgType: "m.text";
            body: string;
            format?: string | undefined;
            formatted_body?: string | undefined;
        } | {
            msgType: "m.emote";
            body: string;
            format?: string | undefined;
            formatted_body?: string | undefined;
        } | {
            msgType: "m.notice";
            body: string;
            format?: string | undefined;
            formatted_body?: string | undefined;
        } | {
            msgType: "m.image";
            body: string;
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
        } | {
            msgType: "m.file";
            body: string;
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
        } | {
            msgType: "m.audio";
            body: string;
            info?: {
                mimetype?: string | undefined;
                size?: number | undefined;
                duration?: number | undefined;
            } | undefined;
            url?: string | undefined;
        } | {
            msgType: "m.location";
            body: string;
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
        } | {
            msgType: "m.video";
            body: string;
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
        } | {
            msgType: "m.key.verification.request";
            from_device: string;
            methods: string[];
            timestamp: number;
            transaction_id: string;
            body?: string | undefined;
            format?: string | undefined;
            formatted_body?: string | undefined;
        } | {
            ban?: number | undefined;
            events?: {
                [x: string]: number;
            } | undefined;
            events_default?: number | undefined;
            invite?: number | undefined;
            kick?: number | undefined;
            redact?: number | undefined;
            state_default?: number | undefined;
            users?: {
                [x: string]: number;
            } | undefined;
            users_default?: number | undefined;
            notifications?: {
                room: number;
            } | undefined;
        } | {
            body: string;
            msgtype: string;
            "m.relates_to"?: {
                event_id: string;
                rel_type: string;
            } | undefined;
        } | undefined;
        redacted_because?: {
            event_id: string;
            sender: string;
            room_id: string;
            origin_server_ts: number;
            state_key?: string | undefined;
            age?: number | undefined;
            replaces_state?: string | undefined;
            prev_content?: {
                msgType: "m.text";
                body: string;
                format?: string | undefined;
                formatted_body?: string | undefined;
            } | {
                msgType: "m.emote";
                body: string;
                format?: string | undefined;
                formatted_body?: string | undefined;
            } | {
                msgType: "m.notice";
                body: string;
                format?: string | undefined;
                formatted_body?: string | undefined;
            } | {
                msgType: "m.image";
                body: string;
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
            } | {
                msgType: "m.file";
                body: string;
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
            } | {
                msgType: "m.audio";
                body: string;
                info?: {
                    mimetype?: string | undefined;
                    size?: number | undefined;
                    duration?: number | undefined;
                } | undefined;
                url?: string | undefined;
            } | {
                msgType: "m.location";
                body: string;
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
            } | {
                msgType: "m.video";
                body: string;
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
            } | {
                msgType: "m.key.verification.request";
                from_device: string;
                methods: string[];
                timestamp: number;
                transaction_id: string;
                body?: string | undefined;
                format?: string | undefined;
                formatted_body?: string | undefined;
            } | {
                ban?: number | undefined;
                events?: {
                    [x: string]: number;
                } | undefined;
                events_default?: number | undefined;
                invite?: number | undefined;
                kick?: number | undefined;
                redact?: number | undefined;
                state_default?: number | undefined;
                users?: {
                    [x: string]: number;
                } | undefined;
                users_default?: number | undefined;
                notifications?: {
                    room: number;
                } | undefined;
            } | {
                body: string;
                msgtype: string;
                "m.relates_to"?: {
                    event_id: string;
                    rel_type: string;
                } | undefined;
            } | undefined;
            user_id?: string | undefined;
        } | undefined;
        "m.relations"?: {
            [x: string]: {} | {}[];
        } | undefined;
    }>, undefined, {
        transaction_id?: string | undefined;
        age?: number | undefined;
        prev_content?: {
            msgType: "m.text";
            body: string;
            format?: string | undefined;
            formatted_body?: string | undefined;
        } | {
            msgType: "m.emote";
            body: string;
            format?: string | undefined;
            formatted_body?: string | undefined;
        } | {
            msgType: "m.notice";
            body: string;
            format?: string | undefined;
            formatted_body?: string | undefined;
        } | {
            msgType: "m.image";
            body: string;
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
        } | {
            msgType: "m.file";
            body: string;
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
        } | {
            msgType: "m.audio";
            body: string;
            info?: {
                mimetype?: string | undefined;
                size?: number | undefined;
                duration?: number | undefined;
            } | undefined;
            url?: string | undefined;
        } | {
            msgType: "m.location";
            body: string;
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
        } | {
            msgType: "m.video";
            body: string;
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
        } | {
            msgType: "m.key.verification.request";
            from_device: string;
            methods: string[];
            timestamp: number;
            transaction_id: string;
            body?: string | undefined;
            format?: string | undefined;
            formatted_body?: string | undefined;
        } | {
            ban?: number | undefined;
            events?: {
                [x: string]: number;
            } | undefined;
            events_default?: number | undefined;
            invite?: number | undefined;
            kick?: number | undefined;
            redact?: number | undefined;
            state_default?: number | undefined;
            users?: {
                [x: string]: number;
            } | undefined;
            users_default?: number | undefined;
            notifications?: {
                room: number;
            } | undefined;
        } | {
            body: string;
            msgtype: string;
            "m.relates_to"?: {
                event_id: string;
                rel_type: string;
            } | undefined;
        } | undefined;
        redacted_because?: {
            event_id: string;
            sender: string;
            room_id: string;
            origin_server_ts: number;
            state_key?: string | undefined;
            age?: number | undefined;
            replaces_state?: string | undefined;
            prev_content?: {
                msgType: "m.text";
                body: string;
                format?: string | undefined;
                formatted_body?: string | undefined;
            } | {
                msgType: "m.emote";
                body: string;
                format?: string | undefined;
                formatted_body?: string | undefined;
            } | {
                msgType: "m.notice";
                body: string;
                format?: string | undefined;
                formatted_body?: string | undefined;
            } | {
                msgType: "m.image";
                body: string;
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
            } | {
                msgType: "m.file";
                body: string;
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
            } | {
                msgType: "m.audio";
                body: string;
                info?: {
                    mimetype?: string | undefined;
                    size?: number | undefined;
                    duration?: number | undefined;
                } | undefined;
                url?: string | undefined;
            } | {
                msgType: "m.location";
                body: string;
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
            } | {
                msgType: "m.video";
                body: string;
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
            } | {
                msgType: "m.key.verification.request";
                from_device: string;
                methods: string[];
                timestamp: number;
                transaction_id: string;
                body?: string | undefined;
                format?: string | undefined;
                formatted_body?: string | undefined;
            } | {
                ban?: number | undefined;
                events?: {
                    [x: string]: number;
                } | undefined;
                events_default?: number | undefined;
                invite?: number | undefined;
                kick?: number | undefined;
                redact?: number | undefined;
                state_default?: number | undefined;
                users?: {
                    [x: string]: number;
                } | undefined;
                users_default?: number | undefined;
                notifications?: {
                    room: number;
                } | undefined;
            } | {
                body: string;
                msgtype: string;
                "m.relates_to"?: {
                    event_id: string;
                    rel_type: string;
                } | undefined;
            } | undefined;
            user_id?: string | undefined;
        } | undefined;
        "m.relations"?: {
            [x: string]: {} | {}[];
        } | undefined;
    } | undefined>;
}, undefined, {
    unsigned?: {
        transaction_id?: string | undefined;
        age?: number | undefined;
        prev_content?: {
            msgType: "m.text";
            body: string;
            format?: string | undefined;
            formatted_body?: string | undefined;
        } | {
            msgType: "m.emote";
            body: string;
            format?: string | undefined;
            formatted_body?: string | undefined;
        } | {
            msgType: "m.notice";
            body: string;
            format?: string | undefined;
            formatted_body?: string | undefined;
        } | {
            msgType: "m.image";
            body: string;
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
        } | {
            msgType: "m.file";
            body: string;
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
        } | {
            msgType: "m.audio";
            body: string;
            info?: {
                mimetype?: string | undefined;
                size?: number | undefined;
                duration?: number | undefined;
            } | undefined;
            url?: string | undefined;
        } | {
            msgType: "m.location";
            body: string;
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
        } | {
            msgType: "m.video";
            body: string;
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
        } | {
            msgType: "m.key.verification.request";
            from_device: string;
            methods: string[];
            timestamp: number;
            transaction_id: string;
            body?: string | undefined;
            format?: string | undefined;
            formatted_body?: string | undefined;
        } | {
            ban?: number | undefined;
            events?: {
                [x: string]: number;
            } | undefined;
            events_default?: number | undefined;
            invite?: number | undefined;
            kick?: number | undefined;
            redact?: number | undefined;
            state_default?: number | undefined;
            users?: {
                [x: string]: number;
            } | undefined;
            users_default?: number | undefined;
            notifications?: {
                room: number;
            } | undefined;
        } | {
            body: string;
            msgtype: string;
            "m.relates_to"?: {
                event_id: string;
                rel_type: string;
            } | undefined;
        } | undefined;
        redacted_because?: {
            event_id: string;
            sender: string;
            room_id: string;
            origin_server_ts: number;
            state_key?: string | undefined;
            age?: number | undefined;
            replaces_state?: string | undefined;
            prev_content?: {
                msgType: "m.text";
                body: string;
                format?: string | undefined;
                formatted_body?: string | undefined;
            } | {
                msgType: "m.emote";
                body: string;
                format?: string | undefined;
                formatted_body?: string | undefined;
            } | {
                msgType: "m.notice";
                body: string;
                format?: string | undefined;
                formatted_body?: string | undefined;
            } | {
                msgType: "m.image";
                body: string;
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
            } | {
                msgType: "m.file";
                body: string;
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
            } | {
                msgType: "m.audio";
                body: string;
                info?: {
                    mimetype?: string | undefined;
                    size?: number | undefined;
                    duration?: number | undefined;
                } | undefined;
                url?: string | undefined;
            } | {
                msgType: "m.location";
                body: string;
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
            } | {
                msgType: "m.video";
                body: string;
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
            } | {
                msgType: "m.key.verification.request";
                from_device: string;
                methods: string[];
                timestamp: number;
                transaction_id: string;
                body?: string | undefined;
                format?: string | undefined;
                formatted_body?: string | undefined;
            } | {
                ban?: number | undefined;
                events?: {
                    [x: string]: number;
                } | undefined;
                events_default?: number | undefined;
                invite?: number | undefined;
                kick?: number | undefined;
                redact?: number | undefined;
                state_default?: number | undefined;
                users?: {
                    [x: string]: number;
                } | undefined;
                users_default?: number | undefined;
                notifications?: {
                    room: number;
                } | undefined;
            } | {
                body: string;
                msgtype: string;
                "m.relates_to"?: {
                    event_id: string;
                    rel_type: string;
                } | undefined;
            } | undefined;
            user_id?: string | undefined;
        } | undefined;
        "m.relations"?: {
            [x: string]: {} | {}[];
        } | undefined;
    } | undefined;
}>], {
    event_id: string;
    sender: string;
    room_id: string;
    origin_server_ts: number;
    state_key?: string | undefined;
    age?: number | undefined;
    replaces_state?: string | undefined;
    prev_content?: {
        msgType: "m.text";
        body: string;
        format?: string | undefined;
        formatted_body?: string | undefined;
    } | {
        msgType: "m.emote";
        body: string;
        format?: string | undefined;
        formatted_body?: string | undefined;
    } | {
        msgType: "m.notice";
        body: string;
        format?: string | undefined;
        formatted_body?: string | undefined;
    } | {
        msgType: "m.image";
        body: string;
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
    } | {
        msgType: "m.file";
        body: string;
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
    } | {
        msgType: "m.audio";
        body: string;
        info?: {
            mimetype?: string | undefined;
            size?: number | undefined;
            duration?: number | undefined;
        } | undefined;
        url?: string | undefined;
    } | {
        msgType: "m.location";
        body: string;
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
    } | {
        msgType: "m.video";
        body: string;
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
    } | {
        msgType: "m.key.verification.request";
        from_device: string;
        methods: string[];
        timestamp: number;
        transaction_id: string;
        body?: string | undefined;
        format?: string | undefined;
        formatted_body?: string | undefined;
    } | {
        ban?: number | undefined;
        events?: {
            [x: string]: number;
        } | undefined;
        events_default?: number | undefined;
        invite?: number | undefined;
        kick?: number | undefined;
        redact?: number | undefined;
        state_default?: number | undefined;
        users?: {
            [x: string]: number;
        } | undefined;
        users_default?: number | undefined;
        notifications?: {
            room: number;
        } | undefined;
    } | {
        body: string;
        msgtype: string;
        "m.relates_to"?: {
            event_id: string;
            rel_type: string;
        } | undefined;
    } | undefined;
    user_id?: string | undefined;
} & (({
    type: string;
    content: {
        body: string;
        msgtype: string;
        "m.relates_to"?: {
            event_id: string;
            rel_type: string;
        } | undefined;
    };
} | {
    type: string;
    content: unknown;
} | {
    type: "m.room.message";
    content: {
        msgType: "m.text";
        body: string;
        format?: string | undefined;
        formatted_body?: string | undefined;
    } | {
        msgType: "m.emote";
        body: string;
        format?: string | undefined;
        formatted_body?: string | undefined;
    } | {
        msgType: "m.notice";
        body: string;
        format?: string | undefined;
        formatted_body?: string | undefined;
    } | {
        msgType: "m.image";
        body: string;
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
    } | {
        msgType: "m.file";
        body: string;
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
    } | {
        msgType: "m.audio";
        body: string;
        info?: {
            mimetype?: string | undefined;
            size?: number | undefined;
            duration?: number | undefined;
        } | undefined;
        url?: string | undefined;
    } | {
        msgType: "m.location";
        body: string;
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
    } | {
        msgType: "m.video";
        body: string;
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
    } | {
        msgType: "m.key.verification.request";
        from_device: string;
        methods: string[];
        timestamp: number;
        transaction_id: string;
        body?: string | undefined;
        format?: string | undefined;
        formatted_body?: string | undefined;
    };
} | {
    type: "m.room.power_levels";
    content: {
        ban?: number | undefined;
        events?: {
            [x: string]: number;
        } | undefined;
        events_default?: number | undefined;
        invite?: number | undefined;
        kick?: number | undefined;
        redact?: number | undefined;
        state_default?: number | undefined;
        users?: {
            [x: string]: number;
        } | undefined;
        users_default?: number | undefined;
        notifications?: {
            room: number;
        } | undefined;
    };
}) & {
    unsigned?: {
        transaction_id?: string | undefined;
        age?: number | undefined;
        prev_content?: {
            msgType: "m.text";
            body: string;
            format?: string | undefined;
            formatted_body?: string | undefined;
        } | {
            msgType: "m.emote";
            body: string;
            format?: string | undefined;
            formatted_body?: string | undefined;
        } | {
            msgType: "m.notice";
            body: string;
            format?: string | undefined;
            formatted_body?: string | undefined;
        } | {
            msgType: "m.image";
            body: string;
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
        } | {
            msgType: "m.file";
            body: string;
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
        } | {
            msgType: "m.audio";
            body: string;
            info?: {
                mimetype?: string | undefined;
                size?: number | undefined;
                duration?: number | undefined;
            } | undefined;
            url?: string | undefined;
        } | {
            msgType: "m.location";
            body: string;
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
        } | {
            msgType: "m.video";
            body: string;
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
        } | {
            msgType: "m.key.verification.request";
            from_device: string;
            methods: string[];
            timestamp: number;
            transaction_id: string;
            body?: string | undefined;
            format?: string | undefined;
            formatted_body?: string | undefined;
        } | {
            ban?: number | undefined;
            events?: {
                [x: string]: number;
            } | undefined;
            events_default?: number | undefined;
            invite?: number | undefined;
            kick?: number | undefined;
            redact?: number | undefined;
            state_default?: number | undefined;
            users?: {
                [x: string]: number;
            } | undefined;
            users_default?: number | undefined;
            notifications?: {
                room: number;
            } | undefined;
        } | {
            body: string;
            msgtype: string;
            "m.relates_to"?: {
                event_id: string;
                rel_type: string;
            } | undefined;
        } | undefined;
        redacted_because?: {
            event_id: string;
            sender: string;
            room_id: string;
            origin_server_ts: number;
            state_key?: string | undefined;
            age?: number | undefined;
            replaces_state?: string | undefined;
            prev_content?: {
                msgType: "m.text";
                body: string;
                format?: string | undefined;
                formatted_body?: string | undefined;
            } | {
                msgType: "m.emote";
                body: string;
                format?: string | undefined;
                formatted_body?: string | undefined;
            } | {
                msgType: "m.notice";
                body: string;
                format?: string | undefined;
                formatted_body?: string | undefined;
            } | {
                msgType: "m.image";
                body: string;
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
            } | {
                msgType: "m.file";
                body: string;
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
            } | {
                msgType: "m.audio";
                body: string;
                info?: {
                    mimetype?: string | undefined;
                    size?: number | undefined;
                    duration?: number | undefined;
                } | undefined;
                url?: string | undefined;
            } | {
                msgType: "m.location";
                body: string;
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
            } | {
                msgType: "m.video";
                body: string;
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
            } | {
                msgType: "m.key.verification.request";
                from_device: string;
                methods: string[];
                timestamp: number;
                transaction_id: string;
                body?: string | undefined;
                format?: string | undefined;
                formatted_body?: string | undefined;
            } | {
                ban?: number | undefined;
                events?: {
                    [x: string]: number;
                } | undefined;
                events_default?: number | undefined;
                invite?: number | undefined;
                kick?: number | undefined;
                redact?: number | undefined;
                state_default?: number | undefined;
                users?: {
                    [x: string]: number;
                } | undefined;
                users_default?: number | undefined;
                notifications?: {
                    room: number;
                } | undefined;
            } | {
                body: string;
                msgtype: string;
                "m.relates_to"?: {
                    event_id: string;
                    rel_type: string;
                } | undefined;
            } | undefined;
            user_id?: string | undefined;
        } | undefined;
        "m.relations"?: {
            [x: string]: {} | {}[];
        } | undefined;
    } | undefined;
})>;
export type ClientEventOutput = Output<typeof ClientEventSchema>;
