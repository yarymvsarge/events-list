import React, { useCallback, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';

import { Spinner } from '../../components/Spinner/Spinner';
import { getEvent } from '../../api';
import type { IEvent } from '../../typings';

import './Event.scss';

const Event = () => {
    const { id } = useParams();
    const getEventById = useCallback((id) => getEvent(id), []);
    const { data, isLoading } = useQuery(`event-${id}`, getEventById(id));
    const [event, setEvent] = useState<IEvent>(data || ({} as IEvent));

    useEffect(() => {
        data && setEvent(data);
    }, [data]);

    return (
        <div className="EventPage">
            <Link className="EventPage-BackLink" to="/">
                Back to the list
            </Link>
            {isLoading ? <Spinner /> : null}
            {!isLoading && event.id ? (
                <div className="EventPage-CurrentEvent CurrentEvent">
                    <h3 className="CurrentEvent-Title">
                        {event.name} ({event.shortName})
                    </h3>
                    {event.startTime && (
                        <p className="CurrentEvent-StartTime">
                            Start time: {event.startTime.toLocaleString()}
                        </p>
                    )}
                </div>
            ) : null}
        </div>
    );
};

export default Event;
