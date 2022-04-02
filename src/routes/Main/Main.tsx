import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';

import { Spinner } from '../../components/Spinner/Spinner';
import { getList } from '../../api';

import './Main.scss';

const Main = () => {
    const { data } = useQuery('events', getList);

    const [events, setEvents] = useState(data || []);

    useEffect(() => {
        data && setEvents(data);
    }, [data]);

    return (
        <div className="Main">
            <h3>Popular events</h3>
            {events.length ? (
                <ul className="EventList">
                    {events.map(({ id, name }) => (
                        <li key={id} className="Event">
                            <Link className="Event-Link" to={id}>
                                {name}
                            </Link>
                        </li>
                    ))}
                </ul>
            ) : (
                <Spinner />
            )}
        </div>
    );
};

export default Main;
