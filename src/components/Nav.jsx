import { useState } from "react";
import logo from "/src/assets/static/images/logo.svg";
import { links } from "/src/constants";
import NavSubmenu from "./NavSubmenu";
const Nav = () => {
  return (
    <div className="article flex  my-[3.75rem] px-5 items-center justify-between">
      <div className="flex gap-16 items-center">
        <a href="#" className="block w-auto">
          <img src={logo} alt="Blogr" />
        </a>

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
          className="block font-ubuntu font-bold text-[var(--primary-clr-600)] bg-[var(--neutral-clr-400)] px-10 py-3 mr-[-0.5rem] rounded-full hover:text-[var(--neutral-clr-400)] hover:bg-[var(--primary-clr-500)] ease-in-out duration-200"
          href="#sing-up"
        >
          Sing Up
        </a>
      </div>
    </div>
  );
};

export default Nav;
