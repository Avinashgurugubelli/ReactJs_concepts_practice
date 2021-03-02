import React, { Component } from 'react'

export default class CustomInput extends Component {

    constructor(props) {
        super(props);
    
        this.inputRef = React.createRef();
    }

    componentDidMount() {
        this.inputRef.current.focus();
    }

    changeBorder(flag) {
        // console.log(this.inputRef);
        flag ? this.inputRef.current.style.border = "2px solid red" : this.inputRef.current.style.border = "1px solid black"
    }
    
    render() {
        return (
            <React.Fragment>
                <input type="text" ref={this.inputRef}/>
            </React.Fragment>
        )
    }
}
