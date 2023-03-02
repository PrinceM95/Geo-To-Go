import React, {useState} from 'react';
import style from './style.module.scss';
// import world from '../../assets/world4.mp4';

const AfricaQPage = () => {

    // Properties

    const [showFinalResults, setFinalResults] = useState(false);
    const [score, setScore] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const questions = [
        {
          text: "How many countries are in the continent of Africa?",
          options: [
            { id: 0, text: "82", isCorrect: false },
            { id: 1, text: "23", isCorrect: false },
            { id: 2, text: "54", isCorrect: true },
            { id: 3, text: "Too many", isCorrect: false },
          ],
        },
        {
          text: "What is the capital of Congo?",
          options: [
            { id: 0, text: "Brazzaville", isCorrect: true },
            { id: 1, text: "Kinshasa", isCorrect: false },
            { id: 2, text: "Pretoria", isCorrect: false },
            { id: 3, text: "Pointe Noire", isCorrect: false },
          ],
        },
        {
          text: "What is the capital of Nigeria?",
          options: [
            { id: 0, text: "Abuja", isCorrect: true },
            { id: 1, text: "Lagos", isCorrect: false },
            { id: 2, text: "Jos", isCorrect: false },
            { id: 3, text: "Benin City", isCorrect: false },
          ],
        },
        {
          text: "What is the capital of Egypt?",
          options: [
            { id: 0, text: "Alexandria", isCorrect: false },
            { id: 1, text: "Cairo", isCorrect: true },
            { id: 2, text: "Giza", isCorrect: false },
            { id: 3, text: "Dahab", isCorrect: false },
          ],
        },
        {
          text: "What is the capital of Ethiopia?",
          options: [
            { id: 0, text: "Addis Ababa", isCorrect: true },
            { id: 1, text: "Russia", isCorrect: false },
            { id: 2, text: "Cuba", isCorrect: false },
            { id: 3, text: "Mexico", isCorrect: false },
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
        <div className={style.quiz}>
        {/* 1. Header */}
        <h1>Africa Quiz</h1>

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
    ); 
}
    
    export default AfricaQPage;