import React from "react";
import { useLoaderData } from "react-router-dom";
import QuizTopic from "./QuizTopic";
import Image from './Image/bg.jpg'

const Topics = () => {
  const topics = useLoaderData();
  // const {data} = topics
  console.log(topics);
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{ backgroundImage:`url(${Image})` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Are you a Learner ?</h1>
            <p className="mb-5">
              You Want to develop your knowledge? well you are in right place!!
              so What are you waiting for!!!! 
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mx-5">
        {topics.data.map((quizTopic) => (
          <QuizTopic key={quizTopic.id} quizTopic={quizTopic}></QuizTopic>
        ))}
      </div>
    </div>
  );
};

export default Topics;
