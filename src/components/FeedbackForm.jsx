import Button from "./shared/Button";
import Card from "./shared/Card";
import FeedbackContext from "../context/FeedbackContext";
import RatingSelect from "./RatingSelect";
import { useContext } from "react";
import { useState } from "react";

const FeedbackForm = () => {
  const [text, setText] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(10);

  const { addFeedback } = useContext(FeedbackContext);

  const handleTextChange = (e) => {
    const value = e.target.value;
    if (value === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (value !== "" && value.trim().length <= 10) {
      setMessage("Text must be at least 10 characters");
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }

    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      };
      addFeedback(newFeedback);
    }

    setText("");
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input type="text" placeholder="Write a review" onChange={handleTextChange} value={text} />
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
};

export default FeedbackForm;
