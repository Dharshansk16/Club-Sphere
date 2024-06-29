import AnimatedText from "../styles/AnimatedText";

function LoginForm(props) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-zinc-950">
      <div
        style={{ background: "#222" }}
        className=" shadow-lg rounded-lg p-8 max-w-sm w-full transition transform hover:scale-105 duration-300 ease-in-out"
      >
        <h1 className="text-2xl font-bold mb-4">
          <AnimatedText text="Login" />
        </h1>
        <p className="error message text-sm text-red-600">{props.errorText}</p>
        <form onSubmit={props.callHandleSubmit} className="mt-4">
          <div className="mb-8">
            <label className="font-bold block text-gray-300">Username</label>
            <input
              name="name"
              type="text"
              value={props.name}
              onChange={props.callHandleChange}
              className="bg-stone-400 font-bold text-md text-stone-700 w-full p-2 border border-gray-300 rounded mt-1 transition transform hover:scale-105 duration-300 ease-in-out"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block font-bold text-gray-300">Password</label>
            <input
              type="password"
              name="password"
              placeholder="********"
              value={props.password}
              onChange={props.callHandlePasswordChange}
              className="bg-stone-400  font-bold text-md text-stone-700 w-full p-2 border border-gray-300 rounded mt-1 transition transform hover:scale-105 duration-300 ease-in-out"
              required
            />
          </div>
          <div className="mb-1">
            <marquee
              direction="right"
              className="font-bold text-sm text-green-500"
            >
              Login To Register Your Club
            </marquee>
          </div>

          <div className="mb-4">
            <button
              type="submit"
              className="font-bold text-md outline-light bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ... text-white p-2 rounded w-full transition transform hover:scale-105 duration-300 ease-in-out"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
