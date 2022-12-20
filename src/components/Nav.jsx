import { useState } from "react";
import logo from "/src/assets/static/images/logo.svg";
import menu from "/src/assets/static/icons/icon-hamburger.svg";
import close from "/src/assets/static/icons/icon-close.svg";
import { links } from "/src/constants";
import NavSubmenu from "./NavSubmenu";
const Nav = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="article flex my-[3.75rem] px-5 items-center justify-between relative">
      <div className="sm:mr-16">
        <a href="#" className="block w-auto">
          <img src={logo} alt="Blogr" />
        </a>
      </div>
      <div className="w-[32px] sm:hidden">
        <img
          src={isOpen ? close : menu}
          alt="Menu"
          onClick={() => setOpen((prev) => !prev)}
        />
      </div>
      <div
        className={`${
          isOpen ? "menu expanded" : "hidden"
        } sm:flex sm:flex-1 sm:items-center sm:justify-between`}
      >
        <div>
          <ul className="list-none sm:flex sm:gap-12">
            {links.map((item) => (
              <NavSubmenu id={item.id} title={item.title} links={item.links} />
            ))}
          </ul>
        </div>
        <div className="sm:flex sm:flex-1 sm:justify-end sm:gap-8 sm:items-center">
          <a
            className="ua-login block font-ubuntu font-bold text-[var(--neutral-clr-400)] opacity-80 hover:opacity-100"
            href="#login"
          >
            Login
          </a>
          <a
            className="hero-cta sign-up block sm:text-[var(--primary-clr-600)] sm:bg-[var(--neutral-clr-400)] px-10 py-3 sm:hover:text-[var(--neutral-clr-400)] sm:hover:bg-[var(--primary-clr-500)]"
            href="#sign-up"
          >
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
