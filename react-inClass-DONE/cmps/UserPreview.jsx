
import { SimpleCounter } from "./SimpleCounter.jsx";

const { useState } = React

export function UserPreview() {

    const [user, setUser] = useState({ fullName: 'Momo Christy', score: 7 })
    const [isShow, setIsShow] = useState(true)

    function onUpdateScore(newScore) {
        setUser(user => ({ ...user, score: newScore }))
    }

    return (
        <section className="user-preview">
            <h3>{user.fullName}'s score is {user.score}</h3>
            <button onClick={() => setIsShow(isShow => !isShow)}>Toggle Counter</button>
            {isShow && <SimpleCounter onModified={onUpdateScore} initialCount={user.score} />}
        </section>
    )

}