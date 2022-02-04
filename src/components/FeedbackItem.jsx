import Card from "./shared/Card";
import PropTypes from "prop-types";

const FeedbackItem = ({ feedback }) => {
  return (
    <Card>
      <div className="num-display">{feedback.rating}</div>
      <div className="text-display">{feedback.text}</div>
    </Card>
  );
};

FeedbackItem.propTypes = {
  feedback: PropTypes.object.isRequired,
};

export default FeedbackItem;
