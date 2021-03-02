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
                            <a className="dropdown-item" href="/props-and-state">1. Prop and state</a>
                            <a className="dropdown-item" href="/event-binding">2. Event binding</a>
                            <a className="dropdown-item" href="/component-communication">3. Component communication via Props</a>
                            <a className="dropdown-item" href="/conditional-rendering">4. Conditional rendering</a>
                            <a className="dropdown-item" href="/list-rendering">5. List rendering</a>
                            <a className="dropdown-item" href="/form-basics">6. Basics of forms</a>
                            <a className="dropdown-item" href="/refs-demo">7. Refs demo</a>
                            <a className="dropdown-item" href="/portal-demo">8. Portal demo</a>
                        </div>
                    </li>
                </ul>
            </nav>
        </>
    );
}

// Traditionally, if only a single item is being exported it is declared as the default
export default PageHeader;