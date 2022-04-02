import React from 'react';
import './Spinner.scss';

export const Spinner = () => {
    return (
        <div className="Spinner">
            <span className="Spinner-Circle" />
            <p className="Spinner-Message">Loading</p>
        </div>
    );
};
