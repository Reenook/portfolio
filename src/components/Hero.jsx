import { useEffect, useRef, useState } from "react";
import profilePic from "../assets/profile.webp";
import { HERO_CONTENT } from "../constants/index.js";
import { motion } from "framer-motion";

const containerVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.5, staggerChildren: 0.5 },
    },
};

const childrenVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.5 },
    },
};

const imageVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1, delay: 0.5 } },
};

const Hero = () => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        });
    };

    useEffect(() => {
        const observer = new IntersectionObserver(handleScroll);
        if (ref.current) {
            observer.observe(ref.current);
        }
        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <div ref={ref} className="pb-4 lg:mb-36 lg:mx-36 mx-4">
            <div className="flex flex-wrap lg:flex-row-reverse items-center justify-center">
                <div className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:p-8">
                        <motion.img
                            src={profilePic}
                            alt="Reenad Khan"
                            className="border border-stone-900 rounded-full w-full max-w-sm"
                            width={650}
                            height={650}
                            initial="hidden"
                            animate={isVisible ? "visible" : "hidden"}
                            variants={imageVariants}/>
                    </div>
                </div>
                <div className="w-full lg:w-1/2">
                    <motion.div
                        initial="hidden"
                        animate={isVisible ? "visible" : "hidden"}
                        variants={containerVariants}
                        className="flex flex-col items-center lg:items-start mt-10 lg:mt-0">
                        <motion.h2
                            variants={childrenVariants}
                            className="pb-2 text-4xl tracking-tighter lg:text-7xl">
                            Reenad Khan
                        </motion.h2>
                        <motion.span
                            variants={childrenVariants}
                            className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent">AI Developer</motion.span>
                        <p className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter">
                            {HERO_CONTENT}
                        </p>
                        <a
                            href="/Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            download
                            className="bg-transparent border border-white rounded-full p-4 text-sm text-white hover:bg-white hover:text-stone-800 hover:shadow-lg transition duration-300">Download Resume</a>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
