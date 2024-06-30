import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Grow from "@mui/material/Grow";
import EditIcon from "@mui/icons-material/Edit";
import LinkIcon from "@mui/icons-material/Link";
import { Link } from "react-router-dom";
import { useAuth } from "../AuthContext";
import AnimatedText from "../styles/AnimatedText";

const ProfileCard = (props) => {
  const { user } = useAuth();
  return (
    <Container className="my-5">
      <Row className="justify-content-center transition duration-300 ease-in-out hover:scale-105">
        <Col md={12}>
          <Grow in={true} timeout={900}>
            <Card
              style={{ background: "#222", color: "#fff" }}
              className="border-0 rounded-lg "
            >
              <Card.Body className="p-4">
                <Row className="align-items-center mb-4">
                  <Col xs={12} lg={2} className="text-center">
                    <img
                      src={props.avatar}
                      alt="Profile"
                      // className="rounded-circle mb-4 w-100 h-auto object-cover"
                      className="rounded-circle transition duration-900 ease-in-out hover:scale-110"
                      style={{
                        width: "160px",
                        height: "160px",
                        objectFit: "cover",
                        marginTop: "10px",
                      }}
                    />
                  </Col>
                  <Col xs={12} lg={10}>
                    <div className="d-flex  align-items-center mb-3">
                      <h2 className="mb-0">
                        <AnimatedText text={props.name} />
                      </h2>
                      <Link to={props.url}>
                        <LinkIcon
                          style={{
                            fontSize: "25px",
                            margin: "5px 20px 0px 10px",
                          }}
                        />
                      </Link>
                    </div>
                    {/* <div className="d-flex mb-4">
                    <div className="me-4">
                      <strong>Posts</strong> 24
                    </div>
                    <div className="me-4">
                      <strong>Followers</strong> 1.2k
                    </div>
                    <div className="me-4">
                      <strong>Following</strong> 300
                    </div>
                  </div> */}
                    <p className="text-gray-400">{props.description}</p>
                  </Col>
                </Row>
                <hr />
                <div className="flex flex-row ">
                  <div className="mx-2">
                    {user.username === props.owner && (
                      <Link to={`/clubs/update/${props.slug}`}>
                        <Button variant="outline-light bg-gray-500">
                          Edit Profile
                        </Button>
                      </Link>
                    )}
                  </div>
                  <div className="mx-2">
                    {user.username === props.owner && (
                      <Link to={"/events/add/"}>
                        <Button variant="outline-light bg-gray-500">
                          Add Event
                        </Button>
                      </Link>
                    )}
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Grow>
        </Col>
      </Row>
    </Container>
  );
};

export default ProfileCard;
