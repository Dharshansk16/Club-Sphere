import api from "../api";

const DeleteEvent = (eventID, onSuccess) => {
  api
    .delete(`/events/${eventID}`)
    .then((response) => {
      console.log("Event Deleted Successfully", response.data);
      if (onSuccess) {
        onSuccess(); // callback to update the parent component's state
      }
    })
    .catch((error) => {
      console.log("Error Occurred", error);
    });
};

export default DeleteEvent;
