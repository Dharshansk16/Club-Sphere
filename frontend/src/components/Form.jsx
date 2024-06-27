import React from "react";

function Form(props) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full transition transform hover:scale-105 duration-300 ease-in-out">
        <h1 className="text-2xl font-bold mb-4">{props.formName}</h1>
        <p className="error message text-sm text-red-600">{props.errorText}</p>
        <form onSubmit={props.callHandleSubmit} className="mt-4">
          <div className="mb-4">
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
          <div className="mb-4">
            <label className="block text-gray-700">Description</label>
            <textarea
              name="description"
              value={props.description}
              onChange={props.callHandleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1 transition transform hover:scale-105 duration-300 ease-in-out"
              required
            />
          </div>
          <div className="mb-4">
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
          <div className="mb-4">
            <label className="block text-gray-700">Image</label>
            <input
              name="avatar"
              type="file"
              onChange={props.callImageChange}
              className="w-full p-2 border border-gray-300 rounded mt-1 transition transform hover:scale-105 duration-300 ease-in-out"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded w-full transition transform hover:scale-105 duration-300 ease-in-out"
          >
            {props.buttonName}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
