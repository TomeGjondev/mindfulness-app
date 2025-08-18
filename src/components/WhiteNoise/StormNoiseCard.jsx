import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NoiseCard.css'


const StormNoiseCard = ({ onStartStorm }) => {
  return (
    <div className="noise-card">
      <h3 className="card-title">Thunder and Rain White Noise</h3>
      <p className="card-description">Soothe your senses with relaxing thunder sounds for better focus or sleep.</p>
      <button className="card-button" onClick={onStartStorm}>Start Now</button>
    </div>
  );
};

export default StormNoiseCard;
