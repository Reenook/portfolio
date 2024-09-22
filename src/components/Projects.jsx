import { PROJECTS } from "../constants/index.js";
import { motion } from "framer-motion";

const Projects = () => {
    return (
        <div className={"pb-4 lg:mb-36 lg:mx-36 mx-4"}>
            <motion.h2
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2 }}
                className={"my-20 text-center text-4xl"}>Projects</motion.h2>
            <div>
                {PROJECTS.map((project, index) => (
                    <motion.div
                        key={index}
                        className={"mb-8 flex flex-wrap lg:justify-center"}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.2 }}>
                        <div className={"w-full lg:w-1/4"}>
                            <motion.img
                                src={project.image}
                                alt={project.title}
                                width={250}
                                height={250}
                                className={"mb-6 rounded"}
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}/>
                        </div>
                        <div className={"w-full max-w-xl lg:w-3/4"}>
                            <motion.h3
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className={"mb-2 font-semibold text-2xl"}>
                                {project.title}
                            </motion.h3>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className={"mb-4 text-stone-400"}>
                                {project.description}
                            </motion.p>
                            {project.technologies.map((tech, index) => (
                                <span
                                    className={"mr-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300"}
                                    key={index}>
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
