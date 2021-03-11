import React, { Component } from 'react'
import ComponentC from './ComponentC'

import '../common/commonStyles.scss';

class ComponentB extends Component {
    render() {
        return (
            <div className="component-b-box">
                <h3>I am component B</h3>
                <ComponentC></ComponentC>
            </div>
        )
    }
}

export default ComponentB
