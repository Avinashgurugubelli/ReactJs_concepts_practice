// React imports
import React from 'react';

// Custom imports
import { GreetCard } from './practice/prop-state/components/greet-card/greet-card';
import AboutPage from './AboutPage';
import ComponentCommunicationHost from './practice/components-communication/ComponentCommunicationHost';
import ConditionalRenderingComponent from './practice/conditional-rendering/conditional-rendering-component';
import ContextHost from './practice/context/ContextHost';
import Courses from './courses/Courses';
import CoursesViaClassComponent from './courses/CoursesViaClassComponent';
import CoursesViaFunctionComponent from './courses/CoursesViaFunctionComponent';
import EventBindHost from './practice/event-binding/components/event-bind-host/event-bind-host';
import HOCHost from './practice/higher-order-components/HOCHost';
import HomePage from './HomePage';
import ListRendererComponent from './practice/list-rendering/components/list-renderer/list-renderer-component';
import PortalDemoHost from './practice/portal-demo/PortalDemoHost';
import RefDemoHost from './practice/ref-demo/RefDemoHost';
import RenderPropsHost from './practice/render-props-demo/RenderPropsHost';
import SampleForm from './practice/forms-basics/sample-form';
import UseStateHookHost from './ReactHooks/use-state-hook/UseStateHookHost';
import UseEffectHookHost from './ReactHooks/use-effect-hook/UseEffectHookHost';
import UseContextHookHost from './ReactHooks/use-context-hook/UseContextHookHost';
import ReducerHookHost from './ReactHooks/use-reducer-hook/ReducerHookHost';
import ReactReduxHost from './reduxPractice/ReactReduxHost';

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
        return <GreetCard />;
    }
    if (route === '/event-binding') {
        return <EventBindHost />;
    }
    if (route === '/component-communication') {
        return <ComponentCommunicationHost />;
    }
    if (route === '/conditional-rendering') {
        return <ConditionalRenderingComponent />;
    }
    if (route === '/list-rendering') {
        return <ListRendererComponent />;
    }
    if (route === '/form-basics') {
        return <SampleForm />;
    }
    if (route === '/refs-demo') {
        return <RefDemoHost />
    }
    if (route === '/portal-demo') {
        return <PortalDemoHost />
    }
    if (route === '/hoc-demo') {
        return <HOCHost />
    }
    if (route === '/render-props-demo') {
        return <RenderPropsHost />
    }
    if (route === '/context-demo') {
        return <ContextHost />
    }

    // react hooks demo
    if (route === '/use-state-hook-demo') {
        return <UseStateHookHost />
    }
    if (route === '/use-effect-hook-demo') {
        return <UseEffectHookHost />
    }
    if (route === "/use-context-hook-demo") {
        return <UseContextHookHost />
    }

    if (route ==="/use-reducer-hook-demo") {
        return <ReducerHookHost />
    }
    if (route ==="/react-redux-example-1") {
        return <ReactReduxHost />
    }
    else {
        return <HomePage />;
    }
}

export default App;