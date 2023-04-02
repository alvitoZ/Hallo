import React from "react";

import Slide from "../atoms/Slide";
import Slide2 from "../atoms/Slide2";
import Slide3 from "../atoms/Slide3";
import Slide4 from "../atoms/Slide4";

type Bg = {
  image?: string;
};

type Props = Bg;

const Section2 = (props: Props) => {
  return (
    <div
      style={
        props.image
          ? { backgroundImage: `url(/uploads/${props.image}.png)` }
          : {}
      }
      className={`bg-no-repeat bg-right-bottom`}
    >
      <Slide />
      <Slide2 />
      <Slide3 />
      <Slide4 />
    </div>
  );
};

export default Section2;
