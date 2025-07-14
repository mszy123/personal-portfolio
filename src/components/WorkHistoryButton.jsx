import React from 'react';
import './WorkHistoryButton.css';

const WorkHistoryButton = ({ logo, label, selected, onClick }) => {
  return (
    <button
      className={`work-history-btn${selected ? ' selected' : ''}`}
      onClick={onClick}
      type="button"
      aria-label={label}
    >
      <img
        src={logo}
        alt={label}
        className="work-history-btn-logo"
        style={{ filter: selected ? 'none' : 'grayscale(100%) brightness(0.8) opacity(0.6)' }}
      />
    </button>
  );
};

export default WorkHistoryButton; 