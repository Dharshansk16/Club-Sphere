import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Zoom } from "@mui/material";
import { Link } from "react-router-dom";
import AnimatedText from "../styles/AnimatedText";
import "../styles/EventCard.css";
import ButtonVariant from "./ButtonVariant";
import { Collapse } from "@mui/material";

function EventCard(props) {
  const [isFlipped, setIsFlipped] = useState(false);

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

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  const handleButtonClick = (event) => {
    event.stopPropagation();
    setIsFlipped(false);
  };

  return (
    <div
      className={`flip-card ${isFlipped ? "flipped" : ""}`}
      onClick={handleCardClick}
    >
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <Card
            style={{
              background: "#222222",
              color: "#fff",
              height: "450px",
              width: "22rem",
              borderTopLeftRadius: "20px",
              borderTopRightRadius: "20px",
            }}
            className="mb-4  transition duration-300 ease-in-out transform hover:scale-105 hover:border-2 hover:border-white"
          >
            <Zoom in={true} timeout={900}>
              <div className="relative w-full h-3/4 bg-transperent">
                <img
                  src={props.image}
                  alt="Card Image"
                  className="w-full h-full object-cover"
                  style={{
                    borderTopLeftRadius: "20px",
                    borderTopRightRadius: "20px",
                  }}
                />
              </div>
            </Zoom>
            <Zoom in={true} timeout={900}>
              <Card.Body className="flex flex-col justify-between p-3">
                <div className="mb-4">
                  <Card.Title style={{ marginBottom: "10px" }}>
                    <AnimatedText text={props.name} />
                  </Card.Title>
                  <Link to={props.link} className="no-underline">
                    <ButtonVariant
                      borderRadius="50px"
                      padding="8px 32px"
                      buttonText="Register"
                      onButtonClick={handleButtonClick}
                    />
                  </Link>
                </div>
                {/* <div className="absolute bottom-2 left-2">
                  <Card.Text className="text-sm text-blue-400">
                    Visit: {props.clubname}
                  </Card.Text>
                </div> */}
              </Card.Body>
            </Zoom>
          </Card>
        </div>
        <div className="flip-card-back">
          <Card
            style={{
              background: "#222222",
              color: "#fff",
              height: "450px",
              width: "22rem",
              borderTopLeftRadius: "20px",
              borderTopRightRadius: "20px",
            }}
            className="mb-4"
          >
            <Card.Body className="flex flex-col justify-between p-4">
              <div>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text className="text-gray-400 text-sm">
                  {props.description.length > 500
                    ? `${props.description.substring(0, 500)}`
                    : props.description}
                </Card.Text>
              </div>
              <div className="flex justify-between mt-4 font-serif">
                <div className="text-sm">
                  <Card.Text className="text-sm text-blue-400">
                    Venue: {props.venue} <br />
                    <Link to={`/clubs/${props.slug}/`} className="no-underline">
                      <span> Visit: {props.clubname} </span>
                    </Link>
                  </Card.Text>
                </div>
                <div className="text-right">
                  <Card.Text className="text-sm">
                    <span className="text-blue-400">Date: </span>
                    <span className="text-purple-400">{formattedDate}</span>
                    <br />
                    <span className="text-blue-400">Time: </span>
                    <span className="text-purple-400">{formattedTime} </span>
                  </Card.Text>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
