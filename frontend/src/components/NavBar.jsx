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
import AnimatedText from "../styles/AnimatedText";

const NavBar = ({ onSearchSubmit }) => {
  const { isAuthorized, user } = useAuth();
  const location = useLocation();

  // Hover state
  const [isHovering, setIsHovering] = useState({
    home: false,
    events: false,
    profile: false,
    register: false,
    login: false,
    logout: false,
  });

  // Progress bar state
  const [progress, setProgress] = useState(0);

  // Update progress bar on location change
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

  // Determine active state for NavLinks
  const isActive = (path) => {
    return location.pathname === path;
  };

  // Handle mouse enter
  const handleMouseEnter = (name) => {
    setIsHovering((prevVal) => ({
      ...prevVal,
      [name]: true,
    }));
  };

  // Handle mouse leave
  const handleMouseLeave = (name) => {
    setIsHovering((prevVal) => ({
      ...prevVal,
      [name]: false,
    }));
  };
  // Handle Search | filter
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    onSearchSubmit(searchQuery);
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
            background: "linear-gradient(to right, #fff, #718096)",
          },
        }}
      />
      <Navbar
        variant="dark"
        expand="lg"
        className="mb-4 bg-neutral-950 shadow-md"
      >
        <Container fluid>
          <Navbar.Brand className="transition duration-300 ease-in-out transform hover:scale-110">
            <NavLink to={"/"} className="no-underline">
              <PanoramaPhotosphereIcon
                sx={{
                  fontSize: 50,
                  color: "#CBD5E0",
                  padding: "0px 5px 5px 0px",
                }}
              />
              <span
                style={{ fontFamily: "fantasy" }}
                className="animated-text bg-clip-text text-transparent bg-gradient-to-r from-gray-400 to-white"
              >
                ClubSphere
              </span>
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="pb-1 me-auto">
              <Nav.Link
                onMouseEnter={() => handleMouseEnter("home")}
                onMouseLeave={() => handleMouseLeave("home")}
                className="mx-4 transition duration-400 ease-in-out transform hover:scale-110"
              >
                <NavLink
                  to="/"
                  className="no-underline"
                  name="home"
                  onClick={
                    () => setIsHovering({ ...isHovering, profile: false }) //Profile is set to False due to authorization condition
                  }
                >
                  <HomeIcon
                    sx={{
                      fontSize: 30,
                      color:
                        isActive("/") || isHovering.home ? "#FFFFFF" : "gray",
                    }}
                  />
                  {isHovering.home && (
                    <span className="ml-1 text-white font-bold">Home</span>
                  )}
                </NavLink>
              </Nav.Link>
              <Nav.Link
                onMouseEnter={() => handleMouseEnter("events")}
                onMouseLeave={() => handleMouseLeave("events")}
                className=" mx-4 transition duration-400 ease-in-out transform hover:scale-110"
              >
                <NavLink
                  to={"/events"}
                  className="no-underline"
                  name="events"
                  onClick={() =>
                    setIsHovering({ ...isHovering, profile: false })
                  }
                >
                  <EventNoteIcon
                    sx={{
                      fontSize: 30,
                      color:
                        isActive("/events") || isHovering.events
                          ? "#FFFFFF"
                          : "gray",
                    }}
                  />
                  {isHovering.events && (
                    <span className="ml-1 text-white font-bold">Events</span>
                  )}
                </NavLink>
              </Nav.Link>
              {user && user.club && user.club.slug && (
                <Nav.Link
                  onMouseEnter={() => handleMouseEnter("profile")}
                  onMouseLeave={() => handleMouseLeave("profile")}
                  className="mx-4 transition duration-400 ease-in-out transform hover:scale-110"
                >
                  <NavLink
                    to={`/clubs/${user.club.slug}`}
                    className="no-underline"
                    name="profile"
                    onClick={() =>
                      setIsHovering({ ...isHovering, profile: true })
                    }
                  >
                    <DashboardIcon
                      sx={{
                        fontSize: 30,
                        color:
                          isActive(`/clubs/${user.club.slug}`) ||
                          isHovering.profile
                            ? "#FFFFFF"
                            : "gray",
                      }}
                    />
                    {isHovering.profile && (
                      <span className="ml-1 font-bold text-white">My Club</span>
                    )}
                  </NavLink>
                </Nav.Link>
              )}
              {isAuthorized && (
                <Nav.Link
                  onMouseEnter={() => {
                    handleMouseEnter("register");
                  }}
                  onMouseLeave={() => {
                    handleMouseLeave("register");
                  }}
                  className="mx-4 transition duration-400 ease-in-out transform hover:scale-110"
                >
                  <NavLink
                    to={"/clubs/register/"}
                    className="no-underline"
                    name="register"
                    onClick={() => {
                      setIsHovering({ ...isHovering, profile: false });
                    }}
                  >
                    <NoteAddIcon
                      sx={{
                        color: isHovering.register ? "#FFFFFF" : "gray",
                        fontSize: "30",
                      }}
                    />
                    {isHovering.register && (
                      <span className="ml-1 text-white font-bold">
                        Register
                      </span>
                    )}
                  </NavLink>
                </Nav.Link>
              )}
              {isAuthorized ? (
                <Nav.Link
                  onMouseEnter={() => handleMouseEnter("logout")}
                  onMouseLeave={() => handleMouseLeave("logout")}
                  className="mx-4 transition duration-400 ease-in-out transform hover:scale-110"
                >
                  <NavLink to={"/logout"} className="no-underline">
                    <LogoutIcon
                      sx={{
                        color: isHovering.logout ? "#FFFFFF" : "gray",
                        fontSize: "30",
                      }}
                    />
                    {isHovering.logout && (
                      <span className="ml-1 text-white font-bold">Logout</span>
                    )}
                  </NavLink>
                </Nav.Link>
              ) : (
                <Nav.Link
                  onMouseEnter={() => handleMouseEnter("login")}
                  onMouseLeave={() => handleMouseLeave("login")}
                  className="mx-4 transition duration-400 ease-in-out transform hover:scale-110"
                >
                  <NavLink to={"/login/"} className="no-underline">
                    <LoginIcon
                      sx={{
                        color: isHovering.login ? "#FFFFFF" : "gray",
                        fontSize: "30",
                      }}
                    />
                    {isHovering.login && (
                      <span className="ml-1  text-white font-bold">Login</span>
                    )}
                  </NavLink>
                </Nav.Link>
              )}
            </Nav>
            <div className="d-flex align-items-center">
              <form
                onSubmit={handleSearchSubmit}
                className="d-flex align-items-center"
              >
                <FormControl
                  type="text"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="me-2 transition duration-400 ease-in-out hover:scale-105 bg-gradient-to-r from-gray-400 to-gray-500 focus:outline-none flex-grow-1"
                />

                <Button type="submit" variant="outline-light bg-gray-500">
                  Search
                </Button>
              </form>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
