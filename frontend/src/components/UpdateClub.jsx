// UpdateClub.js
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../api";
import Form from "./Form";

const UpdateClub = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [errorText, setErrorText] = useState("");
  const [newSlug, setNewSlug] = useState(false);
  const [club, setClub] = useState({
    name: "",
    description: "",
    url: "",
    avatar: "",
  });

  useEffect(() => {
    api
      .get(`clubs/${slug}/`)
      .then((response) => {
        setClub(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the club data!", error);
        setErrorText(error);
      });
  }, [slug]);
  // if club name is changed slug is changed so it is updated before being rendered
  //this ensures that slug is changed every time club name is changed
  useEffect(() => {
    if (newSlug && newSlug !== slug) {
      navigate(`/clubs/${newSlug}/`);
    }
  }, [newSlug, navigate, slug]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setClub({ ...club, [name]: value });
  };

  const handleFileChange = (e) => {
    setClub({ ...club, avatar: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (const key in club) {
      formData.append(key, club[key]);
    }
    api
      .put(`clubs/${slug}/`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log("Club updated successfully!", response.data);
        if (response.data.slug !== slug) {
          setNewSlug(response.data.slug);
        } else {
          navigate(`/clubs/${slug}`);
        }
      })
      .catch((error) => {
        console.error("There was an error updating the club!", error);
        setErrorText("There was an Error Updating the Club!");
      });
  };

  return (
    <Form
      callHandleChange={handleChange}
      callHandleSubmit={handleSubmit}
      callImageChange={handleFileChange}
      name={club.name}
      description={club.description}
      url={club.url}
      errorText={errorText}
      buttonName="Save"
      formName="Edit"
    />
  );
};

export default UpdateClub;
