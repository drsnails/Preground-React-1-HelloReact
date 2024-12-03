const { useState, useEffect, useRef } = React


export function SimpleTimer() {

    const [count, setCount] = useState(0)

    const intervalIdRef = useRef()

    useEffect(() => {

        intervalIdRef.current = setInterval(() => {
            console.log('interval')
            setCount(count => count + 1)
        }, 1000)

        return () => {
            clearInterval(intervalIdRef.current)
        }

    }, [])

    function onStop() {
        // console.log('intervalId:', intervalId)
        clearInterval(intervalIdRef.current)
        console.log('Stopping interval')
    }

    return (
        <section className="simple-timer">
            <button onClick={onStop} >Stop</button>
            <p>
                <span>{count}</span>
            </p>
        </section>
    )
}
