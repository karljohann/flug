import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Tab extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();

    const { title, path } = this.props;
    console.log('Clicked on tab:', title); // eslint-disable-line no-console
    this.props.onClick(path);
  }

  render() {
    return (
      <a
        className={`flugleidir-tab${this.props.active ? ' active' : ''}`}
        href={this.props.path}
        onClick={this.handleClick}
      >
        {this.props.title}
      </a>
    );
  }
}

Tab.propTypes = {
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  title: PropTypes.string,
};

Tab.defaultProps = {
  title: '',
};

export default Tab;
