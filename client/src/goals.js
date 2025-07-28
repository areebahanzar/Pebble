// build what the goals will look like 
import React, { useState } from 'react'

function Goals() {
    const [goal, setGoal] = useState("")

    const handleCreate = async () => {
        const response = await fetch('/api/goals', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ goal })
        })
        const data = await response.json()
        // handle response (e.g., show success, clear input, etc.)
        setGoal("")
    }

    return (
        <div>
            <h1>Add a Goal!</h1>
            <input
                type="text"
                placeholder="Create a goal"
                value={goal}
                onChange={e => setGoal(e.target.value)}
            />
            <button onClick={handleCreate}>Create</button>
        </div>
    )
}

export default Goals
