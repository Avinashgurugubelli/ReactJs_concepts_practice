import React, { Component } from 'react'

class FirstCounter extends Component {
    render() {
        const { count, incrementCount } = this.props;
        return (

            <div>
                 <h3>counter value: {count}</h3>
                <button className="btn btn-primary" onClick={incrementCount}>Increment</button>
               
            </div>
        )
    }
}

export default FirstCounter
