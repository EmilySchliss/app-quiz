import React, { useState, useEffect } from 'react';
import Button from './Button';

//the answer components returns the answers
export default function Answer(props) {

  //destructure the props passed in
  const { correctAnswer, incorrectAnswer, clicked, toggle } = props;

  // state to hold what is being displayed
  const [displayedAnswers, setDisplayedAnswers] = useState([]);

  useEffect(() => {
    
    // Combine all the answers into one array
    const allAnswers = [...incorrectAnswer, correctAnswer];

    // shuffle using the Fisher-Yates shuffle algorithm
    for (let i = allAnswers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [allAnswers[i], allAnswers[j]] = [allAnswers[j], allAnswers[i]];
    }

    // set the buttons to be displayed
    setDisplayedAnswers(allAnswers.slice(0, 4));
  }, [correctAnswer, incorrectAnswer]);

  return (
    <div className="answer-container">
      {/* map throught the answers and display the buttons */}
      {displayedAnswers.map((answer, index) => (
    <Button
      key={index}
      answer={answer}
      isCorrect={answer === correctAnswer}
      clicked={clicked}
      toggle={toggle}
    />
))}
    </div>
  );
}


