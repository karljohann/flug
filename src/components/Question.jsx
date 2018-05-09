import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Pill from './Pill';
import Icon from './Icon';

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };

    this.handleOpenClick = this.handleOpenClick.bind(this);
  }

  handleOpenClick() {
    this.setState(prevState => ({ open: !prevState.open }));
  }

  render() {
    const handleTagClick = (tag) => {
      // FIXME
      console.log('Clicked on tag:', tag);
    };

    return (
      <div className="flugleidir-question-wrapper">
        <div className="flugleidir-question">
          <div className="flugleidir-question-views">
            <div className="flugleidir-question-views-number">{this.props.views}</div>
            <div className="flugleidir-question-views-text">Views</div>
          </div>

          <div>
            <div
              className="flugleidir-question-question"
              onClick={this.handleOpenClick}
              onKeyDown={this.handleOpenClick}
              role="presentation"
            >
              {this.props.question}
            </div>
            <div className="flugleidir-question-asker">
              Asked by {this.props.asked_by}
            </div>
            <div className="flugleidir-question-tags">
              {this.props.tags.map(tag => (
                <Pill
                  key={tag}
                  onClick={() => { handleTagClick(tag); }}
                  title={tag}
                  small
                />
              ))}
            </div>
          </div>

          <div className="flugleidir-question-likes">
            <div>
              <Icon
                glyph="thumb_up"
                color="#497523"
              />
              <div
                className="flugleidir-question-like-text"
              >
                {this.props.likes} likes
              </div>
            </div>
            <div>
              <Icon
                glyph="thumb_down"
                color="#b43938"
              />
              <div
                className="flugleidir-question-like-text"
              >
                {this.props.dislikes} dislikes
              </div>
            </div>
          </div>
        </div>

        <div>
          {this.state.open &&
            <div className="flugleidir-answer">
              <span>
                <strong>Answer</strong>
                <p>{this.props.answer}</p>
              </span>
            </div>
          }
        </div>
      </div>
    );
  }
}

Question.propTypes = {
  asked_by: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  views: PropTypes.number,
  tags: PropTypes.arrayOf(PropTypes.string),
  likes: PropTypes.number,
  dislikes: PropTypes.number,
};

Question.defaultProps = {
  tags: [],
  views: 0,
  likes: 0,
  dislikes: 0,
};

export default Question;
