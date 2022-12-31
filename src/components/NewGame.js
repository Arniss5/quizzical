
export default function NewGame(props) {
    return (
        <div className="container new-game">
            <h1>Quizzical</h1>
            <p className="subtitle">Test your general knowledge!</p>
            <button className="btn" onClick={props.startQuiz}>Start quiz</button>
        </div>
    )
}

