const Header = (props) => {
    return (
        <h1>{props.course}</h1>
    )
}

const Content = (props) => {
    return (
        <p>{props.part} {props.exercices}</p>
    )
}

const Total = (props) => {
    let sum = 0
    for (let i = 0; i < props.exercices.length; i++) {
        sum += props.exercices[i]
    }
    return (
        <p>Number of exercises {sum}</p>
    )
}

const App = () => {
    const course = 'Half Stack application development'
    const part1 = 'Fundamentals of React'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14

    return (
        <div>
            <Header course={course}/>
            <Content part={part1} exercices={exercises1}/>
            <Content part={part2} exercices={exercises2}/>
            <Content part={part3} exercices={exercises3}/>
            <Total exercices={[exercises1, exercises2, exercises3]}/>
        </div>
    )
}

export default App