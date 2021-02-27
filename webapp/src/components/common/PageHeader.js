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
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle"  href="#" data-toggle="dropdown">Practice</a>
                        <div className="dropdown-menu">
                            <a class="dropdown-item" href="/props-and-state">1. Prop and state</a>
                            <a class="dropdown-item" href="/event-binding">2. Event binding</a>
                            <a class="dropdown-item" href="/component-communication">3. Component communication via Props</a>
                        </div>
                    </li>
                </ul>
            </nav>
        </>
    );
}

// Traditionally, if only a single item is being exported it is declared as the default
export default PageHeader;