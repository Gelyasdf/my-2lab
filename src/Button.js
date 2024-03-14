import React from 'react';
import './Button.css';

function Button({ text, onClick }) {
  return <button className="button-custom" onClick={onClick}>{text}</button>;
}

export default Button;