import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from './Quiz';


const Quizes = () => {
    const quizQuestion = useLoaderData().data;
    const {questions,name,id} = quizQuestion;
    console.log(quizQuestion)
    return (
        <div className='bg-gray-300'>
            <h1 className='text-center text-3xl md:text-5xl py-5 font-semibold text-slate-900'>Quiz for {name}</h1>
            {
                questions.map((quizAndoption,index) => <Quiz key={quizAndoption.id} quizAndoption={quizAndoption} index={index} id={id}></Quiz>)
            }
        </div>
    );
};

export default Quizes;