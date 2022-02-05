import { createContext, useState } from "react";

import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedbacks, setFeedbacks] = useState([
    {
      id: 1,
      text: "This item is from context",
      rating: 10,
    },
  ]);

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedbacks((prev) => prev.filter((feedback) => feedback.id !== id));
    }
  };

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedbacks((prev) => [newFeedback, ...prev]);
  };

  return <FeedbackContext.Provider value={{ feedbacks, deleteFeedback, addFeedback }}>{children}</FeedbackContext.Provider>;
};

export default FeedbackContext;
