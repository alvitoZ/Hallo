import React from "react";
import { useState } from "react";

const ButtonToggle = () => {
  const coba = () => {
    console.log("s");
    if (className === "ml-0") {
      setClassName("ml-20");
    } else {
      setClassName("ml-0");
    }
  };
  //   const coba = () => {
  //     console.log("s");
  //     if (className === "justify-start") {
  //       setClassName("justify-end");
  //     } else {
  //       setClassName("justify-start");
  //     }
  //   };

  const [className, setClassName] = useState<string>("ml-0");
  //   const [className, setClassName] = useState<string>(
  //     "justify-start duration-500 "
  //   );

  return (
    <div>
      <div
        // className={`h-[1px] border-opacity-30 border-b-4 border-sky-500 w-28 pb-3 flex ${className}`}
        className={`h-[1px] border-opacity-30 border-b-4 border-sky-500 w-28 pb-3`}
      >
        <div
          className={`h-6 border-4 border-sky-600 w-12 bg-blue-600 absolute duration-300 ${className}`}
          onClick={() => coba()}
        ></div>
      </div>
    </div>
  );
};

export default ButtonToggle;
