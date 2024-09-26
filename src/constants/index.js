import project1 from "../assets/projects/project1.webp";
import project2 from "../assets/projects/project2.webp";
import project3 from "../assets/projects/project3.webp";


export const HERO_CONTENT = `An aspiring AI and Frontend developer looking for opportunities to work on new and scalable projects. Interested in the fields of computer vision, machine learning and web development`;


export const PROJECTS = [
  {
    title: "Sign Language Recognition",
    image: project1,
    description:
      "A fully functional script which uses various ML libraries to perform our computer vision tasks as well as a python script designed to collect data for our sign language model.",
    technologies: ["OpenCV", "Mediapipe", "Python", "Tensorflow",],
  },
  {
    title: "Email Management App",
    image: project2,
    description:
      "An email workflow management app that summarises emails , auto unsubscribes , and generates responses for the user.",
    technologies: ["HTML", "CSS", "React", "Flask", "Python"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Tailwind", "Framer Motion"],
  },

];

export const CONTACT = {
  address: "Karachi , Pakistan",
  phoneNo: "+92 332 0291 115 ",
  email: "reenadk101@gmail.com",
};
