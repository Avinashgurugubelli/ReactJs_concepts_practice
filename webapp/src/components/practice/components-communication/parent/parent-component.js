import React, { Component } from 'react'
import ChildComponent from '../child/child-component'
import './parent-component.scss'
export class ParentComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            header: "Hello, I am parent",
            enteredText: null
        }

        this.onValueChangeHandler = this.onValueChangeHandler.bind(this);
    }

    onValueChangeHandler(fieldName, value) {
        this.setState({ [fieldName]: value });
    };

    render() {
        return (
            <div className="parent-box">
                <h3>{this.state.header}</h3>
                <h5>Entered value from child</h5>
                <div className="container-fluid">

                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>First name</th>
                                <th>Last name</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><span className="text-success">{this.state['firstName']}</span></td>
                                <td><span className="text-success">{this.state['lastName']}</span></td>
                                <td><span className="text-success">{this.state['email']}</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <ChildComponent greetMsg="Hey Child How are you?" onChange={this.onValueChangeHandler}></ChildComponent>
            </div>
        )
    }
}

export default ParentComponent
