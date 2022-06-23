import React from 'react';

const AnswerButton = ({ ansNumber, validateAnswer }) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: "wrap" }} >
            <div className='black f1'>
                <button onClick={() => validateAnswer(ansNumber)}> {ansNumber} </button>
            </div>
        </div>
    );
}

export default AnswerButton;