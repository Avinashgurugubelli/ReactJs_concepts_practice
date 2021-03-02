import React, { Component } from 'react'
import PageHeader from '../../common/PageHeader';
import CustomInput from './CustomInput';
import ForwardRefFunctionalComponent from './ForwardRefFunctionalComponent';

export default class RefDemoHost extends Component {

    constructor(props) {
        super(props)

        this.customInputRef = React.createRef();
        this.forwardInputRef = React.createRef();
        this.state = {
            borderFlag: false,
            forwardRefTextBorderFlg: false
        }

    }
    clickHandler = () => {
        this.setState({ borderFlag: !this.state.borderFlag });
        this.customInputRef.current.changeBorder(this.state.borderFlag);
    }

    forwardRefClickHandler = () => {
        this.setState({ forwardRefTextBorderFlg: !this.state.forwardRefTextBorderFlg });
        this.state.forwardRefTextBorderFlg ? this.forwardInputRef.current.style.border = "5px solid teal" : this.forwardInputRef.current.style.border = "5px solid orange"
    }

    render() {
        return (
            <React.Fragment>
                <PageHeader></PageHeader>
                <div className="jumbotron">
                    <CustomInput ref={this.customInputRef}></CustomInput>
                    <div style={{ marginTop: "10px" }}>
                        <button className="btn btn-primary" onClick={this.clickHandler}>Toggle text box border</button>
                    </div>
                    <label>Forward ref scenario</label>
                    <ForwardRefFunctionalComponent ref={this.forwardInputRef}/>
                    <div style={{ marginTop: "10px" }}>
                        <button className="btn btn-primary" onClick={this.forwardRefClickHandler}>Toggle forwardRef text box border</button>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
