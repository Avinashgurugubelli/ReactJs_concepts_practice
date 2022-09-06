import React, { Component } from 'react'
import CounterFunctionalHOC from './CounterFunctionalHOC';

// export class ThirdCounterComponent extends Component {
//     render() {
//         const { count, incrementCounter } = this.props;
//         return (

//             <div style={{ border: "solid 2px red", padding: "2rem" }}>
//                 <h3>counter value: {count}</h3>
//                 <button className="btn btn-primary" onClick={incrementCounter}>Increment by 10</button>
//                 <br />
//                 <br />
//                 <h6>Third counter - using the Functional higher order component</h6>

//             </div>
//         )
//     }
// }

function ThirdCounterComponent(props) {
    const { count, incrementCounter } = props;
    return (
        <div style={{ border: "solid 2px red", padding: "2rem" }}>
            <h3>counter value: {count}</h3>
            <button className="btn btn-info" onClick={incrementCounter}>Increment by 10</button>
            <br />
            <br />
            <h6 style={{ color: "slateblue" }}>Third counter (functional component) - using the Functional higher order component</h6>

        </div>
    )
}

// Here ThirdCounterComponent -> can be a class or functional component
const ThirdCounter = CounterFunctionalHOC(ThirdCounterComponent, 10);
export default ThirdCounter;
