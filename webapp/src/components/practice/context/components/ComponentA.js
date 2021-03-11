import React, { Component } from 'react'
import ComponentB from './ComponentB'

import '../common/commonStyles.scss';

class ComponentA extends Component {
    render() {
        return (
            <div className="component-a-box">
                   <h3>I am component A</h3>
                <ComponentB></ComponentB>
            </div>
        )
    }
}

export default ComponentA
