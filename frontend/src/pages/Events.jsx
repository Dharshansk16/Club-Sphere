import EventList from "../components/EventList";
import NavBar from "../components/NavBar";
import { useState } from "react";
import AnimatedText from "../styles/AnimatedText";
import Footer from "../components/Footer";

function Event() {
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearchSubmit = (query) => {
    setSearchQuery(query);
  };
  return (
    <>
      <div className="flex flex-col min-h-[100vh] bg-zinc-950 text-white">
        <NavBar onSearchSubmit={handleSearchSubmit} />

        <div className="container mx-auto mt-2 px-2 flex-grow">
          <div className="text-center mb-4 mt-2">
            <h1 className="text-4xl font-bold text-indigo-400 transition duration-500 ease-in-out transform hover:scale-105">
              <AnimatedText fontStyle="Helvetica" text="Upcoming Events" />
            </h1>
          </div>

          <div className="mt-4 flex-grow">
            <EventList searchQuery={searchQuery} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Event;
