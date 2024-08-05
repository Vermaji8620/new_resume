import { CONTACT } from "../constants/index.js";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="text-center text-4xl my-10"
      >
        Get In Touch
      </motion.h1>
      <div className="flex flex-wrap gap-10 justify-around">
        <div className="flex flex-col">
          <p className="my-4 lg:text-center">{CONTACT.address}</p>
          <p className="my-4 lg:text-center">{CONTACT.phoneNo}</p>
          <a href="#" className="lg:text-center">
            {CONTACT.email}
          </a>
        </div>
        <div className="flex w-full flex-col gap-10">
          <input type="text" name="" id="" className="bg-transparent border-b h-11 text-2xl rounded-lg p-5 border-white"  placeholder="Full Name" />
          <input type="email" name="" id="" className="bg-transparent border-b h-11 text-2xl rounded-lg p-5 border-white"  placeholder="Email" />
        </div>
        <div className="w-full flex justify-center">
          <textarea type="text" name="" id="" className="w-[90%] bg-transparent text-2xl rounded-lg border-b border-white"  placeholder="Your Message" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
