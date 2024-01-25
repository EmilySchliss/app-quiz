import React from 'react';

//the question component returns the question
export default function Question(props) {
  return (
    <div className="question-container">
      <h2>
        {props.question}
        </h2>
    </div>
  );
}