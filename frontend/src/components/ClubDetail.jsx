// src/components/ClubDetail.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProfileCard from "./ProfileCard";
import EventDetailSection from "./EventDetailSection.jsx";
import AnimatedText from "../styles/AnimatedText.jsx";
import api from "../api.js";
import { useAuth } from "../AuthContext.jsx";

const ClubDetail = () => {
  const { slug } = useParams();
  const [club, setClub] = useState(null);

  useEffect(() => {
    const fetchClubDetails = async () => {
      try {
        const response = await api.get(`/clubs/${slug}/`);
        setClub(response.data);
      } catch (error) {
        console.log("An error occured while fetching club details!", error);
      }
    };
    fetchClubDetails();
  }, [slug]);

  const handleDeleteEvent = (deletedEventID) => {
    setClub((prevClub) => ({
      ...prevClub,
      events: prevClub.events.filter((event) => event.id !== deletedEventID),
    }));
  };

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
          <AnimatedText text="Upcoming Events" />
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
              onDelete={() => handleDeleteEvent(event.id)}
              clubOwner={club.created_by}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClubDetail;
