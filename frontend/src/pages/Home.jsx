import NavBar from "../components/NavBar";
import ClubList from "../components/ClubList";

function Home() {
  return (
    <div className=" bg-gray-950 min-h-screen text-white">
      <NavBar />
      <div className="container mt-4">
        <ClubList />
      </div>
    </div>
  );
}

export default Home;
