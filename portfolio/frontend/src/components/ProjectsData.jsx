import portfolio from "../assets/portfolio.png";
import auth from "../assets/auth.png";

export const projectsData = [
  {
    title: "🔐 Authentication System",
    img: auth,
    desc: `A secure MERN-based authentication system built using JWT for user authorization and session management. The application supports email-based user verification, password reset, and protected login/logout functionality. Axios is used for efficient API communication between the frontend and backend. React Toastify provides real-time user notifications for an improved user experience. The system is designed with a strong focus on security, scalability, and usability.`,
    github: "https://github.com/yourusername/demo"
  },
  {
    title: "🌐 Personal Portfolio Website",
    img: portfolio,
    desc: `A responsive and interactive personal portfolio website developed to showcase projects, technical skills, education, and professional experience. The portfolio features a modern UI/UX with smooth navigation and engaging visual elements. React Particles are integrated to create a dynamic, Spider-Man–inspired background effect, enhancing the overall user experience while maintaining performance and responsiveness.`,
    github: "https://github.com/Jeshika311/My-Portfolio.git"
  }
];
