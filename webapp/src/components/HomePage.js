import React from 'react';


function HomePage() {
    return (
        <div className="jumbotron">
            <h1>Welcome to web development using React</h1>
            <p>Keep coding</p>
            <a href="/home">Home</a> |
            <a href="/about">About</a>
        </div>
    );
}

// Traditionally, if only a single item is being exported it is declared as the default
export default HomePage;