import React from 'react';

const Option = ({option,rightOrWrongHandle}) => {
    // console.log(option)
    return (
        <div  className='bg-slate-200 py-8 px-4 rounded-lg'>
            <input type="radio" name='option' id={option}/>
            <label onClick={()=>rightOrWrongHandle(option)} htmlFor={option} className="cursor-pointer ml-5 text-xl font-semibold text-slate-600">{option}</label>
        </div>
    );
};

export default Option;