/** Popular API response fields */
export interface IPopularEventsResponse {
    popular_event_ids: string[];
}

/** Events API response fields */
export interface IEventsResponse {
    events: IEventResponse[];
}

/** Using fields from the API response */
export interface IEventResponse {
    id: string;
    name: string;
    start_datetime?: string;
    short_name?: string;
}

/** Transformed API response fields */
export interface IEvent {
    id: string;
    name: string;
    startTime?: Date | string;
    shortName?: string;
}
