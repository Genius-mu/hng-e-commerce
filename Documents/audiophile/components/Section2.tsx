"use client";

import Link from "next/link";
import { useState } from "react";

const Section2 = () => {
  const [Cards1, setCards1] = useState([
    {
      id: "/headphone",
      imgVal: "/images/img3.png",
      h2Val: "Headphones",
    },
    {
      id: "/speakersprod",
      imgVal: "/images/img1.png",
      h2Val: "Speakers",
    },
    {
      id: `/earphoneprod`,
      imgVal: "/images/img2.png",
      h2Val: "Earphones",
    },
  ]);

  return (
    <section className="w-full h-fit pt-[10em] pb-[10%] flex justify-center items-center">
      <div className="h-full w-[80%] flex justify-between flex-col sm:flex-row gap-y-10 items-center gap-x-4">
        {Cards1.map((card1, index) => (
          <div
            key={index}
            className="w-full h-[11em] hover:scale-105 transition duration-300 bg-[#f1f1f1] rounded flex flex-col gap-y-3 justify-center items-center"
          >
            <div className="relative inline-block">
              <img
                src={card1.imgVal}
                alt={card1.h2Val}
                className="h-[9em] mt-[-6em] relative z-10"
              />
              <div className="absolute bottom-[-0.2em] left-1/2 -translate-x-1/2 w-[70%] h-[10px] bg-black/90 blur-sm opacity-70 rounded-full"></div>
            </div>

            <h2 className="uppercase text-[14px] tracking-[4px] font-semibold">
              {card1.h2Val}
            </h2>
            <Link
              href={card1.id}
              className="text-black/70 uppercase text-[12px] hover:text-[#d87d4a] transition duration-200 font-semibold"
            >
              shop <span className="text-[#d87d4a]">{">"}</span>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section2;
