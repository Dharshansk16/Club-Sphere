import { useState } from "react";
import LinkIcon from "@mui/icons-material/Link";
import { Link } from "react-router-dom";
import AnimatedText from "../styles/AnimatedText";
import DeleteEvent from "./DeleteEvent";
import DeleteIcon from "@mui/icons-material/Delete";
import { useAuth } from "../AuthContext";
import ButtonVariant from "./ButtonVariant";
import EditIcon from "@mui/icons-material/Edit";

function EventDetailSection(props) {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const formattedDate = `${date.toLocaleDateString()}`;
    const formattedTime = `${date.toLocaleTimeString()}`;
    return { formattedDate, formattedTime };
  };

  const { formattedDate, formattedTime } = formatDate(props.date);

  //Hover effects on Icons
  const [isHovering, setIsHovering] = useState({
    edit: false,
    delete: false,
  });
  // Handle Hovering
  const handleMouseEnter = (name) => {
    setIsHovering((prevVal) => {
      return {
        ...prevVal,
        [name]: true,
      };
    });
  };

  const handleMouseLeave = (name) => {
    setIsHovering((prevVal) => {
      return {
        ...prevVal,
        [name]: false,
      };
    });
  };

  // Authentication for Delete
  const { user } = useAuth();

  const [showFullImage, setShowFullImage] = useState(false);

  const toggleFullImage = () => {
    setShowFullImage(!showFullImage);
  };

  const handleDelete = (eventID) => {
    if (window.confirm("Are you sure you want to delete this event?")) {
      DeleteEvent(eventID, props.onDelete); // onDelete callback from props
    }
  };

  return (
    <div
      style={{ background: "#222" }}
      className="relative rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300 hover:border-2 hover:border-white flex"
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
      <div className="p-4 w-2/3 flex flex-col justify-between">
        <div>
          <h2 className="text-xl text-gray-400 font-bold mb-2">
            <AnimatedText text={props.title} />
          </h2>
          <p className="text-gray-400 mb-4">{props.description}</p>
        </div>
        <div className="text-gray-400 mb-4">
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
            <br />
            <p className="mt-4">
              <Link to={props.link}>
                <ButtonVariant buttonText="Register" borderRadius="25px" />
              </Link>
            </p>
          </p>
        </div>
        {user && user.username === props.clubOwner && (
          <div className="absolute bottom-4 right-4 flex flex-col">
            <Link
              onMouseEnter={() => handleMouseEnter("edit")}
              onMouseLeave={() => handleMouseLeave("edit")}
              to={`/events/update/${props.id}/`}
              className="no-underline"
            >
              <EditIcon
                sx={{
                  color: isHovering.edit ? "#fff" : "gray",
                  marginBottom: "5px",
                }}
              />
            </Link>
            <button
              onMouseEnter={() => handleMouseEnter("delete")}
              onMouseLeave={() => handleMouseLeave("delete")}
              onClick={() => {
                handleDelete(props.id);
              }}
              variant="outline-light bg-gray-500"
            >
              <DeleteIcon sx={{ color: isHovering.delete ? "#fff" : "gray" }} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default EventDetailSection;
