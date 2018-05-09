import React, { Component } from 'react';
import Question from './Question';
import Pill from './Pill';
import faqs from '../faqs.json';
import './Main.css';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      amountToShow: 7,
      showMoreButton: true,
    };
    this.moreQuestions = this.moreQuestions.bind(this);
  }

  moreQuestions() {
    const amountOfQuestions = faqs.length + 1;
    const howManyMore = (amountOfQuestions > this.state.amountToShow + 7)
      ? this.state.amountToShow + 7
      : faqs.length;
    this.setState({
      amountToShow: howManyMore,
      showMoreButton: (amountOfQuestions === howManyMore),
    });
  }

  render() {
    const pillStyle = {
      backgroundColor: 'transparent',
      borderColor: '#407bac',
      color: '#407bac',
      float: 'right',
      padding: '0px 24px',
    };

    return (
      <div className="flugleidir-main">
        <div className="flugleidir-content flugleidir-main-header">
          <div className="flugleidir-title">Answers</div>
          <Pill
            title="Ask question"
            style={pillStyle}
          />
        </div>
        <div className="flugleidir-main-questions flugleidir-content">
          {faqs.slice(0, this.state.amountToShow).map(faq => (
            <Question key={faq.key} {...faq} />
          ))}

          {this.state.showMoreButton &&
            <button
              onClick={this.moreQuestions}
              className="flugleidir-show-more-button"
            >
              View more Questions {/* TODO: Tranlsation strings */ }
            </button>
          }
        </div>
      </div>
    );
  }
}

export default Main;
