import React, { Component } from 'react'
import PageHeader from '../../../../common/PageHeader'
import EventBinding from '../event-bind/event-binding'

export default class EventBindHost extends Component {
    render() {
        return (
            <React.Fragment>
                <PageHeader />
                <div className="jumbotron">
                    <EventBinding name="Avinash"></EventBinding>
                </div>
            </React.Fragment>

        )
    }
}
