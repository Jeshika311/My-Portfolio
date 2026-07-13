import portfolio from "../assets/portfolio.png";
import interview from "../assets/interviewIQ.png";
import estateflow from "../assets/estateflow.png";
import cravely from "../assets/cravely.png";

export const projectsData = [
  {
    title: "🌐 Personal Portfolio Website",
    img: portfolio,
    desc: `A responsive and interactive personal portfolio website developed to showcase projects, technical skills, education, and professional experience. The portfolio features a modern UI/UX with smooth navigation and engaging visual elements. React Particles are integrated to create a dynamic, Spider-Man–inspired background effect, enhancing the overall user experience while maintaining performance and responsiveness.`,
    github: "https://github.com/Jeshika311/My-Portfolio"
  },
  {
    title: "🧠 AI Interview Agent",
    img: interview,
    desc: `A full-stack AI-powered mock interview platform built using the MERN Stack. It generates personalized interview questions and AI-powered feedback based on the user's role, experience, skills, and resume. The platform features Firebase Authentication, OpenRouter AI, voice-enabled interviews, resume analysis, timed sessions, performance analytics, interview history, a credit-based system, and Razorpay payment integration.`,
    github: "https://github.com/Jeshika311/AI-Interview-Agent"
  },
  {
    title: "🏠 EstateFlow",
    img: estateflow,
    desc: `A full-stack multi-user real estate management platform built using the MERN Stack. It allows users to browse and search properties, agents to add and manage property listings, and admins to manage the entire platform. The platform features role-based authentication, advanced property search and filters, property CRUD operations, Cloudinary image uploads, Brevo email integration, secure REST APIs, and a responsive modern UI.`,
    github: "https://github.com/Jeshika311/EstateFlow"
  },
  {
    title: "🍔 Cravely",
    img: cravely,
    desc: `A full-stack real-time food delivery platform built using the MERN Stack. It allows users to browse and order food, shop owners to manage their shops, food items, and orders, and delivery partners to accept and deliver orders. The platform features role-based authentication, real-time order updates using Socket.IO, live delivery tracking with React Leaflet, Razorpay payment integration, OTP-based delivery verification, food ratings, geolocation-based services, and responsive UI.`,
    github: "https://github.com/Jeshika311/Cravely"
  }
];
