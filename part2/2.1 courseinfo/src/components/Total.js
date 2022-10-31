const Total = ({ parts }) => {
    return (
        <strong>total of {parts.map(part => part.exercises).reduce((previous, current) => previous + current, 0)} exercises</strong>
    )
}

export default Total