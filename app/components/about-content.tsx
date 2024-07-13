"use client";
import React, { useState } from "react";
import StarButton from "./badge";
import Counter from "./counter";
import Image from "next/image";

const AboutContent = () => {
  const [name, setName] = useState("short");
  const bio_data = [
    {
      id: 1,
      name: "short",
      content:
        "I’m a designer, illustrator, and creator of courses, templates, wireframe kits, and the occasionally useful side-project.",
    },
    {
      id: 2,
      name: "long",
      content:
        "I’m a designer, illustrator, signer, illustrator, and creator of courses, templates, wireframe kits, and the occasionally useful side-project.and creator of courses, templates, wireframe kits, and the occasionally useful side-project. lorem*20 I’m a designer, illustrator, and creator of courses, templates, wireframe kits, and the occasionally useful side-project. I’m a designer, illustrator, and creator of courses, templates, wireframe kits, and the occasionally useful side-project. I’m a designer, illustrator, and creator of courses, templates, wireframe kits, and the occasionally useful side-project. I’m a designer, illustrator, and creator of courses, templates, wireframe kits, and the occasionally useful side-project. I’m a designer, illustrator, and creator of courses, templates, wireframe kits, and the occasionally useful side-project. I’m a designer, illustrator, and creator of courses, templates, wireframe kits, and the occasionally useful side-project. I’m a designer, illustrator, and creator of courses, templates, wireframe kits, and the occasionally useful side-project.I’m a designer, illustrator, and creator of courses, templates, wireframe kits, and the occasionally useful side-project. lorem*20 I’m a designer, illustrator, and creator of courses, templates, wireframe kits, and the occasionally useful side-project. I’m a designer, illustrator, and creator of courses, templates, wireframe kits, and the occasionally useful side-project. I’m a designer, illustrator, and creator of courses, templates, wireframe kits, and the occasionally useful side-project. I’m a designer, illustrator, and creator of courses, templates, wireframe kits, and the occasionally useful side-project. I’m a designer, illustrator, and creator of courses, templates, wireframe kits, and the occasionally useful side-project. I’m a designer, illustrator, and creator of courses, templates, wireframe kits, and the occasionally useful side-project. I’m a designer, illustrator, and creator of courses, templates, wireframe kits, and the occasionally useful side-project.",
    },
  ];
  return (
    <div className="h-full  pl-16 flex gap-40  justify-start items-center mr-36 ">
      <div className=" relative flex flex-col items-center h-[465px]">
        <div className=" absolute w-[120px] h-[120px] bg-accent rounded-full top-2 right-4 z-10" />
        <div
          style={{
            backgroundImage: `url("/Bg.jpg")`,
          }}
          className="h-[465px] bg-cover bg-center bg-no-repeat w-[421px] overflow-hidden rounded-br-2xl rounded-bl-2xl rounded-tl-full rounded-tr-full "
        >
          <div className="h-[40px]  bg-accent w-[704px] -rotate-12 flex items-center mt-80 -ml-10 justify-center ">
            <div className="flex">
              <Image
                src={"/Star.svg"}
                alt="star"
                width={14}
                height={14}
                className="fill-#000"
              />
              <p className="uppercase ml-[5px] font-medium text-xs text-lightBlack ">
                Sushant Thapa
              </p>
            </div>
          </div>
        </div>
        <div className="w-[341px] h-[70px] bg-accent rounded-bl-2xl rounded-br-2xl -m-16 -z-10" />
      </div>
      <div className="flex">
        <div className="relative flex flex-col items-start h-[465px] gap-10 w-5/6">
          <StarButton />
          <div className="flex">
            <p className="text-2xl leading-[160%]">
              I’m a{" "}
              <span className="text-accent">
                designer, illustrator, and creator
              </span>{" "}
              of courses, templates, wireframe kits, and the occasionally useful
              side-project.
            </p>
          </div>
          <div className="flex h-3/5 ">
            <div className="flex flex-col justify-between ">
              <div className="flex flex-col gap-3">
                <p className="font-hatton text-7xl text-accent">12+</p>
                <div className="w-min">
                  <p className="text-xl">Years Experience Working</p>
                </div>
              </div>
              <div className="flex gap-4">
                <p className="uppercase">Let's work</p>
                <Image
                  src={"/button_star.png"}
                  alt="star"
                  width={17.26}
                  height={17.67}
                  className="w-[17.26px] h-auto"
                />
              </div>
            </div>
            <div className="ml-10 ">
              <div className="flex gap-x-4 mb-5">
                <button
                  className="uppercase  text-sm font-medium rounded-2xl bg-accent px-3 py-2 text-lightBlack"
                  onClick={() => setName("short")}
                >
                  Short Bio
                </button>
                <button
                  className="uppercase  text-sm font-medium rounded-2xl bg-accent px-3 py-2 text-lightBlack"
                  onClick={() => setName("long")}
                >
                  Long Bio
                </button>
              </div>
              <div className=" overflow-y-scroll h-[87%]   ">
                {bio_data.map((data) => {
                  return (
                    <div className="" key={data.id}>
                      {name === data.name && (
                        <p className="text-base leading-[165%] font-normal ">
                          {data.content}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end -mt-20">
          <Image src={"starborder.svg"} width={30} height={30} alt="chill" />
          <Image src={"starfill.svg"} width={100} height={100} alt="chill" />
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
