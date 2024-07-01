import RegisterClub from "../components/RegisterClub";

function Register() {
  return (
    <div className="flex flex-col items-center bg-zinc-950">
      <div className="w-full bg-red-500 text-white py-2">
        <marquee className="font-bold">
          Kindly note that only one club registration is allowed at a time.
        </marquee>
      </div>
      <RegisterClub />
    </div>
  );
}

export default Register;
