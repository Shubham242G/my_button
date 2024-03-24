import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ type, label, icon, display }) => {
  let buttonClass = '';
  switch (type) {
    case 'Default':
      buttonClass = 'default';
      break;
    case 'Neutral':
      buttonClass = 'neutral';
      break;
    case 'Reverse':
      buttonClass = 'reverse';
      break;
    default:
      buttonClass = 'default';
  }

  return (
    <button className={`button ${buttonClass}`}>
      {display === 'icon' || display === 'both' ? <span className="icon">{icon}</span> : null}
      {display === 'text' || display === 'both' ? <span className="label">{label}</span> : null}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(['Default', 'Neutral', 'Reverse']).isRequired,
  label: PropTypes.string.isRequired,
  icon: PropTypes.element,
  display: PropTypes.oneOf(['icon', 'text', 'both']).isRequired,
};

export default Button;