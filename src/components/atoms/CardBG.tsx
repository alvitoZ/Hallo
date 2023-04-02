import React from "react";
import Image from "next/image";

type Card = {
  name: string;
  number: string;
  japanFont: string;
  commonFont: string;
  bgColor: string;
  image?: string;
  action?: (e: React.MouseEvent) => void;
};

type Props = Card;

const CardBG = (props: Props) => {
  return (
    <div
      style={
        props.image
          ? { backgroundImage: `url(/uploads/${props.image}.png)` }
          : {}
      }
      className={`flex items-center hover:rotate-2 transition duration-700 ${props.bgColor}`}
    >
      <div className="pl-10 flex items-start gap-20 flex-col w-[18rem] py-11">
        <div className="">
          <p className="font-extrabold text-xs">{props.name}</p>
        </div>
        <div>
          <div className="font-medium text-9xl">{props.number}</div>
        </div>
        <div className="w-[11rem]">
          <div className="text-sm">{props.japanFont}</div>
          <div className="text-sm">{props.commonFont}</div>
        </div>
      </div>
    </div>
  );
};

export default CardBG;
