import React from "react";
import { Card, Button } from "react-bootstrap";
import InstagramIcon from "@mui/icons-material/Instagram";

function CustomCard(props) {
  return (
    <Card
      style={{
        background: "#333",
        color: "#fff",
        minHeight: "200px",
        maxWidth: "400px",
      }}
      className="mb-4"
    >
      <Card.Body className="d-flex">
        <div className="flex-shrink-0 me-3">
          <img
            src={props.avatar}
            alt="Profile"
            className="rounded-circle"
            style={{
              width: "80px",
              height: "80px",
              objectFit: "cover",
              marginTop: "10px",
            }}
          />
          <InstagramIcon
            className="flex flex-col"
            sx={{ margin: "15px 0 0 25px" }}
          />
        </div>
        <div className="d-flex flex-column w-100">
          <div className="mb-auto">
            <Card.Title style={{ margin: "10px 0 10px 0" }}>
              <span className="bg-clip-text text-xl font-bold text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...">
                {props.title}
              </span>
            </Card.Title>
            <Card.Text className="text-gray-400">{props.description}</Card.Text>
          </div>
          <div className="text-end">
            <Button
              style={{ border: "none" }}
              className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
            >
              View Profile
            </Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CustomCard;
