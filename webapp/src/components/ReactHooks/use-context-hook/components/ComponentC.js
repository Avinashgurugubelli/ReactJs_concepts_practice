import React, { useContext } from 'react'
import { userContext } from '../UserContext'

import '../../../../commonStyles.scss';

export default function ComponentC() {
    const userName = useContext(userContext);
    return (
        <div className="component-c-box">
         <h3>I am component C</h3>
         <h4>Hello, <span className="text-success">{userName ? userName : "Guest"}</span></h4>
        </div>
    )
}
