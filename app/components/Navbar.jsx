import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const Navbar = ({isDarkMode,setIsDarkMode}) => {
  const sideMenuRef = useRef();
  const [isScroll, setIsScroll] = useState(false);
  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };
  const removeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  });

  return (
    <>
      <div className="fixed top-0 right-0 -z-50 w-11/12 translate-y-[-80%] dark:hidden">
        <Image src={assets.header_bg_color} alt="" className="w-full " />
      </div>

      <nav
        className={`w-full fixed z-50 px-5 lg:px-6 xl:px-[8%] py-4 flex items-center justify-between ${
          isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20" : ""
        }`}
      >
        <a href="#top">
          <Image src={isDarkMode ? assets.my_dark_logo:assets.my_logo} alt="" className="w-32 mr-14" />
        </a>
        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "": "bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent" }`}>
          <li>
            <a className="font-Ovo text-[18px] font-normal" href="#top">
              Home
            </a>
          </li>
          <li>
            <a className="font-Ovo text-[18px] font-normal" href="#about">
              About Me
            </a>
          </li>
          <li>
            <a className="font-Ovo text-[18px] font-normal" href="#serives">
              Serives
            </a>
          </li>
          <li>
            <a className="font-Ovo text-[18px] font-normal" href="#work">
              My Work
            </a>
          </li>
          <li>
            <a className="font-Ovo text-[18px] font-normal" href="#contact">
              Contact Me
            </a>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          <button onClick={() => setIsDarkMode((prev) => !prev)}>
            <Image src={isDarkMode ? assets.sun_icon: assets.moon_icon} alt="" className="w-6" />
          </button>
          <a
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo group dark:border-white/50"
            href="#contact"
          >
            Contact
            <Image
              alt=""
              src={isDarkMode? assets.arrow_icon_dark:assets.arrow_icon}
              className="w-3 group-hover:rotate-45  duration-300"
            />{" "}
          </a>
          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image
              src={isDarkMode?assets.menu_white :assets.menu_black}
              alt=""
              className="w-6"
            />
          </button>
        </div>
        {/* -- mobile menu -- */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 h-screen bg-white bg-opacity-95 backdrop-blur-lg shadow-sm transition duration-500 dark:bg-darkHover dark:text-white"
        >
          <div className="absolute top-6 right-6 " onClick={removeMenu}>
            <Image
              src={isDarkMode?assets.close_white:assets.close_black}
              alt=""
              className="w-5 cursor-pointer"
            />
          </div>

          <li>
            <a className="font-Ovo ml-2 " onClick={removeMenu} href="#top">
              Home
            </a>
          </li>
          <li>
            <a className="font-Ovo ml-2 " onClick={removeMenu} href="#about">
              About Me
            </a>
          </li>
          <li>
            <a className="font-Ovo ml-2 " onClick={removeMenu} href="#serives">
              Serives
            </a>
          </li>
          <li>
            <a className="font-Ovo ml-2 " onClick={removeMenu} href="#work">
              My Work
            </a>
          </li>
          <li>
            <a className="font-Ovo ml-2 " onClick={removeMenu} href="#contact">
              Contact Me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
