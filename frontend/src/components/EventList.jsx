// src/components/ClubDetail.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import EventCard from "./EventCard";
import api from "../api";

const EventList = ({ searchQuery }) => {
  const [events, setEvent] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL;
    api
      .get(`/events/`)
      .then((response) => {
        console.log("Fetched Data: ", response.data);
        //Accessing  Whole Club Details with Club_Slug
        const eventsWithClubDetails = response.data.map(async (event) => {
          const clubResponse = await api.get(`${apiUrl}/clubs/${event.club}/`);
          const clubDetails = clubResponse.data;
          return { ...event, club: clubDetails };
        });
        Promise.all(eventsWithClubDetails).then((eventsWithDetails) => {
          setEvent(eventsWithDetails);
          setFilteredEvents(eventsWithDetails); //For search filter
        });
      })

      .catch((error) => {
        console.error("There was an error fetching the club details!", error);
      });
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

  return (
    <div className="flex flex-wrap justify-between">
      {filteredEvents.map((event, index) => (
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
