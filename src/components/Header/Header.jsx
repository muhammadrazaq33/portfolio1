import React from 'react'
import "./Header.css"
import { Link } from 'react-scroll'

const Header = () => {
  return (
    <section className='header'> 
      <div className='h-[100vh] w-[100vw] text-[3rem] font-semibold p-[2rem] flex flex-col justify-center'>
        <span className='text-[1.75rem] font-light'>Hello,</span>
        <span>
          I'm <span className='text-[yellow]'>Muhammad Razaq</span>
          <br /> Mern Stack Developer
        </span>
        <p className='text-lg font-light'>I am a skilled web developer with experience in creating usually appealing and user friendly websites.</p>
        <Link><button className='bg-[white] my-[1rem] py-[0.75rem] px-[1.8rem] rounded-[2rem] text-[black] text-[18px]'>Hire Me</button></Link>
      </div>
      <img src="" alt="" />
    </section>
  );
}

export default Header
