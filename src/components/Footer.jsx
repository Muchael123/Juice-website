import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div className="md:flex-col px-4 md:px-12 lg:px-20 pb-5" id="Contact">
      <hr className="mt-9 mb-7" />
      <div className="flex flex-row justify-between w-full ">
        <div className="flex flex-col gap-y-5 pr-4 flex-1">
          <h1 className="font-bold font-pacifico text-xl">Contact us</h1>
          <input
            placeholder="Your Name"
            className="rounded-lg max-w-[60%] h-12"
          />
          <input
            placeholder="Your Email"
            className="rounded-lg max-w-[60%] h-12"
          />
          <textarea placeholder="Your Name" className="rounded-lg w-[100%]" />
          <button className="rounded-lg bg-orange-500 hover:bg-orange-600 transition-all duration-250 w-[50%] p-3 font-bold">
            Submit
          </button>
        </div>
        <div className="flex flex-col justify-center items-center flex-1">
          <h1 className="font-bold font-pacifico text-xl">Sitemap</h1>
          <p>All our pages</p>
          <ul className="list-disc space-y-3">
            <li>
              <a href="#Home">Home</a>
            </li>
            <li>
              <a href="#Feature">Features</a>
            </li>
            <li>
              <a href="#Menu">Menu</a>
            </li>
            <li>
              <a href="#Menu">Pricing</a>
            </li>
            <li>
              <a href="#Menu">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mb-5 py-6 flex flex-row justify-center gap-x-4">
        <div className="flex flex-row justify-center gap-x-4">
          <p className="text-md">
            Get in touch with me in My social media accounts
          </p>
          <a href="https://github.com/Muchael123" className="text-2xl">
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/michael-maina-087227235/"
            className="text-2xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.linkedin.com/in/michael-maina-087227235/"
            className="text-2xl"
          >
            <FaTwitter />
          </a>
        </div>
        <p>copyright 2023 | all rights reserved</p>
      </div>
    </div>
  );
}

export default Footer