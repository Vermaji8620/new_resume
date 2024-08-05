import { useState } from "react";
import { CONTACT } from "../constants/index.js";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const submitform = async (e) => {
    e.preventDefault();
    try {
      const fetching = await fetch("http://localhost:3000/mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ fullname, email, message }),
      });
      if (fetching.status == 200) {
        setFullname("");
        setEmail("");
        setMessage("");
        toast.success("Mail sent successfully");
        return;
      }
      toast.error("All fields are required");
    } catch (error) {
      toast.error("Some error occured");
    }
  };

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
          <p className="my-4 text-center">{CONTACT.address}</p>
          <p className="my-4 text-center">{CONTACT.phoneNo}</p>
          <a href="#" className="text-center">
            {CONTACT.email}
          </a>
        </div>
        <form onSubmit={submitform} className="flex w-full flex-col gap-10">
          <input
            type="text"
            name=""
            value={fullname}
            id=""
            onChange={(e) => setFullname(e.target.value)}
            className="bg-transparent border-b h-11 text-2xl rounded-lg p-5 border-white"
            placeholder="Full Name"
          />
          <input
            type="email"
            name=""
            id=""
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-transparent border-b h-11 text-2xl rounded-lg p-5 border-white"
            placeholder="Email"
          />
          <textarea
            type="text"
            name=""
            value={message}
            id=""
            onChange={(e) => setMessage(e.target.value)}
            className="w-[90%] bg-transparent text-2xl rounded-lg border-b border-white"
            placeholder="Your Message"
          />
          <button className="cursor-pointer bg-gray-900 p-3 rounded-lg">
            SUBMIT
          </button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Contact;
