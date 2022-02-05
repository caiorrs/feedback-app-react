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
    {
      id: 2,
      text: "This another item is from context",
      rating: 4,
    },
  ]);

  const [feedbackEdit, setFeedbackEdit] = useState({
    feedback: {},
    edit: false,
  });

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedbacks((prev) => prev.filter((feedback) => feedback.id !== id));
    }
  };

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedbacks((prev) => [newFeedback, ...prev]);
  };

  const editFeedback = (feedback) => setFeedbackEdit({ feedback, edit: true });

  const updateFeedback = (id, updatedFeedback) => {
    setFeedbacks(feedbacks.map((feedback) => (feedback.id === id ? { ...feedback, ...updatedFeedback } : feedback)));
    setFeedbackEdit({ feedback: {}, edit: false });
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedbacks,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
