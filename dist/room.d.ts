import { Client } from "./client";
import { ClientEventOutput, ErrorOutput, Params, State } from ".";
export declare class Room {
    roomId: string;
    client: Client;
    name?: {
        name: string;
    };
    constructor(roomId: string, client: Client);
    get(endpoint: string, params?: Params): Promise<any>;
    getName(): Promise<{
        name: string;
    } | ErrorOutput>;
    getMembers(): Promise<ErrorOutput | {
        chunk: ClientEventOutput[];
    }>;
    getState(): Promise<State | ErrorOutput>;
    getMessages(params: Record<string, any>): Promise<{
        chunk: ClientEventOutput[];
    } | ErrorOutput>;
    getEvent(eventId: string): Promise<ClientEventOutput | ErrorOutput>;
    getRelations(eventId: string, params: Record<string, any>, relType?: string, eventType?: string): Promise<any>;
    getStateEvent(type: string, stateKey?: string): Promise<ClientEventOutput | ErrorOutput | undefined>;
    getPowerLevels(): Promise<any | ErrorOutput>;
    setEventPowerLevel(eventType: string, powerLevel: number): Promise<any | ErrorOutput>;
    getUserPowerLevel(): Promise<number>;
    setUserPowerLevel(userId: string, powerLevel: number): Promise<any>;
    getHierarchy(opts?: {
        max_depth?: number;
        limit?: number;
        from?: string;
        suggested_only?: boolean;
    }): Promise<{
        [x: string]: any;
    }[] | undefined>;
    isUserModerator(userId?: string): Promise<boolean>;
    getMessagesAsyncGenerator(direction?: "f" | "b", limit?: number): AsyncGenerator<any, void, any>;
    sendMessage(body: any): Promise<{
        event_id: string;
    }>;
    sendEvent(type: string, body: any): Promise<{
        event_id: string;
    }>;
    sendStateEvent(type: string, body: any, stateKey?: string): Promise<{
        event_id: string;
    }>;
    setName(name: string): Promise<void>;
    setTopic(topic: string): Promise<void>;
    redactEvent(eventId: string): Promise<void>;
    getAvatarMxc(): Promise<string>;
    getAliases(): Promise<string[] | ErrorOutput>;
    getCanonicalAlias(): Promise<{
        alias: string;
    } | ErrorOutput>;
    setAlias(alias: string): Promise<any>;
    deleteAlias(alias: string): Promise<any>;
    static sortEvents(events: ClientEventOutput[]): Record<string, ClientEventOutput[]>;
    static replaceEditedMessages(messages: ClientEventOutput[]): ({
        sender: string;
        room_id: string;
        event_id: string;
        origin_server_ts: number;
        state_key?: string | undefined;
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
    } | {
        type: "m.room.member";
        content: {
            membership: string;
            displayname?: string | undefined;
            avatar_url?: string | undefined;
            is_direct?: boolean | undefined;
            third_party_invite?: {
                display_name: string;
                signed: {
                    mxid: string;
                    signatures: {
                        "ed25519:": string;
                    };
                    token: string;
                };
            } | undefined;
        };
    } | {
        type: "m.room.create";
        content: {
            creator: string;
            room_version?: string | undefined;
            predecessor?: {
                room_id: string;
                event_id: string;
            } | undefined;
        };
    } | {
        type: "m.room.join_rules";
        content: {
            join_rule: string;
        };
    } | {
        type: "m.room.name";
        content: {
            name: string;
        };
    } | {
        type: "m.room.topic";
        content: {
            topic: string;
        };
    } | {
        type: "m.room.avatar";
        content: {
            url?: string | undefined;
        };
    } | {
        type: "m.room.canonical_alias";
        content: {
            alias: string;
        };
    } | {
        type: "m.room.aliases";
        content: {
            aliases: string[];
        };
    } | {
        type: "m.room.redaction";
        content: {
            reason?: string | undefined;
        };
    }) & {
        unsigned?: {
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
            } | undefined;
            transaction_id?: string | undefined;
            redacted_because?: {
                sender: string;
                room_id: string;
                event_id: string;
                origin_server_ts: number;
                state_key?: string | undefined;
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
                } | undefined;
                user_id?: string | undefined;
            } | undefined;
            "m.relations"?: {
                [x: string]: {} | {}[];
            } | undefined;
        } | undefined;
    }))[];
    static deleteEditedMessages(messages: ClientEventOutput[]): ({
        sender: string;
        room_id: string;
        event_id: string;
        origin_server_ts: number;
        state_key?: string | undefined;
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
    } | {
        type: "m.room.member";
        content: {
            membership: string;
            displayname?: string | undefined;
            avatar_url?: string | undefined;
            is_direct?: boolean | undefined;
            third_party_invite?: {
                display_name: string;
                signed: {
                    mxid: string;
                    signatures: {
                        "ed25519:": string;
                    };
                    token: string;
                };
            } | undefined;
        };
    } | {
        type: "m.room.create";
        content: {
            creator: string;
            room_version?: string | undefined;
            predecessor?: {
                room_id: string;
                event_id: string;
            } | undefined;
        };
    } | {
        type: "m.room.join_rules";
        content: {
            join_rule: string;
        };
    } | {
        type: "m.room.name";
        content: {
            name: string;
        };
    } | {
        type: "m.room.topic";
        content: {
            topic: string;
        };
    } | {
        type: "m.room.avatar";
        content: {
            url?: string | undefined;
        };
    } | {
        type: "m.room.canonical_alias";
        content: {
            alias: string;
        };
    } | {
        type: "m.room.aliases";
        content: {
            aliases: string[];
        };
    } | {
        type: "m.room.redaction";
        content: {
            reason?: string | undefined;
        };
    }) & {
        unsigned?: {
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
            } | undefined;
            transaction_id?: string | undefined;
            redacted_because?: {
                sender: string;
                room_id: string;
                event_id: string;
                origin_server_ts: number;
                state_key?: string | undefined;
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
                } | undefined;
                user_id?: string | undefined;
            } | undefined;
            "m.relations"?: {
                [x: string]: {} | {}[];
            } | undefined;
        } | undefined;
    }))[];
}
