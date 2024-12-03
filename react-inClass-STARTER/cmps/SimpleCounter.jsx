
export function SimpleCounter() {

    const count = 0


    return (
        <section className="simple-counter">
            <section className="count-container">
                <button>-</button>
                {count}
                <button>+</button>
            </section>

            <section>
                <button className="dark-btn">Change Dark</button>
            </section>
        </section>
    )
}
