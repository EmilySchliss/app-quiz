import React from 'react';


export default function Button(props) {

  //destructure the props passed in
  const { answer, isCorrect, clicked, toggle } = props;

  //determine style of the button if its clicked or not
  let style;
  if (clicked) {
    style = {
      backgroundColor: isCorrect ? "Blue" : "Red",
      //color: isCorrect ? 'black' : 'white',
      color: 'white'
    };
  } else {
    style = {
      backgroundColor: "transparent",
      color: 'black',
    };
  }

  return (
    //render a button compenent for each answer
    <button
      style={style}
      className="button"
      onClick={toggle}
      disabled={clicked}
    >
      {answer}
    </button>
  );
}
