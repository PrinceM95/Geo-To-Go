import React, {useState} from 'react';
import style from './style.module.scss';
import background from "../../assets/back5.jpg";

const AsiaQPage = () => {

    // Properties

    const [showFinalResults, setFinalResults] = useState(false);
    const [score, setScore] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const questions = [
        {
          text: "What is the capital of South Korea",
          options: [
            { id: 0, text: "Busan", isCorrect: false },
            { id: 1, text: "Seoul", isCorrect: true },
            { id: 2, text: "Daegu", isCorrect: false },
            { id: 3, text: "Incheon", isCorrect: false },
          ],
        },
        {
          text: "What is the capital of China?",
          options: [
            { id: 0, text: "Beijing", isCorrect: true },
            { id: 1, text: "Beirut", isCorrect: false },
            { id: 2, text: "Dili", isCorrect: false },
            { id: 3, text: "Amman", isCorrect: false },
          ],
        },
        {
          text: "What is the capital of India?",
          options: [
            { id: 0, text: "New Delhi", isCorrect: true },
            { id: 1, text: "Mumbai", isCorrect: false },
            { id: 2, text: "Jaipur", isCorrect: false },
            { id: 3, text: "Bengaluru", isCorrect: false },
          ],
        },
        {
          text: "What is the capital of Laos?",
          options: [
            { id: 0, text: "Pakse", isCorrect: false },
            { id: 1, text: "Vientiane", isCorrect: true },
            { id: 2, text: "Vang Vieng", isCorrect: false },
            { id: 3, text: "Nong Khiaw", isCorrect: false },
          ],
        },
        {
          text: "What is the capital of Japan?",
          options: [
            { id: 0, text: "Osaka", isCorrect: false },
            { id: 1, text: "Kyoto", isCorrect: false },
            { id: 2, text: "Tokyo", isCorrect: true },
            { id: 3, text: "Sapporo", isCorrect: false },
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
        <h1>Asia Quiz</h1>

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
    
    export default AsiaQPage;