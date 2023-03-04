import React, {useState} from 'react';
import style from './style.module.scss';
import background from "../../assets/back5.jpg";


const SAQPage = () => {

    // Properties

    const [showFinalResults, setFinalResults] = useState(false);
    const [score, setScore] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const questions = [
        {
          text: "What is the capital of Brazil?",
          options: [
            { id: 0, text: "Sao Paulo", isCorrect: false },
            { id: 1, text: "Rio de Janeiro", isCorrect: false },
            { id: 2, text: "Brasilia", isCorrect: true },
            { id: 3, text: "Salvador", isCorrect: false },
          ],
        },
        {
          text: "What is the capital of Venezuela?",
          options: [
            { id: 0, text: "Caracas", isCorrect: true },
            { id: 1, text: "Porlamar", isCorrect: false },
            { id: 2, text: "Merida", isCorrect: false },
            { id: 3, text: "Carupano", isCorrect: false },
          ],
        },
        {
          text: "What is the capital of Argentina?",
          options: [
            { id: 0, text: "Messi", isCorrect: false },
            { id: 1, text: "Buenos Aires", isCorrect: true },
            { id: 2, text: "Puerto Madryn", isCorrect: false },
            { id: 3, text: "Salta", isCorrect: false },
          ],
        },
        {
          text: "What is the capital of Paraguay?",
          options: [
            { id: 0, text: "Ituagua", isCorrect: false },
            { id: 1, text: "Asuncion", isCorrect: true },
            { id: 2, text: "San Lorenzo", isCorrect: false },
            { id: 3, text: "Capiata", isCorrect: false },
          ],
        },
        {
          text: "What is the capital of Columbia?",
          options: [
            { id: 0, text: "Cartagena", isCorrect: false },
            { id: 1, text: "Santa Marta", isCorrect: false },
            { id: 2, text: "Bogota", isCorrect: true },
            { id: 3, text: "Cali", isCorrect: false },
          ],
        },
      ];
    
    //Helper Functions  

    const optionClicked = (isCorrect) => {
        if( isCorrect) {
            setScore(score +1);
        }

        if (currentQuestion + 1 < questions.length) {
            setCurrentQuestion(currentQuestion +1);
        } else {
            setFinalResults(true);
        }

        setCurrentQuestion(currentQuestion +1);
    }

    const restartGame = () => {
        setScore(0);
        setCurrentQuestion(0);
        setFinalResults(false);
    }

    return (
      <div className={style.backA} style={{ backgroundImage: `url(${background})` }}>
        <div className={style.quiz}>
        {/* 1. Header */}
        <h1>South America Quiz</h1>

        {/* 2. Current Score */}
        <h1>Current Score: {score}</h1>

        {showFinalResults ? (
        <div className={style.final_results}>
            <h1>Final Results</h1>
            <h2>{score} out of {questions.length} correct - {(score/questions.length) *100}%) </h2>
            <button onClick={() => restartGame()}>Restart game</button>
        </div>
    ) : (
        /* 3. Question Card */
        <div className={style.question_card}>
            <h2>Question 1 out of 5</h2>
            <h3 className={style.question_text}>{questions[currentQuestion].text}</h3>

            <ul>
                {questions[currentQuestion].options.map((option) => {
                    return (
                        <li onClick={() => optionClicked(option.isCorrect)} key={option.id}>{option.text}</li>
                    );
                 })}
            </ul>
        </div>
        )}
        </div>
    </div>
    ); 
}
    
    export default SAQPage;