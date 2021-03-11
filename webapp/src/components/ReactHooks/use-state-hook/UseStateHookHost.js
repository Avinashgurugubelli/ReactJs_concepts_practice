import React from 'react'
import PageHeader from '../../common/PageHeader'
import ClassCounter from './components/ClassCounter'
import HookCounter from './components/HookCounter'

function UseStateHookHost() {
    return (
        <React.Fragment>
            <PageHeader />
            <div className="jumbotron">
                <div className="row">
                    <div className="col">
                        <div className="border border-primary rounded p-3" style={{height: "200px"}}>
                            <ClassCounter />
                        </div>

                    </div>
                    <div className="col">
                        <div className="border border-warning rounded p-3" style={{height: "200px"}}>
                            <HookCounter />
                        </div>

                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default UseStateHookHost
