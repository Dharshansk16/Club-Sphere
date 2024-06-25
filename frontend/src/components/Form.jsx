import React from "react";

function Form(props) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full transition transform hover:scale-105 duration-300 ease-in-out">
        <h1 className="text-2xl font-bold mb-4">Register</h1>
        <form onSubmit={props.callHandleSubmit} className="mt-4">
          <div className="mb-2">
            <label className="block text-gray-700">Club Name</label>
            <input
              name="name"
              type="text"
              value={props.name}
              onChange={props.callHandleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1 transition transform hover:scale-105 duration-300 ease-in-out"
              required
            />
          </div>
          <div className="mb-2">
            <label className="block text-gray-700">Description</label>
            <textarea
              name="description"
              value={props.description}
              onChange={props.callHandleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1 transition transform hover:scale-105 duration-300 ease-in-out"
              required
            />
          </div>
          <div className="mb-2">
            <label className="block text-gray-700">Url</label>
            <input
              name="url"
              type="url"
              value={props.url}
              onChange={props.callHandleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1 transition transform hover:scale-105 duration-300 ease-in-out"
              required
            />
          </div>
          <div className="mb-2">
            <label className="block text-gray-700">Image</label>
            <input
              type="file"
              onChange={props.callImageChange}
              className="w-full p-2 border border-gray-300 rounded mt-1 transition transform hover:scale-105 duration-300 ease-in-out"
            />
          </div>
          <div className="mb-2">
            <label className="block text-gray-700">Password</label>
            <input
              name="password"
              type="password"
              value={props.password}
              onChange={props.callHandleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1 transition transform hover:scale-105 duration-300 ease-in-out"
              required
            />
          </div>
          <div className="mb-2">
            <label className="block text-gray-700">Confirm Password</label>
            <input
              name="confirmPassword"
              type="password"
              value={props.confirmPassword}
              onChange={props.callHandleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1 transition transform hover:scale-105 duration-300 ease-in-out"
              required
            />
            {props.errortext && (
              <p className="error-message text-xs text-red-600">
                {props.errortext}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded w-full transition transform hover:scale-105 duration-300 ease-in-out"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
