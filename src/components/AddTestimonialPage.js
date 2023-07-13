import React, { useState } from "react";
import './AddTestimonialPage.css'



function AddTestimonialPage() {
  const [participant, setParticipant] = useState("");
  const [contact, setContact] = useState("");
  const [opinion, setOpinion] = useState("");
  const [warning, setWarning] = useState("");

  const submitOpinion = () => {
    if (participant === "" || contact === "" || opinion === "") {
      setWarning("Il faut remplir les champs!");
      return;
    }
    const emailValidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailValidation.test(contact)) {
      setWarning("Adresse e-mail invalide!");
      return;
    }
    const feedback = JSON.parse(localStorage.getItem("feedback")) || [];
    feedback.push({ participant, contact, opinion });
    localStorage.setItem("feedback", JSON.stringify(feedback));
    setParticipant("");
    setContact("");
    setOpinion("");
    setWarning("");
  };

  return (
    <div className="add-testimonial-container">
      <input className="input-field" value={participant} onChange={(e) => setParticipant(e.target.value)} placeholder="Name" />
      <input className="input-field" value={contact} onChange={(e) => setContact(e.target.value)} placeholder="Email" />
      <textarea className="input-field" value={opinion} onChange={(e) => setOpinion(e.target.value)} placeholder="Feedback" />
      {warning && <p className="warning">{warning}</p>}
      <button className="submit-button" onClick={submitOpinion}>Submit</button>
    </div>
  );
}

export default AddTestimonialPage;
