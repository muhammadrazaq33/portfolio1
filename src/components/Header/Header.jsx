import React from "react";
import "./Header.css";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <section
      className="header sm:my-10 my-[1.1rem] md:mt-0 relative"
      id="header"
    >
      <div className="h-[100vh] w-[100vw] md:text-[3rem] sm:text-[2.5rem] text-[1.8rem] font-semibold p-[2rem] flex flex-col justify-center">
        <span className="text-[1.75rem] font-light">Hello,</span>
        <span>
          I'm <span className="text-[#f4f422]">Muhammad Razaq</span>
          <br /> Mern Stack Developer
        </span>
        <p className="text-lg font-light max-w-[30rem]">
          I am a skilled web developer with experience in creating usually
          appealing and user friendly websites.
        </p>
        <Link>
          <button className="bg-[white] my-[1rem] py-[0.75rem] px-[1.8rem] rounded-[2rem] text-[black] text-[18px]">
            Hire Me
          </button>
        </Link>
      </div>
      <div className="">
        <img
          src="/assets/my-image.jpg"
          className="absolute md:top-16 top-12 sm:right-16 right-[1.6rem] -z-30 w-[20rem] rounded-[8rem] h-[34rem] sm:h-[32rem] md:h-[27rem] object-cover"
          alt=""
        />
      </div>
    </section>
  );
};

export default Header;
