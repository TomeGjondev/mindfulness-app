import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MeditationCard.css'


const MeditationCard = () => {
  return (
    <div className="meditation-card">
      <h3 className="card-title">Guided Meditations</h3>
      <p className="card-description">Explore inner stillness and mental clarity with mindful meditation.</p>
      <button className="card-button">Start Now</button>
    </div>
  );
};

export default MeditationCard;
