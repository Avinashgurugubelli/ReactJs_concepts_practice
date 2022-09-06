import { useState } from "react"

function CounterFunctionalHOC(WrapperComponent, stepValue) {

    return function HOCComponent() {
        let [counter, setCounter] = useState(0)

        const incrementCounterHandler = () => {
            setCounter((prevValue) => prevValue + stepValue);
        }

        return (
            <>
                <WrapperComponent count={counter} incrementCounter={incrementCounterHandler}></WrapperComponent>
            </>
        )
    }
}

export default CounterFunctionalHOC;