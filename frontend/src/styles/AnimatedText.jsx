import React from "react";

const AnimatedText = (props) => {
  return (
    <div>
      {props.text && (
        <span className="animated-text bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...">
          {props.text}
        </span>
      )}
      {props.titleText && (
        <span className="ml-1 animated-text bg-clip-text text-transparent bg-gradient-to-r from-gray-400 to-white">
          {props.titleText}
        </span>
      )}
    </div>
  );
};

export default AnimatedText;
