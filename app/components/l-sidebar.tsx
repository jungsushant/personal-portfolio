import React from "react";
import SocialLink from "./social-link";

const LeftSidebar = () => {
  return (
    <div className="min-w-[100px] max-w-[100px]  h-full border-r-[0.1px] border-opacity-10 flex items-center justify-center">
      <div className="flex gap-6 -rotate-90 ">
        <SocialLink name="Facebook" link="https://google.com" />
        <SocialLink name="Linkedin" link="https://google.com" />
        <SocialLink name="Instagram" link="https://google.com" />
      </div>
    </div>
  );
};

export default LeftSidebar;
