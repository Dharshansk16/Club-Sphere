import React, { useState } from "react";
import api from "../api";
import { useAuth } from "../AuthContext";
import EventForm from "./EventForm";
import { useNavigate } from "react-router-dom";

const AddEvent = () => {
  const { user } = useAuth(); // Access user information from AuthProvider context
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    date: "",
    venue: "",
    img: null,
    link: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataWithClub = {
        ...formData,
        club: user.club.slug,
      };

      const data = new FormData();
      for (const key in formDataWithClub) {
        data.append(key, formDataWithClub[key]);
      }

      const response = await api.post("/events/", data, {
        headers: {
          "Content-Type": "multipart/form-data", // Required for file uploads
        },
      });

      console.log("Event created:", response.data);
      navigate(`/clubs/${response.data.club}/`);
    } catch (error) {
      console.error("Error creating event:", error);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "img") {
      setFormData({ ...formData, img: e.target.files[0] }); // For handling file upload
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  return (
    <EventForm
      name={formData.name}
      description={formData.description}
      link={formData.link}
      venue={formData.venue}
      date={formData.date}
      callHandleChange={handleChange}
      callHandleSubmit={handleSubmit}
    />
  );
};

export default AddEvent;
