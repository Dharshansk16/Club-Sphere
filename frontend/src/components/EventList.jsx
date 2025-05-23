// src/components/ClubDetail.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import EventCard from "./EventCard";
import api from "../api";
import { Row, Col } from "react-bootstrap";

const EventList = ({ searchQuery }) => {
  const [events, setEvent] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  useEffect(() => {
    const fetchEventsWithClubDetails = async () => {
      try {
        const apiUrl = import.meta.env.VITE_API_URL;
        const response = await api.get(`/events/`);
        console.log("Fetched Data: ", response.data);

        const eventsWithClubDetails = await Promise.all(
          response.data.map(async (event) => {
            const clubResponse = await api.get(
              `${apiUrl}/clubs/${event.club}/`
            );
            const clubDetails = clubResponse.data;
            return { ...event, club: clubDetails };
          })
        );

        setEvent(eventsWithClubDetails);
        setFilteredEvents(eventsWithClubDetails); //to perform search/filter
      } catch (error) {
        console.error("There was an error fetching the club details!", error);
      }
    };

    fetchEventsWithClubDetails();
  }, []);

  //Filter based on search query
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredEvents(events);
    } else {
      const filtered = events.filter(
        (event) =>
          event.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          event.club.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredEvents(filtered);
    }
  }, [searchQuery, events]);

  if (!events) {
    return <div>Loading...</div>;
  }

  //layout improvise
  const fullRows = Math.floor(filteredEvents.length / 3);
  const rows = [];

  for (let i = 0; i < fullRows * 3; i += 3) {
    rows.push(filteredEvents.slice(i, i + 3));
  }

  const lastRow = filteredEvents.slice(fullRows * 3);

  return (
    <div className="container mt-4">
      {rows.map((row, rowIndex) => (
        <Row key={rowIndex} xs={1} md={2} lg={3} className="g-4">
          {row.map((event) => (
            <Col key={event.id} className="p-2 mb-16">
              <EventCard
                image={event.img}
                name={event.name}
                description={event.description}
                clubname={event.club.name}
                date={event.date}
                venue={event.venue}
                slug={event.club.slug}
                link={event.link}
                id={event.id}
              />
            </Col>
          ))}
        </Row>
      ))}

      {lastRow.length > 0 && (
        <Row className="g-4 justify-content-center">
          {lastRow.map((event) => (
            <Col key={event.id} md={4} className="p-2 mb-16">
              <EventCard
                image={event.img}
                name={event.name}
                description={event.description}
                clubname={event.club.name}
                date={event.date}
                venue={event.venue}
                slug={event.club.slug}
                link={event.link}
                id={event.id}
              />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default EventList;
