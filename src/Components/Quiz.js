import React from "react";
import { toast } from "react-toastify";
import Option from "./Option";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const Quiz = ({ quizAndoption,index,id}) => {
  // console.log(quizAndoption)
  const { correctAnswer, options, question } = quizAndoption;
  // console.log(options)
  const rightOrWrongHandle = (option) => {
    if (option === correctAnswer) {
      toast.success("Correct", { autoClose: 500 });
    } else {
      toast.warning("Incorrect", { autoClose: 500 });
    }
  };
  const correctToast = () => {
    toast.success(`The correct answere is "${correctAnswer}"`, {
      autoClose: 1000,
    });
  };
  return (
    <div className="bg-slate-500 mt-5 p-7 md:w-2/4 md:mx-auto rounded-lg">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl text-white font-semibold">{index+1}. </h3>
        <h1 className="text-2xl mb-6 text-white text-center">{question.slice(3,-4)}</h1>
        <button onClick={correctToast}>
          <FontAwesomeIcon
            className="text-2xl text-slate-100"
            icon={faEye}
          ></FontAwesomeIcon>
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {options.map((option,index) => (
          <Option
            option={option} key={index} index={index}
            rightOrWrongHandle={rightOrWrongHandle} id={id}
          ></Option>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
