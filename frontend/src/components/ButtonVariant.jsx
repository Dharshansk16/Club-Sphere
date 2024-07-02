import { Button } from "react-bootstrap";
function ButtonVariant(props) {
  return (
    <Button
      onClick={props.onButtonClick}
      style={{ borderRadius: props.borderRadius, padding: props.padding }}
      variant="outline-light bg-gray-500"
    >
      {props.buttonText}
    </Button>
  );
}

export default ButtonVariant;
