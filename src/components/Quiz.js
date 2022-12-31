import Question from "./Question"

export default function Quiz() {
    return (
        <div className="container">
            <Question />
            <Question />
            <Question />
            <Question />
            <Question />
            <button className="btn quiz-btn">Check answers</button>
        </div>
    )
}