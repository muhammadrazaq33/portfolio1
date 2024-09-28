import React from "react";

const Projects = () => {
  return (
    <section className="w-screen max-w-screen-xl mx-auto px-4 relative">
      <h2 className="text-4xl w-max mx-auto text-center text-[#1788ae] border-b-2 border-[#1788ae] relative z-10 bg-[#212121]">
        Latest Works
      </h2>
      <div className="md:flex gap-[80px] items-center mt-12 relative">
        <div className="h-[2px] absolute bg-[#1788ae] left-1/4 right-1/2 top-1/2"></div>
        <div className="w-4 h-4 absolute left-1/2 -translate-x-1/2 border-[3px] border-[#fc815c] z-10 bg-[#212121] cursor-pointer rounded-full hover:scale-110 ease-in-out duration-100"></div>
        <a href="#" className="w-full flex">
          <div className="relative group hover:scale-105 ease-in-out duration-200">
            <span class="flex items-center gap-1.5 px-3 py-2 bg-[#fc815c] rounded w-max group-hover:-top-14 ease-jump duration-300 sm:absolute left-1/2 sm:-translate-x-1/2 top-5 text-sm sm:text-base mt-2 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2">
              ProCodrr
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-external-link"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </span>
            <img
              className="max-w-[400px] mr-auto relative"
              src="https://anuragsinghbam.netlify.app/images/harigurus.webp"
              alt=""
            />
          </div>
        </a>
        <div className="w-full">
          <h3 class="text-[#fc815c] font-bold text-4xl">Harigurus</h3>
          <span class="text-[#fc815c] text-lg">(Event Booking)</span>
          <p class="text-justify mt-2">
            HariGurus is a one-stop-shop for all Hindu religious, customs and
            traditional requirements. Built the complete site from scratch.
          </p>

          <ul class="flex flex-wrap gap-2 mt-2">
            <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
              #react.js
            </li>
            <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
              #express.js
            </li>
            <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
              #node.js
            </li>
            <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
              #swiper.js
            </li>
            <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
              #mongoDB
            </li>
            <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
              #mongoose
            </li>
            <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
              #css
            </li>
            <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
              #javascript
            </li>
            <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
              #figma
            </li>
          </ul>
        </div>
      </div>
      <div className="md:flex gap-[80px] items-center mt-12 relative">
        <div className="h-[2px] absolute bg-[#1788ae] left-1/2 right-1/4 top-1/2"></div>
        <div className="w-4 h-4 absolute left-1/2 -translate-x-1/2 border-[3px] border-[#fc815c] z-10 bg-[#212121] cursor-pointer rounded-full hover:scale-110 ease-in-out duration-100"></div>
        <div class="w-full">
          <h3 class="text-[#ffe578] font-bold text-4xl">EazyGrad</h3>
          <span class="text-[#ffe578] text-lg">(EdTech Startup)</span>
          <p class="text-justify mt-2">
            Being a lead developer, revamped the site to a highly responsive,
            and interactive website. Created new features and pages. Worked as a
            team with product manager and ux designer.
          </p>

          <ul class="flex flex-wrap gap-2 mt-2">
            <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
              #react.js
            </li>
            <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
              #express.js
            </li>
            <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
              #node.js
            </li>
            <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
              #swiper.js
            </li>
            <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
              #mongoDB
            </li>
            <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
              #mongoose
            </li>
            <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
              #css
            </li>
            <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
              #javascript
            </li>
            <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
              #figma
            </li>
          </ul>
        </div>
        <a href="#" className="w-full flex">
          <div className="ml-auto relative group hover:scale-105 ease-in-out duration-200">
            <span class="flex items-center gap-1.5 px-3 py-2 bg-[#ffe578] text-black rounded w-max group-hover:-top-14 ease-jump duration-300 sm:absolute left-1/2 sm:-translate-x-1/2 top-5 text-sm sm:text-base mt-2 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2">
              Eaxy
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-external-link"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </span>
            <img
              className="max-w-[400px] relative"
              src="https://anuragsinghbam.netlify.app/images/eazygrad.webp"
              alt=""
            />
          </div>
        </a>
      </div>
      <div className="w-[2px] absolute bottom-0 top-0 bg-[#1788ae] left-1/2 -translate-x-1/2"></div>
    </section>
  );
};

export default Projects;
