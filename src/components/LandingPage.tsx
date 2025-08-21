"use client";

import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";

function LandingPage() {
  return (
    <div className="flex flex-col-reverse gap-20 pt-30 md:flex-row md:pt-0 md:gap-40 items-center justify-around ">
      <div className="flex flex-col w-1/2 gap-5 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-bold">Hello.</h1>
        <h2 className="text-3xl md:text-5xl">I'm Gabriel</h2>
        <h2 className="text-4xl md:text-6xl font-bold">
          <Typewriter
            words={["Software Developer", "Ads Manager", "Project Manager"]}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={100}
            deleteSpeed={80}
            delaySpeed={1000}
          />
        </h2>
        <div className="flex justify-center md:justify-start gap-5 mt-2 ">
          <a
            href="#"
            className="text-left outline-1 p-3 hover:bg-white hover:text-black transition-colors "
          >
            Got a project?
          </a>
          <a
            href="#"
            className="text-left outline-1 p-3 hover:bg-white hover:text-black transition-colors "
          >
            Download Resume
          </a>
        </div>
      </div>
      <div className="relative w-50 h-50 md:w-100 md:h-100 aspect-square">
        <Image
          src="/images/profile-square.jpg"
          alt="profile-pic"
          fill
          className="rounded-full hover:shadow-[0_0_15px_5px_rgba(255,255,255,0.8)]  hover:scale-105 transition-transform "
        />
      </div>
    </div>
  );
}

export default LandingPage;
