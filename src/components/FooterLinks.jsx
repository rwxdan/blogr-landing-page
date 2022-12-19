import React from "react";
import logo from "/src/assets/static/images/logo.svg";
import { links } from "/src/constants";
const FooterLinks = () => {
  return (
    <section className="footer-links sm:pt-24 pb-14">
      <div className="article">
        <ul className="list-none grid sm:grid-cols-4 justify-center text-center sm:text-left">
          <li className="mx-auto sm:mx-0 py-12 sm:py-0">
            <a href="#" className="block">
              <img src={logo} alt="Blogr" />
            </a>
          </li>
          {links.map((item) => (
            <li
              key={item.id}
              className="font-bold font-ubuntu text-base text-[var(--neutral-clr-400)]"
            >
              {item.title}
              <ul className="list-none my-6">
                {item.links.map((link) => (
                  <li
                    key={link}
                    className="py-1 font-normal font-ubuntu text-base text-[var(--neutral-clr-400)] text-[15px]"
                  >
                    <a
                      className="footer-link max-w-fit"
                      href={`#${link.toLowerCase()}`}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FooterLinks;
