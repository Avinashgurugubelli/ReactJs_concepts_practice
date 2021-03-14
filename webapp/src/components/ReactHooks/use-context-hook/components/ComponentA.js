import React from 'react'
import ComponentB from './ComponentB'

import '../../../../commonStyles.scss';

export default function ComponentA() {
    return (
        <div className="component-a-box">
            <h3>I am component A</h3>
            <ComponentB></ComponentB>
        </div>
    )
}
