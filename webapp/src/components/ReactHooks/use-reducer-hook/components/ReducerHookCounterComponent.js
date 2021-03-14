import React, { useReducer } from 'react'

export default function ReducerHookCounterComponent() {
    const initialState = 0;

    const reducer = (state, action) => {
        switch (action) {
            case 'increment':
                return state + 1;
            case 'decrement':
                return state - 1;
            case 'reset':
                return initialState;
            default:
                return state;
        }
    };

    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <React.Fragment>
            <h3>Reducer Hook example 1 (simple state, action)</h3>
            <h5>Counter: {count}</h5>
            <div className="row">
                <div className="col-3">
                    <button className="btn btn-success" onClick={() => dispatch('increment')}>Increment by 1</button>
                </div>
                <div className="col-3">
                    <button className="btn btn-warning" onClick={() => dispatch('decrement')} disabled={count <= 0}>Decrement by 1</button>
                </div>
                <div className="col-3">
                    <button className="btn btn-danger" onClick={() => dispatch('reset')} disabled={count <= 0}>Reset</button>
                </div>
            </div>
        </React.Fragment>
    )
}
