import React from 'react'
import PageHeader from '../../common/PageHeader'
import ComplexReducerHookComponent from './components/ComplexReducerHookComponent'
import ReducerHookCounterComponent from './components/ReducerHookCounterComponent'

export default function ReducerHookHost() {
    return (
        <React.Fragment>
            <PageHeader/>
            <div className="jumbotron">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col">
                            <div className="border border-primary rounded p-3 h-100 mh-100" style={{ minHeight: "200px" }}>
                                <ReducerHookCounterComponent />
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <br></br>
                    <div className="row">
                        <div className="col">
                            <div className="border border-primary rounded p-3 h-100 mh-100" style={{ minHeight: "200px" }}>
                                <ComplexReducerHookComponent />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
