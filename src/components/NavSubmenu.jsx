import React from "react";
import { useState, useEffect, useRef } from "react";
const NavSubmenu = (props) => {
  const [isOpen, setOpen] = useState(false);
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
  }, []);
  const ref = useRef(null);
  const handleClickOutside = (e) => {
    !ref.current.contains(e.target) ? setOpen(false) : setOpen((prev) => !prev);
  };

  return (
    <li className="relative">
      <button
        ref={ref}
        aria-controls={props.id}
        className={`dd ${isOpen ? "expanded" : ""}`}
      >
        {props.title}
      </button>
      <ul
        id={props.id}
        className={`dd-container ${isOpen ? "block" : "hidden"}`}
      >
        {props.links.map((link) => (
          <li key={link}>
            <a className="dd-link" href={`#${link.toLowerCase()}`}>
              {link}
            </a>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default NavSubmenu;
