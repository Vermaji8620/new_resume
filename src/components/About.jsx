import { motion } from "framer-motion";
import { ABOUT_TEXT } from "../constants/index.js";

const About = () => {
  return (
    <div className="border-neutral-900 border-b pb-4">
      <h1 className="my-20 text-center text-4xl">
        About
        <span className="text-neutral-500"> Me</span>
      </h1>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="w-full"
        >
          <div className="flex justify-center lg:justify-start">
            <p className=" leading-7 my-2 py-6">{ABOUT_TEXT}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
