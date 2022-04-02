import React, { Suspense, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { QueryClientProvider } from 'react-query';

import App from './App';
import { Spinner } from './components/Spinner/Spinner';
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary';
import { queryClient } from './api';

import './index.scss';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
    <HashRouter>
        <Suspense fallback={<Spinner />}>
            <StrictMode>
                <QueryClientProvider client={queryClient} contextSharing>
                    <ErrorBoundary>
                        <App />
                    </ErrorBoundary>
                </QueryClientProvider>
            </StrictMode>
        </Suspense>
    </HashRouter>
);
