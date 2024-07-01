import EventList from "../components/EventList";
import NavBar from "../components/NavBar";
import { useState } from "react";

function Event() {
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearchSubmit = (query) => {
    setSearchQuery(query);
  };
  return (
    <div className=" bg-zinc-950 min-h-screen text-white">
      <NavBar onSearchSubmit={handleSearchSubmit} />
      <div className="container mt-4">
        <EventList searchQuery={searchQuery} />
      </div>
    </div>
  );
}

export default Event;
