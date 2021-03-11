import React, { Component } from 'react'

export class ClassCounter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    incrementCount = () => {
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        });
    }

    decrementCount = () => {
        this.setState(prevState => {
            return {
                count: prevState.count - 1
            }
        });
    }

    reset = () => {
        this.setState({
            count: 0
        })
    }

    render() {
        const { count } = this.state;
        return (
            <React.Fragment>
                <h3>I am class component</h3>
                <h5>Counter: {count}</h5>
                <div className="row">
                    <div className="col-3">
                        <button className="btn btn-success" onClick={this.incrementCount}>Increment by 1</button>
                    </div>
                    <div className="col-3">
                        <button className="btn btn-warning" onClick={this.decrementCount} disabled={count <= 0}>Decrement by 1</button>
                    </div>
                    <div className="col-3">
                        <button className="btn btn-danger" onClick={this.reset}>Reset</button>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default ClassCounter
