import FeedbackData from "./data/FeedbackData";
import FeedbackList from "./components/FeedbackList";
import Header from "./components/Header";
import { useState } from "react";

function App() {
  const [feedbacks, setFeedbacks] = useState(FeedbackData);

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackList feedbacks={feedbacks} />
      </div>
    </>
  );
}

export default App;
