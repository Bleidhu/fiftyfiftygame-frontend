import React from 'react';

const NextButton = ({ requestNewQuote }) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: "wrap" }} >
            <div className='black f5 underline'>
                <p onClick={requestNewQuote}>NEXT -&gt;</p>
            </div>
        </div>
    );
}

export default NextButton;