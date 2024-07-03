import React, { useState, useEffect } from "react";
import api from "../api";
import { useAuth } from "../AuthContext";
import EventForm from "./EventForm";
import { useParams, useNavigate } from "react-router-dom";
import { urlToFile } from "../utils";

const UpdateEvent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth(); // Access user information from AuthProvider context
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    date: "",
    venue: "",
    img: null,
    link: "",
  });
  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await api.get(`/events/${id}/`);
        console.log(response.data);
        // Format date
        const formattedDate = new Date(response.data.date)
          .toISOString()
          .slice(0, 16);

        const file = await urlToFile(
          response.data.img,
          "image.jpg",
          "image/jpeg"
        );

        setFormData({
          name: response.data.name,
          description: response.data.description,
          date: formattedDate,
          venue: response.data.venue,
          img: file,
          link: response.data.link,
        });
        console.log(formData);
      } catch (error) {
        console.error("Error fetching event:", error);
      }
    };

    fetchEvent();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataWithClub = {
        ...formData,
        club: user.club.slug,
      };

      const data = new FormData();
      console.log(formDataWithClub);
      for (const key in formDataWithClub) {
        if (formDataWithClub[key] !== null) {
          data.append(key, formDataWithClub[key]);
        }
      }

      const response = await api.put(`/events/${id}/`, data, {
        headers: {
          "Content-Type": "multipart/form-data", // Required for file uploads
        },
      });

      console.log("Event updated:", response.data);
      navigate(`/clubs/${response.data.club}/`);
    } catch (error) {
      console.error("Error updating event:", error);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "img") {
      setFormData({ ...formData, img: e.target.files[0] });
      console.log(e.target.files[0]); // For handling image upload
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

export default UpdateEvent;
