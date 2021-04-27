import React from "react";
import { Link } from "react-router-dom";
import RayResume from "./Resume.pdf";

const NavDrop = ({ isOpen, toggle }) => {
  return (
    <div
      className={
        isOpen
          ? "grid grid-rows-4 text-center items-center bg-yellow-500"
          : "hidden"
      }
      onClick={toggle}
    >
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
  );
};

export default NavDrop;
