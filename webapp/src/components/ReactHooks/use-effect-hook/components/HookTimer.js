import React, { useState, useEffect } from 'react'

export default function HookTimer() {

    const [count, setCount] = useState(0);


    const tick = () => {
        setCount(preCountValue => preCountValue + 1);
    }

    useEffect(() => {
        console.log("Hook timer component mounted.");
        const interval = setInterval(tick, 1000);
        return () => {
            clearInterval(interval, tick);
            console.log("Hook timer component un mounted.");
        }
    }, []) // we can use the count as dependency, but every time the count incremented, interval cleared and reInitialized, so in tick function we make use of prev state.


    return (
        <div>
              <h3>I am a Hook timer component</h3>
            <h1 className="text-warning">Timer: {count}</h1>
        </div>
    )
}
