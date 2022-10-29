import { useState } from 'react'

const StatisticsLine = ({ label, value }) => <p>{label} {value}</p>
const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>

const Statistics = ({ good, neutral, bad }) => {
    const getTotal = () => good + neutral + bad
    // We can stop checking if getTotal() returns 0 because these won't be used anymore if it returns 0
    const getAverageScore = () => (good - bad) / getTotal()
    const getPositivePercentage = () => good / getTotal() * 100

    if (getTotal() === 0) {
        return (
            <div>
                <p>No feedback given</p>
            </div>
        )
    }

    return (
        <div>
            <StatisticsLine label="good" value={good}/>
            <StatisticsLine label="neutral" value={neutral}/>
            <StatisticsLine label="bad" value={bad}/>
            <StatisticsLine label="all" value={getTotal()}/>
            <StatisticsLine label="average" value={getAverageScore()}/>
            <StatisticsLine label="positive" value={getPositivePercentage() + "%"}/>
        </div>
    )
}

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    return (
        <div>
            <h1>give feedback</h1>
            <Button handleClick={() => setGood(good + 1)} text="good"/>
            <Button handleClick={() => setNeutral(neutral + 1)} text="neutral"/>
            <Button handleClick={() => setBad(bad + 1)} text="bad"/>
            <h1>Statistics</h1>
            <Statistics good={good} neutral={neutral} bad={bad}/>
        </div>
    )
}

export default App