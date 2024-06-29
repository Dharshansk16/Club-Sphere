import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React from "react";
import { Zoom } from "@mui/material";
import { Link } from "react-router-dom";
import AnimatedText from "../styles/AnimatedText";

function EventCard(props) {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const formattedDate = `${date.toLocaleDateString()}`;
    const formattedTime = `${date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    })}`;
    return { formattedDate, formattedTime };
  };

  const { formattedDate, formattedTime } = formatDate(props.date);
  return (
    <Link to={`/clubs/${props.slug}`} className="no-underline">
      <Card
        style={{
          background: "#222222",
          color: "#fff",
          height: "400px",
          width: "18rem",
          maxHeight: "400px",
          borderRadius: "10px",
        }}
        className="mb-4 transition duration-300 ease-in-out transform hover:scale-105  hover:border-2 hover:border-white"
      >
        <Zoom in={true} timeout={900}>
          <div className="relative h-1/2 bg-black">
            <img
              src={props.image}
              alt="Card Image"
              className="w-full h-full object-contain"
            />
          </div>
        </Zoom>
        <Zoom in={true} timeout={900}>
          <Card.Body className="flex flex-col justify-between h-1/2 p-4">
            <div>
              <Card.Title>
                <AnimatedText text={props.name} />
              </Card.Title>
              <Card.Text className="text-gray-400 text-sm">
                {props.description.length > 80
                  ? `${props.description.substring(0, 80)}`
                  : props.description}
                {props.description.length > 80 ? (
                  <Link to={`/clubs/${props.slug}`}> read more...</Link>
                ) : (
                  ""
                )}
              </Card.Text>
            </div>
            <div className="flex justify-between mt-4 font-serif">
              <div className="text-sm">
                <Card.Text className="text-sm text-blue-400">
                  Venue: {props.venue} <br />
                  {props.clubname}
                </Card.Text>
              </div>
              <div className="text-right">
                <Card.Text className="text-sm">
                  <span className="text-blue-400">Date: </span>
                  <span className="text-purple-400">{formattedDate}</span>{" "}
                  <br />
                  <span className="text-blue-400">Time: </span>
                  <span className="text-purple-400">{formattedTime} </span>
                </Card.Text>
              </div>
            </div>
          </Card.Body>
        </Zoom>
      </Card>
    </Link>
  );
}

export default EventCard;
