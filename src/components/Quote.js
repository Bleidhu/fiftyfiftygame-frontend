import React from 'react';

const Quote = ({quote}) => {
    return (
        <div style={{display: 'flex', justifyContent: 'center', flexWrap: "wrap"}} >
        <div className=' fl w-75 bg-blue pa3'>
            <div className='black f5'>
                {`Your quote is:`}
            </div>
            <div className='black f1'>
                {quote}
            </div>
        </div>
        </div>
    );
}

export default Quote;