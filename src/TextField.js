import React, { useState } from 'react'

function TextField(){

    const [userText, setUserText] = useState("user text")
    const [count, setCount] = useState(0)

    return(
        <div>
            <h1>Text Field</h1>
            <textarea onChange={(event) => setUserText(event.target.value)}/>
            <h3>{userText}</h3>
            <p>You clicked the count button {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Increment
            </button>
            <br />
            <button onClick={() => setCount(count - 1)}>
                Decrement
            </button>
        </div>
    )
}

export default TextField