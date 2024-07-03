// UpdateClub.js
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../api";
import Form from "./Form";
import { urlToFile } from "../utils";

const UpdateClub = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [errorText, setErrorText] = useState("");
  const [newSlug, setNewSlug] = useState(false);
  const [club, setClub] = useState({
    name: "",
    description: "",
    url: "",
    avatar: null,
  });

  useEffect(() => {
    const fetchClubDetais = async () => {
      try {
        const response = await api.get(`clubs/${slug}/`);
        const file = await urlToFile(
          response.data.avatar,
          "image.jpg",
          "image/jpeg"
        );
        setClub({
          name: response.data.name,
          description: response.data.description,
          url: response.data.url,
          avatar: file,
        });
      } catch (error) {
        console.log("Error Occured while Fetching the ClubDetails", error);
        setErrorText(error);
      }
    };
    fetchClubDetais();
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      for (const key in club) {
        formData.append(key, club[key]);
      }
      const response = await api.put(`clubs/${slug}/`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Club Updated Successfully!");
      if (response.data.slug !== slug) {
        setNewSlug(response.data.slug);
      } else {
        navigate(`/clubs/${slug}`);
      }
    } catch (error) {
      console.log("There was an Error Updating the Club", error);
      setErrorText("There was an Error Updating the Club");
    }
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
