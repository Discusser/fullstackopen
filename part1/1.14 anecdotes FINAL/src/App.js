import { useState } from 'react'

const Anecdote = ({ text, votes }) => (
    <div>
        <p>{text}</p>
        <p>has {votes} votes</p>
    </div>
)

const App = () => {
    const anecdotes = [
        'If it hurts, do it more often.',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
    ]

    const [selected, setSelected] = useState(0)
    const [points, setPoints] = useState(Array(anecdotes.length).fill(0))

    console.log(points)

    const voteForAnecdote = (anecdote) => {
        const copy = [...points]
        copy[anecdote] += 1
        return setPoints(copy)
    }

    const getMaxVoteAnecdote = () => {
        const maxVotes = Math.max(...points)
        return {
            text: anecdotes[points.indexOf(maxVotes)],
            votes: maxVotes
        }
    }

    const selectRandomAnecdote = () => setSelected(Math.floor(Math.random() * anecdotes.length))

    return (
        <div>
            <h1>Anecdote of the day</h1>
            <Anecdote text={anecdotes[selected]} votes={points[selected]}/>
            <button onClick={() => voteForAnecdote(selected)}>Vote</button>
            <button onClick={selectRandomAnecdote}>next anecdote</button>
            <h1>Anecdote with most votes</h1>
            <Anecdote text={getMaxVoteAnecdote().text} votes={getMaxVoteAnecdote().votes}/>
        </div>
    )
}

export default App