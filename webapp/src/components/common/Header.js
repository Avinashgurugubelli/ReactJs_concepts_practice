import React from 'react';

function PageHeader() {
    return (
        <>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <a className="navbar-brand" href="#">React Web Development</a>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="/home">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/about">About React</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/courses">Courses</a>
                </li>
            </ul>
        </nav>
        </>
    );
}

// Traditionally, if only a single item is being exported it is declared as the default
export default PageHeader;