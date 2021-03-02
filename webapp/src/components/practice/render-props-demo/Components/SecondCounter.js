import React, { Component } from 'react'

export class SecondCounter extends Component {
    render() {
        const { count, incrementCount } = this.props;
        return (

            <div>
                <h3>counter value: {count}</h3>
                <button className="btn btn-success" onClick={incrementCount}>Increment</button>
                
            </div>
        )
    }
}

export default SecondCounter
