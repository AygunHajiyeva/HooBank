import React from "react";
import { useState } from "react";
import { logo, close, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="logo" className="w-[124px] h-[32px]" />

      <ul className="list-none sm:flex  hidden justify-end items-center flex-1">
        {navLinks.map((item, index) => (
          <li
            key={item.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] 
          ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}
          `}
          >
            <a href={`#${item.id}`}>{item.title}</a>
          </li>
        ))}
      </ul>

      <div
        className="sm:hidden flex flex-1 justify-end flex-end items-center "
        onClick={() => setToggle((prev) => !prev)}
      >
        <img
          src={toggle ? close : menu}
          alt="menu"cd hoo
          className="w-[28px] h-[28px] object-contain"
        />

        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6  bg-black-gradient rounded-xl  absolute z-[1000] top-20  w-[100vw]  my-4 sidebar right-0`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((item, index) => (
              <li
                key={item.id}
                className={`hover:text-secondary font-poppins font-normal cursor-pointer text-[16px] 
          ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}
          `}
              >
                <a href={`#${item.id}`}>{item.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
