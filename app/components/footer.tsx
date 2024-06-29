import Image from "next/image";
import React from "react";
import NavLink from "./navlink";

const Footer = () => {
  let now = new Date().toLocaleTimeString([], {
    timeZone: "Asia/Kathmandu",
    hour: "numeric",
    minute: "numeric",
  });
  console.log(now);

  return (
    <div className="min-h-[6.25rem] border-l-[0.1px] border-opacity-10 border-t-[0.1px] ">
      <div className="flex h-full">
        <div className="flex items-center bg-accent justify-center h-full w-[6.25rem] border-r-[0.1px] border-opacity-10 ">
          <Image
            src="/Arrow.svg"
            alt="arrow"
            width={38}
            height={32}
            className="w-[38px]  h-auto"
          />
        </div>
        <div className="flex grow justify-between">
          <div className="pl-16 flex">
            <div className="text-left flex items-center mr-7 w-fit">
              <p className="flex flex-col">
                <span className="uppercase mb-2 text-gray text-xs ">
                  version
                </span>
                <span>&#169; Copyright 2024</span>
              </p>
              <p className="flex flex-col ml-10">
                <span className="uppercase text-gray text-xs mb-2">
                  Local Time
                </span>
                <span>{now} GMT+5:45</span>
              </p>
            </div>
          </div>
          <div className="flex items-center  bg-[#222220] justify-center h-full w-[6.25rem] border-l-[0.1px] border-opacity-10">
            <Image
              src="/Plus.svg"
              alt="sound"
              width={50}
              height={29}
              className="h-[32px] w-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
