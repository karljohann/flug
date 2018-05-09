import React from 'react';
import PropTypes from 'prop-types';

function Pill(props) {
  const smallPill = (props.small);
  const pillStyle = {
    fontSize: (smallPill) ? '11px' : '16px',
    lineHeight: (smallPill) ? '28px' : '38px',
    padding: (smallPill) ? '0 12px' : '0 38px',
    ...props.style,
  };

  return (
    <button
      className="flugleidir-pill"
      style={pillStyle}
      onClick={props.onClick}
    >
      <span>{props.title}</span>
    </button>
  );
}

Pill.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  style: PropTypes.shape({}),
  small: PropTypes.bool,
};

Pill.defaultProps = {
  // eslint-disable-next-line no-console
  onClick: () => { console.warn('Non-consequentialist pill click'); },
  style: {},
  small: false,
};

export default Pill;
