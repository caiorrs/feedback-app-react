import FeedbackItem from "./FeedbackItem";

const FeedbackList = ({ feedbacks }) => {
  if (!feedbacks || !feedbacks.length) {
    return <p>No Feedback yet</p>;
  }
  return (
    <div className="feedback-list">
      {feedbacks.map((feedback) => (
        <FeedbackItem key={feedback.id} feedback={feedback} />
      ))}
    </div>
  );
};

export default FeedbackList;
