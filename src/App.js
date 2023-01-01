
import './App.css';
import React from 'react'
import NewGame from './components/NewGame'
import Quiz from './components/Quiz'
import blob1 from './img/blob1.svg'
import blob2 from './img/blob2.svg'



function App() {

  const [newGame, setNewGame] = React.useState(true)
  
  function startQuiz() {
    setNewGame(prevState => !prevState)
  }

  return (
    <div className="App">
      <img src={blob1} alt="#" className='blob blob1'></img>
      <img src={blob2} alt="#" className='blob blob2'></img>
      {newGame ? <NewGame startQuiz={startQuiz} /> : <Quiz/>}
   
      
    </div>
  );
}

export default App;
