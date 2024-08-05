import React, { useState } from 'react'
import "./Navbar.css";
import { Link } from 'react-scroll';
import { RiMenu3Fill } from "react-icons/ri";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
    return (
      <nav className="h-[5rem] w-[100vw] max-w-[75rem] my-[0px] mx-auto flex items-center justify-between py-[1rem] px-[2rem] sticky top-0 z-10">
        <h1 className="text-[yellow] text-[2rem] font-semibold">M Razaq</h1>
        <div className="md:block hidden">
          <Link
            activeClass="active"
            to="header"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="menuItem"
          >
            Home
          </Link>
          <Link
            className="menuItem"
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            About
          </Link>
          <Link className="menuItem">Clients</Link>
          <Link className="menuItem">Portfolio</Link>
        </div>
        {/* <button onClick={() => {
          document.getElementById('contact').scrollIntoView({ behavior: "smooth" });
          }} className="bg-[white] text-[black] text-[1.1rem] py-[0.7rem] px-[1.5rem] border-none rounded-[2rem]">
            Contact Me
          </button> */}
        <Link to="contact" smooth={true} offset={-70} duration={500}>
          <button className="bg-[white] md:block hidden text-[black] text-[1.1rem] py-[0.7rem] px-[1.5rem] border-none rounded-[2rem]">
            Contact Me
          </button>
        </Link>

        {/* side bar */}
        <RiMenu3Fill
          onClick={() => setShowMenu(!showMenu)}
          className="text-[3rem] block md:hidden text-[yellow] "
        />
        <div
          className="absolute top-[5rem] right-[2rem] bg-[#282828] flex flex-col p-[0.5rem] h-fit 
          rounded-[1rem] min-w-[15rem] z-50"
          style={{ display: showMenu ? "flex" : "none" }}
        >
          <Link
            onClick={() => setShowMenu(false)}
            activeClass="active"
            to="header"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="listItem"
          >
            Home
          </Link>
          <Link
            onClick={() => setShowMenu(false)}
            className="listItem"
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            About
          </Link>
          <Link onClick={() => setShowMenu(false)} className="listItem">
            Clients
          </Link>
          <Link onClick={() => setShowMenu(false)} className="listItem">
            Portfolio
          </Link>
          <Link
            onClick={() => setShowMenu(false)}
            className="listItem"
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            Contact
          </Link>
        </div>
        {/*end of side bar */}
      </nav>
    );
}

export default Navbar
