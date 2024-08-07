import { z } from "zod";
export declare const SpaceHierarchyRoomsChunk: z.ZodObject<{
    avatar_url: z.ZodOptional<z.ZodString>;
    canonical_alias: z.ZodOptional<z.ZodString>;
    children_state: z.ZodArray<z.ZodObject<{
        content: z.ZodObject<z.objectUtil.extendShape<{
            type: z.ZodString;
            content: z.ZodUnknown;
            sender: z.ZodString;
            room_id: z.ZodString;
            event_id: z.ZodString;
            state_key: z.ZodOptional<z.ZodString>;
            origin_server_ts: z.ZodNumber;
            age: z.ZodOptional<z.ZodNumber>;
            replaces_state: z.ZodOptional<z.ZodString>;
            prev_content: z.ZodOptional<z.ZodUnion<[z.ZodObject<{
                body: z.ZodString;
                msgtype: z.ZodString;
                "m.relates_to": z.ZodOptional<z.ZodObject<{
                    event_id: z.ZodString;
                    rel_type: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    event_id: string;
                    rel_type: string;
                }, {
                    event_id: string;
                    rel_type: string;
                }>>;
            }, "strip", z.ZodTypeAny, {
                body: string;
                msgtype: string;
                "m.relates_to"?: {
                    event_id: string;
                    rel_type: string;
                } | undefined;
            }, {
                body: string;
                msgtype: string;
                "m.relates_to"?: {
                    event_id: string;
                    rel_type: string;
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
                msgtype: "m.key.verification.request";
                from_device: string;
                methods: string[];
                timestamp: number;
                transaction_id: string;
                body?: string | undefined;
                format?: string | undefined;
                formatted_body?: string | undefined;
            }, {
                msgtype: "m.key.verification.request";
                from_device: string;
                methods: string[];
                timestamp: number;
                transaction_id: string;
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
                ban?: number | undefined;
                events?: Record<string, number> | undefined;
                events_default?: number | undefined;
                invite?: number | undefined;
                kick?: number | undefined;
                redact?: number | undefined;
                state_default?: number | undefined;
                users?: Record<string, number> | undefined;
                users_default?: number | undefined;
                notifications?: {
                    room: number;
                } | undefined;
            }, {
                ban?: number | undefined;
                events?: Record<string, number> | undefined;
                events_default?: number | undefined;
                invite?: number | undefined;
                kick?: number | undefined;
                redact?: number | undefined;
                state_default?: number | undefined;
                users?: Record<string, number> | undefined;
                users_default?: number | undefined;
                notifications?: {
                    room: number;
                } | undefined;
            }>]>>;
            user_id: z.ZodOptional<z.ZodString>;
        }, {
            unsigned: z.ZodOptional<z.ZodObject<{
                age: z.ZodOptional<z.ZodNumber>;
                transaction_id: z.ZodOptional<z.ZodString>;
                prev_content: z.ZodOptional<z.ZodUnion<[z.ZodObject<{
                    body: z.ZodString;
                    msgtype: z.ZodString;
                    "m.relates_to": z.ZodOptional<z.ZodObject<{
                        event_id: z.ZodString;
                        rel_type: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        event_id: string;
                        rel_type: string;
                    }, {
                        event_id: string;
                        rel_type: string;
                    }>>;
                }, "strip", z.ZodTypeAny, {
                    body: string;
                    msgtype: string;
                    "m.relates_to"?: {
                        event_id: string;
                        rel_type: string;
                    } | undefined;
                }, {
                    body: string;
                    msgtype: string;
                    "m.relates_to"?: {
                        event_id: string;
                        rel_type: string;
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
                    msgtype: "m.key.verification.request";
                    from_device: string;
                    methods: string[];
                    timestamp: number;
                    transaction_id: string;
                    body?: string | undefined;
                    format?: string | undefined;
                    formatted_body?: string | undefined;
                }, {
                    msgtype: "m.key.verification.request";
                    from_device: string;
                    methods: string[];
                    timestamp: number;
                    transaction_id: string;
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
                    ban?: number | undefined;
                    events?: Record<string, number> | undefined;
                    events_default?: number | undefined;
                    invite?: number | undefined;
                    kick?: number | undefined;
                    redact?: number | undefined;
                    state_default?: number | undefined;
                    users?: Record<string, number> | undefined;
                    users_default?: number | undefined;
                    notifications?: {
                        room: number;
                    } | undefined;
                }, {
                    ban?: number | undefined;
                    events?: Record<string, number> | undefined;
                    events_default?: number | undefined;
                    invite?: number | undefined;
                    kick?: number | undefined;
                    redact?: number | undefined;
                    state_default?: number | undefined;
                    users?: Record<string, number> | undefined;
                    users_default?: number | undefined;
                    notifications?: {
                        room: number;
                    } | undefined;
                }>]>>;
                "m.relations": z.ZodOptional<z.ZodUnknown>;
                redacted_because: z.ZodOptional<z.ZodObject<{
                    type: z.ZodString;
                    content: z.ZodUnknown;
                    sender: z.ZodString;
                    room_id: z.ZodString;
                    event_id: z.ZodString;
                    state_key: z.ZodOptional<z.ZodString>;
                    origin_server_ts: z.ZodNumber;
                    age: z.ZodOptional<z.ZodNumber>;
                    replaces_state: z.ZodOptional<z.ZodString>;
                    prev_content: z.ZodOptional<z.ZodUnion<[z.ZodObject<{
                        body: z.ZodString;
                        msgtype: z.ZodString;
                        "m.relates_to": z.ZodOptional<z.ZodObject<{
                            event_id: z.ZodString;
                            rel_type: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            event_id: string;
                            rel_type: string;
                        }, {
                            event_id: string;
                            rel_type: string;
                        }>>;
                    }, "strip", z.ZodTypeAny, {
                        body: string;
                        msgtype: string;
                        "m.relates_to"?: {
                            event_id: string;
                            rel_type: string;
                        } | undefined;
                    }, {
                        body: string;
                        msgtype: string;
                        "m.relates_to"?: {
                            event_id: string;
                            rel_type: string;
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
                        msgtype: "m.key.verification.request";
                        from_device: string;
                        methods: string[];
                        timestamp: number;
                        transaction_id: string;
                        body?: string | undefined;
                        format?: string | undefined;
                        formatted_body?: string | undefined;
                    }, {
                        msgtype: "m.key.verification.request";
                        from_device: string;
                        methods: string[];
                        timestamp: number;
                        transaction_id: string;
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
                        ban?: number | undefined;
                        events?: Record<string, number> | undefined;
                        events_default?: number | undefined;
                        invite?: number | undefined;
                        kick?: number | undefined;
                        redact?: number | undefined;
                        state_default?: number | undefined;
                        users?: Record<string, number> | undefined;
                        users_default?: number | undefined;
                        notifications?: {
                            room: number;
                        } | undefined;
                    }, {
                        ban?: number | undefined;
                        events?: Record<string, number> | undefined;
                        events_default?: number | undefined;
                        invite?: number | undefined;
                        kick?: number | undefined;
                        redact?: number | undefined;
                        state_default?: number | undefined;
                        users?: Record<string, number> | undefined;
                        users_default?: number | undefined;
                        notifications?: {
                            room: number;
                        } | undefined;
                    }>]>>;
                    user_id: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    type: string;
                    event_id: string;
                    room_id: string;
                    sender: string;
                    origin_server_ts: number;
                    state_key?: string | undefined;
                    content?: unknown;
                    age?: number | undefined;
                    replaces_state?: string | undefined;
                    prev_content?: {
                        body: string;
                        msgtype: string;
                        "m.relates_to"?: {
                            event_id: string;
                            rel_type: string;
                        } | undefined;
                    } | {
                        body: string;
                        msgtype: "m.text";
                        format?: string | undefined;
                        formatted_body?: string | undefined;
                    } | {
                        body: string;
                        msgtype: "m.emote";
                        format?: string | undefined;
                        formatted_body?: string | undefined;
                    } | {
                        body: string;
                        msgtype: "m.notice";
                        format?: string | undefined;
                        formatted_body?: string | undefined;
                    } | {
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
                    } | {
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
                    } | {
                        body: string;
                        msgtype: "m.audio";
                        info?: {
                            mimetype?: string | undefined;
                            size?: number | undefined;
                            duration?: number | undefined;
                        } | undefined;
                        url?: string | undefined;
                    } | {
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
                    } | {
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
                    } | {
                        msgtype: "m.key.verification.request";
                        from_device: string;
                        methods: string[];
                        timestamp: number;
                        transaction_id: string;
                        body?: string | undefined;
                        format?: string | undefined;
                        formatted_body?: string | undefined;
                    } | {
                        msgtype: string;
                    } | {
                        ban?: number | undefined;
                        events?: Record<string, number> | undefined;
                        events_default?: number | undefined;
                        invite?: number | undefined;
                        kick?: number | undefined;
                        redact?: number | undefined;
                        state_default?: number | undefined;
                        users?: Record<string, number> | undefined;
                        users_default?: number | undefined;
                        notifications?: {
                            room: number;
                        } | undefined;
                    } | undefined;
                    user_id?: string | undefined;
                }, {
                    type: string;
                    event_id: string;
                    room_id: string;
                    sender: string;
                    origin_server_ts: number;
                    state_key?: string | undefined;
                    content?: unknown;
                    age?: number | undefined;
                    replaces_state?: string | undefined;
                    prev_content?: {
                        body: string;
                        msgtype: string;
                        "m.relates_to"?: {
                            event_id: string;
                            rel_type: string;
                        } | undefined;
                    } | {
                        body: string;
                        msgtype: "m.text";
                        format?: string | undefined;
                        formatted_body?: string | undefined;
                    } | {
                        body: string;
                        msgtype: "m.emote";
                        format?: string | undefined;
                        formatted_body?: string | undefined;
                    } | {
                        body: string;
                        msgtype: "m.notice";
                        format?: string | undefined;
                        formatted_body?: string | undefined;
                    } | {
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
                    } | {
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
                    } | {
                        body: string;
                        msgtype: "m.audio";
                        info?: {
                            mimetype?: string | undefined;
                            size?: number | undefined;
                            duration?: number | undefined;
                        } | undefined;
                        url?: string | undefined;
                    } | {
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
                    } | {
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
                    } | {
                        msgtype: "m.key.verification.request";
                        from_device: string;
                        methods: string[];
                        timestamp: number;
                        transaction_id: string;
                        body?: string | undefined;
                        format?: string | undefined;
                        formatted_body?: string | undefined;
                    } | {
                        msgtype: string;
                    } | {
                        ban?: number | undefined;
                        events?: Record<string, number> | undefined;
                        events_default?: number | undefined;
                        invite?: number | undefined;
                        kick?: number | undefined;
                        redact?: number | undefined;
                        state_default?: number | undefined;
                        users?: Record<string, number> | undefined;
                        users_default?: number | undefined;
                        notifications?: {
                            room: number;
                        } | undefined;
                    } | undefined;
                    user_id?: string | undefined;
                }>>;
            }, "strip", z.ZodTypeAny, {
                transaction_id?: string | undefined;
                age?: number | undefined;
                prev_content?: {
                    body: string;
                    msgtype: string;
                    "m.relates_to"?: {
                        event_id: string;
                        rel_type: string;
                    } | undefined;
                } | {
                    body: string;
                    msgtype: "m.text";
                    format?: string | undefined;
                    formatted_body?: string | undefined;
                } | {
                    body: string;
                    msgtype: "m.emote";
                    format?: string | undefined;
                    formatted_body?: string | undefined;
                } | {
                    body: string;
                    msgtype: "m.notice";
                    format?: string | undefined;
                    formatted_body?: string | undefined;
                } | {
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
                } | {
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
                } | {
                    body: string;
                    msgtype: "m.audio";
                    info?: {
                        mimetype?: string | undefined;
                        size?: number | undefined;
                        duration?: number | undefined;
                    } | undefined;
                    url?: string | undefined;
                } | {
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
                } | {
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
                } | {
                    msgtype: "m.key.verification.request";
                    from_device: string;
                    methods: string[];
                    timestamp: number;
                    transaction_id: string;
                    body?: string | undefined;
                    format?: string | undefined;
                    formatted_body?: string | undefined;
                } | {
                    msgtype: string;
                } | {
                    ban?: number | undefined;
                    events?: Record<string, number> | undefined;
                    events_default?: number | undefined;
                    invite?: number | undefined;
                    kick?: number | undefined;
                    redact?: number | undefined;
                    state_default?: number | undefined;
                    users?: Record<string, number> | undefined;
                    users_default?: number | undefined;
                    notifications?: {
                        room: number;
                    } | undefined;
                } | undefined;
                "m.relations"?: unknown;
                redacted_because?: {
                    type: string;
                    event_id: string;
                    room_id: string;
                    sender: string;
                    origin_server_ts: number;
                    state_key?: string | undefined;
                    content?: unknown;
                    age?: number | undefined;
                    replaces_state?: string | undefined;
                    prev_content?: {
                        body: string;
                        msgtype: string;
                        "m.relates_to"?: {
                            event_id: string;
                            rel_type: string;
                        } | undefined;
                    } | {
                        body: string;
                        msgtype: "m.text";
                        format?: string | undefined;
                        formatted_body?: string | undefined;
                    } | {
                        body: string;
                        msgtype: "m.emote";
                        format?: string | undefined;
                        formatted_body?: string | undefined;
                    } | {
                        body: string;
                        msgtype: "m.notice";
                        format?: string | undefined;
                        formatted_body?: string | undefined;
                    } | {
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
                    } | {
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
                    } | {
                        body: string;
                        msgtype: "m.audio";
                        info?: {
                            mimetype?: string | undefined;
                            size?: number | undefined;
                            duration?: number | undefined;
                        } | undefined;
                        url?: string | undefined;
                    } | {
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
                    } | {
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
                    } | {
                        msgtype: "m.key.verification.request";
                        from_device: string;
                        methods: string[];
                        timestamp: number;
                        transaction_id: string;
                        body?: string | undefined;
                        format?: string | undefined;
                        formatted_body?: string | undefined;
                    } | {
                        msgtype: string;
                    } | {
                        ban?: number | undefined;
                        events?: Record<string, number> | undefined;
                        events_default?: number | undefined;
                        invite?: number | undefined;
                        kick?: number | undefined;
                        redact?: number | undefined;
                        state_default?: number | undefined;
                        users?: Record<string, number> | undefined;
                        users_default?: number | undefined;
                        notifications?: {
                            room: number;
                        } | undefined;
                    } | undefined;
                    user_id?: string | undefined;
                } | undefined;
            }, {
                transaction_id?: string | undefined;
                age?: number | undefined;
                prev_content?: {
                    body: string;
                    msgtype: string;
                    "m.relates_to"?: {
                        event_id: string;
                        rel_type: string;
                    } | undefined;
                } | {
                    body: string;
                    msgtype: "m.text";
                    format?: string | undefined;
                    formatted_body?: string | undefined;
                } | {
                    body: string;
                    msgtype: "m.emote";
                    format?: string | undefined;
                    formatted_body?: string | undefined;
                } | {
                    body: string;
                    msgtype: "m.notice";
                    format?: string | undefined;
                    formatted_body?: string | undefined;
                } | {
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
                } | {
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
                } | {
                    body: string;
                    msgtype: "m.audio";
                    info?: {
                        mimetype?: string | undefined;
                        size?: number | undefined;
                        duration?: number | undefined;
                    } | undefined;
                    url?: string | undefined;
                } | {
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
                } | {
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
                } | {
                    msgtype: "m.key.verification.request";
                    from_device: string;
                    methods: string[];
                    timestamp: number;
                    transaction_id: string;
                    body?: string | undefined;
                    format?: string | undefined;
                    formatted_body?: string | undefined;
                } | {
                    msgtype: string;
                } | {
                    ban?: number | undefined;
                    events?: Record<string, number> | undefined;
                    events_default?: number | undefined;
                    invite?: number | undefined;
                    kick?: number | undefined;
                    redact?: number | undefined;
                    state_default?: number | undefined;
                    users?: Record<string, number> | undefined;
                    users_default?: number | undefined;
                    notifications?: {
                        room: number;
                    } | undefined;
                } | undefined;
                "m.relations"?: unknown;
                redacted_because?: {
                    type: string;
                    event_id: string;
                    room_id: string;
                    sender: string;
                    origin_server_ts: number;
                    state_key?: string | undefined;
                    content?: unknown;
                    age?: number | undefined;
                    replaces_state?: string | undefined;
                    prev_content?: {
                        body: string;
                        msgtype: string;
                        "m.relates_to"?: {
                            event_id: string;
                            rel_type: string;
                        } | undefined;
                    } | {
                        body: string;
                        msgtype: "m.text";
                        format?: string | undefined;
                        formatted_body?: string | undefined;
                    } | {
                        body: string;
                        msgtype: "m.emote";
                        format?: string | undefined;
                        formatted_body?: string | undefined;
                    } | {
                        body: string;
                        msgtype: "m.notice";
                        format?: string | undefined;
                        formatted_body?: string | undefined;
                    } | {
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
                    } | {
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
                    } | {
                        body: string;
                        msgtype: "m.audio";
                        info?: {
                            mimetype?: string | undefined;
                            size?: number | undefined;
                            duration?: number | undefined;
                        } | undefined;
                        url?: string | undefined;
                    } | {
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
                    } | {
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
                    } | {
                        msgtype: "m.key.verification.request";
                        from_device: string;
                        methods: string[];
                        timestamp: number;
                        transaction_id: string;
                        body?: string | undefined;
                        format?: string | undefined;
                        formatted_body?: string | undefined;
                    } | {
                        msgtype: string;
                    } | {
                        ban?: number | undefined;
                        events?: Record<string, number> | undefined;
                        events_default?: number | undefined;
                        invite?: number | undefined;
                        kick?: number | undefined;
                        redact?: number | undefined;
                        state_default?: number | undefined;
                        users?: Record<string, number> | undefined;
                        users_default?: number | undefined;
                        notifications?: {
                            room: number;
                        } | undefined;
                    } | undefined;
                    user_id?: string | undefined;
                } | undefined;
            }>>;
        }>, "strip", z.ZodTypeAny, {
            type: string;
            event_id: string;
            room_id: string;
            sender: string;
            origin_server_ts: number;
            state_key?: string | undefined;
            content?: unknown;
            age?: number | undefined;
            replaces_state?: string | undefined;
            prev_content?: {
                body: string;
                msgtype: string;
                "m.relates_to"?: {
                    event_id: string;
                    rel_type: string;
                } | undefined;
            } | {
                body: string;
                msgtype: "m.text";
                format?: string | undefined;
                formatted_body?: string | undefined;
            } | {
                body: string;
                msgtype: "m.emote";
                format?: string | undefined;
                formatted_body?: string | undefined;
            } | {
                body: string;
                msgtype: "m.notice";
                format?: string | undefined;
                formatted_body?: string | undefined;
            } | {
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
            } | {
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
            } | {
                body: string;
                msgtype: "m.audio";
                info?: {
                    mimetype?: string | undefined;
                    size?: number | undefined;
                    duration?: number | undefined;
                } | undefined;
                url?: string | undefined;
            } | {
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
            } | {
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
            } | {
                msgtype: "m.key.verification.request";
                from_device: string;
                methods: string[];
                timestamp: number;
                transaction_id: string;
                body?: string | undefined;
                format?: string | undefined;
                formatted_body?: string | undefined;
            } | {
                msgtype: string;
            } | {
                ban?: number | undefined;
                events?: Record<string, number> | undefined;
                events_default?: number | undefined;
                invite?: number | undefined;
                kick?: number | undefined;
                redact?: number | undefined;
                state_default?: number | undefined;
                users?: Record<string, number> | undefined;
                users_default?: number | undefined;
                notifications?: {
                    room: number;
                } | undefined;
            } | undefined;
            user_id?: string | undefined;
            unsigned?: {
                transaction_id?: string | undefined;
                age?: number | undefined;
                prev_content?: {
                    body: string;
                    msgtype: string;
                    "m.relates_to"?: {
                        event_id: string;
                        rel_type: string;
                    } | undefined;
                } | {
                    body: string;
                    msgtype: "m.text";
                    format?: string | undefined;
                    formatted_body?: string | undefined;
                } | {
                    body: string;
                    msgtype: "m.emote";
                    format?: string | undefined;
                    formatted_body?: string | undefined;
                } | {
                    body: string;
                    msgtype: "m.notice";
                    format?: string | undefined;
                    formatted_body?: string | undefined;
                } | {
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
                } | {
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
                } | {
                    body: string;
                    msgtype: "m.audio";
                    info?: {
                        mimetype?: string | undefined;
                        size?: number | undefined;
                        duration?: number | undefined;
                    } | undefined;
                    url?: string | undefined;
                } | {
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
                } | {
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
                } | {
                    msgtype: "m.key.verification.request";
                    from_device: string;
                    methods: string[];
                    timestamp: number;
                    transaction_id: string;
                    body?: string | undefined;
                    format?: string | undefined;
                    formatted_body?: string | undefined;
                } | {
                    msgtype: string;
                } | {
                    ban?: number | undefined;
                    events?: Record<string, number> | undefined;
                    events_default?: number | undefined;
                    invite?: number | undefined;
                    kick?: number | undefined;
                    redact?: number | undefined;
                    state_default?: number | undefined;
                    users?: Record<string, number> | undefined;
                    users_default?: number | undefined;
                    notifications?: {
                        room: number;
                    } | undefined;
                } | undefined;
                "m.relations"?: unknown;
                redacted_because?: {
                    type: string;
                    event_id: string;
                    room_id: string;
                    sender: string;
                    origin_server_ts: number;
                    state_key?: string | undefined;
                    content?: unknown;
                    age?: number | undefined;
                    replaces_state?: string | undefined;
                    prev_content?: {
                        body: string;
                        msgtype: string;
                        "m.relates_to"?: {
                            event_id: string;
                            rel_type: string;
                        } | undefined;
                    } | {
                        body: string;
                        msgtype: "m.text";
                        format?: string | undefined;
                        formatted_body?: string | undefined;
                    } | {
                        body: string;
                        msgtype: "m.emote";
                        format?: string | undefined;
                        formatted_body?: string | undefined;
                    } | {
                        body: string;
                        msgtype: "m.notice";
                        format?: string | undefined;
                        formatted_body?: string | undefined;
                    } | {
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
                    } | {
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
                    } | {
                        body: string;
                        msgtype: "m.audio";
                        info?: {
                            mimetype?: string | undefined;
                            size?: number | undefined;
                            duration?: number | undefined;
                        } | undefined;
                        url?: string | undefined;
                    } | {
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
                    } | {
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
                    } | {
                        msgtype: "m.key.verification.request";
                        from_device: string;
                        methods: string[];
                        timestamp: number;
                        transaction_id: string;
                        body?: string | undefined;
                        format?: string | undefined;
                        formatted_body?: string | undefined;
                    } | {
                        msgtype: string;
                    } | {
                        ban?: number | undefined;
                        events?: Record<string, number> | undefined;
                        events_default?: number | undefined;
                        invite?: number | undefined;
                        kick?: number | undefined;
                        redact?: number | undefined;
                        state_default?: number | undefined;
                        users?: Record<string, number> | undefined;
                        users_default?: number | undefined;
                        notifications?: {
                            room: number;
                        } | undefined;
                    } | undefined;
                    user_id?: string | undefined;
                } | undefined;
            } | undefined;
        }, {
            type: string;
            event_id: string;
            room_id: string;
            sender: string;
            origin_server_ts: number;
            state_key?: string | undefined;
            content?: unknown;
            age?: number | undefined;
            replaces_state?: string | undefined;
            prev_content?: {
                body: string;
                msgtype: string;
                "m.relates_to"?: {
                    event_id: string;
                    rel_type: string;
                } | undefined;
            } | {
                body: string;
                msgtype: "m.text";
                format?: string | undefined;
                formatted_body?: string | undefined;
            } | {
                body: string;
                msgtype: "m.emote";
                format?: string | undefined;
                formatted_body?: string | undefined;
            } | {
                body: string;
                msgtype: "m.notice";
                format?: string | undefined;
                formatted_body?: string | undefined;
            } | {
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
            } | {
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
            } | {
                body: string;
                msgtype: "m.audio";
                info?: {
                    mimetype?: string | undefined;
                    size?: number | undefined;
                    duration?: number | undefined;
                } | undefined;
                url?: string | undefined;
            } | {
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
            } | {
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
            } | {
                msgtype: "m.key.verification.request";
                from_device: string;
                methods: string[];
                timestamp: number;
                transaction_id: string;
                body?: string | undefined;
                format?: string | undefined;
                formatted_body?: string | undefined;
            } | {
                msgtype: string;
            } | {
                ban?: number | undefined;
                events?: Record<string, number> | undefined;
                events_default?: number | undefined;
                invite?: number | undefined;
                kick?: number | undefined;
                redact?: number | undefined;
                state_default?: number | undefined;
                users?: Record<string, number> | undefined;
                users_default?: number | undefined;
                notifications?: {
                    room: number;
                } | undefined;
            } | undefined;
            user_id?: string | undefined;
            unsigned?: {
                transaction_id?: string | undefined;
                age?: number | undefined;
                prev_content?: {
                    body: string;
                    msgtype: string;
                    "m.relates_to"?: {
                        event_id: string;
                        rel_type: string;
                    } | undefined;
                } | {
                    body: string;
                    msgtype: "m.text";
                    format?: string | undefined;
                    formatted_body?: string | undefined;
                } | {
                    body: string;
                    msgtype: "m.emote";
                    format?: string | undefined;
                    formatted_body?: string | undefined;
                } | {
                    body: string;
                    msgtype: "m.notice";
                    format?: string | undefined;
                    formatted_body?: string | undefined;
                } | {
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
                } | {
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
                } | {
                    body: string;
                    msgtype: "m.audio";
                    info?: {
                        mimetype?: string | undefined;
                        size?: number | undefined;
                        duration?: number | undefined;
                    } | undefined;
                    url?: string | undefined;
                } | {
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
                } | {
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
                } | {
                    msgtype: "m.key.verification.request";
                    from_device: string;
                    methods: string[];
                    timestamp: number;
                    transaction_id: string;
                    body?: string | undefined;
                    format?: string | undefined;
                    formatted_body?: string | undefined;
                } | {
                    msgtype: string;
                } | {
                    ban?: number | undefined;
                    events?: Record<string, number> | undefined;
                    events_default?: number | undefined;
                    invite?: number | undefined;
                    kick?: number | undefined;
                    redact?: number | undefined;
                    state_default?: number | undefined;
                    users?: Record<string, number> | undefined;
                    users_default?: number | undefined;
                    notifications?: {
                        room: number;
                    } | undefined;
                } | undefined;
                "m.relations"?: unknown;
                redacted_because?: {
                    type: string;
                    event_id: string;
                    room_id: string;
                    sender: string;
                    origin_server_ts: number;
                    state_key?: string | undefined;
                    content?: unknown;
                    age?: number | undefined;
                    replaces_state?: string | undefined;
                    prev_content?: {
                        body: string;
                        msgtype: string;
                        "m.relates_to"?: {
                            event_id: string;
                            rel_type: string;
                        } | undefined;
                    } | {
                        body: string;
                        msgtype: "m.text";
                        format?: string | undefined;
                        formatted_body?: string | undefined;
                    } | {
                        body: string;
                        msgtype: "m.emote";
                        format?: string | undefined;
                        formatted_body?: string | undefined;
                    } | {
                        body: string;
                        msgtype: "m.notice";
                        format?: string | undefined;
                        formatted_body?: string | undefined;
                    } | {
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
                    } | {
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
                    } | {
                        body: string;
                        msgtype: "m.audio";
                        info?: {
                            mimetype?: string | undefined;
                            size?: number | undefined;
                            duration?: number | undefined;
                        } | undefined;
                        url?: string | undefined;
                    } | {
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
                    } | {
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
                    } | {
                        msgtype: "m.key.verification.request";
                        from_device: string;
                        methods: string[];
                        timestamp: number;
                        transaction_id: string;
                        body?: string | undefined;
                        format?: string | undefined;
                        formatted_body?: string | undefined;
                    } | {
                        msgtype: string;
                    } | {
                        ban?: number | undefined;
                        events?: Record<string, number> | undefined;
                        events_default?: number | undefined;
                        invite?: number | undefined;
                        kick?: number | undefined;
                        redact?: number | undefined;
                        state_default?: number | undefined;
                        users?: Record<string, number> | undefined;
                        users_default?: number | undefined;
                        notifications?: {
                            room: number;
                        } | undefined;
                    } | undefined;
                    user_id?: string | undefined;
                } | undefined;
            } | undefined;
        }>;
        sender: z.ZodString;
        origin_server_ts: z.ZodNumber;
        state_key: z.ZodString;
        type: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        type: string;
        state_key: string;
        content: {
            type: string;
            event_id: string;
            room_id: string;
            sender: string;
            origin_server_ts: number;
            state_key?: string | undefined;
            content?: unknown;
            age?: number | undefined;
            replaces_state?: string | undefined;
            prev_content?: {
                body: string;
                msgtype: string;
                "m.relates_to"?: {
                    event_id: string;
                    rel_type: string;
                } | undefined;
            } | {
                body: string;
                msgtype: "m.text";
                format?: string | undefined;
                formatted_body?: string | undefined;
            } | {
                body: string;
                msgtype: "m.emote";
                format?: string | undefined;
                formatted_body?: string | undefined;
            } | {
                body: string;
                msgtype: "m.notice";
                format?: string | undefined;
                formatted_body?: string | undefined;
            } | {
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
            } | {
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
            } | {
                body: string;
                msgtype: "m.audio";
                info?: {
                    mimetype?: string | undefined;
                    size?: number | undefined;
                    duration?: number | undefined;
                } | undefined;
                url?: string | undefined;
            } | {
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
            } | {
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
            } | {
                msgtype: "m.key.verification.request";
                from_device: string;
                methods: string[];
                timestamp: number;
                transaction_id: string;
                body?: string | undefined;
                format?: string | undefined;
                formatted_body?: string | undefined;
            } | {
                msgtype: string;
            } | {
                ban?: number | undefined;
                events?: Record<string, number> | undefined;
                events_default?: number | undefined;
                invite?: number | undefined;
                kick?: number | undefined;
                redact?: number | undefined;
                state_default?: number | undefined;
                users?: Record<string, number> | undefined;
                users_default?: number | undefined;
                notifications?: {
                    room: number;
                } | undefined;
            } | undefined;
            user_id?: string | undefined;
            unsigned?: {
                transaction_id?: string | undefined;
                age?: number | undefined;
                prev_content?: {
                    body: string;
                    msgtype: string;
                    "m.relates_to"?: {
                        event_id: string;
                        rel_type: string;
                    } | undefined;
                } | {
                    body: string;
                    msgtype: "m.text";
                    format?: string | undefined;
                    formatted_body?: string | undefined;
                } | {
                    body: string;
                    msgtype: "m.emote";
                    format?: string | undefined;
                    formatted_body?: string | undefined;
                } | {
                    body: string;
                    msgtype: "m.notice";
                    format?: string | undefined;
                    formatted_body?: string | undefined;
                } | {
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
                } | {
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
                } | {
                    body: string;
                    msgtype: "m.audio";
                    info?: {
                        mimetype?: string | undefined;
                        size?: number | undefined;
                        duration?: number | undefined;
                    } | undefined;
                    url?: string | undefined;
                } | {
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
                } | {
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
                } | {
                    msgtype: "m.key.verification.request";
                    from_device: string;
                    methods: string[];
                    timestamp: number;
                    transaction_id: string;
                    body?: string | undefined;
                    format?: string | undefined;
                    formatted_body?: string | undefined;
                } | {
                    msgtype: string;
                } | {
                    ban?: number | undefined;
                    events?: Record<string, number> | undefined;
                    events_default?: number | undefined;
                    invite?: number | undefined;
                    kick?: number | undefined;
                    redact?: number | undefined;
                    state_default?: number | undefined;
                    users?: Record<string, number> | undefined;
                    users_default?: number | undefined;
                    notifications?: {
                        room: number;
                    } | undefined;
                } | undefined;
                "m.relations"?: unknown;
                redacted_because?: {
                    type: string;
                    event_id: string;
                    room_id: string;
                    sender: string;
                    origin_server_ts: number;
                    state_key?: string | undefined;
                    content?: unknown;
                    age?: number | undefined;
                    replaces_state?: string | undefined;
                    prev_content?: {
                        body: string;
                        msgtype: string;
                        "m.relates_to"?: {
                            event_id: string;
                            rel_type: string;
                        } | undefined;
                    } | {
                        body: string;
                        msgtype: "m.text";
                        format?: string | undefined;
                        formatted_body?: string | undefined;
                    } | {
                        body: string;
                        msgtype: "m.emote";
                        format?: string | undefined;
                        formatted_body?: string | undefined;
                    } | {
                        body: string;
                        msgtype: "m.notice";
                        format?: string | undefined;
                        formatted_body?: string | undefined;
                    } | {
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
                    } | {
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
                    } | {
                        body: string;
                        msgtype: "m.audio";
                        info?: {
                            mimetype?: string | undefined;
                            size?: number | undefined;
                            duration?: number | undefined;
                        } | undefined;
                        url?: string | undefined;
                    } | {
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
                    } | {
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
                    } | {
                        msgtype: "m.key.verification.request";
                        from_device: string;
                        methods: string[];
                        timestamp: number;
                        transaction_id: string;
                        body?: string | undefined;
                        format?: string | undefined;
                        formatted_body?: string | undefined;
                    } | {
                        msgtype: string;
                    } | {
                        ban?: number | undefined;
                        events?: Record<string, number> | undefined;
                        events_default?: number | undefined;
                        invite?: number | undefined;
                        kick?: number | undefined;
                        redact?: number | undefined;
                        state_default?: number | undefined;
                        users?: Record<string, number> | undefined;
                        users_default?: number | undefined;
                        notifications?: {
                            room: number;
                        } | undefined;
                    } | undefined;
                    user_id?: string | undefined;
                } | undefined;
            } | undefined;
        };
        sender: string;
        origin_server_ts: number;
    }, {
        type: string;
        state_key: string;
        content: {
            type: string;
            event_id: string;
            room_id: string;
            sender: string;
            origin_server_ts: number;
            state_key?: string | undefined;
            content?: unknown;
            age?: number | undefined;
            replaces_state?: string | undefined;
            prev_content?: {
                body: string;
                msgtype: string;
                "m.relates_to"?: {
                    event_id: string;
                    rel_type: string;
                } | undefined;
            } | {
                body: string;
                msgtype: "m.text";
                format?: string | undefined;
                formatted_body?: string | undefined;
            } | {
                body: string;
                msgtype: "m.emote";
                format?: string | undefined;
                formatted_body?: string | undefined;
            } | {
                body: string;
                msgtype: "m.notice";
                format?: string | undefined;
                formatted_body?: string | undefined;
            } | {
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
            } | {
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
            } | {
                body: string;
                msgtype: "m.audio";
                info?: {
                    mimetype?: string | undefined;
                    size?: number | undefined;
                    duration?: number | undefined;
                } | undefined;
                url?: string | undefined;
            } | {
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
            } | {
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
            } | {
                msgtype: "m.key.verification.request";
                from_device: string;
                methods: string[];
                timestamp: number;
                transaction_id: string;
                body?: string | undefined;
                format?: string | undefined;
                formatted_body?: string | undefined;
            } | {
                msgtype: string;
            } | {
                ban?: number | undefined;
                events?: Record<string, number> | undefined;
                events_default?: number | undefined;
                invite?: number | undefined;
                kick?: number | undefined;
                redact?: number | undefined;
                state_default?: number | undefined;
                users?: Record<string, number> | undefined;
                users_default?: number | undefined;
                notifications?: {
                    room: number;
                } | undefined;
            } | undefined;
            user_id?: string | undefined;
            unsigned?: {
                transaction_id?: string | undefined;
                age?: number | undefined;
                prev_content?: {
                    body: string;
                    msgtype: string;
                    "m.relates_to"?: {
                        event_id: string;
                        rel_type: string;
                    } | undefined;
                } | {
                    body: string;
                    msgtype: "m.text";
                    format?: string | undefined;
                    formatted_body?: string | undefined;
                } | {
                    body: string;
                    msgtype: "m.emote";
                    format?: string | undefined;
                    formatted_body?: string | undefined;
                } | {
                    body: string;
                    msgtype: "m.notice";
                    format?: string | undefined;
                    formatted_body?: string | undefined;
                } | {
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
                } | {
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
                } | {
                    body: string;
                    msgtype: "m.audio";
                    info?: {
                        mimetype?: string | undefined;
                        size?: number | undefined;
                        duration?: number | undefined;
                    } | undefined;
                    url?: string | undefined;
                } | {
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
                } | {
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
                } | {
                    msgtype: "m.key.verification.request";
                    from_device: string;
                    methods: string[];
                    timestamp: number;
                    transaction_id: string;
                    body?: string | undefined;
                    format?: string | undefined;
                    formatted_body?: string | undefined;
                } | {
                    msgtype: string;
                } | {
                    ban?: number | undefined;
                    events?: Record<string, number> | undefined;
                    events_default?: number | undefined;
                    invite?: number | undefined;
                    kick?: number | undefined;
                    redact?: number | undefined;
                    state_default?: number | undefined;
                    users?: Record<string, number> | undefined;
                    users_default?: number | undefined;
                    notifications?: {
                        room: number;
                    } | undefined;
                } | undefined;
                "m.relations"?: unknown;
                redacted_because?: {
                    type: string;
                    event_id: string;
                    room_id: string;
                    sender: string;
                    origin_server_ts: number;
                    state_key?: string | undefined;
                    content?: unknown;
                    age?: number | undefined;
                    replaces_state?: string | undefined;
                    prev_content?: {
                        body: string;
                        msgtype: string;
                        "m.relates_to"?: {
                            event_id: string;
                            rel_type: string;
                        } | undefined;
                    } | {
                        body: string;
                        msgtype: "m.text";
                        format?: string | undefined;
                        formatted_body?: string | undefined;
                    } | {
                        body: string;
                        msgtype: "m.emote";
                        format?: string | undefined;
                        formatted_body?: string | undefined;
                    } | {
                        body: string;
                        msgtype: "m.notice";
                        format?: string | undefined;
                        formatted_body?: string | undefined;
                    } | {
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
                    } | {
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
                    } | {
                        body: string;
                        msgtype: "m.audio";
                        info?: {
                            mimetype?: string | undefined;
                            size?: number | undefined;
                            duration?: number | undefined;
                        } | undefined;
                        url?: string | undefined;
                    } | {
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
                    } | {
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
                    } | {
                        msgtype: "m.key.verification.request";
                        from_device: string;
                        methods: string[];
                        timestamp: number;
                        transaction_id: string;
                        body?: string | undefined;
                        format?: string | undefined;
                        formatted_body?: string | undefined;
                    } | {
                        msgtype: string;
                    } | {
                        ban?: number | undefined;
                        events?: Record<string, number> | undefined;
                        events_default?: number | undefined;
                        invite?: number | undefined;
                        kick?: number | undefined;
                        redact?: number | undefined;
                        state_default?: number | undefined;
                        users?: Record<string, number> | undefined;
                        users_default?: number | undefined;
                        notifications?: {
                            room: number;
                        } | undefined;
                    } | undefined;
                    user_id?: string | undefined;
                } | undefined;
            } | undefined;
        };
        sender: string;
        origin_server_ts: number;
    }>, "many">;
    guest_can_join: z.ZodBoolean;
    join_rule: z.ZodOptional<z.ZodString>;
    name: z.ZodOptional<z.ZodString>;
    num_joined_members: z.ZodNumber;
    room_id: z.ZodString;
    room_type: z.ZodOptional<z.ZodString>;
    topic: z.ZodOptional<z.ZodString>;
    world_readable: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    room_id: string;
    children_state: {
        type: string;
        state_key: string;
        content: {
            type: string;
            event_id: string;
            room_id: string;
            sender: string;
            origin_server_ts: number;
            state_key?: string | undefined;
            content?: unknown;
            age?: number | undefined;
            replaces_state?: string | undefined;
            prev_content?: {
                body: string;
                msgtype: string;
                "m.relates_to"?: {
                    event_id: string;
                    rel_type: string;
                } | undefined;
            } | {
                body: string;
                msgtype: "m.text";
                format?: string | undefined;
                formatted_body?: string | undefined;
            } | {
                body: string;
                msgtype: "m.emote";
                format?: string | undefined;
                formatted_body?: string | undefined;
            } | {
                body: string;
                msgtype: "m.notice";
                format?: string | undefined;
                formatted_body?: string | undefined;
            } | {
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
            } | {
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
            } | {
                body: string;
                msgtype: "m.audio";
                info?: {
                    mimetype?: string | undefined;
                    size?: number | undefined;
                    duration?: number | undefined;
                } | undefined;
                url?: string | undefined;
            } | {
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
            } | {
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
            } | {
                msgtype: "m.key.verification.request";
                from_device: string;
                methods: string[];
                timestamp: number;
                transaction_id: string;
                body?: string | undefined;
                format?: string | undefined;
                formatted_body?: string | undefined;
            } | {
                msgtype: string;
            } | {
                ban?: number | undefined;
                events?: Record<string, number> | undefined;
                events_default?: number | undefined;
                invite?: number | undefined;
                kick?: number | undefined;
                redact?: number | undefined;
                state_default?: number | undefined;
                users?: Record<string, number> | undefined;
                users_default?: number | undefined;
                notifications?: {
                    room: number;
                } | undefined;
            } | undefined;
            user_id?: string | undefined;
            unsigned?: {
                transaction_id?: string | undefined;
                age?: number | undefined;
                prev_content?: {
                    body: string;
                    msgtype: string;
                    "m.relates_to"?: {
                        event_id: string;
                        rel_type: string;
                    } | undefined;
                } | {
                    body: string;
                    msgtype: "m.text";
                    format?: string | undefined;
                    formatted_body?: string | undefined;
                } | {
                    body: string;
                    msgtype: "m.emote";
                    format?: string | undefined;
                    formatted_body?: string | undefined;
                } | {
                    body: string;
                    msgtype: "m.notice";
                    format?: string | undefined;
                    formatted_body?: string | undefined;
                } | {
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
                } | {
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
                } | {
                    body: string;
                    msgtype: "m.audio";
                    info?: {
                        mimetype?: string | undefined;
                        size?: number | undefined;
                        duration?: number | undefined;
                    } | undefined;
                    url?: string | undefined;
                } | {
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
                } | {
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
                } | {
                    msgtype: "m.key.verification.request";
                    from_device: string;
                    methods: string[];
                    timestamp: number;
                    transaction_id: string;
                    body?: string | undefined;
                    format?: string | undefined;
                    formatted_body?: string | undefined;
                } | {
                    msgtype: string;
                } | {
                    ban?: number | undefined;
                    events?: Record<string, number> | undefined;
                    events_default?: number | undefined;
                    invite?: number | undefined;
                    kick?: number | undefined;
                    redact?: number | undefined;
                    state_default?: number | undefined;
                    users?: Record<string, number> | undefined;
                    users_default?: number | undefined;
                    notifications?: {
                        room: number;
                    } | undefined;
                } | undefined;
                "m.relations"?: unknown;
                redacted_because?: {
                    type: string;
                    event_id: string;
                    room_id: string;
                    sender: string;
                    origin_server_ts: number;
                    state_key?: string | undefined;
                    content?: unknown;
                    age?: number | undefined;
                    replaces_state?: string | undefined;
                    prev_content?: {
                        body: string;
                        msgtype: string;
                        "m.relates_to"?: {
                            event_id: string;
                            rel_type: string;
                        } | undefined;
                    } | {
                        body: string;
                        msgtype: "m.text";
                        format?: string | undefined;
                        formatted_body?: string | undefined;
                    } | {
                        body: string;
                        msgtype: "m.emote";
                        format?: string | undefined;
                        formatted_body?: string | undefined;
                    } | {
                        body: string;
                        msgtype: "m.notice";
                        format?: string | undefined;
                        formatted_body?: string | undefined;
                    } | {
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
                    } | {
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
                    } | {
                        body: string;
                        msgtype: "m.audio";
                        info?: {
                            mimetype?: string | undefined;
                            size?: number | undefined;
                            duration?: number | undefined;
                        } | undefined;
                        url?: string | undefined;
                    } | {
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
                    } | {
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
                    } | {
                        msgtype: "m.key.verification.request";
                        from_device: string;
                        methods: string[];
                        timestamp: number;
                        transaction_id: string;
                        body?: string | undefined;
                        format?: string | undefined;
                        formatted_body?: string | undefined;
                    } | {
                        msgtype: string;
                    } | {
                        ban?: number | undefined;
                        events?: Record<string, number> | undefined;
                        events_default?: number | undefined;
                        invite?: number | undefined;
                        kick?: number | undefined;
                        redact?: number | undefined;
                        state_default?: number | undefined;
                        users?: Record<string, number> | undefined;
                        users_default?: number | undefined;
                        notifications?: {
                            room: number;
                        } | undefined;
                    } | undefined;
                    user_id?: string | undefined;
                } | undefined;
            } | undefined;
        };
        sender: string;
        origin_server_ts: number;
    }[];
    guest_can_join: boolean;
    num_joined_members: number;
    world_readable: boolean;
    avatar_url?: string | undefined;
    join_rule?: string | undefined;
    name?: string | undefined;
    topic?: string | undefined;
    canonical_alias?: string | undefined;
    room_type?: string | undefined;
}, {
    room_id: string;
    children_state: {
        type: string;
        state_key: string;
        content: {
            type: string;
            event_id: string;
            room_id: string;
            sender: string;
            origin_server_ts: number;
            state_key?: string | undefined;
            content?: unknown;
            age?: number | undefined;
            replaces_state?: string | undefined;
            prev_content?: {
                body: string;
                msgtype: string;
                "m.relates_to"?: {
                    event_id: string;
                    rel_type: string;
                } | undefined;
            } | {
                body: string;
                msgtype: "m.text";
                format?: string | undefined;
                formatted_body?: string | undefined;
            } | {
                body: string;
                msgtype: "m.emote";
                format?: string | undefined;
                formatted_body?: string | undefined;
            } | {
                body: string;
                msgtype: "m.notice";
                format?: string | undefined;
                formatted_body?: string | undefined;
            } | {
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
            } | {
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
            } | {
                body: string;
                msgtype: "m.audio";
                info?: {
                    mimetype?: string | undefined;
                    size?: number | undefined;
                    duration?: number | undefined;
                } | undefined;
                url?: string | undefined;
            } | {
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
            } | {
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
            } | {
                msgtype: "m.key.verification.request";
                from_device: string;
                methods: string[];
                timestamp: number;
                transaction_id: string;
                body?: string | undefined;
                format?: string | undefined;
                formatted_body?: string | undefined;
            } | {
                msgtype: string;
            } | {
                ban?: number | undefined;
                events?: Record<string, number> | undefined;
                events_default?: number | undefined;
                invite?: number | undefined;
                kick?: number | undefined;
                redact?: number | undefined;
                state_default?: number | undefined;
                users?: Record<string, number> | undefined;
                users_default?: number | undefined;
                notifications?: {
                    room: number;
                } | undefined;
            } | undefined;
            user_id?: string | undefined;
            unsigned?: {
                transaction_id?: string | undefined;
                age?: number | undefined;
                prev_content?: {
                    body: string;
                    msgtype: string;
                    "m.relates_to"?: {
                        event_id: string;
                        rel_type: string;
                    } | undefined;
                } | {
                    body: string;
                    msgtype: "m.text";
                    format?: string | undefined;
                    formatted_body?: string | undefined;
                } | {
                    body: string;
                    msgtype: "m.emote";
                    format?: string | undefined;
                    formatted_body?: string | undefined;
                } | {
                    body: string;
                    msgtype: "m.notice";
                    format?: string | undefined;
                    formatted_body?: string | undefined;
                } | {
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
                } | {
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
                } | {
                    body: string;
                    msgtype: "m.audio";
                    info?: {
                        mimetype?: string | undefined;
                        size?: number | undefined;
                        duration?: number | undefined;
                    } | undefined;
                    url?: string | undefined;
                } | {
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
                } | {
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
                } | {
                    msgtype: "m.key.verification.request";
                    from_device: string;
                    methods: string[];
                    timestamp: number;
                    transaction_id: string;
                    body?: string | undefined;
                    format?: string | undefined;
                    formatted_body?: string | undefined;
                } | {
                    msgtype: string;
                } | {
                    ban?: number | undefined;
                    events?: Record<string, number> | undefined;
                    events_default?: number | undefined;
                    invite?: number | undefined;
                    kick?: number | undefined;
                    redact?: number | undefined;
                    state_default?: number | undefined;
                    users?: Record<string, number> | undefined;
                    users_default?: number | undefined;
                    notifications?: {
                        room: number;
                    } | undefined;
                } | undefined;
                "m.relations"?: unknown;
                redacted_because?: {
                    type: string;
                    event_id: string;
                    room_id: string;
                    sender: string;
                    origin_server_ts: number;
                    state_key?: string | undefined;
                    content?: unknown;
                    age?: number | undefined;
                    replaces_state?: string | undefined;
                    prev_content?: {
                        body: string;
                        msgtype: string;
                        "m.relates_to"?: {
                            event_id: string;
                            rel_type: string;
                        } | undefined;
                    } | {
                        body: string;
                        msgtype: "m.text";
                        format?: string | undefined;
                        formatted_body?: string | undefined;
                    } | {
                        body: string;
                        msgtype: "m.emote";
                        format?: string | undefined;
                        formatted_body?: string | undefined;
                    } | {
                        body: string;
                        msgtype: "m.notice";
                        format?: string | undefined;
                        formatted_body?: string | undefined;
                    } | {
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
                    } | {
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
                    } | {
                        body: string;
                        msgtype: "m.audio";
                        info?: {
                            mimetype?: string | undefined;
                            size?: number | undefined;
                            duration?: number | undefined;
                        } | undefined;
                        url?: string | undefined;
                    } | {
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
                    } | {
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
                    } | {
                        msgtype: "m.key.verification.request";
                        from_device: string;
                        methods: string[];
                        timestamp: number;
                        transaction_id: string;
                        body?: string | undefined;
                        format?: string | undefined;
                        formatted_body?: string | undefined;
                    } | {
                        msgtype: string;
                    } | {
                        ban?: number | undefined;
                        events?: Record<string, number> | undefined;
                        events_default?: number | undefined;
                        invite?: number | undefined;
                        kick?: number | undefined;
                        redact?: number | undefined;
                        state_default?: number | undefined;
                        users?: Record<string, number> | undefined;
                        users_default?: number | undefined;
                        notifications?: {
                            room: number;
                        } | undefined;
                    } | undefined;
                    user_id?: string | undefined;
                } | undefined;
            } | undefined;
        };
        sender: string;
        origin_server_ts: number;
    }[];
    guest_can_join: boolean;
    num_joined_members: number;
    world_readable: boolean;
    avatar_url?: string | undefined;
    join_rule?: string | undefined;
    name?: string | undefined;
    topic?: string | undefined;
    canonical_alias?: string | undefined;
    room_type?: string | undefined;
}>;
export type SpaceHierarchyRoomsChunk = z.infer<typeof SpaceHierarchyRoomsChunk>;
export declare const GetHierarchyResponse: z.ZodObject<{
    next_batch: z.ZodOptional<z.ZodString>;
    rooms: z.ZodArray<z.ZodObject<{
        avatar_url: z.ZodOptional<z.ZodString>;
        canonical_alias: z.ZodOptional<z.ZodString>;
        children_state: z.ZodArray<z.ZodObject<{
            content: z.ZodObject<z.objectUtil.extendShape<{
                type: z.ZodString;
                content: z.ZodUnknown;
                sender: z.ZodString;
                room_id: z.ZodString;
                event_id: z.ZodString;
                state_key: z.ZodOptional<z.ZodString>;
                origin_server_ts: z.ZodNumber;
                age: z.ZodOptional<z.ZodNumber>;
                replaces_state: z.ZodOptional<z.ZodString>;
                prev_content: z.ZodOptional<z.ZodUnion<[z.ZodObject<{
                    body: z.ZodString;
                    msgtype: z.ZodString;
                    "m.relates_to": z.ZodOptional<z.ZodObject<{
                        event_id: z.ZodString;
                        rel_type: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        event_id: string;
                        rel_type: string;
                    }, {
                        event_id: string;
                        rel_type: string;
                    }>>;
                }, "strip", z.ZodTypeAny, {
                    body: string;
                    msgtype: string;
                    "m.relates_to"?: {
                        event_id: string;
                        rel_type: string;
                    } | undefined;
                }, {
                    body: string;
                    msgtype: string;
                    "m.relates_to"?: {
                        event_id: string;
                        rel_type: string;
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
                    msgtype: "m.key.verification.request";
                    from_device: string;
                    methods: string[];
                    timestamp: number;
                    transaction_id: string;
                    body?: string | undefined;
                    format?: string | undefined;
                    formatted_body?: string | undefined;
                }, {
                    msgtype: "m.key.verification.request";
                    from_device: string;
                    methods: string[];
                    timestamp: number;
                    transaction_id: string;
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
                    ban?: number | undefined;
                    events?: Record<string, number> | undefined;
                    events_default?: number | undefined;
                    invite?: number | undefined;
                    kick?: number | undefined;
                    redact?: number | undefined;
                    state_default?: number | undefined;
                    users?: Record<string, number> | undefined;
                    users_default?: number | undefined;
                    notifications?: {
                        room: number;
                    } | undefined;
                }, {
                    ban?: number | undefined;
                    events?: Record<string, number> | undefined;
                    events_default?: number | undefined;
                    invite?: number | undefined;
                    kick?: number | undefined;
                    redact?: number | undefined;
                    state_default?: number | undefined;
                    users?: Record<string, number> | undefined;
                    users_default?: number | undefined;
                    notifications?: {
                        room: number;
                    } | undefined;
                }>]>>;
                user_id: z.ZodOptional<z.ZodString>;
            }, {
                unsigned: z.ZodOptional<z.ZodObject<{
                    age: z.ZodOptional<z.ZodNumber>;
                    transaction_id: z.ZodOptional<z.ZodString>;
                    prev_content: z.ZodOptional<z.ZodUnion<[z.ZodObject<{
                        body: z.ZodString;
                        msgtype: z.ZodString;
                        "m.relates_to": z.ZodOptional<z.ZodObject<{
                            event_id: z.ZodString;
                            rel_type: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            event_id: string;
                            rel_type: string;
                        }, {
                            event_id: string;
                            rel_type: string;
                        }>>;
                    }, "strip", z.ZodTypeAny, {
                        body: string;
                        msgtype: string;
                        "m.relates_to"?: {
                            event_id: string;
                            rel_type: string;
                        } | undefined;
                    }, {
                        body: string;
                        msgtype: string;
                        "m.relates_to"?: {
                            event_id: string;
                            rel_type: string;
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
                        msgtype: "m.key.verification.request";
                        from_device: string;
                        methods: string[];
                        timestamp: number;
                        transaction_id: string;
                        body?: string | undefined;
                        format?: string | undefined;
                        formatted_body?: string | undefined;
                    }, {
                        msgtype: "m.key.verification.request";
                        from_device: string;
                        methods: string[];
                        timestamp: number;
                        transaction_id: string;
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
                        ban?: number | undefined;
                        events?: Record<string, number> | undefined;
                        events_default?: number | undefined;
                        invite?: number | undefined;
                        kick?: number | undefined;
                        redact?: number | undefined;
                        state_default?: number | undefined;
                        users?: Record<string, number> | undefined;
                        users_default?: number | undefined;
                        notifications?: {
                            room: number;
                        } | undefined;
                    }, {
                        ban?: number | undefined;
                        events?: Record<string, number> | undefined;
                        events_default?: number | undefined;
                        invite?: number | undefined;
                        kick?: number | undefined;
                        redact?: number | undefined;
                        state_default?: number | undefined;
                        users?: Record<string, number> | undefined;
                        users_default?: number | undefined;
                        notifications?: {
                            room: number;
                        } | undefined;
                    }>]>>;
                    "m.relations": z.ZodOptional<z.ZodUnknown>;
                    redacted_because: z.ZodOptional<z.ZodObject<{
                        type: z.ZodString;
                        content: z.ZodUnknown;
                        sender: z.ZodString;
                        room_id: z.ZodString;
                        event_id: z.ZodString;
                        state_key: z.ZodOptional<z.ZodString>;
                        origin_server_ts: z.ZodNumber;
                        age: z.ZodOptional<z.ZodNumber>;
                        replaces_state: z.ZodOptional<z.ZodString>;
                        prev_content: z.ZodOptional<z.ZodUnion<[z.ZodObject<{
                            body: z.ZodString;
                            msgtype: z.ZodString;
                            "m.relates_to": z.ZodOptional<z.ZodObject<{
                                event_id: z.ZodString;
                                rel_type: z.ZodString;
                            }, "strip", z.ZodTypeAny, {
                                event_id: string;
                                rel_type: string;
                            }, {
                                event_id: string;
                                rel_type: string;
                            }>>;
                        }, "strip", z.ZodTypeAny, {
                            body: string;
                            msgtype: string;
                            "m.relates_to"?: {
                                event_id: string;
                                rel_type: string;
                            } | undefined;
                        }, {
                            body: string;
                            msgtype: string;
                            "m.relates_to"?: {
                                event_id: string;
                                rel_type: string;
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
                            msgtype: "m.key.verification.request";
                            from_device: string;
                            methods: string[];
                            timestamp: number;
                            transaction_id: string;
                            body?: string | undefined;
                            format?: string | undefined;
                            formatted_body?: string | undefined;
                        }, {
                            msgtype: "m.key.verification.request";
                            from_device: string;
                            methods: string[];
                            timestamp: number;
                            transaction_id: string;
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
                            ban?: number | undefined;
                            events?: Record<string, number> | undefined;
                            events_default?: number | undefined;
                            invite?: number | undefined;
                            kick?: number | undefined;
                            redact?: number | undefined;
                            state_default?: number | undefined;
                            users?: Record<string, number> | undefined;
                            users_default?: number | undefined;
                            notifications?: {
                                room: number;
                            } | undefined;
                        }, {
                            ban?: number | undefined;
                            events?: Record<string, number> | undefined;
                            events_default?: number | undefined;
                            invite?: number | undefined;
                            kick?: number | undefined;
                            redact?: number | undefined;
                            state_default?: number | undefined;
                            users?: Record<string, number> | undefined;
                            users_default?: number | undefined;
                            notifications?: {
                                room: number;
                            } | undefined;
                        }>]>>;
                        user_id: z.ZodOptional<z.ZodString>;
                    }, "strip", z.ZodTypeAny, {
                        type: string;
                        event_id: string;
                        room_id: string;
                        sender: string;
                        origin_server_ts: number;
                        state_key?: string | undefined;
                        content?: unknown;
                        age?: number | undefined;
                        replaces_state?: string | undefined;
                        prev_content?: {
                            body: string;
                            msgtype: string;
                            "m.relates_to"?: {
                                event_id: string;
                                rel_type: string;
                            } | undefined;
                        } | {
                            body: string;
                            msgtype: "m.text";
                            format?: string | undefined;
                            formatted_body?: string | undefined;
                        } | {
                            body: string;
                            msgtype: "m.emote";
                            format?: string | undefined;
                            formatted_body?: string | undefined;
                        } | {
                            body: string;
                            msgtype: "m.notice";
                            format?: string | undefined;
                            formatted_body?: string | undefined;
                        } | {
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
                        } | {
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
                        } | {
                            body: string;
                            msgtype: "m.audio";
                            info?: {
                                mimetype?: string | undefined;
                                size?: number | undefined;
                                duration?: number | undefined;
                            } | undefined;
                            url?: string | undefined;
                        } | {
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
                        } | {
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
                        } | {
                            msgtype: "m.key.verification.request";
                            from_device: string;
                            methods: string[];
                            timestamp: number;
                            transaction_id: string;
                            body?: string | undefined;
                            format?: string | undefined;
                            formatted_body?: string | undefined;
                        } | {
                            msgtype: string;
                        } | {
                            ban?: number | undefined;
                            events?: Record<string, number> | undefined;
                            events_default?: number | undefined;
                            invite?: number | undefined;
                            kick?: number | undefined;
                            redact?: number | undefined;
                            state_default?: number | undefined;
                            users?: Record<string, number> | undefined;
                            users_default?: number | undefined;
                            notifications?: {
                                room: number;
                            } | undefined;
                        } | undefined;
                        user_id?: string | undefined;
                    }, {
                        type: string;
                        event_id: string;
                        room_id: string;
                        sender: string;
                        origin_server_ts: number;
                        state_key?: string | undefined;
                        content?: unknown;
                        age?: number | undefined;
                        replaces_state?: string | undefined;
                        prev_content?: {
                            body: string;
                            msgtype: string;
                            "m.relates_to"?: {
                                event_id: string;
                                rel_type: string;
                            } | undefined;
                        } | {
                            body: string;
                            msgtype: "m.text";
                            format?: string | undefined;
                            formatted_body?: string | undefined;
                        } | {
                            body: string;
                            msgtype: "m.emote";
                            format?: string | undefined;
                            formatted_body?: string | undefined;
                        } | {
                            body: string;
                            msgtype: "m.notice";
                            format?: string | undefined;
                            formatted_body?: string | undefined;
                        } | {
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
                        } | {
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
                        } | {
                            body: string;
                            msgtype: "m.audio";
                            info?: {
                                mimetype?: string | undefined;
                                size?: number | undefined;
                                duration?: number | undefined;
                            } | undefined;
                            url?: string | undefined;
                        } | {
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
                        } | {
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
                        } | {
                            msgtype: "m.key.verification.request";
                            from_device: string;
                            methods: string[];
                            timestamp: number;
                            transaction_id: string;
                            body?: string | undefined;
                            format?: string | undefined;
                            formatted_body?: string | undefined;
                        } | {
                            msgtype: string;
                        } | {
                            ban?: number | undefined;
                            events?: Record<string, number> | undefined;
                            events_default?: number | undefined;
                            invite?: number | undefined;
                            kick?: number | undefined;
                            redact?: number | undefined;
                            state_default?: number | undefined;
                            users?: Record<string, number> | undefined;
                            users_default?: number | undefined;
                            notifications?: {
                                room: number;
                            } | undefined;
                        } | undefined;
                        user_id?: string | undefined;
                    }>>;
                }, "strip", z.ZodTypeAny, {
                    transaction_id?: string | undefined;
                    age?: number | undefined;
                    prev_content?: {
                        body: string;
                        msgtype: string;
                        "m.relates_to"?: {
                            event_id: string;
                            rel_type: string;
                        } | undefined;
                    } | {
                        body: string;
                        msgtype: "m.text";
                        format?: string | undefined;
                        formatted_body?: string | undefined;
                    } | {
                        body: string;
                        msgtype: "m.emote";
                        format?: string | undefined;
                        formatted_body?: string | undefined;
                    } | {
                        body: string;
                        msgtype: "m.notice";
                        format?: string | undefined;
                        formatted_body?: string | undefined;
                    } | {
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
                    } | {
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
                    } | {
                        body: string;
                        msgtype: "m.audio";
                        info?: {
                            mimetype?: string | undefined;
                            size?: number | undefined;
                            duration?: number | undefined;
                        } | undefined;
                        url?: string | undefined;
                    } | {
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
                    } | {
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
                    } | {
                        msgtype: "m.key.verification.request";
                        from_device: string;
                        methods: string[];
                        timestamp: number;
                        transaction_id: string;
                        body?: string | undefined;
                        format?: string | undefined;
                        formatted_body?: string | undefined;
                    } | {
                        msgtype: string;
                    } | {
                        ban?: number | undefined;
                        events?: Record<string, number> | undefined;
                        events_default?: number | undefined;
                        invite?: number | undefined;
                        kick?: number | undefined;
                        redact?: number | undefined;
                        state_default?: number | undefined;
                        users?: Record<string, number> | undefined;
                        users_default?: number | undefined;
                        notifications?: {
                            room: number;
                        } | undefined;
                    } | undefined;
                    "m.relations"?: unknown;
                    redacted_because?: {
                        type: string;
                        event_id: string;
                        room_id: string;
                        sender: string;
                        origin_server_ts: number;
                        state_key?: string | undefined;
                        content?: unknown;
                        age?: number | undefined;
                        replaces_state?: string | undefined;
                        prev_content?: {
                            body: string;
                            msgtype: string;
                            "m.relates_to"?: {
                                event_id: string;
                                rel_type: string;
                            } | undefined;
                        } | {
                            body: string;
                            msgtype: "m.text";
                            format?: string | undefined;
                            formatted_body?: string | undefined;
                        } | {
                            body: string;
                            msgtype: "m.emote";
                            format?: string | undefined;
                            formatted_body?: string | undefined;
                        } | {
                            body: string;
                            msgtype: "m.notice";
                            format?: string | undefined;
                            formatted_body?: string | undefined;
                        } | {
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
                        } | {
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
                        } | {
                            body: string;
                            msgtype: "m.audio";
                            info?: {
                                mimetype?: string | undefined;
                                size?: number | undefined;
                                duration?: number | undefined;
                            } | undefined;
                            url?: string | undefined;
                        } | {
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
                        } | {
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
                        } | {
                            msgtype: "m.key.verification.request";
                            from_device: string;
                            methods: string[];
                            timestamp: number;
                            transaction_id: string;
                            body?: string | undefined;
                            format?: string | undefined;
                            formatted_body?: string | undefined;
                        } | {
                            msgtype: string;
                        } | {
                            ban?: number | undefined;
                            events?: Record<string, number> | undefined;
                            events_default?: number | undefined;
                            invite?: number | undefined;
                            kick?: number | undefined;
                            redact?: number | undefined;
                            state_default?: number | undefined;
                            users?: Record<string, number> | undefined;
                            users_default?: number | undefined;
                            notifications?: {
                                room: number;
                            } | undefined;
                        } | undefined;
                        user_id?: string | undefined;
                    } | undefined;
                }, {
                    transaction_id?: string | undefined;
                    age?: number | undefined;
                    prev_content?: {
                        body: string;
                        msgtype: string;
                        "m.relates_to"?: {
                            event_id: string;
                            rel_type: string;
                        } | undefined;
                    } | {
                        body: string;
                        msgtype: "m.text";
                        format?: string | undefined;
                        formatted_body?: string | undefined;
                    } | {
                        body: string;
                        msgtype: "m.emote";
                        format?: string | undefined;
                        formatted_body?: string | undefined;
                    } | {
                        body: string;
                        msgtype: "m.notice";
                        format?: string | undefined;
                        formatted_body?: string | undefined;
                    } | {
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
                    } | {
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
                    } | {
                        body: string;
                        msgtype: "m.audio";
                        info?: {
                            mimetype?: string | undefined;
                            size?: number | undefined;
                            duration?: number | undefined;
                        } | undefined;
                        url?: string | undefined;
                    } | {
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
                    } | {
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
                    } | {
                        msgtype: "m.key.verification.request";
                        from_device: string;
                        methods: string[];
                        timestamp: number;
                        transaction_id: string;
                        body?: string | undefined;
                        format?: string | undefined;
                        formatted_body?: string | undefined;
                    } | {
                        msgtype: string;
                    } | {
                        ban?: number | undefined;
                        events?: Record<string, number> | undefined;
                        events_default?: number | undefined;
                        invite?: number | undefined;
                        kick?: number | undefined;
                        redact?: number | undefined;
                        state_default?: number | undefined;
                        users?: Record<string, number> | undefined;
                        users_default?: number | undefined;
                        notifications?: {
                            room: number;
                        } | undefined;
                    } | undefined;
                    "m.relations"?: unknown;
                    redacted_because?: {
                        type: string;
                        event_id: string;
                        room_id: string;
                        sender: string;
                        origin_server_ts: number;
                        state_key?: string | undefined;
                        content?: unknown;
                        age?: number | undefined;
                        replaces_state?: string | undefined;
                        prev_content?: {
                            body: string;
                            msgtype: string;
                            "m.relates_to"?: {
                                event_id: string;
                                rel_type: string;
                            } | undefined;
                        } | {
                            body: string;
                            msgtype: "m.text";
                            format?: string | undefined;
                            formatted_body?: string | undefined;
                        } | {
                            body: string;
                            msgtype: "m.emote";
                            format?: string | undefined;
                            formatted_body?: string | undefined;
                        } | {
                            body: string;
                            msgtype: "m.notice";
                            format?: string | undefined;
                            formatted_body?: string | undefined;
                        } | {
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
                        } | {
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
                        } | {
                            body: string;
                            msgtype: "m.audio";
                            info?: {
                                mimetype?: string | undefined;
                                size?: number | undefined;
                                duration?: number | undefined;
                            } | undefined;
                            url?: string | undefined;
                        } | {
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
                        } | {
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
                        } | {
                            msgtype: "m.key.verification.request";
                            from_device: string;
                            methods: string[];
                            timestamp: number;
                            transaction_id: string;
                            body?: string | undefined;
                            format?: string | undefined;
                            formatted_body?: string | undefined;
                        } | {
                            msgtype: string;
                        } | {
                            ban?: number | undefined;
                            events?: Record<string, number> | undefined;
                            events_default?: number | undefined;
                            invite?: number | undefined;
                            kick?: number | undefined;
                            redact?: number | undefined;
                            state_default?: number | undefined;
                            users?: Record<string, number> | undefined;
                            users_default?: number | undefined;
                            notifications?: {
                                room: number;
                            } | undefined;
                        } | undefined;
                        user_id?: string | undefined;
                    } | undefined;
                }>>;
            }>, "strip", z.ZodTypeAny, {
                type: string;
                event_id: string;
                room_id: string;
                sender: string;
                origin_server_ts: number;
                state_key?: string | undefined;
                content?: unknown;
                age?: number | undefined;
                replaces_state?: string | undefined;
                prev_content?: {
                    body: string;
                    msgtype: string;
                    "m.relates_to"?: {
                        event_id: string;
                        rel_type: string;
                    } | undefined;
                } | {
                    body: string;
                    msgtype: "m.text";
                    format?: string | undefined;
                    formatted_body?: string | undefined;
                } | {
                    body: string;
                    msgtype: "m.emote";
                    format?: string | undefined;
                    formatted_body?: string | undefined;
                } | {
                    body: string;
                    msgtype: "m.notice";
                    format?: string | undefined;
                    formatted_body?: string | undefined;
                } | {
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
                } | {
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
                } | {
                    body: string;
                    msgtype: "m.audio";
                    info?: {
                        mimetype?: string | undefined;
                        size?: number | undefined;
                        duration?: number | undefined;
                    } | undefined;
                    url?: string | undefined;
                } | {
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
                } | {
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
                } | {
                    msgtype: "m.key.verification.request";
                    from_device: string;
                    methods: string[];
                    timestamp: number;
                    transaction_id: string;
                    body?: string | undefined;
                    format?: string | undefined;
                    formatted_body?: string | undefined;
                } | {
                    msgtype: string;
                } | {
                    ban?: number | undefined;
                    events?: Record<string, number> | undefined;
                    events_default?: number | undefined;
                    invite?: number | undefined;
                    kick?: number | undefined;
                    redact?: number | undefined;
                    state_default?: number | undefined;
                    users?: Record<string, number> | undefined;
                    users_default?: number | undefined;
                    notifications?: {
                        room: number;
                    } | undefined;
                } | undefined;
                user_id?: string | undefined;
                unsigned?: {
                    transaction_id?: string | undefined;
                    age?: number | undefined;
                    prev_content?: {
                        body: string;
                        msgtype: string;
                        "m.relates_to"?: {
                            event_id: string;
                            rel_type: string;
                        } | undefined;
                    } | {
                        body: string;
                        msgtype: "m.text";
                        format?: string | undefined;
                        formatted_body?: string | undefined;
                    } | {
                        body: string;
                        msgtype: "m.emote";
                        format?: string | undefined;
                        formatted_body?: string | undefined;
                    } | {
                        body: string;
                        msgtype: "m.notice";
                        format?: string | undefined;
                        formatted_body?: string | undefined;
                    } | {
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
                    } | {
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
                    } | {
                        body: string;
                        msgtype: "m.audio";
                        info?: {
                            mimetype?: string | undefined;
                            size?: number | undefined;
                            duration?: number | undefined;
                        } | undefined;
                        url?: string | undefined;
                    } | {
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
                    } | {
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
                    } | {
                        msgtype: "m.key.verification.request";
                        from_device: string;
                        methods: string[];
                        timestamp: number;
                        transaction_id: string;
                        body?: string | undefined;
                        format?: string | undefined;
                        formatted_body?: string | undefined;
                    } | {
                        msgtype: string;
                    } | {
                        ban?: number | undefined;
                        events?: Record<string, number> | undefined;
                        events_default?: number | undefined;
                        invite?: number | undefined;
                        kick?: number | undefined;
                        redact?: number | undefined;
                        state_default?: number | undefined;
                        users?: Record<string, number> | undefined;
                        users_default?: number | undefined;
                        notifications?: {
                            room: number;
                        } | undefined;
                    } | undefined;
                    "m.relations"?: unknown;
                    redacted_because?: {
                        type: string;
                        event_id: string;
                        room_id: string;
                        sender: string;
                        origin_server_ts: number;
                        state_key?: string | undefined;
                        content?: unknown;
                        age?: number | undefined;
                        replaces_state?: string | undefined;
                        prev_content?: {
                            body: string;
                            msgtype: string;
                            "m.relates_to"?: {
                                event_id: string;
                                rel_type: string;
                            } | undefined;
                        } | {
                            body: string;
                            msgtype: "m.text";
                            format?: string | undefined;
                            formatted_body?: string | undefined;
                        } | {
                            body: string;
                            msgtype: "m.emote";
                            format?: string | undefined;
                            formatted_body?: string | undefined;
                        } | {
                            body: string;
                            msgtype: "m.notice";
                            format?: string | undefined;
                            formatted_body?: string | undefined;
                        } | {
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
                        } | {
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
                        } | {
                            body: string;
                            msgtype: "m.audio";
                            info?: {
                                mimetype?: string | undefined;
                                size?: number | undefined;
                                duration?: number | undefined;
                            } | undefined;
                            url?: string | undefined;
                        } | {
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
                        } | {
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
                        } | {
                            msgtype: "m.key.verification.request";
                            from_device: string;
                            methods: string[];
                            timestamp: number;
                            transaction_id: string;
                            body?: string | undefined;
                            format?: string | undefined;
                            formatted_body?: string | undefined;
                        } | {
                            msgtype: string;
                        } | {
                            ban?: number | undefined;
                            events?: Record<string, number> | undefined;
                            events_default?: number | undefined;
                            invite?: number | undefined;
                            kick?: number | undefined;
                            redact?: number | undefined;
                            state_default?: number | undefined;
                            users?: Record<string, number> | undefined;
                            users_default?: number | undefined;
                            notifications?: {
                                room: number;
                            } | undefined;
                        } | undefined;
                        user_id?: string | undefined;
                    } | undefined;
                } | undefined;
            }, {
                type: string;
                event_id: string;
                room_id: string;
                sender: string;
                origin_server_ts: number;
                state_key?: string | undefined;
                content?: unknown;
                age?: number | undefined;
                replaces_state?: string | undefined;
                prev_content?: {
                    body: string;
                    msgtype: string;
                    "m.relates_to"?: {
                        event_id: string;
                        rel_type: string;
                    } | undefined;
                } | {
                    body: string;
                    msgtype: "m.text";
                    format?: string | undefined;
                    formatted_body?: string | undefined;
                } | {
                    body: string;
                    msgtype: "m.emote";
                    format?: string | undefined;
                    formatted_body?: string | undefined;
                } | {
                    body: string;
                    msgtype: "m.notice";
                    format?: string | undefined;
                    formatted_body?: string | undefined;
                } | {
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
                } | {
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
                } | {
                    body: string;
                    msgtype: "m.audio";
                    info?: {
                        mimetype?: string | undefined;
                        size?: number | undefined;
                        duration?: number | undefined;
                    } | undefined;
                    url?: string | undefined;
                } | {
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
                } | {
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
                } | {
                    msgtype: "m.key.verification.request";
                    from_device: string;
                    methods: string[];
                    timestamp: number;
                    transaction_id: string;
                    body?: string | undefined;
                    format?: string | undefined;
                    formatted_body?: string | undefined;
                } | {
                    msgtype: string;
                } | {
                    ban?: number | undefined;
                    events?: Record<string, number> | undefined;
                    events_default?: number | undefined;
                    invite?: number | undefined;
                    kick?: number | undefined;
                    redact?: number | undefined;
                    state_default?: number | undefined;
                    users?: Record<string, number> | undefined;
                    users_default?: number | undefined;
                    notifications?: {
                        room: number;
                    } | undefined;
                } | undefined;
                user_id?: string | undefined;
                unsigned?: {
                    transaction_id?: string | undefined;
                    age?: number | undefined;
                    prev_content?: {
                        body: string;
                        msgtype: string;
                        "m.relates_to"?: {
                            event_id: string;
                            rel_type: string;
                        } | undefined;
                    } | {
                        body: string;
                        msgtype: "m.text";
                        format?: string | undefined;
                        formatted_body?: string | undefined;
                    } | {
                        body: string;
                        msgtype: "m.emote";
                        format?: string | undefined;
                        formatted_body?: string | undefined;
                    } | {
                        body: string;
                        msgtype: "m.notice";
                        format?: string | undefined;
                        formatted_body?: string | undefined;
                    } | {
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
                    } | {
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
                    } | {
                        body: string;
                        msgtype: "m.audio";
                        info?: {
                            mimetype?: string | undefined;
                            size?: number | undefined;
                            duration?: number | undefined;
                        } | undefined;
                        url?: string | undefined;
                    } | {
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
                    } | {
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
                    } | {
                        msgtype: "m.key.verification.request";
                        from_device: string;
                        methods: string[];
                        timestamp: number;
                        transaction_id: string;
                        body?: string | undefined;
                        format?: string | undefined;
                        formatted_body?: string | undefined;
                    } | {
                        msgtype: string;
                    } | {
                        ban?: number | undefined;
                        events?: Record<string, number> | undefined;
                        events_default?: number | undefined;
                        invite?: number | undefined;
                        kick?: number | undefined;
                        redact?: number | undefined;
                        state_default?: number | undefined;
                        users?: Record<string, number> | undefined;
                        users_default?: number | undefined;
                        notifications?: {
                            room: number;
                        } | undefined;
                    } | undefined;
                    "m.relations"?: unknown;
                    redacted_because?: {
                        type: string;
                        event_id: string;
                        room_id: string;
                        sender: string;
                        origin_server_ts: number;
                        state_key?: string | undefined;
                        content?: unknown;
                        age?: number | undefined;
                        replaces_state?: string | undefined;
                        prev_content?: {
                            body: string;
                            msgtype: string;
                            "m.relates_to"?: {
                                event_id: string;
                                rel_type: string;
                            } | undefined;
                        } | {
                            body: string;
                            msgtype: "m.text";
                            format?: string | undefined;
                            formatted_body?: string | undefined;
                        } | {
                            body: string;
                            msgtype: "m.emote";
                            format?: string | undefined;
                            formatted_body?: string | undefined;
                        } | {
                            body: string;
                            msgtype: "m.notice";
                            format?: string | undefined;
                            formatted_body?: string | undefined;
                        } | {
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
                        } | {
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
                        } | {
                            body: string;
                            msgtype: "m.audio";
                            info?: {
                                mimetype?: string | undefined;
                                size?: number | undefined;
                                duration?: number | undefined;
                            } | undefined;
                            url?: string | undefined;
                        } | {
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
                        } | {
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
                        } | {
                            msgtype: "m.key.verification.request";
                            from_device: string;
                            methods: string[];
                            timestamp: number;
                            transaction_id: string;
                            body?: string | undefined;
                            format?: string | undefined;
                            formatted_body?: string | undefined;
                        } | {
                            msgtype: string;
                        } | {
                            ban?: number | undefined;
                            events?: Record<string, number> | undefined;
                            events_default?: number | undefined;
                            invite?: number | undefined;
                            kick?: number | undefined;
                            redact?: number | undefined;
                            state_default?: number | undefined;
                            users?: Record<string, number> | undefined;
                            users_default?: number | undefined;
                            notifications?: {
                                room: number;
                            } | undefined;
                        } | undefined;
                        user_id?: string | undefined;
                    } | undefined;
                } | undefined;
            }>;
            sender: z.ZodString;
            origin_server_ts: z.ZodNumber;
            state_key: z.ZodString;
            type: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type: string;
            state_key: string;
            content: {
                type: string;
                event_id: string;
                room_id: string;
                sender: string;
                origin_server_ts: number;
                state_key?: string | undefined;
                content?: unknown;
                age?: number | undefined;
                replaces_state?: string | undefined;
                prev_content?: {
                    body: string;
                    msgtype: string;
                    "m.relates_to"?: {
                        event_id: string;
                        rel_type: string;
                    } | undefined;
                } | {
                    body: string;
                    msgtype: "m.text";
                    format?: string | undefined;
                    formatted_body?: string | undefined;
                } | {
                    body: string;
                    msgtype: "m.emote";
                    format?: string | undefined;
                    formatted_body?: string | undefined;
                } | {
                    body: string;
                    msgtype: "m.notice";
                    format?: string | undefined;
                    formatted_body?: string | undefined;
                } | {
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
                } | {
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
                } | {
                    body: string;
                    msgtype: "m.audio";
                    info?: {
                        mimetype?: string | undefined;
                        size?: number | undefined;
                        duration?: number | undefined;
                    } | undefined;
                    url?: string | undefined;
                } | {
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
                } | {
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
                } | {
                    msgtype: "m.key.verification.request";
                    from_device: string;
                    methods: string[];
                    timestamp: number;
                    transaction_id: string;
                    body?: string | undefined;
                    format?: string | undefined;
                    formatted_body?: string | undefined;
                } | {
                    msgtype: string;
                } | {
                    ban?: number | undefined;
                    events?: Record<string, number> | undefined;
                    events_default?: number | undefined;
                    invite?: number | undefined;
                    kick?: number | undefined;
                    redact?: number | undefined;
                    state_default?: number | undefined;
                    users?: Record<string, number> | undefined;
                    users_default?: number | undefined;
                    notifications?: {
                        room: number;
                    } | undefined;
                } | undefined;
                user_id?: string | undefined;
                unsigned?: {
                    transaction_id?: string | undefined;
                    age?: number | undefined;
                    prev_content?: {
                        body: string;
                        msgtype: string;
                        "m.relates_to"?: {
                            event_id: string;
                            rel_type: string;
                        } | undefined;
                    } | {
                        body: string;
                        msgtype: "m.text";
                        format?: string | undefined;
                        formatted_body?: string | undefined;
                    } | {
                        body: string;
                        msgtype: "m.emote";
                        format?: string | undefined;
                        formatted_body?: string | undefined;
                    } | {
                        body: string;
                        msgtype: "m.notice";
                        format?: string | undefined;
                        formatted_body?: string | undefined;
                    } | {
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
                    } | {
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
                    } | {
                        body: string;
                        msgtype: "m.audio";
                        info?: {
                            mimetype?: string | undefined;
                            size?: number | undefined;
                            duration?: number | undefined;
                        } | undefined;
                        url?: string | undefined;
                    } | {
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
                    } | {
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
                    } | {
                        msgtype: "m.key.verification.request";
                        from_device: string;
                        methods: string[];
                        timestamp: number;
                        transaction_id: string;
                        body?: string | undefined;
                        format?: string | undefined;
                        formatted_body?: string | undefined;
                    } | {
                        msgtype: string;
                    } | {
                        ban?: number | undefined;
                        events?: Record<string, number> | undefined;
                        events_default?: number | undefined;
                        invite?: number | undefined;
                        kick?: number | undefined;
                        redact?: number | undefined;
                        state_default?: number | undefined;
                        users?: Record<string, number> | undefined;
                        users_default?: number | undefined;
                        notifications?: {
                            room: number;
                        } | undefined;
                    } | undefined;
                    "m.relations"?: unknown;
                    redacted_because?: {
                        type: string;
                        event_id: string;
                        room_id: string;
                        sender: string;
                        origin_server_ts: number;
                        state_key?: string | undefined;
                        content?: unknown;
                        age?: number | undefined;
                        replaces_state?: string | undefined;
                        prev_content?: {
                            body: string;
                            msgtype: string;
                            "m.relates_to"?: {
                                event_id: string;
                                rel_type: string;
                            } | undefined;
                        } | {
                            body: string;
                            msgtype: "m.text";
                            format?: string | undefined;
                            formatted_body?: string | undefined;
                        } | {
                            body: string;
                            msgtype: "m.emote";
                            format?: string | undefined;
                            formatted_body?: string | undefined;
                        } | {
                            body: string;
                            msgtype: "m.notice";
                            format?: string | undefined;
                            formatted_body?: string | undefined;
                        } | {
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
                        } | {
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
                        } | {
                            body: string;
                            msgtype: "m.audio";
                            info?: {
                                mimetype?: string | undefined;
                                size?: number | undefined;
                                duration?: number | undefined;
                            } | undefined;
                            url?: string | undefined;
                        } | {
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
                        } | {
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
                        } | {
                            msgtype: "m.key.verification.request";
                            from_device: string;
                            methods: string[];
                            timestamp: number;
                            transaction_id: string;
                            body?: string | undefined;
                            format?: string | undefined;
                            formatted_body?: string | undefined;
                        } | {
                            msgtype: string;
                        } | {
                            ban?: number | undefined;
                            events?: Record<string, number> | undefined;
                            events_default?: number | undefined;
                            invite?: number | undefined;
                            kick?: number | undefined;
                            redact?: number | undefined;
                            state_default?: number | undefined;
                            users?: Record<string, number> | undefined;
                            users_default?: number | undefined;
                            notifications?: {
                                room: number;
                            } | undefined;
                        } | undefined;
                        user_id?: string | undefined;
                    } | undefined;
                } | undefined;
            };
            sender: string;
            origin_server_ts: number;
        }, {
            type: string;
            state_key: string;
            content: {
                type: string;
                event_id: string;
                room_id: string;
                sender: string;
                origin_server_ts: number;
                state_key?: string | undefined;
                content?: unknown;
                age?: number | undefined;
                replaces_state?: string | undefined;
                prev_content?: {
                    body: string;
                    msgtype: string;
                    "m.relates_to"?: {
                        event_id: string;
                        rel_type: string;
                    } | undefined;
                } | {
                    body: string;
                    msgtype: "m.text";
                    format?: string | undefined;
                    formatted_body?: string | undefined;
                } | {
                    body: string;
                    msgtype: "m.emote";
                    format?: string | undefined;
                    formatted_body?: string | undefined;
                } | {
                    body: string;
                    msgtype: "m.notice";
                    format?: string | undefined;
                    formatted_body?: string | undefined;
                } | {
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
                } | {
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
                } | {
                    body: string;
                    msgtype: "m.audio";
                    info?: {
                        mimetype?: string | undefined;
                        size?: number | undefined;
                        duration?: number | undefined;
                    } | undefined;
                    url?: string | undefined;
                } | {
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
                } | {
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
                } | {
                    msgtype: "m.key.verification.request";
                    from_device: string;
                    methods: string[];
                    timestamp: number;
                    transaction_id: string;
                    body?: string | undefined;
                    format?: string | undefined;
                    formatted_body?: string | undefined;
                } | {
                    msgtype: string;
                } | {
                    ban?: number | undefined;
                    events?: Record<string, number> | undefined;
                    events_default?: number | undefined;
                    invite?: number | undefined;
                    kick?: number | undefined;
                    redact?: number | undefined;
                    state_default?: number | undefined;
                    users?: Record<string, number> | undefined;
                    users_default?: number | undefined;
                    notifications?: {
                        room: number;
                    } | undefined;
                } | undefined;
                user_id?: string | undefined;
                unsigned?: {
                    transaction_id?: string | undefined;
                    age?: number | undefined;
                    prev_content?: {
                        body: string;
                        msgtype: string;
                        "m.relates_to"?: {
                            event_id: string;
                            rel_type: string;
                        } | undefined;
                    } | {
                        body: string;
                        msgtype: "m.text";
                        format?: string | undefined;
                        formatted_body?: string | undefined;
                    } | {
                        body: string;
                        msgtype: "m.emote";
                        format?: string | undefined;
                        formatted_body?: string | undefined;
                    } | {
                        body: string;
                        msgtype: "m.notice";
                        format?: string | undefined;
                        formatted_body?: string | undefined;
                    } | {
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
                    } | {
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
                    } | {
                        body: string;
                        msgtype: "m.audio";
                        info?: {
                            mimetype?: string | undefined;
                            size?: number | undefined;
                            duration?: number | undefined;
                        } | undefined;
                        url?: string | undefined;
                    } | {
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
                    } | {
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
                    } | {
                        msgtype: "m.key.verification.request";
                        from_device: string;
                        methods: string[];
                        timestamp: number;
                        transaction_id: string;
                        body?: string | undefined;
                        format?: string | undefined;
                        formatted_body?: string | undefined;
                    } | {
                        msgtype: string;
                    } | {
                        ban?: number | undefined;
                        events?: Record<string, number> | undefined;
                        events_default?: number | undefined;
                        invite?: number | undefined;
                        kick?: number | undefined;
                        redact?: number | undefined;
                        state_default?: number | undefined;
                        users?: Record<string, number> | undefined;
                        users_default?: number | undefined;
                        notifications?: {
                            room: number;
                        } | undefined;
                    } | undefined;
                    "m.relations"?: unknown;
                    redacted_because?: {
                        type: string;
                        event_id: string;
                        room_id: string;
                        sender: string;
                        origin_server_ts: number;
                        state_key?: string | undefined;
                        content?: unknown;
                        age?: number | undefined;
                        replaces_state?: string | undefined;
                        prev_content?: {
                            body: string;
                            msgtype: string;
                            "m.relates_to"?: {
                                event_id: string;
                                rel_type: string;
                            } | undefined;
                        } | {
                            body: string;
                            msgtype: "m.text";
                            format?: string | undefined;
                            formatted_body?: string | undefined;
                        } | {
                            body: string;
                            msgtype: "m.emote";
                            format?: string | undefined;
                            formatted_body?: string | undefined;
                        } | {
                            body: string;
                            msgtype: "m.notice";
                            format?: string | undefined;
                            formatted_body?: string | undefined;
                        } | {
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
                        } | {
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
                        } | {
                            body: string;
                            msgtype: "m.audio";
                            info?: {
                                mimetype?: string | undefined;
                                size?: number | undefined;
                                duration?: number | undefined;
                            } | undefined;
                            url?: string | undefined;
                        } | {
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
                        } | {
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
                        } | {
                            msgtype: "m.key.verification.request";
                            from_device: string;
                            methods: string[];
                            timestamp: number;
                            transaction_id: string;
                            body?: string | undefined;
                            format?: string | undefined;
                            formatted_body?: string | undefined;
                        } | {
                            msgtype: string;
                        } | {
                            ban?: number | undefined;
                            events?: Record<string, number> | undefined;
                            events_default?: number | undefined;
                            invite?: number | undefined;
                            kick?: number | undefined;
                            redact?: number | undefined;
                            state_default?: number | undefined;
                            users?: Record<string, number> | undefined;
                            users_default?: number | undefined;
                            notifications?: {
                                room: number;
                            } | undefined;
                        } | undefined;
                        user_id?: string | undefined;
                    } | undefined;
                } | undefined;
            };
            sender: string;
            origin_server_ts: number;
        }>, "many">;
        guest_can_join: z.ZodBoolean;
        join_rule: z.ZodOptional<z.ZodString>;
        name: z.ZodOptional<z.ZodString>;
        num_joined_members: z.ZodNumber;
        room_id: z.ZodString;
        room_type: z.ZodOptional<z.ZodString>;
        topic: z.ZodOptional<z.ZodString>;
        world_readable: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        room_id: string;
        children_state: {
            type: string;
            state_key: string;
            content: {
                type: string;
                event_id: string;
                room_id: string;
                sender: string;
                origin_server_ts: number;
                state_key?: string | undefined;
                content?: unknown;
                age?: number | undefined;
                replaces_state?: string | undefined;
                prev_content?: {
                    body: string;
                    msgtype: string;
                    "m.relates_to"?: {
                        event_id: string;
                        rel_type: string;
                    } | undefined;
                } | {
                    body: string;
                    msgtype: "m.text";
                    format?: string | undefined;
                    formatted_body?: string | undefined;
                } | {
                    body: string;
                    msgtype: "m.emote";
                    format?: string | undefined;
                    formatted_body?: string | undefined;
                } | {
                    body: string;
                    msgtype: "m.notice";
                    format?: string | undefined;
                    formatted_body?: string | undefined;
                } | {
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
                } | {
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
                } | {
                    body: string;
                    msgtype: "m.audio";
                    info?: {
                        mimetype?: string | undefined;
                        size?: number | undefined;
                        duration?: number | undefined;
                    } | undefined;
                    url?: string | undefined;
                } | {
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
                } | {
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
                } | {
                    msgtype: "m.key.verification.request";
                    from_device: string;
                    methods: string[];
                    timestamp: number;
                    transaction_id: string;
                    body?: string | undefined;
                    format?: string | undefined;
                    formatted_body?: string | undefined;
                } | {
                    msgtype: string;
                } | {
                    ban?: number | undefined;
                    events?: Record<string, number> | undefined;
                    events_default?: number | undefined;
                    invite?: number | undefined;
                    kick?: number | undefined;
                    redact?: number | undefined;
                    state_default?: number | undefined;
                    users?: Record<string, number> | undefined;
                    users_default?: number | undefined;
                    notifications?: {
                        room: number;
                    } | undefined;
                } | undefined;
                user_id?: string | undefined;
                unsigned?: {
                    transaction_id?: string | undefined;
                    age?: number | undefined;
                    prev_content?: {
                        body: string;
                        msgtype: string;
                        "m.relates_to"?: {
                            event_id: string;
                            rel_type: string;
                        } | undefined;
                    } | {
                        body: string;
                        msgtype: "m.text";
                        format?: string | undefined;
                        formatted_body?: string | undefined;
                    } | {
                        body: string;
                        msgtype: "m.emote";
                        format?: string | undefined;
                        formatted_body?: string | undefined;
                    } | {
                        body: string;
                        msgtype: "m.notice";
                        format?: string | undefined;
                        formatted_body?: string | undefined;
                    } | {
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
                    } | {
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
                    } | {
                        body: string;
                        msgtype: "m.audio";
                        info?: {
                            mimetype?: string | undefined;
                            size?: number | undefined;
                            duration?: number | undefined;
                        } | undefined;
                        url?: string | undefined;
                    } | {
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
                    } | {
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
                    } | {
                        msgtype: "m.key.verification.request";
                        from_device: string;
                        methods: string[];
                        timestamp: number;
                        transaction_id: string;
                        body?: string | undefined;
                        format?: string | undefined;
                        formatted_body?: string | undefined;
                    } | {
                        msgtype: string;
                    } | {
                        ban?: number | undefined;
                        events?: Record<string, number> | undefined;
                        events_default?: number | undefined;
                        invite?: number | undefined;
                        kick?: number | undefined;
                        redact?: number | undefined;
                        state_default?: number | undefined;
                        users?: Record<string, number> | undefined;
                        users_default?: number | undefined;
                        notifications?: {
                            room: number;
                        } | undefined;
                    } | undefined;
                    "m.relations"?: unknown;
                    redacted_because?: {
                        type: string;
                        event_id: string;
                        room_id: string;
                        sender: string;
                        origin_server_ts: number;
                        state_key?: string | undefined;
                        content?: unknown;
                        age?: number | undefined;
                        replaces_state?: string | undefined;
                        prev_content?: {
                            body: string;
                            msgtype: string;
                            "m.relates_to"?: {
                                event_id: string;
                                rel_type: string;
                            } | undefined;
                        } | {
                            body: string;
                            msgtype: "m.text";
                            format?: string | undefined;
                            formatted_body?: string | undefined;
                        } | {
                            body: string;
                            msgtype: "m.emote";
                            format?: string | undefined;
                            formatted_body?: string | undefined;
                        } | {
                            body: string;
                            msgtype: "m.notice";
                            format?: string | undefined;
                            formatted_body?: string | undefined;
                        } | {
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
                        } | {
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
                        } | {
                            body: string;
                            msgtype: "m.audio";
                            info?: {
                                mimetype?: string | undefined;
                                size?: number | undefined;
                                duration?: number | undefined;
                            } | undefined;
                            url?: string | undefined;
                        } | {
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
                        } | {
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
                        } | {
                            msgtype: "m.key.verification.request";
                            from_device: string;
                            methods: string[];
                            timestamp: number;
                            transaction_id: string;
                            body?: string | undefined;
                            format?: string | undefined;
                            formatted_body?: string | undefined;
                        } | {
                            msgtype: string;
                        } | {
                            ban?: number | undefined;
                            events?: Record<string, number> | undefined;
                            events_default?: number | undefined;
                            invite?: number | undefined;
                            kick?: number | undefined;
                            redact?: number | undefined;
                            state_default?: number | undefined;
                            users?: Record<string, number> | undefined;
                            users_default?: number | undefined;
                            notifications?: {
                                room: number;
                            } | undefined;
                        } | undefined;
                        user_id?: string | undefined;
                    } | undefined;
                } | undefined;
            };
            sender: string;
            origin_server_ts: number;
        }[];
        guest_can_join: boolean;
        num_joined_members: number;
        world_readable: boolean;
        avatar_url?: string | undefined;
        join_rule?: string | undefined;
        name?: string | undefined;
        topic?: string | undefined;
        canonical_alias?: string | undefined;
        room_type?: string | undefined;
    }, {
        room_id: string;
        children_state: {
            type: string;
            state_key: string;
            content: {
                type: string;
                event_id: string;
                room_id: string;
                sender: string;
                origin_server_ts: number;
                state_key?: string | undefined;
                content?: unknown;
                age?: number | undefined;
                replaces_state?: string | undefined;
                prev_content?: {
                    body: string;
                    msgtype: string;
                    "m.relates_to"?: {
                        event_id: string;
                        rel_type: string;
                    } | undefined;
                } | {
                    body: string;
                    msgtype: "m.text";
                    format?: string | undefined;
                    formatted_body?: string | undefined;
                } | {
                    body: string;
                    msgtype: "m.emote";
                    format?: string | undefined;
                    formatted_body?: string | undefined;
                } | {
                    body: string;
                    msgtype: "m.notice";
                    format?: string | undefined;
                    formatted_body?: string | undefined;
                } | {
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
                } | {
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
                } | {
                    body: string;
                    msgtype: "m.audio";
                    info?: {
                        mimetype?: string | undefined;
                        size?: number | undefined;
                        duration?: number | undefined;
                    } | undefined;
                    url?: string | undefined;
                } | {
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
                } | {
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
                } | {
                    msgtype: "m.key.verification.request";
                    from_device: string;
                    methods: string[];
                    timestamp: number;
                    transaction_id: string;
                    body?: string | undefined;
                    format?: string | undefined;
                    formatted_body?: string | undefined;
                } | {
                    msgtype: string;
                } | {
                    ban?: number | undefined;
                    events?: Record<string, number> | undefined;
                    events_default?: number | undefined;
                    invite?: number | undefined;
                    kick?: number | undefined;
                    redact?: number | undefined;
                    state_default?: number | undefined;
                    users?: Record<string, number> | undefined;
                    users_default?: number | undefined;
                    notifications?: {
                        room: number;
                    } | undefined;
                } | undefined;
                user_id?: string | undefined;
                unsigned?: {
                    transaction_id?: string | undefined;
                    age?: number | undefined;
                    prev_content?: {
                        body: string;
                        msgtype: string;
                        "m.relates_to"?: {
                            event_id: string;
                            rel_type: string;
                        } | undefined;
                    } | {
                        body: string;
                        msgtype: "m.text";
                        format?: string | undefined;
                        formatted_body?: string | undefined;
                    } | {
                        body: string;
                        msgtype: "m.emote";
                        format?: string | undefined;
                        formatted_body?: string | undefined;
                    } | {
                        body: string;
                        msgtype: "m.notice";
                        format?: string | undefined;
                        formatted_body?: string | undefined;
                    } | {
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
                    } | {
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
                    } | {
                        body: string;
                        msgtype: "m.audio";
                        info?: {
                            mimetype?: string | undefined;
                            size?: number | undefined;
                            duration?: number | undefined;
                        } | undefined;
                        url?: string | undefined;
                    } | {
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
                    } | {
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
                    } | {
                        msgtype: "m.key.verification.request";
                        from_device: string;
                        methods: string[];
                        timestamp: number;
                        transaction_id: string;
                        body?: string | undefined;
                        format?: string | undefined;
                        formatted_body?: string | undefined;
                    } | {
                        msgtype: string;
                    } | {
                        ban?: number | undefined;
                        events?: Record<string, number> | undefined;
                        events_default?: number | undefined;
                        invite?: number | undefined;
                        kick?: number | undefined;
                        redact?: number | undefined;
                        state_default?: number | undefined;
                        users?: Record<string, number> | undefined;
                        users_default?: number | undefined;
                        notifications?: {
                            room: number;
                        } | undefined;
                    } | undefined;
                    "m.relations"?: unknown;
                    redacted_because?: {
                        type: string;
                        event_id: string;
                        room_id: string;
                        sender: string;
                        origin_server_ts: number;
                        state_key?: string | undefined;
                        content?: unknown;
                        age?: number | undefined;
                        replaces_state?: string | undefined;
                        prev_content?: {
                            body: string;
                            msgtype: string;
                            "m.relates_to"?: {
                                event_id: string;
                                rel_type: string;
                            } | undefined;
                        } | {
                            body: string;
                            msgtype: "m.text";
                            format?: string | undefined;
                            formatted_body?: string | undefined;
                        } | {
                            body: string;
                            msgtype: "m.emote";
                            format?: string | undefined;
                            formatted_body?: string | undefined;
                        } | {
                            body: string;
                            msgtype: "m.notice";
                            format?: string | undefined;
                            formatted_body?: string | undefined;
                        } | {
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
                        } | {
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
                        } | {
                            body: string;
                            msgtype: "m.audio";
                            info?: {
                                mimetype?: string | undefined;
                                size?: number | undefined;
                                duration?: number | undefined;
                            } | undefined;
                            url?: string | undefined;
                        } | {
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
                        } | {
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
                        } | {
                            msgtype: "m.key.verification.request";
                            from_device: string;
                            methods: string[];
                            timestamp: number;
                            transaction_id: string;
                            body?: string | undefined;
                            format?: string | undefined;
                            formatted_body?: string | undefined;
                        } | {
                            msgtype: string;
                        } | {
                            ban?: number | undefined;
                            events?: Record<string, number> | undefined;
                            events_default?: number | undefined;
                            invite?: number | undefined;
                            kick?: number | undefined;
                            redact?: number | undefined;
                            state_default?: number | undefined;
                            users?: Record<string, number> | undefined;
                            users_default?: number | undefined;
                            notifications?: {
                                room: number;
                            } | undefined;
                        } | undefined;
                        user_id?: string | undefined;
                    } | undefined;
                } | undefined;
            };
            sender: string;
            origin_server_ts: number;
        }[];
        guest_can_join: boolean;
        num_joined_members: number;
        world_readable: boolean;
        avatar_url?: string | undefined;
        join_rule?: string | undefined;
        name?: string | undefined;
        topic?: string | undefined;
        canonical_alias?: string | undefined;
        room_type?: string | undefined;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    rooms: {
        room_id: string;
        children_state: {
            type: string;
            state_key: string;
            content: {
                type: string;
                event_id: string;
                room_id: string;
                sender: string;
                origin_server_ts: number;
                state_key?: string | undefined;
                content?: unknown;
                age?: number | undefined;
                replaces_state?: string | undefined;
                prev_content?: {
                    body: string;
                    msgtype: string;
                    "m.relates_to"?: {
                        event_id: string;
                        rel_type: string;
                    } | undefined;
                } | {
                    body: string;
                    msgtype: "m.text";
                    format?: string | undefined;
                    formatted_body?: string | undefined;
                } | {
                    body: string;
                    msgtype: "m.emote";
                    format?: string | undefined;
                    formatted_body?: string | undefined;
                } | {
                    body: string;
                    msgtype: "m.notice";
                    format?: string | undefined;
                    formatted_body?: string | undefined;
                } | {
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
                } | {
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
                } | {
                    body: string;
                    msgtype: "m.audio";
                    info?: {
                        mimetype?: string | undefined;
                        size?: number | undefined;
                        duration?: number | undefined;
                    } | undefined;
                    url?: string | undefined;
                } | {
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
                } | {
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
                } | {
                    msgtype: "m.key.verification.request";
                    from_device: string;
                    methods: string[];
                    timestamp: number;
                    transaction_id: string;
                    body?: string | undefined;
                    format?: string | undefined;
                    formatted_body?: string | undefined;
                } | {
                    msgtype: string;
                } | {
                    ban?: number | undefined;
                    events?: Record<string, number> | undefined;
                    events_default?: number | undefined;
                    invite?: number | undefined;
                    kick?: number | undefined;
                    redact?: number | undefined;
                    state_default?: number | undefined;
                    users?: Record<string, number> | undefined;
                    users_default?: number | undefined;
                    notifications?: {
                        room: number;
                    } | undefined;
                } | undefined;
                user_id?: string | undefined;
                unsigned?: {
                    transaction_id?: string | undefined;
                    age?: number | undefined;
                    prev_content?: {
                        body: string;
                        msgtype: string;
                        "m.relates_to"?: {
                            event_id: string;
                            rel_type: string;
                        } | undefined;
                    } | {
                        body: string;
                        msgtype: "m.text";
                        format?: string | undefined;
                        formatted_body?: string | undefined;
                    } | {
                        body: string;
                        msgtype: "m.emote";
                        format?: string | undefined;
                        formatted_body?: string | undefined;
                    } | {
                        body: string;
                        msgtype: "m.notice";
                        format?: string | undefined;
                        formatted_body?: string | undefined;
                    } | {
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
                    } | {
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
                    } | {
                        body: string;
                        msgtype: "m.audio";
                        info?: {
                            mimetype?: string | undefined;
                            size?: number | undefined;
                            duration?: number | undefined;
                        } | undefined;
                        url?: string | undefined;
                    } | {
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
                    } | {
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
                    } | {
                        msgtype: "m.key.verification.request";
                        from_device: string;
                        methods: string[];
                        timestamp: number;
                        transaction_id: string;
                        body?: string | undefined;
                        format?: string | undefined;
                        formatted_body?: string | undefined;
                    } | {
                        msgtype: string;
                    } | {
                        ban?: number | undefined;
                        events?: Record<string, number> | undefined;
                        events_default?: number | undefined;
                        invite?: number | undefined;
                        kick?: number | undefined;
                        redact?: number | undefined;
                        state_default?: number | undefined;
                        users?: Record<string, number> | undefined;
                        users_default?: number | undefined;
                        notifications?: {
                            room: number;
                        } | undefined;
                    } | undefined;
                    "m.relations"?: unknown;
                    redacted_because?: {
                        type: string;
                        event_id: string;
                        room_id: string;
                        sender: string;
                        origin_server_ts: number;
                        state_key?: string | undefined;
                        content?: unknown;
                        age?: number | undefined;
                        replaces_state?: string | undefined;
                        prev_content?: {
                            body: string;
                            msgtype: string;
                            "m.relates_to"?: {
                                event_id: string;
                                rel_type: string;
                            } | undefined;
                        } | {
                            body: string;
                            msgtype: "m.text";
                            format?: string | undefined;
                            formatted_body?: string | undefined;
                        } | {
                            body: string;
                            msgtype: "m.emote";
                            format?: string | undefined;
                            formatted_body?: string | undefined;
                        } | {
                            body: string;
                            msgtype: "m.notice";
                            format?: string | undefined;
                            formatted_body?: string | undefined;
                        } | {
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
                        } | {
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
                        } | {
                            body: string;
                            msgtype: "m.audio";
                            info?: {
                                mimetype?: string | undefined;
                                size?: number | undefined;
                                duration?: number | undefined;
                            } | undefined;
                            url?: string | undefined;
                        } | {
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
                        } | {
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
                        } | {
                            msgtype: "m.key.verification.request";
                            from_device: string;
                            methods: string[];
                            timestamp: number;
                            transaction_id: string;
                            body?: string | undefined;
                            format?: string | undefined;
                            formatted_body?: string | undefined;
                        } | {
                            msgtype: string;
                        } | {
                            ban?: number | undefined;
                            events?: Record<string, number> | undefined;
                            events_default?: number | undefined;
                            invite?: number | undefined;
                            kick?: number | undefined;
                            redact?: number | undefined;
                            state_default?: number | undefined;
                            users?: Record<string, number> | undefined;
                            users_default?: number | undefined;
                            notifications?: {
                                room: number;
                            } | undefined;
                        } | undefined;
                        user_id?: string | undefined;
                    } | undefined;
                } | undefined;
            };
            sender: string;
            origin_server_ts: number;
        }[];
        guest_can_join: boolean;
        num_joined_members: number;
        world_readable: boolean;
        avatar_url?: string | undefined;
        join_rule?: string | undefined;
        name?: string | undefined;
        topic?: string | undefined;
        canonical_alias?: string | undefined;
        room_type?: string | undefined;
    }[];
    next_batch?: string | undefined;
}, {
    rooms: {
        room_id: string;
        children_state: {
            type: string;
            state_key: string;
            content: {
                type: string;
                event_id: string;
                room_id: string;
                sender: string;
                origin_server_ts: number;
                state_key?: string | undefined;
                content?: unknown;
                age?: number | undefined;
                replaces_state?: string | undefined;
                prev_content?: {
                    body: string;
                    msgtype: string;
                    "m.relates_to"?: {
                        event_id: string;
                        rel_type: string;
                    } | undefined;
                } | {
                    body: string;
                    msgtype: "m.text";
                    format?: string | undefined;
                    formatted_body?: string | undefined;
                } | {
                    body: string;
                    msgtype: "m.emote";
                    format?: string | undefined;
                    formatted_body?: string | undefined;
                } | {
                    body: string;
                    msgtype: "m.notice";
                    format?: string | undefined;
                    formatted_body?: string | undefined;
                } | {
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
                } | {
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
                } | {
                    body: string;
                    msgtype: "m.audio";
                    info?: {
                        mimetype?: string | undefined;
                        size?: number | undefined;
                        duration?: number | undefined;
                    } | undefined;
                    url?: string | undefined;
                } | {
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
                } | {
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
                } | {
                    msgtype: "m.key.verification.request";
                    from_device: string;
                    methods: string[];
                    timestamp: number;
                    transaction_id: string;
                    body?: string | undefined;
                    format?: string | undefined;
                    formatted_body?: string | undefined;
                } | {
                    msgtype: string;
                } | {
                    ban?: number | undefined;
                    events?: Record<string, number> | undefined;
                    events_default?: number | undefined;
                    invite?: number | undefined;
                    kick?: number | undefined;
                    redact?: number | undefined;
                    state_default?: number | undefined;
                    users?: Record<string, number> | undefined;
                    users_default?: number | undefined;
                    notifications?: {
                        room: number;
                    } | undefined;
                } | undefined;
                user_id?: string | undefined;
                unsigned?: {
                    transaction_id?: string | undefined;
                    age?: number | undefined;
                    prev_content?: {
                        body: string;
                        msgtype: string;
                        "m.relates_to"?: {
                            event_id: string;
                            rel_type: string;
                        } | undefined;
                    } | {
                        body: string;
                        msgtype: "m.text";
                        format?: string | undefined;
                        formatted_body?: string | undefined;
                    } | {
                        body: string;
                        msgtype: "m.emote";
                        format?: string | undefined;
                        formatted_body?: string | undefined;
                    } | {
                        body: string;
                        msgtype: "m.notice";
                        format?: string | undefined;
                        formatted_body?: string | undefined;
                    } | {
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
                    } | {
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
                    } | {
                        body: string;
                        msgtype: "m.audio";
                        info?: {
                            mimetype?: string | undefined;
                            size?: number | undefined;
                            duration?: number | undefined;
                        } | undefined;
                        url?: string | undefined;
                    } | {
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
                    } | {
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
                    } | {
                        msgtype: "m.key.verification.request";
                        from_device: string;
                        methods: string[];
                        timestamp: number;
                        transaction_id: string;
                        body?: string | undefined;
                        format?: string | undefined;
                        formatted_body?: string | undefined;
                    } | {
                        msgtype: string;
                    } | {
                        ban?: number | undefined;
                        events?: Record<string, number> | undefined;
                        events_default?: number | undefined;
                        invite?: number | undefined;
                        kick?: number | undefined;
                        redact?: number | undefined;
                        state_default?: number | undefined;
                        users?: Record<string, number> | undefined;
                        users_default?: number | undefined;
                        notifications?: {
                            room: number;
                        } | undefined;
                    } | undefined;
                    "m.relations"?: unknown;
                    redacted_because?: {
                        type: string;
                        event_id: string;
                        room_id: string;
                        sender: string;
                        origin_server_ts: number;
                        state_key?: string | undefined;
                        content?: unknown;
                        age?: number | undefined;
                        replaces_state?: string | undefined;
                        prev_content?: {
                            body: string;
                            msgtype: string;
                            "m.relates_to"?: {
                                event_id: string;
                                rel_type: string;
                            } | undefined;
                        } | {
                            body: string;
                            msgtype: "m.text";
                            format?: string | undefined;
                            formatted_body?: string | undefined;
                        } | {
                            body: string;
                            msgtype: "m.emote";
                            format?: string | undefined;
                            formatted_body?: string | undefined;
                        } | {
                            body: string;
                            msgtype: "m.notice";
                            format?: string | undefined;
                            formatted_body?: string | undefined;
                        } | {
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
                        } | {
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
                        } | {
                            body: string;
                            msgtype: "m.audio";
                            info?: {
                                mimetype?: string | undefined;
                                size?: number | undefined;
                                duration?: number | undefined;
                            } | undefined;
                            url?: string | undefined;
                        } | {
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
                        } | {
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
                        } | {
                            msgtype: "m.key.verification.request";
                            from_device: string;
                            methods: string[];
                            timestamp: number;
                            transaction_id: string;
                            body?: string | undefined;
                            format?: string | undefined;
                            formatted_body?: string | undefined;
                        } | {
                            msgtype: string;
                        } | {
                            ban?: number | undefined;
                            events?: Record<string, number> | undefined;
                            events_default?: number | undefined;
                            invite?: number | undefined;
                            kick?: number | undefined;
                            redact?: number | undefined;
                            state_default?: number | undefined;
                            users?: Record<string, number> | undefined;
                            users_default?: number | undefined;
                            notifications?: {
                                room: number;
                            } | undefined;
                        } | undefined;
                        user_id?: string | undefined;
                    } | undefined;
                } | undefined;
            };
            sender: string;
            origin_server_ts: number;
        }[];
        guest_can_join: boolean;
        num_joined_members: number;
        world_readable: boolean;
        avatar_url?: string | undefined;
        join_rule?: string | undefined;
        name?: string | undefined;
        topic?: string | undefined;
        canonical_alias?: string | undefined;
        room_type?: string | undefined;
    }[];
    next_batch?: string | undefined;
}>;
export type GetHierarchyResponse = z.infer<typeof GetHierarchyResponse>;
