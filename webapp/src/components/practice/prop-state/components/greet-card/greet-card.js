// react Imports
import React from 'react';

// custom imports
import PageHeader from '../../../../common/PageHeader';
import Counter from '../counter/counter';
import { Hello, Welcome } from '../greet/greet';
import { Message } from '../message/message';

// Styles imports
import './greet-card.scss';

export class GreetCard extends React.Component {

    // empty constructor is optional

    render() {
        return (
            <React.Fragment>
                <PageHeader></PageHeader>
                <div className="jumbotron">
                    <div className="greet-box">
                        <h1 style={{ color: "red", borderColor:"red" }}>Props Example: </h1>
                        <Hello name="Avinash"></Hello>
                        <Welcome course="React JS"></Welcome>
                    </div>

                    <div className="greet-box">
                        <h1 style={{ color: "green" }}>State Example: </h1>
                        <Message></Message>
                    </div>

                </div>
            </React.Fragment>
        )
    }
}