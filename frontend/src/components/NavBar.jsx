import React from "react";
import { Navbar, Container, FormControl, Button, Nav } from "react-bootstrap";
import PanoramaPhotosphereIcon from "@mui/icons-material/PanoramaPhotosphere";

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
      <Container fluid>
        <Navbar.Brand>
          <PanoramaPhotosphereIcon
            sx={{ fontSize: 50, color: "#8845f4", padding: "0px 5px 5px 0px" }}
          />
          <span className="bg-clip-text text-2xl font-bold text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...">
            Club Sphere
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="pb-1 me-auto">
            <Nav.Link>
              <span className="bg-clip-text text-xl font-bold text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...">
                Home
              </span>
            </Nav.Link>
            <Nav.Link>
              <span className="bg-clip-text text-xl font-bold text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...">
                Events
              </span>
            </Nav.Link>
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
