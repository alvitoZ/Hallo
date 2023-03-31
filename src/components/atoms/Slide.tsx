import React from "react";
import TypewriterComponent from "typewriter-effect";

const Slide = () => {
  return (
    <div className="py-6 flex flex-col gap-5 w-auto border-b-[3px]">
      <div className="flex justify-between flex-wrap">
        <h2 className="md:text-8xl text-6xl font-bold text-blue-700">
          <TypewriterComponent
            options={{
              strings: "HOLOLIVE",
              autoStart: true,
              loop: true,
            }}
          />
        </h2>

        <div className="flex gap-9 text-xs font-bold text-blue-700 pt-2">
          <p>Designed by</p>
          <p>Justtalk</p>
          <p>On instagram</p>
        </div>
      </div>
      <div className="flex justify-between items-center flex-wrap">
        <div>
          <h2 className="text-7xl font-medium">ENGLISH</h2>
        </div>
        <div className="flex flex-col">
          <p className="text-2xl md:text-end text-start">JAPAN2S</p>
          <p className="text-5xl font-bold">GEN ONE</p>
        </div>
      </div>
    </div>
  );
};

export default Slide;
