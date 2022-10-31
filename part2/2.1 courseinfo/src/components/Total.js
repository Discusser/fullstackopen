const Total = ({ parts }) => {
    const totalExercises = (parts) => parts.map(part => part.exercises).reduce((previous, current) => previous + current, 0)

    return (
        <strong>total of {totalExercises(parts)} exercises</strong>
    )
}

export default Total