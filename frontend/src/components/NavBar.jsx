import React, { useState, useEffect } from "react";
import { Navbar, Container, FormControl, Button, Nav } from "react-bootstrap";
import PanoramaPhotosphereIcon from "@mui/icons-material/PanoramaPhotosphere";
import DashboardIcon from "@mui/icons-material/Dashboard";
import HomeIcon from "@mui/icons-material/Home";
import EventNoteIcon from "@mui/icons-material/EventNote";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import { NavLink, useLocation } from "react-router-dom";
import { useAuth } from "../AuthContext";
import LinearProgress from "@mui/material/LinearProgress";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";

const NavBar = () => {
  const { isAuthorized, user } = useAuth();
  const location = useLocation();
  const [isHovering, setIsHovering] = useState({
    home: false,
    events: false,
    profile: false,
    register: false,
    login: false,
    logout: false,
  });
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(0);
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(interval);
          return 100;
        }
        return Math.min(oldProgress + 10, 100);
      });
    }, 200);
  }, [location]);

  const handleMouseEnter = (event) => {
    const { name } = event.target;
    setIsHovering((prevVal) => {
      return {
        ...prevVal,
        [name]: true,
      };
    });
  };

  const handleMouseLeave = (event) => {
    const name = event.target.name;
    setIsHovering((prevVal) => {
      return {
        ...prevVal,
        [name]: false,
      };
    });
  };

  return (
    <>
      <LinearProgress
        variant="determinate"
        value={progress}
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 1100,
          backgroundColor: "rgba(0, 0, 0, 0.1)",
          "& .MuiLinearProgress-bar": {
            background: "linear-gradient(to right, #ff00ff, #00ffff)",
          },
        }}
      />
      <Navbar
        variant="dark"
        expand="lg"
        className="mb-4 bg-neutral-950 shadow-xl"
      >
        <Container fluid>
          <Navbar.Brand className="transition duration-300 ease-in-out transform hover:scale-110">
            <NavLink to={"/"} className="no-underline">
              <PanoramaPhotosphereIcon
                sx={{
                  fontSize: 50,
                  color: "#8845f4",
                  padding: "0px 5px 5px 0px",
                }}
              />
              <span
                style={{ fontFamily: "monospace" }}
                className="bg-clip-text text-xl font-bold text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 "
              >
                ClubSphere
              </span>
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="pb-1 me-auto">
              <Nav.Link
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                name="home"
                className="mx-4 transition duration-400 ease-in-out transform hover:scale-110"
              >
                <NavLink to={"/"} className="no-underline">
                  <HomeIcon sx={{ color: "#8845f4", fontSize: "30px" }} />
                  {isHovering.home && (
                    <span className="ml-1 bg-clip-text text-l font-bold text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                      Home
                    </span>
                  )}
                </NavLink>
              </Nav.Link>
              <Nav.Link
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                name="events"
                className=" mx-4 transition duration-400 ease-in-out transform hover:scale-110"
              >
                <NavLink to={"/events"} className="no-underline">
                  <EventNoteIcon sx={{ color: "#8845f4", fontSize: "30px" }} />
                  {isHovering.events && (
                    <span className="ml-1 bg-clip-text text-l font-bold text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...">
                      Events
                    </span>
                  )}
                </NavLink>
              </Nav.Link>
              {user !== null ? (
                <Nav.Link
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  name="profile"
                  className="mx-4 transition duration-400 ease-in-out transform hover:scale-110"
                >
                  <NavLink
                    to={`/clubs/${user.club.slug}`}
                    className="no-underline"
                  >
                    <DashboardIcon
                      sx={{
                        fontSize: 30,
                        color: "#8845f4",
                      }}
                    />
                    {isHovering.profile && (
                      <span className="ml-1 bg-clip-text text-l font-bold text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                        {user.club.name}
                      </span>
                    )}
                  </NavLink>
                </Nav.Link>
              ) : null}
              {isAuthorized && (
                <Nav.Link
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  name="register"
                  className="mx-4 transition duration-400 ease-in-out transform hover:scale-110"
                >
                  <NavLink to={"/clubs/register/"} className="no-underline">
                    <NoteAddIcon sx={{ color: "#8845f4", fontSize: "30" }} />
                    {isHovering.register && (
                      <span className="ml-1 bg-clip-text text-l font-bold text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                        Register
                      </span>
                    )}
                  </NavLink>
                </Nav.Link>
              )}
              {isAuthorized ? (
                <Nav.Link
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  name="logout"
                  className="mx-4 transition duration-400 ease-in-out transform hover:scale-110"
                >
                  <NavLink to={"/logout/"} className="no-underline">
                    <LogoutIcon sx={{ color: "#8845f4", fontSize: "30" }} />
                    {isHovering.logout && (
                      <span className="ml-1 bg-clip-text text-l font-bold text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                        Logout
                      </span>
                    )}
                  </NavLink>
                </Nav.Link>
              ) : (
                <Nav.Link
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  name="login"
                  className="mx-4 transition duration-400 ease-in-out transform hover:scale-110"
                >
                  <NavLink to={"/login/"} className="no-underline">
                    <LoginIcon sx={{ color: "#8845f4", fontSize: "30" }} />
                    {isHovering.login && (
                      <span className="ml-1 bg-clip-text text-l font-bold text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                        Login
                      </span>
                    )}
                  </NavLink>
                </Nav.Link>
              )}
            </Nav>
            <div className="d-flex align-items-center">
              <FormControl
                type="text"
                placeholder="Search"
                className="me-2 bg-gradient-to-r from-slate-400 to-gray-400 focus:outline-none"
              />
              <Button variant="outline-light bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...">
                Search
              </Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
