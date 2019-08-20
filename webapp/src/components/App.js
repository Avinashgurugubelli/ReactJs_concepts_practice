// React imports
import React from 'react';

// Custom imports
import AboutPage from './AboutPage';
import Courses from './courses/Courses';
import CoursesViaClassComponent from './courses/CoursesViaClassComponent';
import CoursesViaFunctionComponent from './courses/CoursesViaFunctionComponent';
import HomePage from './HomePage';

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
    else {
        return <HomePage />;
    }
}

export default App; 