import { IEvent, IEventsResponse } from '../typings';
import { API_PREFIX, REQUEST_OPTIONS } from './const';

export const getEvent = (id: string) => async (): Promise<IEvent> => {
    const eventResponse = await fetch(
        `${API_PREFIX}/events/${id}`,
        REQUEST_OPTIONS
    );
    const parsedEventResponse: IEventsResponse = await eventResponse.json();
    const event = parsedEventResponse?.events?.[0];

    if (!event) {
        return {} as IEvent;
    }

    return {
        id: event.id,
        name: event.name,
        startTime: event.start_datetime && new Date(event.start_datetime),
        shortName: event.short_name,
    };
};
