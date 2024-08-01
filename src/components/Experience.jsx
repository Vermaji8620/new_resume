import { EXPERIENCES } from "../constants/index.js";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="border-neutral-900 pb-4 border-b ">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Experience
      </motion.h1>
      <div className="">
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="flex flex-wrap mb-8 lg:justify-center ">
            <motion.div
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              initial={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-full lg:w-1/4"
            >
              <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
            </motion.div>
            <motion.div
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              initial={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">
                {experience.role} -{" "}
                <span className="text-sm text-purple-100">
                  {experience.company}{" "}
                </span>
              </h6>
              <p className="mb-4 text-neutral-400 ">
                {experience.description}{" "}
              </p>
              <div className="flex">
                {experience.technologies.map((tech, index) => (
                  <div
                    className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                    key={index}
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
