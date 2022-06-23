import React from 'react';

const Score = ({rank}) => {
    return (
        <div>
            <div className='black f3'>
                {`Your current score is:`}
            </div>
            <div className='black f1'>
                {rank}
            </div>
        </div>
    );
}

export default Score;