import { IEvent, IEventsResponse, IPopularEventsResponse } from '../typings';
import { API_PREFIX, REQUEST_OPTIONS } from './const';

export const getList = async (): Promise<IEvent[]> => {
    const popularEventsResponse = await fetch(
        `${API_PREFIX}/popular/event_ids/sport/football/`,
        REQUEST_OPTIONS
    );
    const parsedPopularEvents: IPopularEventsResponse =
        await popularEventsResponse.json();
    const eventIds = parsedPopularEvents?.popular_event_ids.join(',');

    if (!eventIds) {
        return [];
    }

    const eventListResponse = await fetch(
        `${API_PREFIX}/events/${eventIds}`,
        REQUEST_OPTIONS
    );
    const parsedEventList: IEventsResponse = await eventListResponse.json();

    return parsedEventList.events.map(({ id, name }) => {
        // leave only necessary data for UI
        return { id, name };
    });
};
