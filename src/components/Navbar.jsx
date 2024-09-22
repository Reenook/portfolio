import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between py-6 lg:mb-36 lg:mx-36 mx-4">
            <div className="flex flex-shrink-0 items-center">
                <a href="/" aria-label="HOME" className="font-bold text-2xl">Home</a>
            </div>
            <div className="flex items-center justify-center gap-4 text-3xl">
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
