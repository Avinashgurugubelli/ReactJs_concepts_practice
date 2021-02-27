import React from 'react';

import PageHeader from './common/PageHeader';

function HomePage() {
    return (
        <>
            <PageHeader />
            <div className="jumbotron">
                <h1>Welcome to React web development</h1>
            </div>
        </>
    );
}

// Traditionally, if only a single item is being exported it is declared as the default
export default HomePage;