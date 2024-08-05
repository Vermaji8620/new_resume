import news from "../assets/project-1.png";
import project2 from "../assets/project-2.png";
import project3 from "../assets/project-3.png";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. As a final year B-Tech undergrad, I have mastered front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB, and currently learning about kubernetes and devops. My goal is to leverage my expertise to create innovative solutions.`;

export const ABOUT_TEXT = `Hi, I am Aditya, a skilled Full Stack Developer specializing in the MERN stack. I have extensive experience in React.js, Node.js, and working with hosting service providers like AWS and AWS Amplify. I have developed a comprehensive website for Novusmind, a platform where students are trained for MNCs. Additionally, I created a full-fledged real estate website using React for the frontend, Redux for state management, and Node.js for the backend, hosted on Render with Google authentication.Currently, I am expanding my knowledge in Docker, Kubernetes, and containerization, and actively working on a React Native project. I am also an open-source contributor, having participated in HacktoberFest'23 with 2 out of 4 PRs successfully merged, and I am preparing for the upcoming Google Summer of Code (GSOC). I am passionate about continuous learning and contributing to the developer community.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "State_Land",
    image: project3,
    description:
      "State_Land is a ledger web application designed with modern frontend technologies to provide a responsive and interactive user experience. It efficiently manages application state with Redux Toolkit and ensures a smooth user experience across different devices. The integration with Cloudinary allows users to upload and manage their media files for housing rentals.",
    technologies: ["HTML", "CSS", "React", "Javascript", "WebSockets", "Node.js", "Socket.io"],
    link: "https://mern-estate-zx6g.onrender.com/",
    githubLink: "https://github.com/Vermaji8620/Real_Estate/",
  },
  {
    title: "Wash Market",
    image: news,
    description:
      "This SaaS product is designed for the car washing service industry. It features a responsive user interface with interactive elements, using HTML and CSS for structure and styling. React creates a dynamic and engaging experience, while Redux Toolkit ensures efficient state management. Employing modern frontend practices, the application maintains a robust codebase, offering optimal viewing across various devices.",
    technologies: ["HTML", "CSS", "React", "Javascript", "TailWindCSS",  "Node.js", "MongoDB"],
    link: "https://car-wash-eta.vercel.app/",
    githubLink: "https://github.com/Vermaji8620/car_wash_new",
  },
  {
    title: "ChatXApp",
    image: project2,
    description:
      "This project is a real-time chat application built with modern web technologies. It leverages WebRTC and WebSockets to provide seamless real-time communication between users. The backend is powered by Express and Node.js, ensuring a robust and scalable server.",
    technologies: ["HTML", "CSS", "React", "Javascript", "WebSockets", "Node.js", "Socket.io"],
    link: "https://chatapp-mqsl.onrender.com/",
    githubLink: "https://github.com/Vermaji8620/ChatApp",
  },
];

export const CONTACT = {
  address: "KOLKATA, WEST BENGAL, INDIA",
  phoneNo: "+91 86200 32336",
  email: "vadityaraj67@gmail.com",
};
