import React, { Component } from 'react'

export class ClassTimer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        console.log("class timer component mounted.");
        this.interval = setInterval(this.tick, 1000);
    }

    componentWillUnmount() {
        console.log("class timer component un mounted.");
        clearInterval(this.interval, this.tick);
    }


    tick = () => {
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        })
    }


    render() {
        return (
            <div>
                <h3>I am a class timer component</h3>
                <h1 className="text-success">Timer: {this.state.count}</h1>
            </div>
        )
    }
}

export default ClassTimer
