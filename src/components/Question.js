import he from 'he'
import {nanoid} from "nanoid"

export default function Question(props) {

    //Construct answers JSX
    const answerElements = props.answers.map(answer => {
        let colorStyling

        if (props.gameComplete && answer === props.selected) {
            if(answer ===  props.correctAnswer) {
                colorStyling = "correct"
            } else {
                colorStyling = "incorrect"
            }
        } else if (props.gameComplete) {
            colorStyling = "not-selected"
        }

        return (<button 
                key={nanoid()}
                data-id={props.elId}
                className={["answer", colorStyling].join(" ")}
                onClick={event => props.selectAnswer(event)}
                value={answer}
                >
                    {he.decode(answer)}
                </button>)
    })

    return(
        <div className="question">
            <h2>{he.decode(props.question)}</h2>
            <div className="answer-container">
                {answerElements}
            </div>
        </div>
    )
}