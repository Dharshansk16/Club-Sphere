import { useState } from "react";
import LinkIcon from "@mui/icons-material/Link";
import { Link } from "react-router-dom";

function EventDetailSection(props) {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const formattedDate = `${date.toLocaleDateString()}`;
    const formattedTime = `${date.toLocaleTimeString()}`;
    return { formattedDate, formattedTime };
  };

  const { formattedDate, formattedTime } = formatDate(props.date);

  const [showFullImage, setShowFullImage] = useState(false);

  const toggleFullImage = () => {
    setShowFullImage(!showFullImage);
  };
  return (
    <div
      style={{ background: "#222" }}
      className="rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300  hover:border-2 hover:border-purple-400 flex"
    >
      {showFullImage ? (
        <div
          className="relative w-full h-auto overflow-hidden cursor-pointer"
          onClick={toggleFullImage}
        >
          <img
            src={props.img}
            alt={props.title}
            className="absolute inset-0 w-full h-full object-contain"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
      ) : (
        <div className="w-40 h-auto cursor-pointer" onClick={toggleFullImage}>
          <img
            src={props.img}
            alt={props.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="p-4 w-2/3">
        <h2 className="text-xl text-gray-400 font-bold mb-2">
          <span className="bg-clip-text text-3xl font-bold text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...">
            {props.title}
          </span>
        </h2>
        <p className="text-gray-400 mb-4">{props.description}</p>
        <p className="text-gray-400 mb-4 text-sm">
          Register{" "}
          <Link to={props.link}>
            <LinkIcon style={{ fontSize: "24px" }} />
          </Link>
        </p>
        <div className="text-gray-400">
          <p className="mb-2">
            <span className="font-semibold text-blue-400">
              Venue: {props.venue}
            </span>
          </p>
          <p>
            <span className="font-semibold text-sm text-blue-400">
              Date: {formattedDate}
            </span>
            <br />
            <span className="font-semibold text-sm text-blue-400">
              Time: {formattedTime}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default EventDetailSection;
