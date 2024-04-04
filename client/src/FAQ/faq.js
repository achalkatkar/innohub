

// components/FAQ.js
import React from 'react';
import Question from '../component/Question';

const faqData = [
  { question: ' 1. What is marketing mastery?', answer: 'Millionaire Track provides practical online courses taught by industry experts, designed to develop skills and knowledge for entrepreneurship and investment success, with worldwide accessibility to help individuals start and grow businesses or make smart investment decisions.' },
  { question: ' 2. How do I install React?', answer: 'You can install React using npm or yarn.' },
  {question: " 3. hello how are you", answer: "im fine you are"},
  {question: " 4. hello how are you", answer: "im fine you are"},
  {question: " 5. hello how are you", answer: "im fine you are"},
  // Add more FAQ items as needed
];

function FAQ() {
  return (
    <div>
      {faqData.map((item, index) => (
        <Question key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
}

export default FAQ;
