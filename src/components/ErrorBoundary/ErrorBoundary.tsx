import React, { Component } from 'react';

import './ErrorBoundary.scss';
import { Link } from 'react-router-dom';

interface IErrorBoundaryState {
    hasError: boolean;
}

export class ErrorBoundary extends Component<{}, IErrorBoundaryState> {
    constructor(props: {}) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: string) {
        return { hasError: true };
    }

    render() {
        if (this.state.hasError) {
            // Simple reload message
            return (
                <div className="Error">
                    <h1 className="Error-Message">
                        Something went wrong. Please, reload the page.
                    </h1>
                    <Link to="/">Back to the main page</Link>
                </div>
            );
        }

        return this.props.children;
    }
}
