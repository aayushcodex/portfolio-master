import { FaGithub, FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

const Footer = () => {
    return (
      <footer className="bg-zinc-900 text-white">
        <div className="container flex flex-col p-4 mx-auto md:p-8 lg:flex-row dark:divide-gray-400">
          <ul className="self-center py-6 space-y-4 text-center sm:flex sm:space-y-0 sm:justify-around sm:space-x-4 lg:flex-1 lg:justify-start">
            <li>
              {" "}
              <a href="#home">Home</a>
            </li>
            <li>
              {" "}
              <a href="#experience">Experience</a>
            </li>
            <li>
              {" "}
              <a href="#techstack">Tech Stack</a>
            </li>
            <li>
              {" "}
              <a href="#projects">Projects</a>
            </li>
            <li>
              {" "}
              <a href="#about">About</a>
            </li>
          </ul>
          <div className="flex flex-col justify-center pt-6 lg:pt-0">
            <div className="flex justify-center space-x-11">
              <a
                rel="noopener noreferrer"
                href="https://www.instagram.com/ayushhhsaha/"
                title="Instagram"
                className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-white dark:text-gray-900"
              >
                <FaInstagram className="w-8 h-8" />
              </a>
              <a
                rel="noopener noreferrer"
                href="https://github.com/aayushcodex?tab=repositories"
                title="Github"
                className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-white dark:text-gray-900"
              >
                <FaGithub className="w-8 h-8" />
              </a>
              {/* <a rel="noopener noreferrer" href="https://twitter.com/saurabh74083" title="Twitter" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-white dark:text-gray-900">
                       <RiTwitterXFill className/>
                    </a> */}
              <a
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/ayush-saha-80a218256/"
                title="Linkedin"
                className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-white dark:text-gray-900"
              >
                <FaLinkedin className />
              </a>
              <a
                rel="noopener noreferrer"
                href="mailto:ayushsaha9928@gmail.com"
                title="Gmail"
                className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-white dark:text-gray-900"
              >
                <MdOutlineMailOutline className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
}
export default Footer