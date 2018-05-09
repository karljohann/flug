import React from 'react';
import PropTypes from 'prop-types';
import './Modal.css';

function Modal(props) {
  // Render nothing if the "show" prop is false
  if (!props.show) {
    return null;
  }

  const dismissStyle = {
    border: 0,
    fontWeight: 300,
    cursor: 'pointer',
  };

  return (
    <div className="flugleidir-modal">
      <div className="flugleidir-modal-content">
        {props.children}
        <div className="flugleidir-modal-footer">
          <button
            onClick={props.onClose}
            style={dismissStyle}
          >
            Dismiss
          </button>
        </div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node,
};

Modal.defaultProps = {
  show: PropTypes.bool,
  children: PropTypes.node,
};

export default Modal;
