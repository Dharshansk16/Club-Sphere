import React from "react";
import { useState } from "react";
import axios from "axios";

function RegisterForm() {
  const [clubdetails, setClubDetails] = useState({
    name: "",
    description: "",
    avatar: "",
    url: "",
  });
  const [image, setImage] = useState(null);

  function handleImageChange(event) {
    setImage(event.target.files[0]);
  }
  function handleChange(event) {
    const { name, value } = event.target;
    setClubDetails((prevVal) => {
      return {
        ...prevVal,
        [name]: value,
      };
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", clubdetails.name);
    formData.append("description", clubdetails.description);
    formData.append("url", clubdetails.url);
    formData.append("slug", "w");
    if (image) {
      formData.append("avatar", image);
    }

    const apiUrl = import.meta.env.VITE_API_URL;
    axios
      .post(`${apiUrl}/clubs/`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log("Club created successfully:", response.data);
      })
      .catch((error) => {
        console.error("There was an error creating the club!", error);
      });
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold">Create a New Club</h1>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-4">
          <label className="block text-gray-700">Club Name</label>
          <input
            name="name"
            type="text"
            value={clubdetails.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Description</label>
          <textarea
            name="description"
            value={clubdetails.description}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Url</label>
          <input
            name="url"
            type="url"
            value={clubdetails.url}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Image</label>
          <input
            type="file"
            onChange={handleImageChange}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
        </div>

        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Create Club
        </button>
      </form>
    </div>
  );
}
export default RegisterForm;
