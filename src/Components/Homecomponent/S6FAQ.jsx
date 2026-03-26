import React, { useState } from "react";
import "../Styles/S6FAQ.css";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const faqData = [
  {
    question: "What is CIPERA?",
    answer:
      "A utility token built on Ethereum for staking, payments, and ecosystem participation.",
  },
  {
    question: "Where can I buy CIP?",
    answer: "You can buy CIP on supported exchanges and DEX platforms.",
  },
  {
    question: "How can I earn from CIPERA?",
    answer: "You can earn through staking rewards and ecosystem participation.",
  },
  {
    question: "Is CIPERA secure?",
    answer: "Yes, CIPERA uses blockchain technology ensuring transparency and security.",
  },
  {
    question: "What makes CIPERA unique?",
    answer: "Its strong ecosystem, utility, and community-driven approach.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">

        {/* LEFT */}
        <div className="faq-left">
          <h2>
            Frequently Asked <br />
            <span>Question</span>
          </h2>
          <p>
            Find quick answers to common questions about our products.
          </p>
        </div>

        {/* RIGHT */}
        <div className="faq-right">
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
            >
              <div
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                <span>{item.question}</span>
                {activeIndex === index ? (
                  <FiChevronUp />
                ) : (
                  <FiChevronDown />
                )}
              </div>

              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;