import React, {useState} from 'react';
import style from './style.module.scss';
import background from "../../assets/back5.jpg";

const NAQPage = () => {

    // Properties

    const [showFinalResults, setFinalResults] = useState(false);
    const [score, setScore] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const questions = [
        {
          text: "What is the capital of Canada",
          options: [
            { id: 0, text: "Montreal", isCorrect: false },
            { id: 1, text: "Toronto", isCorrect: false },
            { id: 2, text: "Ottawa", isCorrect: true },
            { id: 3, text: "Vancouver", isCorrect: false },
          ],
        },
        {
          text: "What is the capital of The United States",
          options: [
            { id: 0, text: "Washington D.C.", isCorrect: true },
            { id: 1, text: "Columbus", isCorrect: false },
            { id: 2, text: "Olympia", isCorrect: false },
            { id: 3, text: "New York City", isCorrect: false },
          ],
        },
        {
          text: "What is the capital of Honduras?",
          options: [
            { id: 0, text: "Tegucigalpa", isCorrect: true },
            { id: 1, text: "Gracias", isCorrect: false },
            { id: 2, text: "LaCeiba", isCorrect: false },
            { id: 3, text: "San Pedro Sula", isCorrect: false },
          ],
        },
        {
          text: "What is the capital of Jamaica?",
          options: [
            { id: 0, text: "Montego Bay", isCorrect: false },
            { id: 1, text: "Kingston", isCorrect: true },
            { id: 2, text: "Spanish Town", isCorrect: false },
            { id: 3, text: "Falmouth", isCorrect: false },
          ],
        },
        {
          text: "What is the capital of Puerto Rico?",
          options: [
            { id: 0, text: "Carolina", isCorrect: false },
            { id: 1, text: "San Juan", isCorrect: true },
            { id: 2, text: "Dorado", isCorrect: false },
            { id: 3, text: "Rio Grande", isCorrect: false },
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
        <h1>North America Quiz</h1>

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
    
    export default NAQPage;