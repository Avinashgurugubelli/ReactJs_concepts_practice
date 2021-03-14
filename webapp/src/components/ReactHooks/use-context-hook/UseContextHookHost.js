import React, { useState } from 'react'
import PageHeader from '../../common/PageHeader';
import ComponentA from './components/ComponentA';
import { userContext } from './UserContext';

export default function UseContextHookHost() {

    const [userName, setUserName] = useState("");

    const onChangeHandler = (event) => {
        setUserName(event.target.value)
    }

    return (
        <React.Fragment>
            <PageHeader />
            <div className="jumbotron">
                <div className="form-group">
                    <label>Enter user name: </label>
                    <input type="text" className="form-control" placeholder="Enter user name" id="userName" value={userName} onChange={(e) => onChangeHandler(e)} />
                </div>
                <userContext.Provider value={userName}>
                    <ComponentA />
                </userContext.Provider>
            </div>
        </React.Fragment>
    )
}
