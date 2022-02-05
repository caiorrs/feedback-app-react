import { FaEdit, FaTimes } from "react-icons/fa";

import Card from "./shared/Card";
import FeedbackContext from "../context/FeedbackContext";
import PropTypes from "prop-types";
import { useContext } from "react";

const FeedbackItem = ({ feedback }) => {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);

  return (
    <Card>
      <div className="num-display">{feedback.rating}</div>
      <button className="close" onClick={() => deleteFeedback(feedback.id)}>
        <FaTimes color="purple" />
      </button>
      <button className="edit" onClick={() => editFeedback(feedback)}>
        <FaEdit color="purple" />
      </button>
      <div className="text-display">{feedback.text}</div>
    </Card>
  );
};

FeedbackItem.propTypes = {
  feedback: PropTypes.object.isRequired,
};

export default FeedbackItem;
