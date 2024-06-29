import Image from "next/image";
import React from "react";

const StarButton = () => {
  return (
    <div className="flex border-[1.5px] w-fit   border-[#999999] px-3 py-2 rounded-full items-center justify-center">
      <Image src="Star.svg" alt="star" width={14} height={14} />
      <p className="uppercase ml-[5px] font-medium text-xs text-[#969696] ">
        Sushant Thapa
      </p>
    </div>
  );
};

export default StarButton;
