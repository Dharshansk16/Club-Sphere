import React from "react";
import { Card, Button } from "react-bootstrap";

import { Link } from "react-router-dom";
import { Zoom } from "@mui/material";

function CustomCard(props) {
  return (
    <Link to={`/clubs/${props.slug}/`} className="no-underline">
      <Card
        style={{
          background: "#333",
          color: "#fff",
          height: "225px",
          maxWidth: "400px",
          borderRadius: "15px",
        }}
        className="mb-4   transition duration-300 ease-in-out transform hover:scale-105  hover:border-2 hover:border-purple-400"
      >
        <Zoom in={true} timeout={900}>
          <Card.Body className="d-flex">
            <div className="flex-shrink-0 me-3">
              <img
                src={props.avatar}
                alt="Profile"
                className="rounded-circle transition-transform duration-300 hover:scale-110"
                style={{
                  width: "80px",
                  height: "80px",
                  objectFit: "cover",
                  marginTop: "10px",
                }}
              />
            </div>
            <div className="d-flex flex-column w-100">
              <div className="mb-auto">
                <Card.Title style={{ margin: "10px 0 10px 0" }}>
                  <span className="bg-clip-text text-xl font-bold  text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ">
                    {props.title}
                  </span>
                </Card.Title>
                <Card.Text className="text-gray-400">
                  {props.description.length > 100
                    ? `${props.description.substring(0, 100)}...`
                    : props.description}
                  <Link to={`/clubs/${props.slug}`}> read more</Link>
                </Card.Text>
              </div>

              {/* <--View Profile Button-->
              <div className="text-end">
                <Link to={`clubs/${props.id}`}>
                  <Zoom in={true}>
                    <Button
                      style={{ border: "none" }}
                      className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-purple-500 hover:via-pink-500 hover:to-indigo-500 text-white font-bold py-2 px-2 rounded"
                    >
                      View Profile
                    </Button>
                  </Zoom>
                </Link>
              </div> */}
            </div>
          </Card.Body>
        </Zoom>
      </Card>
    </Link>
  );
}

export default CustomCard;
