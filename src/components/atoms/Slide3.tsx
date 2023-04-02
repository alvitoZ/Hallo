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
  const [enable, setEnable] = useState<boolean>(true);
  const date: Date = new Date();

  return (
    <div className="flex flex-wrap border-b-[3px] py-6">
      <div className="flex items-center gap-10 flex-wrap">
        <div>
          <ButtonToggle action={() => setEnable(!enable)} />
        </div>
        <div className="">
          <p className="text-7xl font-extrabold text-blue-700">
            {enable ? "11" : date.getHours()}
            <span className="animate-pulse">:</span>
            {enable ? "45" : date.getMinutes()}
          </p>
        </div>
        <div>
          <p className="text-2xl text-blue-700 text-start font-bold ">
            {enable ? "28/01" : `${date.getDate() + "/" + date.getMonth()}`}
          </p>
          <p className="w-[8rem] text-[12px] leading-none text-blue-700 ">
            MY FIRST GFX DESIGN IN 2023
          </p>
        </div>
      </div>
      <div>
        <p className="text-2xl text-blue-700 text-start font-bold">
          {enable ? "2023" : date.getFullYear()}
        </p>
      </div>
    </div>
  );
};

export default Slide3;
