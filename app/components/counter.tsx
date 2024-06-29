import React from "react";

const Counter = ({
  count,
  content,
}: {
  count: number | string;
  content: string;
}) => {
  return (
    <div>
      <p className="font-hatton text-5xl">
        {count}
        <span className="uppercase text-[#F7F975]">+</span>
      </p>
      <p className="text-left font-dmsans uppercase">{content}</p>
    </div>
  );
};

export default Counter;
