import { useState } from 'react'

const Display = ({ label, value }) => <p>{label} {value}</p>
const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const getTotal = () => good + neutral + bad
    const getAverageScore = () => {
        const total = getTotal()
        if (total === 0) {
            return 0
        }

        return (good - bad) / total
    }
    const getPositivePercentage = () => {
        const total = getTotal()
        if (total === 0) {
            return 0
        }

        return (good / (good + neutral + bad)) * 100
    }

    return (
        <div>
            <h1>give feedback</h1>
            <Button handleClick={() => setGood(good + 1)} text="good"/>
            <Button handleClick={() => setNeutral(neutral + 1)} text="neutral"/>
            <Button handleClick={() => setBad(bad + 1)} text="bad"/>
            <h1>statistics</h1>
            <Display label="good" value={good}/>
            <Display label="neutral" value={neutral}/>
            <Display label="bad" value={bad}/>
            <Display label="all" value={getTotal()}/>
            <Display label="average" value={getAverageScore()}/>
            <Display label="positive" value={getPositivePercentage() + "%"}/>
        </div>
    )
}

export default App