import React, { Component } from 'react'
import CounterHOC from './CounterHOC';

export class FirstCounterComponent extends Component {
    render() {
        const { count, incrementCounter } = this.props;
        return (

            <div>
                 <h3>counter value: {count}</h3>
                <button className="btn btn-primary" onClick={incrementCounter}>Increment by 1</button>
               
            </div>
        )
    }
}

const FirstCounter = CounterHOC(FirstCounterComponent, 1);
export default FirstCounter;
