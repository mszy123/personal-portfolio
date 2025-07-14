import React from 'react';
import './Button.css';

const OutlinedButton = ({ children, ...props }) => (
  <button className="outlined-btn" {...props}>
    {children}
  </button>
);

export default OutlinedButton; 