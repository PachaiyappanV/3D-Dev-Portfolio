import { useState } from "react";
import { navLinks } from "../constants/index.js";

const NavItems = () => {
  return (
    <ul className="nav-ul">
      {navLinks.map((link) => (
        <li key={link.id} className="nav-li">
          <a href={link.href} className="nav-li-a">
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  );
};
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [img, setImg] = useState("p.png");
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          <a
            href="#"
            className="text-neutral-400 hover:text-white transition-colors"
          >
            <img
              onMouseOver={() => setImg("p2.png")}
              onMouseOut={() => setImg("p.png")}
              src={img}
              alt="logo"
              className="w-12 h-12"
            />
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className=" text-neutral-400  focus:outline-none 
            sm:hidden flex transition-colors"
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              alt="toggle"
              className="w-10 h-10"
            />
          </button>

          <nav className="hidden sm:flex">
            <NavItems />
          </nav>
        </div>
      </div>
      <div className={`nav-sidebar ${isOpen ? "max-h-screen" : "max-h-0"}`}>
        <nav className="p-5">
          <NavItems />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
