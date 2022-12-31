import Question from "./Question"
import React from "react"

export default function Quiz(props) {

    const [quizData, setQuizData] = React.useState([])
    
    // useRef() keeps track of a boolean
    const dataFetchedRef = React.useRef(false);

    React.useEffect(() => {
        //Stop effect from running twice
        if (dataFetchedRef.current) return;
        dataFetchedRef.current = true;
        
        fetch(`https://opentdb.com/api.php?amount=5&category=9&difficulty=medium&type=multiple`)
            .then(res => res.json())
            .then(data => {
                // getQuizItems(data)
                // setQuizData(getQuizItems(data.results))
                
                console.log(getQuizItems(data.results))})
                
      }, [])

      
      function getQuizItems(data) {
        let questionArr = []
        
        data.forEach(item => {
            const answers = item.incorrect_answers.concat(item.correct_answer) 
            const shuffledAnswers = answers.sort(() => Math.random() - 0.5)
            questionArr.push({
                question: item.question,
                answers: shuffledAnswers,
                correct_answer: item.correct_answer
            })
        })
        return questionArr
      }
      
    
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