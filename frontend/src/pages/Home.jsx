import NavBar from "../components/NavBar";
import ClubList from "../components/ClubList";
import { useState } from "react";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchSubmit = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className=" bg-zinc-950 min-h-screen text-white">
      <NavBar onSearchSubmit={handleSearchSubmit} />
      <div className="container mt-4">
        <ClubList searchQuery={searchQuery} />
      </div>
    </div>
  );
}

export default Home;
