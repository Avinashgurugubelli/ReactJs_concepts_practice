import React, { Component } from 'react'

export default class Counter extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    incrementCount() {
        this.setState({
            count: this.state.count + 1
        });
    }

    funcIncrement() {
        this.setState((previousState, props) => ({
            count: previousState.count + 1
        }));
    }

    /**
     * use case: Increment the counter by five time;
     * If we do this way, the react will club all the set state functions in one for better performance.
     * How may times we call the function, only one time it will be executed, so the counter will be updated only once.
     * To achieve the desired functionality, pass the function as argument for set state instead of object.
     */
    incrementFiveTimes() {
        this.incrementCount();
        this.incrementCount();
        this.incrementCount();
        this.incrementCount();
        this.incrementCount();
    }

    doIncrementBuFiveTime() {
       this.funcIncrement();
       this.funcIncrement();
       this.funcIncrement();
       this.funcIncrement();
       this.funcIncrement();
    }

    render() {
        return (
            <div className="container">
                <h6>Increment counter value: {this.state.count}</h6>
                <button type="button" onClick={() => this.doIncrementBuFiveTime()} class="btn btn-primary">increment</button>
            </div>
        )
    }
}
