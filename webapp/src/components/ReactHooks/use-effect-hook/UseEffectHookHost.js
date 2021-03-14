import React, { useState } from 'react'
import PageHeader from '../../common/PageHeader'
import ClassTimer from './components/ClassTimer'
import HookTimer from './components/HookTimer'

export default function UseEffectHookHost() {
    const [classTimerToggle, setClassTimerToggle] = useState(true);
    const [hookTimerToggle, setHookTimerToggle] = useState(true);

    return (
        <React.Fragment>
            <PageHeader />
            <div className="jumbotron">
                <div className="row">
                    <div className="col">
                        <div className="border border-primary rounded p-3" style={{ height: "200px" }}>
                            <button className="btn btn-primary" onClick={() => setClassTimerToggle(!classTimerToggle)}>Toggle Timer Display</button>
                            {classTimerToggle && <ClassTimer />}
                        </div>

                    </div>
                    <div className="col">

                        <div className="border border-warning rounded p-3" style={{ height: "200px" }}>
                            <button className="btn btn-info" onClick={() => setHookTimerToggle(!hookTimerToggle)}>Toggle Timer Display</button>
                            {hookTimerToggle && <HookTimer />}
                        </div>

                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
