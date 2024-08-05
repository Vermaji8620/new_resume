import { FaLinkedin, FaGithub, FaTwitterSquare } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import { BiSolidUpArrow } from "react-icons/bi";
import { useState } from "react";

const Navbar = () => {
  const [show, setShow] = useState(true);
  return (
    <nav className="lg:mb-20 mb-4 gap-3 flex items-center lg:flex-row md:flex-row flex-col justify-between py-6">
      <div className="lg:hidden md:hidden relative left-36 text-yellow-400">
        <BiSolidUpArrow
          className={`${
            show ? "rotate-180" : "rotate-0"
          } transition-all duration-300 delay-150 ease-in-out`}
          onClick={() => {
            setShow(!show);
          }}
        />
      </div>
      <div
        className={`flex ${
          show ? "opacity-0 h-0" : "opacity-100 h-auto"
        } flex-shrink-0 gap-7 items-center md:flex-row lg:flex-row flex-col lg:opacity-100 lg:h-auto lg:inline-flex transition-all duration-300 delay-150 ease-in-out`}
      >
        <ScrollLink
          to="home"
          smooth={true}
          duration={1000}
          className="text-lg cursor-pointer hover:text-blue-500"
        >
          Home
        </ScrollLink>
        <ScrollLink
          to="about"
          smooth={true}
          duration={1000}
          className="text-lg cursor-pointer hover:text-blue-500"
        >
          About
        </ScrollLink>
        <ScrollLink
          to="technologies"
          smooth={true}
          duration={1000}
          className="text-lg cursor-pointer hover:text-blue-500"
        >
          Technologies
        </ScrollLink>
        <ScrollLink
          to="certificates"
          smooth={true}
          duration={1000}
          className="text-lg cursor-pointer hover:text-blue-500"
        >
          Certifications
        </ScrollLink>
        {/* <ScrollLink
          to="experience"
          smooth={true}
          duration={1000}
          className="text-lg cursor-pointer hover:text-blue-500"
        >
          Experience
        </ScrollLink> */}
        <ScrollLink
          to="projects"
          smooth={true}
          duration={1000}
          className="text-lg cursor-pointer hover:text-blue-500"
        >
          Projects
        </ScrollLink>
        <ScrollLink
          to="contact"
          smooth={true}
          duration={1000}
          className="text-lg cursor-pointer hover:text-blue-500"
        >
          Contact
        </ScrollLink>
      </div>
      <div
        className={`m-8 ${
          show ? "opacity-0 h-0" : "opacity-100 h-auto"
        } flex items-center justify-center gap-4 lg:opacity-100 lg:h-auto lg:inline-flex text-2xl transition-all duration-300 delay-150 ease-in-out`}
      >
        <a
          href="https://www.linkedin.com/in/aditya-raj-verma-516358255/"
          target="_blank"
        >
          <FaLinkedin />
        </a>
        <a href="https://github.com/Vermaji8620/" target="_blank">
          <FaGithub />
        </a>
        <a href="https://x.com/Vermajiii140320/" target="_blank">
          <FaTwitterSquare />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
