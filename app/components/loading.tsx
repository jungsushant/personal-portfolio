"use client";

import styled from "styled-components";
import { gsap, Expo, CSSPlugin } from "gsap";
gsap.registerPlugin(CSSPlugin);

import React, { useEffect, useState } from "react";
import localFont from "next/dist/compiled/@next/font/dist/local";

const Loading = () => {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    const count = setInterval(() => {
      setCounter((counter) => {
        if (counter < 100) {
          return counter + 1;
        }
        clearInterval(counter);
        return 100;
      });
    }, 50);
  }, []);
  return (
    <div className=" h-screen overflow-hidden  bg-[#222222] text-center text-clip  text-black">
      <p
        className={`bg-gradient-to-b from-transparent from-30%  to-[#DFF314] bg-clip-text text-transparent relative -top-32 font-semibold text-[80vh] `}
      >
        {counter}%
      </p>
    </div>
  );
};

export default Loading;
