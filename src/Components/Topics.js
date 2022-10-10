import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizTopic from './QuizTopic';

const Topics = () => {
    const topics = useLoaderData();
    const {data} = topics
    console.log(data)
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mx-5'>
                {
                    data.map(quizTopic => <QuizTopic key={quizTopic.id} quizTopic={quizTopic}></QuizTopic>)
                }
            </div>
        </div>
    );
};

export default Topics;