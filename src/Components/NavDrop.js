import React from "react";
import { Link } from "react-router-dom";

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
      <Link to="/lessons" className="p-4">
        Lessons
      </Link>
      <Link to="/blogs" className="p-4">
        Blogs
      </Link>
      <Link to="/contact" className="p-4">
        Contact Me
      </Link>
    </div>
  );
};

export default NavDrop;
