const { useState, useEffect, useRef } = React

export function SimpleCounter({ onModified, initialCount = 0 }) {

    const [count, setCount] = useState(initialCount)
    const [isDark, setIsDark] = useState(false)
    const inputRef = useRef()

    useEffect(() => {
        console.log('SimpleCounter Mounted')
        inputRef.current.focus()
        return () => {
            console.log('SimpleCounter Destroyed (UnMount)');
        }

    }, [])

    useEffect(() => {
        onModified && onModified(count)
    }, [count])

    function changeCount(diff) {
        /*
           * When changing state based on previews state 
           * we will send a changeFunction to setState that will receive the prev state
            setCount(prevCount => prevCount + diff)
            setCount(prevCount => prevCount + diff)
        */
        setCount(prevCount => prevCount + diff)
    }

    function onIncrement() {
        changeCount(1)
    }

    function onDecrement() {
        changeCount(-1)
    }

    function getCountColorClass() {
        if (count >= 8) return 'high'
        else if (count <= 3) return 'low'
        return ''
    }

    // console.log('Rendered');
    const darkClass = isDark ? 'dark' : ''
    const countColorClass = getCountColorClass()

    return (
        <section className={`simple-counter ${darkClass}`}>
            <input ref={inputRef} type="text" />
            <section className={`count-container ${countColorClass}`}>
                <button disabled={count <= 0} onClick={onDecrement}>-</button>
                {count}
                <button disabled={count >= 10} onClick={onIncrement}>+</button>
            </section>

            <section>
                <button onClick={() => setIsDark(isDark => !isDark)} className="dark-btn">Change Dark</button>
            </section>
        </section>
    )
}


