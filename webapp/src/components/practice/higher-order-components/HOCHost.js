import React, { Component } from 'react'
import PageHeader from '../../common/PageHeader'
import FirstCounter from './components/FirstCounter'
import SecondCounter from './components/SecondCounter'
import ThirdCounter from './components/ThirdCounter'

export class HOCHost extends Component {
    render() {
        return (
            <React.Fragment>
                <PageHeader></PageHeader>
                <div className="jumbotron">
                    <p>
                        A higher-order component (HOC) is an advanced technique in React for reusing component logic.
                        HOCs are not part of the React API, per se. They are a pattern that emerges from React’s compositional nature
                    </p>
                    <p> Concretely, a higher-order component is a function that takes a component and returns a new component.</p>
                    <code>const EnhancedComponent = higherOrderComponent(WrappedComponent);</code>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col"><FirstCounter /></div>
                        <div className="col"><SecondCounter /></div>
                    </div>
                    <hr />
                    <div className='row'>
                        <div className="col-6"><ThirdCounter /></div>
                    </div>
                </div>
            </React.Fragment>

        )
    }
}

export default HOCHost
