export default function Question(props) {
    const answerElements = props.answers.map(answer => (
    <button className="answer">{answer}</button>
    ))

    return(
        <div className="question">
            <h2>{props.question}</h2>
            <div className="answer-container">
                {answerElements}
            </div>
        </div>
    )
}