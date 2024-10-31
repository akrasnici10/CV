import logo from "../assets/kevinRushlogo.png";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className=" mb-20 flex items-center justify-between py-6 px-8">
      <div className="flex items-center">
        <img src={logo} alt="logo" className="mx-2 w-10" />
      </div>
      <div className="flex items-center gap-4 text-2xl">
        <FaLinkedin />
        <FaGithub />
        <FaInstagram />
        <FaTwitter />
      </div>
    </div>
  );
};

export default Navbar;
