import { useState } from "react";
import Form from "./Form";
import { useNavigate } from "react-router-dom";
import api from "../api";

function RegisterClub() {
  const [clubdetails, setClubDetails] = useState({
    name: "",
    description: "",
    avatar: "",
    url: "",
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
    const formData = new FormData();
    formData.append("name", clubdetails.name);
    formData.append("description", clubdetails.description);
    formData.append("url", clubdetails.url);
    formData.append("slug", "w");
    if (image) {
      formData.append("avatar", image);
    }
    console.log(formData);

    const apiUrl = import.meta.env.VITE_API_URL;
    api
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
        setErrorText("You have already registered a club!");
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
        errorText={errorText}
        buttonName="Register"
        formName="Register"
        avatar={clubdetails.avatar}
      />
    </div>
  );
}
export default RegisterClub;
