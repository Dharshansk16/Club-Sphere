import EventList from "../components/EventList";
import NavBar from "../components/NavBar";
import { useState } from "react";
import AnimatedText from "../styles/AnimatedText";

function Event() {
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearchSubmit = (query) => {
    setSearchQuery(query);
  };
  return (
    <div className=" bg-zinc-950 min-h-screen text-white">
      <NavBar onSearchSubmit={handleSearchSubmit} />
      <div className="container mx-auto mt-4 px-4">
        <div className="text-center my-8">
          <h1 className="text-4xl font-bold text-indigo-400 transition duration-500 ease-in-out transform hover:scale-105">
            <AnimatedText text="Upcoming Events" />
          </h1>
        </div>
      </div>
      <div className="container mt-4">
        <EventList searchQuery={searchQuery} />
      </div>
    </div>
  );
}

export default Event;
