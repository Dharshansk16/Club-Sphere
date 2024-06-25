// src/components/ClubDetail.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import EventCard from "./EventCard";

const EventList = () => {
  const [events, setEvent] = useState([]);

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL;
    axios
      .get(`${apiUrl}/events/`)
      .then((response) => {
        console.log("Fetched Data: ", response.data);
        setEvent(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the club details!", error);
      });
  }, []);

  if (!events) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-wrap justify-between">
      {events.map((event, index) => (
        <div key={event.id} className="p-2 flex-grow-0">
          <EventCard
            image={event.img}
            name={event.name}
            description={event.description}
            clubname={event.club.name}
            date={event.date}
            venue={event.venue}
            slug={event.club.slug}
            id={event.id}
          />
        </div>
      ))}
    </div>
  );
};

export default EventList;
