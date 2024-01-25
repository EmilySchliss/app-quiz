import react from 'react';

export default function Introduction() {
    //renders a component that explains how to use the quiz
    return (
        <div>
            <h1 className='title'>
                Test your knowledge
            </h1>
            <p className='title-instr'>
                Click on the correct answer. If the answer 
                is correct the button will turn blue. <br />
                Otherwise the correct answer
                will be shown in blue.
            </p>
        </div>

    )
}