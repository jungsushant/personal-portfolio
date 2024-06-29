import Image from "next/image";
import React from "react";

const NavLink = ({ link }: { link: string }) => {
  return (
    <div className="flex items-center mr-7 w-fit">
      <Image
        src="/NavlinkStar.svg"
        alt="logo"
        width={50}
        height={13}
        className="w-auto h-[15px]"
      />
      <p className={` font-dmsans uppercase font-medium text-base ml-2`}>
        {link}
      </p>
    </div>
  );
};

export default NavLink;
