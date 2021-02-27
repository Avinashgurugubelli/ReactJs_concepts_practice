// React imports
import React from 'react';

// Custom imports
import { GreetCard } from './practice/prop-state/components/greet-card/greet-card';
import AboutPage from './AboutPage';
import Courses from './courses/Courses';
import CoursesViaClassComponent from './courses/CoursesViaClassComponent';
import CoursesViaFunctionComponent from './courses/CoursesViaFunctionComponent';
import EventBindHost from './practice/event-binding/components/event-bind-host/event-bind-host';
import HomePage from './HomePage';
import ComponentCommunicationHost from './practice/components-communication/ComponentCommunicationHost';

function App() {
    const route = window.location.pathname;
    if (route === '/about') {
        return <AboutPage />;
    }
    if (route === '/courses') {
        return <Courses />;
    }
    if (route === '/CoursesViaClassComponent') {
        return <CoursesViaClassComponent />;
    }
    if (route === '/CoursesViaFunctionComponent') {
        return <CoursesViaFunctionComponent />;
    }
    if (route === '/props-and-state') {
        return <GreetCard/>;
    }
    if (route === '/event-binding') {
        return <EventBindHost/>;
    }
    if (route === '/component-communication') {
        return <ComponentCommunicationHost/>;
    }
    else {
        return <HomePage />;
    }
}

export default App; 