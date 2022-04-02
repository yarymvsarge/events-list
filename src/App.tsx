import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Header } from './components/Header/Header';

// laziness for different page bundles
const Main = lazy(() => import('./routes/Main/Main'));
const Event = lazy(() => import('./routes/Event/Event'));

const App = () => {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path=":id" element={<Event />} />
            </Routes>
        </div>
    );
};

export default App;
