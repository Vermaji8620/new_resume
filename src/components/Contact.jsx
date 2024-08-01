import { CONTACT } from "../constants/index.js";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <h1 className="text-center text-4xl my-10">Get In Touch</h1>
      <div className="text-center tracking-tighter">
        <p className="my-4">{CONTACT.address}</p>
        <p className="my-4">{CONTACT.phoneNo}</p>
        <a href="#" className="underline">
          {CONTACT.email}
        </a>
      </div>
    </div>
  );
};

export default Contact;
