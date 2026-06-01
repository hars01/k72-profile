"use client";

import React, { useEffect, useState } from "react";
import { LampContainer } from "../ui/lamp";

const ComingSoon = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <LampContainer className="bg-black">
      <div
        className={`flex flex-col items-center justify-center text-center px-6 mt-28 transition-transform transition-opacity duration-700 ease-in-out ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h1 className="bg-gradient-to-br from-cyan-300 via-white to-cyan-500 bg-clip-text text-transparent text-6xl md:text-[8rem] font-extrabold tracking-tight leading-[0.9]">
          Coming Soon
        </h1>

        <p className="mt-8 max-w-2xl text-slate-400 text-lg md:text-xl">
          Hi, I'm working on something amazing. Stay tuned!
        </p>
      </div>
    </LampContainer>
  );
};

export default ComingSoon;
