import React from "react";

const Blog = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 container mx-auto gap-4 md:my-14 bg-gray-200">
      <div className="bg-slate-700 px-3 py-10 text-white font-medium text-lg rounded">
        <h2 className="text-2xl my-5">What is the papouse of React router ?</h2>

        <p className="text-base">
          React router is the the standard liabrary for routing.. It helps us to
          go one path to another path without reload. React router has many
          benifits. Which make our code esier to optimize. It enables the
          navigation among views of various components in a React Application,
          allows changing the browser URL. another way to say that ..React
          Router keeps our UI sync with the URL. It has a simple API with
          powerful features. With this feature we can make daynamic route.
        </p>
      </div>
      <div className="bg-slate-700 px-3 py-10 text-white font-medium text-lg rounded">
        <h2 className="text-2xl my-5">How does context api work ?</h2>

        <p className="text-base">
          Context api works like a global variable.Through this api we can share
          data any of its under provider. Context api is the alternative of prop
          drilling.To get rid of prop drilling context api were made.
        </p>
      </div>
      <div className="bg-slate-700 px-3 py-10 text-white font-medium text-lg rounded">
        <h2 className="text-2xl my-5">What do we do with useRef ?</h2>

        <p className="text-base">
          Using useRef we can access DOM element directly. useRef can be used to
          store local mutable value in a component. It doesn't participate in
          rerendering. The useRef Hook allows you to persist values between
          renders. It can be used to store a mutable value that does not cause a
          re-render when updated.
        </p>
      </div>
    </div>
  );
};

export default Blog;
