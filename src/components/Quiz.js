import Question from "./Question"
import React from "react"
import {nanoid} from "nanoid"


export default function Quiz(props) {

    const [quizData, setQuizData] = React.useState([])
    const [gameComplete, setGameComplete] = React.useState(false)

    
    // useRef() keeps track of a boolean
    const dataFetchedRef = React.useRef(false);
    const [clicks, setClicks] = React.useState(0);

        
    // Get new set of questions 
    React.useEffect(() => {
         //Stop effect from running twice
        if (dataFetchedRef.current) return;
        dataFetchedRef.current = true;
        fetch(`https://opentdb.com/api.php?amount=${props.formData.number}&category=${props.formData.category}&difficulty=${props.formData.difficulty}&type=multiple`)
            .then(res => res.json())
            .then(data => {
                    setQuizData(getQuizItems(data.results))
            })       
    }, [clicks])
        
    
    // Format fetched data
    function getQuizItems(data) {
        let questionArr = []

        data.forEach(item => {
            //combine and shuffle answers
            const answers = item.incorrect_answers.concat(item.correct_answer) 
            const shuffledAnswers = answers.sort(() => Math.random() - 0.5)
            questionArr.push({
                elId: nanoid(),
                question: item.question,
                answers: shuffledAnswers,
                correctAnswer: item.correct_answer,
                selected: "",
            })
        })
        return questionArr
      }


    function selectAnswer(event) {
        setQuizData(prevState => {
            let newState = []
            for (let item of prevState) {
                if(event.target.dataset.id === item.elId){
                    newState.push({
                        ...item,
                        selected: event.target.value
                    })
                } else {
                    newState.push(item)
                }
            }
            return newState
        })
    }
      

    function getScore() {
        let score = 0
        for (let item of quizData) {
            if(item.correctAnswer === item.selected) {
                score++
            }
        }
        return score
    }


    function checkAnswers() {
        setGameComplete(true)
    }


    function startNewGame() {
        props.setNewGame(true)
        setQuizData([])
        dataFetchedRef.current = false
        setGameComplete(false)
        setClicks(clicks + 1)
    }


    // RENDERED ELEMENTS
    const loader =  <div class="loader"></div> 

    const questionElements = quizData.map(item => {
        return(
            <Question 
                key = {nanoid()}
                gameComplete = {gameComplete}
                selectAnswer = {selectAnswer}
                {...item}
            />
        )
    })
    
    let bottomSection
    // display score and Play again button
    if(quizData.length > 0 && gameComplete) {
        bottomSection = (
            <div className="score-display">
                <span>You scored {getScore()}/{quizData.length} correct answers</span>
                <button 
                    className="btn quiz-btn"
                    onClick={startNewGame}
                    >Play again</button>
            </div>
        )
    // display Check answers button
    } else if (quizData.length > 0) {
        bottomSection = (
            <button className="btn quiz-btn" onClick={checkAnswers}>Check answers</button>
        )
    }

    return (
        <div className="container">
            {quizData.length > 0 ? questionElements : loader}
            {bottomSection}
        </div>
    )
}