import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Pill from './Pill';
import Icon from './Icon';
import './Question.css';

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      likes: this.props.likes,
      dislikes: this.props.dislikes,
      hasVoted: false,
    };

    this.handleOpenClick = this.handleOpenClick.bind(this);
    this.handleUpVote = this.handleUpVote.bind(this);
    this.handleDownVote = this.handleDownVote.bind(this);
  }

  handleOpenClick() {
    this.setState(prevState => ({ open: !prevState.open }));
  }

  // Increment likes count if user hasn't voted yet, else decrement.
  handleUpVote() {
    // FIXME: Do these properly
    const { hasVoted, likes } = this.state;
    this.setState({
      likes: (hasVoted) ? likes - 1 : likes + 1,
      hasVoted: (!hasVoted),
    });
  }

  // Increment dislikes count if user hasn't voted yet, else decrement.
  handleDownVote() {
    const { hasVoted, dislikes } = this.state;
    this.setState({
      dislikes: (hasVoted) ? dislikes - 1 : dislikes + 1,
      hasVoted: (!hasVoted),
    });
  }

  render() {
    const styles = {
      icon: {
        cursor: 'pointer',
        marginRight: '8px',
        borderRadius: '10px',
      },
      pill: {
        marginRight: '4px',
        textTransform: 'capitalize',
      },
    };
    const hasVotedStyle = '#fff0d0';
    const hasVotedLike = (this.props.likes < this.state.likes);
    const hasVotedDislike = (this.props.dislikes < this.state.dislikes);
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
                  style={styles.pill}
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
                style={{
                  ...styles.icon,
                  background: (hasVotedLike) ? hasVotedStyle : '',
                }}
                onClick={this.handleUpVote}
              />
              <div
                className="flugleidir-question-like-text"
              >
                {this.state.likes} likes
              </div>
            </div>
            <div>
              <Icon
                glyph="thumb_down"
                color="#b43938"
                style={{ ...styles.icon, background: (hasVotedDislike) ? hasVotedStyle : '' }}
                onClick={this.handleDownVote}
              />
              <div
                className="flugleidir-question-like-text"
              >
                {this.state.dislikes} dislikes
              </div>
            </div>
          </div>
        </div>

        <div
          className={`flugleidir-answer-wrapper${this.state.open ? ' flugleidir-answer-open' : ''}`}
        >
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
