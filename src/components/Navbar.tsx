"use client";

import { Bars3Icon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState, useEffect } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Handle resize events to close mobile menu when switching to larger screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        // md breakpoint
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex fixed bg-[#030420] w-full z-10 justify-between outline-1 items-center px-10 md:px-30 py-8">
      <div className="flex flex-col">
        <a href="#" className="hover:text-amber-300">
          Gabriel Magdugo
        </a>
        {/* Mobile menu positioned below the name */}
        <div className="md:hidden">
          <ul
            className={
              isOpen
                ? "flex flex-col gap-4 mt-4 [&>li:hover]:text-amber-300"
                : "hidden"
            }
          >
            <li>
              <Link href="#about">About</Link>
            </li>
            <li>
              <a href="#">Experience</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Desktop menu */}
      <div className="hidden md:block">
        <ul className="flex gap-10 [&>li:hover]:text-amber-300">
          <li>
            <Link href="#about">About</Link>
          </li>
          <li>
            <Link href="#experience">Experience</Link>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
        </ul>
      </div>

      <button
        className="md:hidden hover:cursor-pointer hover:scale-110 hover:bg-white hover:rounded hover:text-black transition-transform fixed right-10 top-10"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Bars3Icon className="h-6 w-6 " />
      </button>
    </div>
  );
}

export default Navbar;
