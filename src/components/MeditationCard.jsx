import React from 'react';
import './MeditationCard.css';

const MeditationCard = ({ onStartMeditation }) => {
  return (
    <div className="meditation-card">
      <h3 className="card-title">Guided Meditations</h3>
      <p className="card-description">Explore inner stillness and mental clarity with mindful meditation.</p>
      <button className="card-button" onClick={onStartMeditation}>Start Now</button>
    </div>
  );
};

export default MeditationCard;
