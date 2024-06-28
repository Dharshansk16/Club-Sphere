import React from "react";
import { Navbar, Container, FormControl, Button, Nav } from "react-bootstrap";
import PanoramaPhotosphereIcon from "@mui/icons-material/PanoramaPhotosphere";
import DashboardIcon from "@mui/icons-material/Dashboard";
import HomeIcon from "@mui/icons-material/Home";
import EventNoteIcon from "@mui/icons-material/EventNote";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import { NavLink, Link, useLocation } from "react-router-dom";
import { useAuth } from "../AuthContext";
import { useEffect, useState } from "react";

const NavBar = () => {
  const { isAuthorized, user } = useAuth();
  const location = useLocation();
  const [refresh, setRefresh] = useState(false); // State to trigger refresh
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Trigger refresh whenever location changes
    setRefresh(true);
  }, [location]);

  useEffect(() => {
    // Reset refresh state after rendering
    setRefresh(false);
  }, []);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
      <Container fluid>
        <Navbar.Brand className="transition duration-300 ease-in-out transform hover:scale-110">
          <Link to={"/"} className="no-underline">
            <PanoramaPhotosphereIcon
              sx={{
                fontSize: 50,
                color: "#8845f4",
                padding: "0px 5px 5px 0px",
              }}
            />
            <span className="bg-clip-text text-xl font-bold text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ">
              Club Sphere
            </span>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="pb-1 me-auto">
            <Nav.Link
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="mx-4 transition duration-400 ease-in-out transform hover:scale-110"
            >
              <NavLink to={"/"} className="no-underline">
                <HomeIcon sx={{ color: "#8845f4", fontSize: "30px" }} />
                {isHovering && (
                  <span className="ml-1 bg-clip-text text-l font-bold text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                    Home
                  </span>
                )}
              </NavLink>
            </Nav.Link>
            <Nav.Link
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className=" mx-4 transition duration-400 ease-in-out transform hover:scale-110"
            >
              <NavLink to={"/events"} className="no-underline">
                <EventNoteIcon sx={{ color: "#8845f4", fontSize: "30px" }} />
                {isHovering && (
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
                  {isHovering && (
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
                className="mx-4 transition duration-400 ease-in-out transform hover:scale-110"
              >
                <NavLink to={"/clubs/register/"} className="no-underline">
                  <NoteAddIcon sx={{ color: "#8845f4", fontSize: "30" }} />
                  {isHovering && (
                    <span className="ml-1 bg-clip-text text-l font-bold text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                      Register
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
  );
};

export default NavBar;
