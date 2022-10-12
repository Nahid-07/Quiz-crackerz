import React from "react";
import { useLoaderData } from "react-router-dom";
import QuizTopic from "./QuizTopic";
import Image from "./Image/bgg.jpg";
import Video from "./Video/video-2.mp4";
import Footer from "./Footer";

const Topics = () => {
  const topics = useLoaderData();
  // const {data} = topics
  // console.log(topics);
  return (
    <div>
      <div>
        <div
          className="hero min-h-screen"
          style={{ backgroundImage: `url(${Image})` }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className>
              <h1 className="mb-5 text-5xl font-bold">
                Want to gather knowledge ?
              </h1>
              <p className="mb-5">
                Hey !!! learners what are you waiting for ? just start to get
                knowledge
              </p>
              <button className="btn btn-primary">Get started</button>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mx-5">
        {topics.data.map((quizTopic) => (
          <QuizTopic key={quizTopic.id} quizTopic={quizTopic}></QuizTopic>
        ))}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Topics;
