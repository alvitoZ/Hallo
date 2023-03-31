import React from "react";
import CardToggle from "../atoms/CardToggle";
import CardBG from "../atoms/CardBG";

const Section1 = () => {
  return (
    // <div className="flex justify-center gap-6 flex-wrap">
    <div className="flex md:justify-between justify-center flex-wrap border-b-[3px] pb-4">
      <CardToggle />
      <CardBG
        bgColor="bg-blue-600"
        name="Anime GFX Design"
        number="02"
        japanFont="PSHD"
        commonFont="Lorem ipsum dolo"
      />
      <CardBG
        bgColor="bg-blue-300"
        name="Gawe Gurame!"
        number="01"
        japanFont="PSHDS"
        commonFont="Lorem ipsum dolo"
      />
    </div>
  );
};

export default Section1;
