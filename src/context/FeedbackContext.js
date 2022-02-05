import { createContext, useEffect, useState } from "react";

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
    const response = await fetch("/feedbacks?_sort=id&order=desc");
    const data = await response.json();

    setFeedbacks(data);
    setIsLoading(false);
  };

  const addFeedback = async (newFeedback) => {
    const response = await fetch("/feedbacks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFeedback),
    });

    const data = await response.json();

    setFeedbacks((prev) => [data, ...prev]);
  };

  const deleteFeedback = async (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setIsLoading(true);
      await fetch(`/feedbacks/${id}`, { method: "DELETE" });
      setFeedbacks((prev) => prev.filter((feedback) => feedback.id !== id));
      setIsLoading(false);
    }
  };

  const editFeedback = (feedback) => setFeedbackEdit({ feedback, edit: true });

  const updateFeedback = async (id, updatedFeedback) => {
    setIsLoading(true);
    const response = await fetch(`/feedbacks/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedFeedback),
    });
    const data = await response.json();

    setFeedbacks(feedbacks.map((feedback) => (feedback.id === id ? { ...feedback, ...data } : feedback)));
    setFeedbackEdit({ feedback: {}, edit: false });
    setIsLoading(false);
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
