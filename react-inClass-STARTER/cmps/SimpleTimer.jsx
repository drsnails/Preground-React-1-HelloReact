export function SimpleTimer() {

    const count = 0

    function onStop() {
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
