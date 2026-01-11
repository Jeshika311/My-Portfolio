import { FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaDiscord } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import "./Contact.css";
import contact from "../assets/contact-us.jpg";
import { toast } from 'react-toastify';

const socialIcons = [
  { name: "Github", icon: <FaGithub />, url: "https://github.com/jeshika311" },
  { name: "Linkedin", icon: <FaLinkedin />, url: "https://www.linkedin.com/in/jeshika-sharma-5664b1322/" },
  { name: "Instagram", icon: <FaInstagram />, url: "https://www.instagram.com/jeshikasharma07" },
  { name: "Facebook", icon: <FaFacebook />, url: "https://www.facebook.com/profile.php?id=100072929687798" },
  { name: "Discord", icon: <FaDiscord />, url: "https://discord.com/users/@jeshika31" },
  { name: "Gmail", icon: <SiGmail />, url: "mailto:jeshikasharma7@gmail.com" }
];

const handleSubmit = async (e) => {
  e.preventDefault();

  const name = e.target[0].value;
  const email = e.target[1].value;
  const message = e.target[2].value;

  const formData = { name, email, message };

  try {
    const response = await fetch("http://localhost:3000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    if (response.ok) {
      toast.success('Message sent successfully!');
      e.target.reset();
    } else {
      toast.error(data.message || 'Failed to send message');
    }
  } catch (error) {
    console.error(error);
    toast.error(error.message || 'Something went wrong. Try again later.');
  }
};

export default function ContactPage() {
  return (
    <section id="contact-us" className="contact-page">
      <div className="contact-msg">
        <h2>
          Let's <span className="highlight">collaborate!</span>
        </h2>
        <p>Contact me to discuss your web development needs <br /> or just to say hello. 😊</p>
      </div>

    <div className="contact-main">
      <div className="contact-social-circle">
        <div className="orbit-rotator">
          <div className="center-figure">
            <img src = {contact} alt="User" />
            {/* <img src = "https://iimmumbai.ac.in/smf-2024/img/contact-us.jpg" alt="User" /> */}
          </div>
          {socialIcons.map((icon, idx) => (
            <a
              key={icon.name}
              href={icon.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`social-icon orbit-icon orbit-${idx}`}
              title={icon.name}
            >
              {icon.icon}
            </a>
          ))}
        </div>
      </div>

        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >
          <label>Name</label>
          <input type="text" placeholder="Enter your Name" required />
          <label>Email</label>
          <input type="email" placeholder="example@gmail.com" required />
          <label>Message</label>
          <textarea placeholder="Enter your Message" rows={6} required />
          <button type="submit" className="submit-btn">
            Submit <span className="arrow">➜</span>
          </button>
        </form>
      </div>
    </section>
  );
}
