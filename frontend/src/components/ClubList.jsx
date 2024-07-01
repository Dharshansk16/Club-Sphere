import React, { useState, useEffect } from "react";
import axios from "axios";
import CustomCard from "./CustomCard";
import { Container, Row, Col } from "react-bootstrap";

const ClubList = ({ searchQuery }) => {
  const [clubs, setClubs] = useState([]);
  const [filteredClubs, setFilteredClubs] = useState([]);

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL; // Access the Vite environment variable
    axios
      .get(`${apiUrl}/clubs/`)
      .then((response) => {
        console.log("Fetched Data: ", response.data);
        setClubs(response.data);
        setFilteredClubs(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the clubs!", error);
      });
  }, []);

  //Filter clubs based on search query
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredClubs(clubs);
    } else {
      const filtered = clubs.filter((club) =>
        club.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredClubs(filtered);
    }
  }, [searchQuery, clubs]);

  return (
    <Container className="mt-16">
      <Row xs={1} md={2} lg={3} className="g-4">
        {filteredClubs.map((club, index) => (
          <Col key={index}>
            <CustomCard
              slug={club.slug}
              avatar={club.avatar}
              title={club.name}
              description={club.description}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ClubList;
