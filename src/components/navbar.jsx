import logo from "../assets/file.png";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="mb-20 flex items-center justify-between py-6 px-1">
      <div className="flex items-center">
        <img src={logo} alt="logo" className="mx-4 w-11" />
      </div>
      <div className="flex items-center gap-6 text-2xl">
        <a href="https://www.linkedin.com/in/adnan-krasnici-17005a29a/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://www.instagram.com/akrasniqi6/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://x.com/akrasnici6" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
