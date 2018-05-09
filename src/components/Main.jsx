import React from 'react';
import Question from './Question';
import Pill from './Pill';
import faqs from '../faqs.json';

function Main() {
  return (
    <div className="flugleidir-main">
      <div className="flugleidir-content flugleidir-main-header">
        <div className="flugleidir-title">Answers</div>
        <Pill
          title="Ask question"
        />
      </div>
      <div className="flugleidir-main-questions flugleidir-content">
        {faqs.map(faq => (
          <Question key={faq.key} {...faq} />
        ))}
      </div>
    </div>
  );
}

export default Main;
