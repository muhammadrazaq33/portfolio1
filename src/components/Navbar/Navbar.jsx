import React from 'react'
import "./Navbar.css";
import { Link } from 'react-scroll';

const Navbar = () => {
    return (
      <nav className="h-[5rem] w-[100vw] my-[0px] mx-auto flex items-center justify-between py-[1rem] px-[2rem] sticky top-0 z-10">
        <h1 className="text-[#abab48] text-[2rem] font-semibold">M Razaq</h1>
        <div>
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
        <Link
            to="contact"
            smooth={true}
            offset={-70}
            duration={500}>
          <button className="bg-[white] text-[black] text-[1.1rem] py-[0.7rem] px-[1.5rem] border-none rounded-[2rem]"
          >
            Contact Me
          </button>
        </Link>
      </nav>
    );
}

export default Navbar
