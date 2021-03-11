import React, { useState } from 'react'

function HookCounter() {

    let initialCount = 0;
    const [count, setCount] = useState(initialCount)

    return (
        <React.Fragment>
            <h3>I am a Hook component</h3>
            <h5>Counter: {count}</h5>
            {/* <button className="btn btn-warning" onClick={() => setCount(count + 5)}>increment by 5</button> */}

            <div className="row">
                <div className="col-3">
                    <button className="btn btn-success" onClick={() => setCount(prevCount => prevCount + 1)}>Increment by 1</button>
                </div>
                <div className="col-3">
                    <button className="btn btn-warning" onClick={() => setCount(prevCount => prevCount - 1)} disabled={count <= 0}>Decrement by 1</button>
                </div>
                <div className="col-3">
                    <button className="btn btn-danger" onClick={() => setCount(initialCount)}>Reset</button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default HookCounter
