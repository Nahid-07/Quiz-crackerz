import React from 'react';

const Option = ({option,rightOrWrongHandle}) => {
    // console.log(option)
    return (
        <div onClick={()=>rightOrWrongHandle(option)} className='bg-slate-200 py-8 px-4 rounded-lg cursor-pointer'>
            <input type="radio" name='option' id={option}/>
            <label htmlFor={option} className="ml-5 text-xl font-semibold text-slate-600">{option}</label>
        </div>
    );
};

export default Option;