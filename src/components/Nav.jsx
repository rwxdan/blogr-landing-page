import { useState } from "react";
import logo from "/src/assets/static/images/logo.svg";
import menu from "/src/assets/static/icons/icon-hamburger.svg";
import { links } from "/src/constants";
import NavSubmenu from "./NavSubmenu";
const Nav = () => {
  return (
    <div className="article flex my-[3.75rem] px-5 items-center justify-between">
      <div className="sm:mr-16">
        <a href="#" className="block w-auto">
          <img src={logo} alt="Blogr" />
        </a>
      </div>
      <div className="w-[32px] sm:hidden">
        <img src={menu} alt="Menu" />
      </div>
      <div className="hidden sm:flex flex-1 items-center justify-between">
        <div>
          <ul className="list-none flex gap-12">
            {links.map((item) => (
              <NavSubmenu id={item.id} title={item.title} links={item.links} />
            ))}
          </ul>
        </div>
        <div className="flex flex-1 justify-end gap-8 items-center">
          <a
            className="ua-login block font-ubuntu font-bold text-[var(--neutral-clr-400)] opacity-80 hover:opacity-100"
            href="#login"
          >
            Login
          </a>
          <a
            className="block font-ubuntu font-bold text-[var(--primary-clr-600)] bg-[var(--neutral-clr-400)] px-10 py-3 rounded-full hover:text-[var(--neutral-clr-400)] hover:bg-[var(--primary-clr-500)] ease-in-out duration-200"
            href="#sing-up"
          >
            Sing Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
