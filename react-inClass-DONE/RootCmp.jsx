import { CarApp } from "./cmps/CarApp.jsx"
import { SimpleCounter } from "./cmps/SimpleCounter.jsx"
import { SimpleTimer } from "./cmps/SimpleTimer.jsx"
import { UserPreview } from "./cmps/UserPreview.jsx"

const { useState } = React
export function App() {

    const [isShow, setIsShow] = useState(true)

    return (
        <section className="app">
            <header onClick={() => setIsShow(isShow => !isShow)} className="app-header">
                <h1>My App</h1>
            </header>

            <main className="container">
                <CarApp />
                {/* <SimpleCounter /> */}
                {/* <UserPreview /> */}
                {/* {isShow && <SimpleTimer />} */}
            </main>
        </section>
    )
}