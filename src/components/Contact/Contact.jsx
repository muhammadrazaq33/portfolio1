import React from 'react'
import "./Contact.css";

const Contact = () => {
  return (
    <div id="contact" className='contact'>
          <h1 className='text-[3rem] font-semibold'>Contact Me</h1>
          <span className='text-xl font-normal'>Please fill out the form below to discuss any work opportunities.</span>
          <form className='flex flex-col items-center justify-center gap-[1rem] w-[90vw] max-w-[60rem]'>
              <input type="text" className='inputArea' placeholder='Your Name' />
              <input type="email" className='inputArea' placeholder='Your Email' />
              <textarea name="message" className='inputArea' rows="5" placeholder='Your message'></textarea>
              <button type='submit' value="send" className='border-none bg-white rounded-[0.5rem] m-[2rem] py-[0.75rem] px-[3rem] text-black'>Submit</button>
          </form>
    </div>
  );
}

export default Contact
