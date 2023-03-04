import React, {useState} from 'react';
import style from './style.module.scss';
import background from "../../assets/back5.jpg";

const OceaniaQPage = () => {

    // Properties

    const [showFinalResults, setFinalResults] = useState(false);
    const [score, setScore] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const questions = [
        {
          text: "What is the capital of Australia?",
          options: [
            { id: 0, text: "Melbourne", isCorrect: false },
            { id: 1, text: "Sydney", isCorrect: false },
            { id: 2, text: "Canberra", isCorrect: true },
            { id: 3, text: "Perth", isCorrect: false },
          ],
        },
        {
          text: "What is the capital of Papua New Guinea?",
          options: [
            { id: 0, text: "Port Moresby", isCorrect: true },
            { id: 1, text: "Lae", isCorrect: false },
            { id: 2, text: "Wewak", isCorrect: false },
            { id: 3, text: "Madang", isCorrect: false },
          ],
        },
        {
          text: "What is the capital of Micronesia?",
          options: [
            { id: 0, text: "Palikir", isCorrect: true },
            { id: 1, text: "Kolonia", isCorrect: false },
            { id: 2, text: "Colonia", isCorrect: false },
            { id: 3, text: "Tofol", isCorrect: false },
          ],
        },
        {
          text: "What is the capital of Fiji?",
          options: [
            { id: 0, text: "Labasa", isCorrect: false },
            { id: 1, text: "Suva", isCorrect: true },
            { id: 2, text: "Nadi", isCorrect: false },
            { id: 3, text: "Ba", isCorrect: false },
          ],
        },
        {
          text: "What is the capital of New Zealand?",
          options: [
            { id: 0, text: "Aukland", isCorrect: false },
            { id: 1, text: "Wellington", isCorrect: true },
            { id: 2, text: "Tuaranga", isCorrect: true },
            { id: 3, text: "Queenstown", isCorrect: false },
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
        <h1>Oceania Quiz</h1>

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
    
    export default OceaniaQPage;