import "./App.css";
import { Route, Switch, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import NavBar from "./Components/NavBar";
import NavDrop from "./Components/NavDrop";
import Home from "./Components/Home";
import About from "./Components/About";
import Blogs from "./Components/Blogs";
import Lessons from "./Components/Lessons";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
        console.log("i resized");
      }
    };

    window.addEventListener("resize", hideMenu);

    return () => {
      window.removeEventListener("resize", hideMenu);
    };
  });

  return (
    <>
      <NavBar toggle={toggle} />
      <NavDrop isOpen={isOpen} toggle={toggle} />
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={About} path="/about" />
        <Route component={Projects} path="/projects" />
        <Route component={Lessons} path="/lessons" />
        <Route component={Blogs} path="/blogs" />
        <Route component={Contact} path="/contact" />
      </Switch>
    </>
  );
}

export default App;
