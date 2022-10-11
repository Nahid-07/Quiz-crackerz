import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from './Quiz';


const Quizes = () => {
    const quizQuestion = useLoaderData().data.questions;
    // console.log(quizQuestion)
    return (
        <div>
            {
                quizQuestion.map(quizAndoption => <Quiz key={quizAndoption.id} quizAndoption={quizAndoption}></Quiz>)
            }
        </div>
    );
};

export default Quizes;