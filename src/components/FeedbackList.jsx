import { AnimatePresence, motion } from "framer-motion";

import FeedbackContext from "../context/FeedbackContext";
import FeedbackItem from "./FeedbackItem";
import PropTypes from "prop-types";
import { useContext } from "react";

const FeedbackList = ({ handleDelete }) => {
  const { feedbacks } = useContext(FeedbackContext);

  if (!feedbacks || !feedbacks.length) {
    return <p>No Feedback yet</p>;
  }

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
  handleDelete: PropTypes.func.isRequired,
};

export default FeedbackList;
