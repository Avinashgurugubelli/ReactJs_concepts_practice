import React, { Component } from 'react';


// This function takes a component..and other parameters
function CounterHOC(WrapperComponent, stepValue) {
    // ...and returns another component...
    return class counterHOC extends Component {

        constructor(props) {
            super(props)
        
            this.state = {
                 counter: 0
            }
        }

        incrementHandler = () => {
            this.setState((prevState) => {
                return {counter: prevState.counter + stepValue}
            })
        }
        
        render() {
            return (
                <WrapperComponent count={this.state.counter} incrementCounter={this.incrementHandler}></WrapperComponent>
            )
        }
    }
}

export default CounterHOC;
