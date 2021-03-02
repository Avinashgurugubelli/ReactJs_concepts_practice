import React, { Component } from 'react'
import CounterHOC from './CounterHOC';

class SecondCounterComponent extends Component {
    render() {
        const { count, incrementCounter } = this.props;
        return (

            <div>
                <h3>counter value: {count}</h3>
                <button className="btn btn-success" onClick={incrementCounter}>Increment by 5</button>
                
            </div>
        )
    }
}

const SecondCounter = CounterHOC(SecondCounterComponent, 5);
export default SecondCounter;