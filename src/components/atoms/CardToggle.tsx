import React from "react";
import Image from "next/image";
import styles from "./CardToggle.module.css";
import { useState } from "react";
import ButtonToggle from "./ButtonToggle";
import { log } from "console";

interface Card {
  image?: string;
  caption?: string;
  title?: string;
  action?: () => void;
}

type Props = Card;

const CardToggle = (props: Props) => {
  return (
    <div className="h-auto hover:scale-110 transition duration-500">
      <div className="flex justify-between flex-col gap-24 w-[18rem] py-11">
        <div>
          <p className="font-extrabold text-xs">OXURE</p>
        </div>
        <div>
          <div className="py-5">
            {/* <ButtonToggle action={() => coba2()} /> */}
            <ButtonToggle action={() => props.action!()} />
          </div>
          <div className="w-auto">
            <div className="font-semibold text-2xl">TYPOGRAPHY</div>
            <div>DESIGN</div>
          </div>
        </div>
        <div className="w-36 text-sm">
          Lorem ipsum dolor sit amet consectetur, adip
        </div>
      </div>
    </div>
  );
};

export default CardToggle;
