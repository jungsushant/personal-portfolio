import React from "react";
import StarButton from "./badge";
import Counter from "./counter";
import Image from "next/image";

const HomeContent = () => {
  return (
    <div className="h-full  p-16 flex flex-col  justify-center w-fit">
      <StarButton />
      <p className="text-7xl leading-[145%] tracking-[-4%] font-hatton flex flex-col mt-8 mb-10">
        <span>I'm Creative Digital </span>
        <span>Designer,Based </span>
        <span>
          in <span className="text-accent"> Nepal</span>.
        </span>
      </p>
      <div>
        <div className="flex justify-between  items-end">
          <div className="flex justify-between grow ">
            <Counter count={1500} content="hours of working" />
            <Counter count={"500K"} content="Lines fo Code" />
          </div>
          <Image
            className="ml-36"
            src="EyeBadge.svg"
            alt="Eyebadge"
            width={120}
            height={120}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
