import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Form from "./Form";
import api from "../api";

function UpdateForm() {
  const [currentDetails, setCurrentDetails] = useState({
    name: "",
    url: "",
    description: "",
  });
  const [currentImg, setCurrentImage] = useState("");
  const [errorText, setErrorText] = useState("");
  const { slug } = useParams();
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCurrentDetails((prevVal) => ({
      ...prevVal,
      [name]: value,
    }));
  };

  const handleImageChange = (event) => {
    setCurrentImage(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", currentDetails.name);
    formData.append("description", currentDetails.description);
    formData.append("url", currentDetails.url);
    formData.append("slug", slug);
    if (currentImg) {
      formData.append("avatar", currentImg);
    }
    console.log(formData);
    const apiUrl = import.meta.env.VITE_API_URL;
    try {
      const response = await axios.post(`${apiUrl}/clubs/${slug}`, formData);
      console.log("Success:", response.data);
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL;
    api.get(`${apiUrl}/clubs/${slug}`).then((response) => {
      console.log("Fetched Data:", response.data);
      setCurrentDetails({
        name: response.data.name,
        description: response.data.description,
        url: response.data.url,
      }),
        setCurrentImage(response.data.avatar);
    });
  }, [slug]);

  return (
    <Form
      name={currentDetails.name}
      description={currentDetails.description}
      url={currentDetails.url}
      avatar={currentImg}
      callHandleChange={handleChange}
      callHandleSubmit={handleSubmit}
      callImageChange={handleImageChange}
      setErrorText={errorText}
    />
  );
}

export default UpdateForm;
