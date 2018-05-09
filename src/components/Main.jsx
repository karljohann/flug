import React from 'react';
import Pill from './Pill';

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
        Questions
      </div>
    </div>
  );
}

export default Main;
