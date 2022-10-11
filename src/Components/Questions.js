import React from 'react';
import Option from './Option';

const Questions = ({ques}) => {
    console.log(ques)
    const {options,question,correctAnswer,id} = ques
    // console.log(options)
    return (
        <div className='bg-yellow-200 my-3 w-2/4 mx-auto p-3'>
            <h2 className='font-semibold text-xl text-center mb-5'>{question}</h2>
            <div className='grid grid-cols-2 gap-4'>
                {
                    options.map(option => <div className='p-6 border'>
                        <input type={'radio'} id={id} name="ques" className='mr-4'
                        />
                        <label htmlFor={id}>{option}</label>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Questions;