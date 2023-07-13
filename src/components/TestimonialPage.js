import React, { useState, useEffect } from "react";
import './TestimonialPage.css'

function TestimoanialPage() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [editingFeedbackIndex, setEditingFeedbackIndex] = useState(null);

  useEffect(() => {
    const storedFeedbacks = localStorage.getItem("feedback");
    const localStorageFeedbacks = storedFeedbacks ? JSON.parse(storedFeedbacks) : [];
    if(localStorageFeedbacks.length === 0) {
      const defaultFeedback = {
        participant: "John",
        opinion: "This is the default feedback. Feel free to change it."
      };
      localStorageFeedbacks.push(defaultFeedback);
      localStorage.setItem("feedback", JSON.stringify(localStorageFeedbacks));
    }
    setFeedbacks(localStorageFeedbacks);
  }, []);


  const initiateEdit = index => setEditingFeedbackIndex(index);
  const saveFeedback = index => {
    localStorage.setItem("feedback", JSON.stringify(feedbacks));
    setEditingFeedbackIndex(null);
  }
  const removeFeedback = index => {
    const remainingFeedbacks = feedbacks.filter((_, i) => i !== index);
    setFeedbacks(remainingFeedbacks);
    localStorage.setItem("feedback", JSON.stringify(remainingFeedbacks));
  }
  const alterFeedback = (event, index) => {
    const updatedFeedbacks = [...feedbacks];
    updatedFeedbacks[index].opinion = event.target.value;
    setFeedbacks(updatedFeedbacks);
  }

  return (
    <div className="testimonials-container">
      {feedbacks.map((feedback, index) => (
        <div key={index} className="testimonials-item">
          <h2>{feedback.participant}</h2>
          {editingFeedbackIndex === index ? (
            <>
              <textarea
                className="testimonials-input"
                value={feedback.opinion}
                onChange={(event) => alterFeedback(event, index)}
              />
              <button onClick={() => saveFeedback(index)}>Save</button>
            </>
          ) : (
            <>
              <p>{feedback.opinion}</p>
              <button onClick={() => initiateEdit(index)}>Edit</button>
            </>
          )}
          <button onClick={() => removeFeedback(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default TestimoanialPage;
