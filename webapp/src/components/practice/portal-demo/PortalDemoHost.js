import React, { Component } from 'react'
import PageHeader from '../../common/PageHeader';
import SampleModel from './components/SampleModel'

export default class PortalDemoHost extends Component {

    constructor(props) {
        super(props)
        this.sampleModelRef = React.createRef();
    }


    openModelHandler = () => {
        this.sampleModelRef.current.handleClickOpen();
    }

    render() {
        return (
            <React.Fragment>
                <PageHeader />
                <div className="jumbotron">
                    <button className="btn btn-primary" onClick={this.openModelHandler}>Open Model</button>
                    <SampleModel ref={this.sampleModelRef}></SampleModel>
                    <p>If u inspect the dom the model will be set to modal-root note which is defined in the index.html but not to root. this is because the model component is created using ReactDOM.createPortal</p>
                </div>
            </React.Fragment>

        )
    }
}
