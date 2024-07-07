import React, { useRef, useEffect, useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PanoramaPhotosphereIcon from "@mui/icons-material/PanoramaPhotosphere";
import AnimatedText from "../styles/AnimatedText";
import "../styles/Footer.css"; // Import your CSS file for animations

const Footer = () => {
  const footerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (footerRef.current) {
        const topOffset = footerRef.current.getBoundingClientRect().top;
        const isVisible = topOffset < window.innerHeight - 100;
        setIsVisible(isVisible);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <footer
      ref={footerRef}
      className={`bg-zinc-900 text-white py-8 ${isVisible ? "fade-in" : ""}`}
    >
      <div className="mt-16"></div>
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <div className="mb-8 md:mb-0 text-center md:text-left">
          <PanoramaPhotosphereIcon
            sx={{
              fontSize: 50,
              color: "#CBD5E0",
              marginBottom: "0.5rem",
            }}
          />
          <h2 className="text-3xl font-bold mb-2">
            <AnimatedText titleText="ClubSphere" />
          </h2>
          <p className="text-sm opacity-80">
            Never Miss a Club Event with Clubsphere
          </p>
        </div>
        <div className="flex flex-col md:flex-row text-center md:text-left">
          <div className="mb-8 md:mb-0 md:mr-16">
            <h3 className="text-lg font-semibold mb-2 mr-4">Contact Info</h3>
            <p className="text-sm opacity-80">
              Email:
              <a
                href="mailto:dcodecraft@gmail.com"
                className="ml-1 text-blue-400 hover:underline"
              >
                dcodecraft@gmail.com
              </a>
            </p>
            <div className="mt-4 ml-6 flex items-center justify-center md:justify-start">
              <a
                className="mx-2"
                href="https://github.com/Dharshansk16"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon sx={{ fontSize: 24, color: "#fff" }} />
              </a>
              <a
                className="mx-2"
                href="https://www.linkedin.com/in/dharshan-s-kotian-5053aa280/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon sx={{ fontSize: 24, color: "#fff" }} />
              </a>
              <a
                className="mx-2"
                href="https://www.instagram.com/darshh_18/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon sx={{ fontSize: 24, color: "#fff" }} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-zinc-700 py-2">
        <marquee
          className="text-white text-md font-bold"
          behavior="scroll"
          direction="left"
        >
          For club registration inquiries, please contact via email at {""}
          <a
            href="mailto:dcodecraft@gmail.com"
            className="text-blue-400 hover:underline"
          >
            dcodecraft@gmail.com
          </a>
        </marquee>
      </div>
    </footer>
  );
};

export default Footer;
