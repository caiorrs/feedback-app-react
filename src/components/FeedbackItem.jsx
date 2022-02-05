import Card from "./shared/Card";
import { FaTimes } from "react-icons/fa";
import FeedbackContext from "../context/FeedbackContext";
import PropTypes from "prop-types";
import { useContext } from "react";

const FeedbackItem = ({ feedback }) => {
  const { deleteFeedback } = useContext(FeedbackContext);

  return (
    <Card>
      <div className="num-display">{feedback.rating}</div>
      <button className="close" onClick={() => deleteFeedback(feedback.id)}>
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{feedback.text}</div>
    </Card>
  );
};

FeedbackItem.propTypes = {
  feedback: PropTypes.object.isRequired,
  handleDelete: PropTypes.func,
};

export default FeedbackItem;
