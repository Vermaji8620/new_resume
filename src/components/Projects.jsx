import { PROJECTS } from "../constants/index.js";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="flex flex-wrap lg:justify-center mb-8">
            <motion.div
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              initial={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-full lg:w-1/4"
            >
              <img
                src={project.image}
                onClick={() => window.open(project.link, "_blank")}
                width={250}
                height={250}
                alt={project.title}
                className="mb-6 rounded cursor-pointer"
              />
            </motion.div>
            <motion.div
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              initial={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-full text-sm max-w-xl text-start lg:w-3/4"
            >
              <h6
                onClick={() => window.open(project.githubLink, "_blank")}
                className=" cursor-pointer mb-2 font-semibold"
              >
                {project.title}
              </h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              <div className="flex flex-wrap gap-1">
                {project.technologies.map((technology, index) => (
                  <span
                    key={index}
                    className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
