// src/components/ClubDetail.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProfileCard from "./ProfileCard";
import EventDetailSection from "./EventDetailSection.jsx";

const ClubDetail = () => {
  const { slug } = useParams();
  const [club, setClub] = useState(null);

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL;
    axios
      .get(`${apiUrl}/clubs/${slug}/`)
      .then((response) => {
        console.log("Fetched Data: ", response.data);
        setClub(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the club details!", error);
      });
  }, [slug]);

  if (!club) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <ProfileCard
        name={club.name}
        description={club.description}
        avatar={club.avatar}
        url={club.url}
        slug={club.slug}
        owner={club.created_by}
      />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-8 text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...">
            Upcoming Events
          </span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
          {club.events.map((event, index) => (
            <EventDetailSection
              key={index}
              id={event.id}
              title={event.name}
              description={event.description}
              img={event.img}
              link={event.link}
              venue={event.venue}
              date={event.date}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClubDetail;
