
import React, { Component } from 'react'

export default class EventBinding extends Component {

    constructor() {
        super();
        this.state = {
            clickMsg: "",
            goodByeMsg: "",
            helloMsg: "",
            welcomeMsg: "",
        };

        // 3. recommended approach by react -> binding this event in constructor, as it this will bind only once during initialization. so duplicate copies
        this.sayGoodBye = this.sayGoodBye.bind(this);

    }


    sayHello() {
        this.setState({
            helloMsg: 'Hello ' + this.props.name
        });
    }

    sayGoodBye() {
        this.setState({
            goodByeMsg: `Hey, ${this.props.name } Good bye, see you again`
        });
    }

    sayWelcome() {
        this.setState({
            welcomeMsg: 'Welcome, ' + this.props.name
        });
    }

    bindClickMsg = () => {
        this.setState({
            clickMsg: "Button clicked"
        });
    }



    render() {
        return (
            <div>
                <h3 style={{ color: "green" }} >Hello message: {this.state.helloMsg}</h3>
                <h3 style={{ color: "blue" }} >Welcome message: {this.state.welcomeMsg}</h3>
                <h3 style={{ color: "maroon" }} >Goodbye message: {this.state.goodByeMsg}</h3>
                <h3 style={{ color: "red" }} >Click message: {this.state.clickMsg}</h3>

                <div class="row">
                    {/* 1. using bind on click event -> not recommended as will make copies for every new button -> Performance issue.
                        if we didn't pass this then error will be thrown in function as this is undefined -> javascript this scope
                     */}
                    <div class="col"> <button type="button" class="btn btn-success" onClick={this.sayHello.bind(this)}>Say hello</button></div>

                    {/* 2.performance hit if we have nested child components -> not recommended */}
                    <div class="col"> <button type="button" class="btn btn-primary" onClick={() => this.sayWelcome()}>Say welcome</button></div>

                    {/* 3. recommended approach by react -> binding this event in constructor, as it this will bind only once during initialization. so duplicate copies  */}
                    <div class="col"> <button type="button" class="btn btn-danger" onClick={this.sayGoodBye}>Say good bye</button></div>

                    {/* recommended approach -> no multiple copies */}
                    <div class="col"> <button type="button" class="btn btn-secondary" onClick={this.bindClickMsg}>Click me</button></div>
                </div>

            </div>
        )
    }
}
