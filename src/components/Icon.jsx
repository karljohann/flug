import React from 'react';
import PropTypes from 'prop-types';

function Icon(props) {
  const iconStyle = {
    color: props.color,
    ...props.style,
  };

  return (
    <button
      className="flugleidir-icon"
      onClick={props.onClick}
    >
      <i
        className="material-icons"
        style={iconStyle}
      >
        {props.glyph}
      </i>
    </button>
  );
}

Icon.propTypes = {
  glyph: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  color: PropTypes.string,
  style: PropTypes.shape({}),
};

Icon.defaultProps = {
  // eslint-disable-next-line no-console
  onClick: () => { console.warn('Non-consequentialist icon click'); },
  color: 'black',
  style: {},
};

export default Icon;
