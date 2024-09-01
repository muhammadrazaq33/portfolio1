import React, { useRef } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form.current, {
        publicKey: "YOUR_PUBLIC_KEY",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          e.target.reset();
          alert("Email Send!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div id="contact" onSubmit={sendEmail} className="contact mt-28">
      <h1 className="text-[3rem] font-semibold">Contact Me</h1>
      <span className="text-xl font-normal">
        Please fill out the form below to discuss any work opportunities.
      </span>
      <form
        ref={form}
        className="flex flex-col items-center justify-center gap-[1rem] w-[90vw] max-w-[60rem]"
      >
        <input type="text" className="inputArea" placeholder="Your Name" />
        <input type="email" className="inputArea" placeholder="Your Email" />
        <textarea
          name="message"
          className="inputArea"
          rows="5"
          placeholder="Your message"
        ></textarea>
        <button
          type="submit"
          value="send"
          className="border-none bg-white rounded-[0.5rem] m-[2rem] py-[0.75rem] px-[3rem] text-black"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
