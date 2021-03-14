import React, { Component } from 'react'


import '../common/commonStyles.scss';
import { UserConsumer } from '../SampleContext';

class ComponentC extends Component {
    render() {
        return (
            <div className="component-c-box">
                <h3>I am component C</h3>
                <UserConsumer>
                    {
                        (userName) => {
                            return <h2>Hello, <span style={{color: "#b30000"}}>{userName ? userName : "Guest"}</span></h2>
                        }
                    }
                </UserConsumer>
            </div>
        )
    }
}

export default ComponentC
