

// components/FAQ.js
import React from 'react';
import Question from '../component/Question';

const faqData = [
  { question: ' 1. What is marketing mastery?', answer: 'Marketing mastery provides practical online courses taught by industry experts, designed to develop skills and knowledge for entrepreneurship and investment success, with worldwide accessibility to help individuals start and grow businesses or make smart investment decisions.' },
  { question: ' 2. What kind of courses does the Marketing mastery offer?', answer: 'Marketing mastery is an educational platform offering expert-designed courses in entrepreneurship, investing, marketing, sales, and personal development, suitable for beginners and experienced individuals seeking to develop the knowledge and skills to succeed in their fields.' },
  {question: " 3. Will I get the completion certificate?", answer: "Yes, you will get the completion certificate."},
  {question: " 4. What is the enrollment fee?", answer: "There is no enrollment fee. You only have to pay the course fee."},
  {question: " 5. How to enroll in our courses?", answer: "Follow the steps to enroll in our courses. 1.Go to Marketing mastery Website 2.Click on Enroll now 3.Fill in the asked details 4. Choose your favorite course"
 },
 
  // Add more FAQ items as needed
];

function FAQ() {
  return (
    <div className='faq-map'>
      {faqData.map((item, index) => (
        <Question key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
}

export default FAQ;
