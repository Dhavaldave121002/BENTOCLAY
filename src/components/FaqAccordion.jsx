import { useState } from 'react';
import { faqs } from '../data/faqs';

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <section className="faq-section section-pad" id="faq">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="section-number">FREQUENTLY ASKED QUESTIONS</span>
            <h2>
              Attapulgite questions,<br />
              <span>answered with data.</span>
            </h2>
          </div>
          <p>
            Technical answers regarding mineral structure, drilling rheology, export packing and quality testing.
          </p>
        </div>

        <div className="faq-container">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`faq-item ${isOpen ? 'active' : ''}`}
              >
                <button
                  type="button"
                  className="faq-question"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <span className="faq-toggle-icon" aria-hidden="true">+</span>
                </button>
                <div className="faq-answer-wrapper" aria-hidden={!isOpen}>
                  <div className="faq-answer-inner">
                    <div className="faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
