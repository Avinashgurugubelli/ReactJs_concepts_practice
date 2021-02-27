import React from 'react';
import Counter from '../counter/counter';

export class Message extends React.Component {

    // empty constructor is optional

    constructor() {
        super();
        this.state = {
            message: 'Welcome visitor'
        }
    }

    // mutating state object
    changeMessage() {
        this.setState({
            message: 'Thank you for subscribing !!!'
        })
    }

    render() {
        return (
            <React.Fragment>
                <h1>{this.state.message}</h1>
                <div class="row">
                    <div class="col"> <button onClick={() => this.changeMessage()} className="btn btn-primary">Subscribe</button></div>
                    <div class="col"> <Counter /></div>
                </div>
            </React.Fragment>
        )
    }
}