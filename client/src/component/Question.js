
// components/Question.js
import React, { useState } from 'react';

function Question({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <h3 onClick={toggleOpen} style={{ cursor: 'pointer' }}>{question}</h3>
      {isOpen && <p>{answer}</p>}
    </div>
  );
}

export default Question;
