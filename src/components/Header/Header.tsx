import React from 'react';
import './Header.scss';

export const Header = () => {
    return (
        <header className="Header">
            <h1 className="Header-Title">Football odds</h1>
            <p className="Header-Description">
                Trade and bet on a variety of football betting markets,
                including those on the Premier League, Champions League, La
                Liga, Bundesliga and MLS.
            </p>
        </header>
    );
};
