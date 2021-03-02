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
import ConditionalRenderingComponent from './practice/conditional-rendering/conditional-rendering-component';
import ListRendererComponent from './practice/list-rendering/components/list-renderer/list-renderer-component';
import SampleForm from './practice/forms-basics/sample-form';
import RefDemoHost from './practice/ref-demo/RefDemoHost';
import PortalDemoHost from './practice/portal-demo/PortalDemoHost';
import HOCHost from './practice/higher-order-components/HOCHost';
import RenderPropsHost from './practice/render-props-demo/RenderPropsHost';

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
    if (route === '/conditional-rendering') {
        return <ConditionalRenderingComponent/>;
    }
    if (route === '/list-rendering') {
        return <ListRendererComponent/>;
    }
    if (route === '/form-basics') {
        return <SampleForm/>;
    }
    if(route === '/refs-demo') {
        return <RefDemoHost/>
    }
    if(route === '/portal-demo') {
        return <PortalDemoHost/>
    }
    if(route === '/hoc-demo') {
        return <HOCHost/>
    }
    if(route === '/render-props-demo') {
        return <RenderPropsHost/>
    }
    else {
        return <HomePage />;
    }
}

export default App; 