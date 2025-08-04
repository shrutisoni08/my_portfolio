// Data
// src/components/Data.js
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import MediBot from "../assets/Work/MediBot.png";
import SkillEcted from "../assets/Work/SkillEcted.png";
import MediLife from "../assets/Work/MediLife.png";
import ShoppersWorld from "../assets/Work/Shoppers-World.png";
import FashionPlaza from "../assets/Work/Fashion_Plaza.png";
import Flexical from "../assets/Work/FlexiCalc.png";
import MyTunes from "../assets/Work/MyTunes.png";
import CodersCafe from "../assets/Work/The-Coders-Cafe.png";

export const work = [
  {
    id: 1,
    title: "01. Medibot AI",
    role: "Front End Developer",
    techStack:
      "React.js, Tailwind CSS, Razorpay, Chatbot API, React Router, Context API",
    description:
      "Medibot is an advanced AI-driven healthcare platform built to revolutionize the way users interact with medical services online. The application enables users to consult a smart AI chatbot for instant, preliminary medical assistance, providing basic diagnoses and recommending appropriate medical specialists. Once recommendations are made, users can browse detailed doctor profiles, view availability, and book appointments seamlessly. The platform integrates Razorpay for secure payment processing and ensures a smooth booking journey from start to finish. Developed with React.js, Tailwind CSS, and React Router, the interface is fast, responsive, and user-friendly. An intelligent component-based architecture and Context API were used for efficient state management. Key features also include lazy loading, chatbot API integration, and clean navigation across multiple views.",
    image: MediBot,
    live: "https://www.medibot-ai.com/",
  },
  {
    id: 2,
    title: "02. SkillEcted Learning Platform",
    role: "Front End Developer",
    techStack: "HTML, CSS, JavaScript, Graphy CMS, Custom HTML, Custom CSS",
    description:
      "SkillEcted is a robust and intuitive Learning Management System (LMS) built as a digital marketplace for online education. The platform enables trainers to create, manage, and sell courses, while learners can enroll, track their progress, and complete learning modules at their own pace. The platform features dynamic dashboards tailored for both trainers and students, along with course analytics, progress tracking, and a course approval workflow to ensure quality content delivery. Built with a mobile-first approach using Graphy CMS, custom HTML, CSS, and JavaScript, the system ensures seamless responsiveness and accessibility across all devices.",
    image: SkillEcted,
    live: "https://www.skillected.com/",
  },
  {
    id: 3,
    title: "03. Medilife Health Care",
    role: "Front End Developer",
    techStack: "React.js, Tailwind CSS, React Router, Context API, EmailJS",
    description:
      "MediLife Health Care is a React-based admin dashboard application built to streamline the daily operations of clinics and hospitals. It provides administrators with tools to manage patient records, track appointments, list and assign doctors, and visualize hospital performance metrics through dynamic charts. The dashboard is built using React.js, Tailwind CSS, and Chart.js, ensuring an intuitive interface and clean data presentation. The project emphasizes performance and scalability, featuring modular components, custom forms, and real-time analytics visualization. The goal was to reduce manual administrative efforts and provide staff with clear, organized access to hospital data.",
    image: MediLife,
    live: "https://www.medilifehealthcare.info/",
  },
];

export const projects = [
  {
    id: 1,
    title: "Shoppers World",
    description:
      "An advanced e-commerce application offering a seamless shopping experience with features like product listings, search and filter, shopping cart, and dynamic user interface. Built using React, Tailwind CSS, and backend integration for a fully functional user flow.",
    tech: ["React", "JavaScript", "Tailwind"],
    image: ShoppersWorld,
    live: "https://shoppers-world.netlify.app/",
    github: "https://github.com/shrutisoni08/Shoppers-World-Ecom-React.Js-",
  },
  {
    id: 2,
    title: "Fashion Plaza",
    description:
      "A visually appealing WordPress-based fashion website developed using Elementor, designed to elegantly showcase fashion products, lookbooks, and collections. Optimized for fast loading, mobile responsiveness, and user engagement.",
    tech: ["WordPress", "Elementor"],
    image: FashionPlaza,
    live: "https://fashion-plaza.netlify.app/",
    github: "https://github.com/shrutisoni08",
  },
  {
    id: 3,
    title: "Flexical Calculator",
    description:
      "A sleek, modern calendar and event scheduling tool built using React and Tailwind CSS. Features include event creation, date calculations, and a user-friendly interface designed for productivity and ease of use.",
    tech: ["React", "JavaScript", "Tailwind"],
    image: Flexical,
    live: "https://flexicalc.netlify.app/",
    github: "https://github.com/shrutisoni08/React-Calculator",
  },
  {
    id: 4,
    title: "MyTunes",
    description:
      "A clean and responsive landing page promoting a music streaming service. Developed using pure HTML, CSS, and Bootstrap, it showcases services, features, and download options with a mobile-first design approach.",
    tech: ["HTML", "CSS", "Bootstrap"],
    image: MyTunes,
    live: "https://shrutisoni08.github.io/myTunes/",
    github: "https://github.com/shrutisoni08/myTunes",
  },
  {
    id: 5,
    title: "Coders Cafe",
    description:
      "A creative and interactive community hub for developers, designed with Framer Motion for smooth transitions and animations. Focused on engaging UI/UX to encourage developer interaction and content sharing.",
    tech: ["React", "Tailwind", "FramerMotion"],
    image: CodersCafe,
    live: "https://the-coders-cafe.netlify.app/",
    github: "https://github.com/shrutisoni08/The-Coders-Cafe",
  },
];
