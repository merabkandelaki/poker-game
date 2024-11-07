import React from 'react';
import '../styles/Button.less';

const Button = ({ text }) => (
  <div
    className={`cta-button ${
      text === 'cancelled' ? 'cta-button--cancelled' : ''
    }`}
  >
    <span>{text}</span>
  </div>
);

export default Button;
