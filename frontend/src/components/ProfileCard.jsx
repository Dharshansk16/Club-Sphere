import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Grow from "@mui/material/Grow";
import EditIcon from "@mui/icons-material/Edit";
import LinkIcon from "@mui/icons-material/Link";
import { Link } from "react-router-dom";

const ProfileCard = (props) => {
  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={12}>
          <Grow in={true} timeout={900}>
            <Card
              style={{ background: "#333", color: "#fff" }}
              className="border-0 rounded-lg"
            >
              <Card.Body className="p-4">
                <Row className="align-items-center mb-4">
                  <Col xs={12} lg={2} className="text-center">
                    <img
                      src={props.avatar}
                      alt="Profile"
                      // className="rounded-circle mb-4 w-100 h-auto object-cover"
                      className="rounded-circle"
                      style={{
                        width: "160px",
                        height: "160px",
                        objectFit: "cover",
                        marginTop: "10px",
                      }}
                    />
                    <Link to={props.url}>
                      <LinkIcon
                        style={{ fontSize: "25px", margin: "5px 20px 0  0" }}
                      />
                    </Link>
                  </Col>
                  <Col xs={12} lg={10}>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <h2 className="mb-0">
                        <span className="bg-clip-text text-4xl font-bold text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...">
                          {props.name}
                        </span>
                      </h2>

                      <EditIcon className="mx-16" />
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
              </Card.Body>
            </Card>
          </Grow>
        </Col>
      </Row>
    </Container>
  );
};

export default ProfileCard;
