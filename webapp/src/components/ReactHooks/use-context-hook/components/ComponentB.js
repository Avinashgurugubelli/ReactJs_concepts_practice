import React from 'react'
import ComponentC from './ComponentC'

import '../../../../commonStyles.scss';

export default function ComponentB() {
    return (
        <div className="component-b-box">
            <h3>I am component B</h3>
            <ComponentC></ComponentC>
        </div>
    )
}
