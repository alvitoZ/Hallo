import React from "react";
import Image from "next/image";
import ButtonToggle from "./ButtonToggle";
import { useState } from "react";

interface Card {
  image: string;
  caption: string;
  title: string;
  action?: (e: React.MouseEvent) => void;
}

const Slide3 = () => {
  return (
    <div className="flex flex-wrap border-b-[3px] py-6">
      <div className="flex items-center gap-10 flex-wrap">
        <div>
          <ButtonToggle />
        </div>
        <div className="">
          <p className="text-7xl font-extrabold text-blue-700">
            11
            <span className="animate-pulse">:</span>
            45
          </p>
        </div>
        <div>
          <p className="text-2xl text-blue-700 text-start font-bold">28/01</p>
          <p className="w-[8rem] text-[12px] leading-none text-blue-700 ">
            MY FIRST GFX DESIGN IN 2023
          </p>
        </div>
      </div>
      <div>
        <p className="text-2xl text-blue-700 text-start font-bold">2023</p>
      </div>
    </div>
  );
};

export default Slide3;
