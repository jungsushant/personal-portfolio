import Link from "next/link";
import React from "react";

const SocialLink = ({ name, link }: { name: string; link: string }) => {
  return (
    <div className="">
      <Link
        href={link}
        className="opacity-60 hover:opacity-100 hover:underline hover:underline-offset-4 uppercase"
      >
        {name}
      </Link>
    </div>
  );
};

export default SocialLink;
