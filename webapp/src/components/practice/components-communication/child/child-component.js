import React, { Component } from 'react'

import './child-component.scss';

export class ChildComponent extends Component {


    constructor(props) {
        super(props);
        this.state = {
            header: "Hello, I am child"
        }
    }



    render() {
        return (
            <div className="child-box">
                <h4>{this.state.header}</h4>
                <h6>greet message from parent: <span className="text-primary">{this.props.greetMsg}</span></h6>
                <div class="form-group">
                    <label for="firstNameTxt">First Name:</label>
                    <input type="text" class="form-control" id="firstNameTxt" name="firstName" onChange={(event) => this.props.onChange(event.target.name, event.target.value)} placeholder="Enter first name" />
                </div>
                <div class="form-group">
                    <label for="LastNameTxt">Last Name:</label>
                    <input type="text" class="form-control" id="LastNameTxt" name="lastName" onChange={(event) => this.props.onChange(event.target.name, event.target.value)} placeholder="Enter last name" />
                </div>
                <div class="form-group">
                    <label for="emailTxt">Email:</label>
                    <input type="text" class="form-control" id="emailTxt" name="email" onChange={(event) => this.props.onChange(event.target.name, event.target.value)} placeholder="Enter email" />
                </div>
            </div>
        )
    }
}

export default ChildComponent;
