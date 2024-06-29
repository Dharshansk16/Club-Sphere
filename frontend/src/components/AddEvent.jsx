import React, { useState } from "react";
import api from "../api"; // Import your configured axios instance
import { useAuth } from "../AuthContext"; // Import your AuthProvider context hook // Import your constant for access token storage

const EventForm = () => {
  const { user } = useAuth(); // Access user information from AuthProvider context
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    date: "",
    venue: "",
    img: null, // For image upload if needed
    link: "", // URL field
    // other fields as needed
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataWithClub = {
        ...formData,
        club: user.club.id, // Assuming user context includes club information
      };
      const response = await api.post("/events/", formDataWithClub);
      console.log("Event created:", response.data);
      // Handle success or navigation
    } catch (error) {
      console.error("Error creating event:", error);
      // Handle error display or other logic
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
    <form onSubmit={handleSubmit}>
      {/* Name */}
      <label>Name:</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      {/* Description */}
      <label>Description:</label>
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        required
      />

      {/* Date */}
      <label>Date:</label>
      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
      />

      {/* Venue */}
      <label>Venue:</label>
      <input
        type="text"
        name="venue"
        value={formData.venue}
        onChange={handleChange}
        required
      />

      {/* Image Upload */}
      <label>Event Image:</label>
      <input type="file" name="img" onChange={handleChange} />

      {/* Link */}
      <label>Event Link:</label>
      <input
        type="url"
        name="link"
        value={formData.link}
        onChange={handleChange}
      />

      {/* Submit Button */}
      <button type="submit">Create Event</button>
    </form>
  );
};

export default EventForm;
