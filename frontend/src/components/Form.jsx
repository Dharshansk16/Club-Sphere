import React from "react";
import AnimatedText from "../styles/AnimatedText";

function Form(props) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-zinc-950">
      <div
        style={{ background: "#222" }}
        className=" shadow-lg rounded-lg p-8 max-w-lg w-full transition transform hover:scale-105 duration-300 ease-in-out"
      >
        <h1 className="text-2xl font-bold mb-4">
          <AnimatedText text={props.formName} />
        </h1>
        <p className="error message text-sm text-red-600">{props.errorText}</p>
        <form onSubmit={props.callHandleSubmit} className="mt-4">
          <div className="mb-4">
            <label className="font-bold block text-gray-300">Club Name</label>
            <input
              name="name"
              type="text"
              value={props.name}
              onChange={props.callHandleChange}
              className="bg-stone-400 font-bold text-md text-stone-700 w-full p-2 border border-gray-300 rounded mt-1 transition transform hover:scale-105 duration-300 ease-in-out"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block font-bold text-gray-300">Description</label>
            <textarea
              name="description"
              value={props.description}
              onChange={props.callHandleChange}
              className="bg-stone-400  font-bold text-md text-stone-700 w-full p-2 border border-gray-300 rounded mt-1 transition transform hover:scale-105 duration-300 ease-in-out"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block font-bold text-gray-300">Url</label>
            <input
              name="url"
              type="url"
              value={props.url}
              onChange={props.callHandleChange}
              className="bg-stone-400  font-bold text-md text-stone-700 w-full p-2 border border-gray-300 rounded mt-1 transition transform hover:scale-105 duration-300 ease-in-out"
              required
            />
          </div>
          <div className="mb-4">
            <label className=" block font-bold text-gray-300">Avatar</label>
            <input
              name="avatar"
              type="file"
              onChange={props.callImageChange}
              className="bg-stone-400 font-bold text-gray-200 w-full p-2 border border-gray-300 rounded mt-1 transition transform hover:scale-105 duration-300 ease-in-out"
            />
          </div>
          <div className="mb-2">
            <button
              type="submit"
              className="font-bold text-md outline-light bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ... text-white p-2 rounded w-full transition transform hover:scale-105 duration-300 ease-in-out"
            >
              {props.buttonName}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
