import React from "react";
import Image from "next/image";

const Slide2 = () => {
  return (
    <div className="py-6 flex w-auto justify-between flex-wrap border-b-[3px]">
      <div className="flex md:gap-4 gap-1 flex-col">
        <p className="text-blue-500">Information</p>
        <p className="w-[20rem] text-[18px] font-semibold">
          Gurame is a ikan English Speaking Virtual ldr Binomo with Trakea
        </p>
        <p className="text-blue-500 font-bold md:pt-6 pt-0">01</p>
      </div>
      <div className="flex flex-col justify-between">
        <div className="flex flex-row h-10 ">
          <p className="w-[18rem] text-[16px] font-semibold leading-4">
            Gurame is a ikan English Speaking Virtual ldr Binomo
          </p>
          <Image src="/images/f.jpg" alt="" width={30} height={30} />
        </div>
        <div>
          <p className="text-blue-500 font-bold text-end">7364</p>
        </div>
      </div>
    </div>
  );
};

export default Slide2;
