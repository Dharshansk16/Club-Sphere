import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-8 md:mb-0 text-center md:text-left">
          <h2 className="text-2xl font-bold mb-2">Club Sphere</h2>
          <p>Manage your clubs and events efficiently</p>
        </div>
        <div className="flex flex-col md:flex-row text-center md:text-left">
          <div className="mb-8 md:mb-0 md:mr-16">
            <h3 className="text-lg font-semibold mb-2">Contact Info</h3>
            <p>
              Email:
              <a
                href="mailto:dcodecraft@gmail.com"
                className="text-blue-400 hover:underline"
              >
                dcodecraft@gmail.com
              </a>
            </p>
            <p>
              <a className="mx-1" href="https://github.com/Dharshansk16">
                <GitHubIcon sx={{ color: "#fff" }} />
              </a>
              <a
                className="mx-1"
                href="https://www.linkedin.com/in/dharshan-s-kotian-5053aa280/"
              >
                <LinkedInIcon sx={{ color: "#fff" }} />
              </a>
              <a className="mx-1" href="https://www.instagram.com/darshh_18/">
                <InstagramIcon sx={{ color: "#fff" }} />
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
