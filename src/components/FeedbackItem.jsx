import Card from "./shared/Card";
import { FaTimes } from "react-icons/fa";
import PropTypes from "prop-types";

const FeedbackItem = ({ feedback, handleDelete }) => {
  return (
    <Card>
      <div className="num-display">{feedback.rating}</div>
      <button className="close" onClick={() => handleDelete(feedback.id)}>
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
