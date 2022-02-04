import FeedbackData from "./data/FeedbackData";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import Header from "./components/Header";
import { useState } from "react";

function App() {
  const [feedbacks, setFeedbacks] = useState(FeedbackData);

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedbacks((prev) => prev.filter((feedback) => feedback.id !== id));
    }
  };

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackForm />
        <FeedbackStats feedbacks={feedbacks} />
        <FeedbackList feedbacks={feedbacks} handleDelete={deleteFeedback} />
      </div>
    </>
  );
}

export default App;
