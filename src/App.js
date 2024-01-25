import React from 'react';
import Question from './Components/Question';
import Answer from './Components/Answer';
import geographyQuestions from './data';
import Introduction from './Components/Introduction'

export default function App() {
    //state to hold all the questions
    const [questions, setQuestions] = React.useState(geographyQuestions);

//the toggle function toggles the clicked state when the button is clicked
    function toggle(id) {
        setQuestions(prevQuestions => {
            return prevQuestions.map((question) => {
                return question.id === id ? { ...question, clicked: !question.clicked } : question
            })
        })
    }
 
    //map through the questions and render questions and answers
    const questionElements = questions.map((item) => (
        <div key={item.id}>
            <Question 
                question={item.question} 
                />
            <Answer
                correctAnswer={item.correct_answer}
                incorrectAnswer={item.incorrect_answers}
                clicked={item.clicked}
                toggle={() => toggle(item.id)}            
            />
             
        </div>
    ));

    return <div className="app-container">
          <Introduction />
        {questionElements}
        </div>;
}