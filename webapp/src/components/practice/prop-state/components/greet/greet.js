import React from 'react';

export class Hello extends React.Component {

    render() {
        // ES6 destructing
        const { name } = this.props;
        return (
            <React.Fragment>
                <h1>Hello {this.props.name}</h1>
                <h1>rendering from destructed variable: Hello {name}</h1>
            </React.Fragment>

        );
    }
}

// functional component
export const Welcome = (props) => {
    return (
        <h1>Welcome to {props.course} course</h1>
    );
}