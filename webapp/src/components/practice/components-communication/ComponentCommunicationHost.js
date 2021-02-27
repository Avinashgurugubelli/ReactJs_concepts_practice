import React, { Component } from 'react'
import PageHeader from '../../common/PageHeader'
import ParentComponent from './parent/parent-component'

export class ComponentCommunicationHost extends Component {
    render() {
        return (
            <React.Fragment>
                <PageHeader />
                <div style={{marginTop: '2rem'}} className="container-fluid">
                <div className="page-header">
                    <ParentComponent />
                </div>
                </div>
            </React.Fragment>

        )
    }
}

export default ComponentCommunicationHost
