import { Client } from "./client";
import { ClientEventOutput, Params, Timeline } from ".";
export declare class Room {
    roomId: string;
    client: Client;
    name?: {
        name: string;
    };
    timeline?: Timeline;
    constructor(roomId: string, client: Client);
    get(endpoint: string, params?: Params): Promise<any>;
    getName(): Promise<unknown>;
    getState(): Promise<any>;
    getMessages(params: Record<string, any>): Promise<any>;
    getEvent(eventId: string): Promise<ClientEventOutput>;
    getRelations(eventId: string, params: Record<string, any>, relType?: string, eventType?: string): Promise<any>;
    getStateEvent(type: string, stateKey?: string): Promise<any>;
    getPowerLevels(): Promise<any>;
    setEventPowerLevel(eventType: string, powerLevel: number): Promise<any>;
    getUserPowerLevel(): Promise<number>;
    getHierarchy(): Promise<{
        [x: string]: any;
    }[]>;
    isUserModerator(): Promise<boolean>;
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
    getRoomAliases(): Promise<string[]>;
    setRoomAlias(alias: string): Promise<any>;
    deleteRoomAlias(alias: string): Promise<any>;
    static sortEvents(events: ClientEventOutput[]): Record<string, ClientEventOutput[]>;
    static replaceEditedMessages(messages: ClientEventOutput[]): ({
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
    }))[];
    static deleteEditedMessages(messages: ClientEventOutput[]): ({
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
    }))[];
}
