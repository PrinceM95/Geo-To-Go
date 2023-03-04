import React, {useState} from 'react';
import style from './style.module.scss';
import background from "../../assets/back5.jpg";

const EuropeQPage = () => {

    // Properties

    const [showFinalResults, setFinalResults] = useState(false);
    const [score, setScore] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const questions = [
        {
          text: "What is the capital of Greece?",
          options: [
            { id: 0, text: "Chania", isCorrect: false },
            { id: 1, text: "Corfu", isCorrect: false },
            { id: 2, text: "Athens", isCorrect: true },
            { id: 3, text: "Kalamata", isCorrect: false },
          ],
        },
        {
          text: "What is the capital of Spain?",
          options: [
            { id: 0, text: "Madrid", isCorrect: true },
            { id: 1, text: "Barcelona", isCorrect: false },
            { id: 2, text: "Bilbao", isCorrect: false },
            { id: 3, text: "Granada", isCorrect: false },
          ],
        },
        {
          text: "What is the capital of Turkey?",
          options: [
            { id: 0, text: "Istanbul", isCorrect: true },
            { id: 1, text: "Ankara", isCorrect: false },
            { id: 2, text: "Antalya", isCorrect: false },
            { id: 3, text: "Bursa", isCorrect: false },
          ],
        },
        {
          text: "What is the capital of Portugal?",
          options: [
            { id: 0, text: "Porto", isCorrect: false },
            { id: 1, text: "Lisbon", isCorrect: true },
            { id: 2, text: "Faro", isCorrect: false },
            { id: 3, text: "Sintra", isCorrect: false },
          ],
        },
        {
          text: "What is the capital of France?",
          options: [
            { id: 0, text: "Marseille", isCorrect: false },
            { id: 1, text: "Paris", isCorrect: true },
            { id: 2, text: "Nice", isCorrect: false },
            { id: 3, text: "Bordeaux", isCorrect: false },
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
        <div className={style.header1}><h1>Europe Quiz</h1></div>
        <div className={style.header2}><h1>Current Score: {score}</h1></div>


        {showFinalResults ? (
        <div className={style.final_results}>
            <h1>Final Results</h1>
            <h2>{score} out of {questions.length} correct - {(score/questions.length) *100}%) </h2>
            <button onClick={() => restartGame()}>Restart game</button>
        </div>
    ) : (
      <div className={style.containerQuiz}>
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
        </div>
        )}
      </div>
    </div>
    ); 
}
    
    export default EuropeQPage;