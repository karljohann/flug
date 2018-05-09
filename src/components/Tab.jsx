import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Tab extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();

    console.log('Clicked on tab:', this.props.title);
  }

  render() {
    return (
      <a
        className="flugleidir-tab"
        href={this.props.path}
        onClick={this.handleClick}
      >
        {this.props.title}
      </a>
    );
  }
}

Tab.propTypes = {
  path: PropTypes.string.isRequired,
  title: PropTypes.string,
};

Tab.defaultProps = {
  title: '',
};

export default Tab;
