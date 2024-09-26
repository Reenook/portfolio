import { FaGithub, FaLinkedin } from "react-icons/fa";
import mylogo from "../assets/NewLogo.png";
const Navbar = () => {
    return (
        <nav className="flex items-center justify-between py-4 lg:mb-36 lg:mx-36 mx-4">
            <div className="flex flex-shrink-0 items-center">
                <a href={"/"}>
                    <img src={mylogo} alt={"Logo"}/>
                </a>
            </div>
            <div className="flex items-center justify-center space-x-5 text-3xl">
                <a
                    href="https://www.linkedin.com/in/reenad-khan-78989530b/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn">
                    <FaLinkedin />
                </a>
                <a
                    href="https://github.com/Reenook"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Github">
                    <FaGithub />
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
