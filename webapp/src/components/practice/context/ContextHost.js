import React, { Component } from 'react'
import PageHeader from '../../common/PageHeader'
import ComponentA from './components/ComponentA'
import { UserProvider } from './SampleContext'

class ContextHost extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userName: ""
        }
    }


    changeHandler = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }



    render() {
        const { userName } = this.state;
        return (
            <React.Fragment>
                <PageHeader></PageHeader>
                <div className="container-fluid">
                    <div style={{ padding: "15px" }}>
                        <h3>I am Context Demo Host component</h3>
                        <p className="text-primary">Enter value in below text box to pass it to the component C directly via context</p>
                    </div>
                    <input className="form-control" placeholder="Enter username" name="userName" value={userName} onChange={this.changeHandler}></input>
                    <div>
                        <UserProvider value={userName}>
                            <ComponentA></ComponentA>
                        </UserProvider>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default ContextHost
