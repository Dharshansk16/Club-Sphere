import ClubDetail from "../components/ClubDetail";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function Profile() {
  return (
    <>
      <div className=" bg-zinc-950 min-h-screen text-white">
        <NavBar />
        <ClubDetail />
      </div>
      <Footer />
    </>
  );
}

export default Profile;
