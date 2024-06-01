import { Client } from "./client";
import { State } from ".";
import { ErrorOutput, Params } from "./types/client";
import { ClientEventBaseOutput, ClientEventOutput } from "./types/event";
import { SpaceHierarchyRoomsChunk } from "./types/hierarchy";
export declare class Room {
    roomId: string;
    client: Client;
    name?: string;
    constructor(roomId: string, client: Client);
    get(endpoint: string, params?: Params): Promise<unknown>;
    getName(): Promise<{
        name: string;
    } | ErrorOutput>;
    getMembers(): Promise<ErrorOutput | {
        chunk: ClientEventBaseOutput[];
    }>;
    getState(): Promise<State | ErrorOutput>;
    getMessages(params: {
        limit?: number;
        dir?: "b" | "f";
    }): Promise<{
        chunk: ClientEventOutput[];
    } | ErrorOutput>;
    getEvent(eventId: string): Promise<ClientEventOutput | ErrorOutput>;
    getRelations(eventId: string, params: Params, relType?: string, eventType?: string): Promise<unknown>;
    getStateEvent(type: string, stateKey?: string): Promise<ClientEventOutput | ErrorOutput | undefined>;
    getPowerLevels(): Promise<{
        users: Record<string, number>;
        events: Record<string, number>;
        state_default: number;
    } | ErrorOutput>;
    setEventPowerLevel(eventType: string, powerLevel: number): Promise<unknown | ErrorOutput>;
    getUserPowerLevel(): Promise<number | ErrorOutput>;
    setUserPowerLevel(userId: string, powerLevel: number): Promise<unknown>;
    getHierarchy(opts?: {
        max_depth?: number;
        limit?: number;
        from?: string;
        suggested_only?: boolean;
    }): Promise<ErrorOutput | SpaceHierarchyRoomsChunk[]>;
    isUserModerator(userId?: string): Promise<boolean>;
    getMessagesAsyncGenerator(direction?: "f" | "b", limit?: number): AsyncGenerator<any, void, any>;
    sendMessage(body: any): Promise<{
        event_id: string;
    } | ErrorOutput>;
    sendEvent(type: string, body: any): Promise<{
        event_id: string;
    } | ErrorOutput>;
    sendStateEvent(type: string, body: any, stateKey?: string): Promise<{
        event_id: string;
    } | ErrorOutput>;
    setName(name: string): Promise<unknown | ErrorOutput>;
    setTopic(topic: string): Promise<unknown | ErrorOutput>;
    redactEvent(eventId: string): Promise<unknown | ErrorOutput>;
    getAvatarMxc(): Promise<string | ErrorOutput>;
    getAliases(): Promise<string[] | ErrorOutput>;
    getCanonicalAlias(): Promise<{
        alias: string;
    } | ErrorOutput>;
    setAlias(alias: string): Promise<unknown>;
    deleteAlias(alias: string): Promise<{} | ErrorOutput>;
    static sortEvents(events: ClientEventOutput[]): Record<string, ClientEventOutput[]>;
    static replaceEditedMessages(messages: ClientEventOutput[]): {
        type: string;
        sender: string;
        room_id: string;
        event_id: string;
        origin_server_ts: number;
        content?: unknown;
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
            transaction_id?: string | undefined;
            "m.relations"?: unknown;
            redacted_because?: {
                type: string;
                sender: string;
                room_id: string;
                event_id: string;
                origin_server_ts: number;
                content?: unknown;
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
    }[];
    static deleteEditedMessages(messages: ClientEventOutput[]): {
        type: string;
        sender: string;
        room_id: string;
        event_id: string;
        origin_server_ts: number;
        content?: unknown;
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
            transaction_id?: string | undefined;
            "m.relations"?: unknown;
            redacted_because?: {
                type: string;
                sender: string;
                room_id: string;
                event_id: string;
                origin_server_ts: number;
                content?: unknown;
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
    }[];
}
