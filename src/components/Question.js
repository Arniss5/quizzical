import he from 'he'

export default function Question(props) {
    const answerElements = props.answers.map(answer => (
    <button className="answer">{he.decode(answer)}</button>
    ))

    return(
        <div className="question">
            <h2>{he.decode(props.question)}</h2>
            <div className="answer-container">
                {answerElements}
            </div>
        </div>
    )
}