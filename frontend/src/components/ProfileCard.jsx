import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const ProfileCard = (props) => {
  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={12}>
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
                </Col>
                <Col xs={12} lg={10}>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h2 className="mb-0">
                      <span className="bg-clip-text text-4xl font-bold text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...">
                        {props.name}
                      </span>
                    </h2>
                    <Button className="px-3 py-2 px-sm-4 py-sm-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                      Edit Profile
                    </Button>
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
        </Col>
      </Row>
    </Container>
  );
};

export default ProfileCard;
