import { RiReactjsLine } from "react-icons/ri";
import { SiOpencv, SiTensorflow, SiPytorch, SiFlask, SiMysql, SiPython, SiCplusplus, SiCsharp,} from "react-icons/si"; // Import new icons
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        },
    },
});

const Technologies = () => {
    return (
        <div className={"pb-24 lg:mb-36 lg:mx-36 mx-4"}>
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className={"my-20 text-center text-4xl"}>Tools and Technologies</motion.h2>
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className={"flex flex-wrap items-center justify-center gap-4 pt-20"}>
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(2.5)}
                    className="p-4">
                    <RiReactjsLine className={"text-7xl text-cyan-400"} />
                </motion.div>
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(3)}
                    className="p-4">
                    <SiOpencv className={"text-7xl text-blue-500"} />
                </motion.div>
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(2.5)}
                    className="p-4">
                    <SiTensorflow className={"text-7xl text-orange-500"} />
                </motion.div>
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(3)}
                    className="p-4">
                    <SiPytorch className={"text-7xl text-red-600"} />
                </motion.div>
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(2.5)}
                    className="p-4">
                    <SiFlask className={"text-7xl text-green-600"} />
                </motion.div>
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(3)}
                    className="p-4">
                    <SiMysql className={"text-7xl text-blue-800"} />
                </motion.div>
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(2.5)}
                    className="p-4">
                    <SiPython className={"text-7xl text-yellow-500"} />
                </motion.div>
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(3)}
                    className="p-4">
                    <SiCplusplus className={"text-7xl text-blue-600"} />
                </motion.div>
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(2.5)}
                    className="p-4">
                    <SiCsharp className={"text-7xl text-purple-600"} />
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Technologies;
