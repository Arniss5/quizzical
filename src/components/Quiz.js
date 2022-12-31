import Question from "./Question"
import React from "react"

export default function Quiz(props) {

    const [quizData, setquizData] = React.useState([])

    //useRef() keeps track of a boolean
    const dataFetchedRef = React.useRef(false);

    React.useEffect(() => {
        //Stop effect from running twice
        if (dataFetchedRef.current) return;
        dataFetchedRef.current = true;
        
        fetch(`https://opentdb.com/api.php?amount=5&category=9&difficulty=medium&type=multiple`)
            .then(res => res.json())
            .then(data => setquizData(data))
      }, [])


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