import EventList from "../components/EventList";
import NavBar from "../components/NavBar";

function Event() {
  return (
    <div className=" bg-zinc-950 min-h-screen text-white">
      <NavBar />
      <div className="container mt-4">
        <EventList />
      </div>
    </div>
  );
}

export default Event;
