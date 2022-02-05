import { AnimatePresence, motion } from "framer-motion";

import FeedbackItem from "./FeedbackItem";
import PropTypes from "prop-types";

const FeedbackList = ({ feedbacks, handleDelete }) => {
  if (!feedbacks || !feedbacks.length) {
    return <p>No Feedback yet</p>;
  }
  // return (
  //   <div className="feedback-list">
  //     {feedbacks.map((feedback) => (
  //       <FeedbackItem key={feedback.id} feedback={feedback} handleDelete={handleDelete} />
  //     ))}
  //   </div>
  // );

  return (
    <div className="feedback-list">
      <AnimatePresence>
        {feedbacks.map((feedback) => (
          <motion.div key={feedback.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <FeedbackItem key={feedback.id} feedback={feedback} handleDelete={handleDelete} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

FeedbackList.propTypes = {
  feedbacks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ).isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default FeedbackList;
