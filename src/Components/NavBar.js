import React from "react";
import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import RayResume from "./Resume.pdf";
import { FcHome } from "react-icons/fc";

const Navbar = ({ toggle }) => {
  return (
    <nav
      className="flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono bg-gradient-to-t from-gray-300 via-blue-100 to-gray-100"
      role="navigation"
    >
      <Link to="/" className="pl-8">
        <FcHome
          className="text-4xl mx-auto inline-block"
          style={{ color: "#CC3534" }}
        />
      </Link>

      <div className="px-4 cursor-pointer md:hidden" onClick={toggle}>
        <svg
          className="w-8 h-8"
          fill="#303034"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
      <div className="pr-8 md:block  hidden">
        <Link to="/about" className="p-4">
          About
        </Link>
        <Link to="/projects" className="p-4">
          Projects
        </Link>
        <Link to="/blogs" className="p-4">
          Blogs
        </Link>
        <Link to="/contact" className="p-4">
          Contact
        </Link>
        <a
          href={RayResume}
          target="__blank"
          rel="noopener noreferrer"
          className="p-4"
        >
          Resume
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
