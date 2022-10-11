import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from './Questions';

const Quizes = () => {
    const quizQuestion = useLoaderData();
    console.log(quizQuestion)
    return (
        <div>
            {
                quizQuestion.data.questions.map(question => <Questions key={question.id} ques={question}></Questions>)
            }
        </div>
    );
};

export default Quizes;