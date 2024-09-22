import { CONTACT } from "../constants/index.js";
import { motion } from "framer-motion";

const Contact = () => {
    const email = CONTACT.email;
    const subject = "Your Subject Here"; // Customize the subject
    const body = "Your message here"; // Customize the body

    return (
        <div className={"border border-stone-900 pb-20"}>
            <motion.h2
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2 }}
                className={"my-10 text-center text-4xl"}>
                Get in Touch
            </motion.h2>
            <div className={"text-center tracking-tighter"}>

                <motion.a
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`}
                    target="_blank" // Opens in a new tab
                    rel="noopener noreferrer" // Security measure
                    className={"border-b"}>
                    {email}
                </motion.a>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className={"my-4"}>
                    {CONTACT.address}
                </motion.p>
            </div>
        </div>
    );
};

export default Contact;
