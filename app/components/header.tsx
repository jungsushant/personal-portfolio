import Image from "next/image";
import React from "react";
import NavLink from "./navlink";
import Link from "next/link";

const Header = () => {
  return (
    <div className="min-h-[6.25rem] border-b-[0.1px] border-opacity-10 ">
      <div className="flex h-full items-center ">
        <div className="flex items-center  justify-center h-full w-[6.25rem] border-r-[0.1px] border-opacity-10 ">
          <Image
            src="/Logo.png"
            alt="logo"
            width={49.6}
            height={32}
            className="w-auto  h-8"
          />
        </div>

        <div className="flex h-full grow justify-between">
          <div className="pl-16 flex">
            <NavLink link="jungsushant" />
            <NavLink link="simranjung" />
          </div>

          <div className="flex items-center  justify-center h-full w-[6.25rem] border-l-[0.1px] border-opacity-10 ">
            <Image
              src="/Sound.svg"
              alt="logo"
              width={50}
              height={32}
              className="w-[30px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
