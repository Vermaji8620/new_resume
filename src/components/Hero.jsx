import { HERO_CONTENT } from "../constants/index.js";
import ProfilePic from "../assets/kevinRushProfile.jpg";
import { motion } from "framer-motion";
import resume from "../assets/resume_aditya.pdf";

const Hero = () => {
  const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: delay,
      },
    },
  });
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-36">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-3xl font-thin tracking-tight lg:mt-16 lg:text-6xl"
            >
              Aditya Raj Verma
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-4xl text-transparent"
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
            <a
              href={resume}
              download="Resume_Aditya.pdf"
              className=" mb-7 cursor-pointer bg-gray-900 p-3 rounded-lg"
            >
              DOWNLOAD CV
            </a>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              className="rounded-lg"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={ProfilePic}
              width={300}
              height={300}
              alt="Aditya Raj"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
