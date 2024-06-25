import React from "react";
import { useState } from "react";
import axios from "axios";
import Form from "./Form";
import { useNavigate } from "react-router-dom";

function RegisterForm() {
  const [clubdetails, setClubDetails] = useState({
    name: "",
    description: "",
    avatar: "",
    url: "",
    password: "",
    confirmPassword: "",
  });
  const [image, setImage] = useState(null);
  const [errorText, setErrorText] = useState("");
  const navigate = useNavigate();

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
    if (clubdetails.password !== clubdetails.confirmPassword) {
      setErrorText("Passwords do not match!");
      return;
    }
    const formData = new FormData();
    formData.append("name", clubdetails.name);
    formData.append("description", clubdetails.description);
    formData.append("url", clubdetails.url);
    formData.append("slug", "w");
    formData.append("password", clubdetails.password);
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
        navigate("/");
      })
      .catch((error) => {
        console.error("There was an error creating the club!", error);
        setErrorText("There was an error creating the club. Please try again.");
      });
  };

  return (
    <div>
      <Form
        callHandleChange={handleChange}
        callHandleSubmit={handleSubmit}
        callImageChange={handleImageChange}
        name={clubdetails.name}
        description={clubdetails.description}
        url={clubdetails.url}
        password={clubdetails.password}
        passwordConfirm={clubdetails.confirmPassword}
        errortext={errorText}
      />
    </div>
  );
}
export default RegisterForm;
