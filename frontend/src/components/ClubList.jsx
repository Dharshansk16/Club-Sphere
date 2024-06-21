import React, { useState, useEffect } from "react";
import axios from "axios";

const ClubList = () => {
  const [clubs, setClubs] = useState([]);

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL; // Access the Vite environment variable

    axios
      .get(`${apiUrl}/clubs/`)
      .then((response) => {
        console.log("Fetched Data: ", response.data);
        setClubs(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the clubs!", error);
      });
  }, []);
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold">College Clubs</h1>
      <ul>
        {clubs.map((club) => (
          <li key={club.id} className="p-4 border-b border-gray-200">
            <h2 className="text-xl">{club.name}</h2>
            <p>{club.description}</p>
            <img src={club.avatar} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClubList;
