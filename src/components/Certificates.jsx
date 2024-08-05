import firstcertificate from "../assets/gfg cloud bootcamp.png";
import secondcertificate from "../assets/hong kong.png";
import thirdcertificate from "../assets/michigan.png";
import fourthcertificate from "../assets/sih.png";
import fifthcertificate from "../assets/flipkart grid 5.0.png";
import sixthcertificate from "../assets/udemy_vue.png";

import { motion } from "framer-motion";

const Certificates = () => {
  let arr = {
    firstcertificate,
    secondcertificate,
    thirdcertificate,
    fourthcertificate,
    fifthcertificate,
    sixthcertificate,
  };
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Certifications
      </motion.h1>
      <div className="">
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {Object.entries(arr).map(([key, value]) => (
            <div key={key} className="">
              <img
                src={value}
                width={400}
                height={400}
                alt="certificate"
                className="mb-6 rounded cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificates;
