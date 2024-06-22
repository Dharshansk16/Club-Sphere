// src/components/ClubDetail.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProfileCard from "./ProfileCard";

const ClubDetail = () => {
  const { id } = useParams();
  const [club, setClub] = useState(null);

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL;
    axios
      .get(`${apiUrl}/clubs/${id}/`)
      .then((response) => {
        console.log("Fetched Data: ", response.data);
        setClub(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the club details!", error);
      });
  }, [id]);

  if (!club) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <ProfileCard
        name={club.name}
        description={club.description}
        avatar={club.avatar}
      />
      <ul>
        {club.events.map((event) => (
          <li key={event.id} className="p-4 border-b border-gray-200">
            <h3 className="text-lg">{event.name}</h3>
            <p>{event.description}</p>
            <p>Date: {event.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClubDetail;
