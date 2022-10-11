import React from 'react';
import { Link } from 'react-router-dom';

const QuizTopic = ({quizTopic}) => {
    
    const {id,logo,name,total} = quizTopic;
    console.log(total)
    return (
        <div className='border bg-slate-200 p-3 my-12 rounded-md'>
            <img src={logo} alt="" />
            <div className='bg-slate-400 rounded-md flex justify-between items-center py-4 px-2 mt-3'>
                <h2 className='text-xl font-semibold text-white'>{name}</h2>
                <p className='text-yellow-50 font-semibold text-base'>
                    Total question : {total}
                </p>
                <Link to={`/quiz/${id}`}>
                    <button className='border px-9 md:px-12 text-lg md:text-xl rounded-lg text-white  py-4 hover:bg-slate-700 duration-700'
                    >Start
                    </button>                
                </Link>
            </div>
        </div>
    );
};

export default QuizTopic;