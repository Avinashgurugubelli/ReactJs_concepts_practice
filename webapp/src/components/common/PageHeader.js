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
                    {/* <li className="nav-item">
                        <a className="nav-link" href="/courses">Courses</a>
                    </li> */}
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle"  href="#" data-toggle="dropdown">Fundamentals practice</a>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="/props-and-state">1. Prop and state</a>
                            <a className="dropdown-item" href="/event-binding">2. Event binding</a>
                            <a className="dropdown-item" href="/component-communication">3. Component communication via Props</a>
                            <a className="dropdown-item" href="/conditional-rendering">4. Conditional rendering</a>
                            <a className="dropdown-item" href="/list-rendering">5. List rendering</a>
                            <a className="dropdown-item" href="/form-basics">6. Basics of forms</a>
                            <a className="dropdown-item" href="/refs-demo">7. Refs and forwardRef demo</a>
                            <a className="dropdown-item" href="/portal-demo">8. Portal demo</a>
                            <a className="dropdown-item" href="/hoc-demo">9. Higher order components (HOC)</a>
                            <a className="dropdown-item" href="/render-props-demo">10. Render props</a>
                            <a className="dropdown-item" href="/context-demo">11. Context demo</a>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle"  href="#" data-toggle="dropdown">React hooks practice</a>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="/use-state-hook-demo">1. Using State Hook</a>
                            <a className="dropdown-item" href="/use-effect-hook-demo">2. Using Effect Hook</a>
                            <a className="dropdown-item" href="/use-context-hook-demo">3. Using Context Hook</a>
                            <a className="dropdown-item" href="/use-reducer-hook-demo">4. Using Reducer Hook</a>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle"  href="#" data-toggle="dropdown">React redux practice</a>
                        <div className="dropdown-menu">
                        <a className="dropdown-item" href="/react-redux-example-1">1. React redux example 1</a>
                         
                        </div>
                    </li>
                </ul>
            </nav>
        </>
    );
}

// Traditionally, if only a single item is being exported it is declared as the default
export default PageHeader;