import { createContext, useEffect, useState } from "react";

import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  const [feedbacks, setFeedbacks] = useState([]);

  const [feedbackEdit, setFeedbackEdit] = useState({
    feedback: {},
    edit: false,
  });

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const fetchFeedbacks = async () => {
    setIsLoading(true);
    const response = await fetch("http://localhost:5000/feedbacks?_sort=id&order=desc");
    const data = await response.json();

    setFeedbacks(data);
    setIsLoading(false);
  };

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
        isLoading,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
