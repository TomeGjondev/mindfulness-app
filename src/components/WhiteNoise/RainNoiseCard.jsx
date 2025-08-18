import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NoiseCard.css'


const RainNoiseCard = ({ onStartRain }) => {
  return (
    <div className="noise-card">
      <h3 className="card-title">Rain White Noise</h3>
      <p className="card-description">Soothe your senses with relaxing rain sounds for better focus or sleep.</p>
      <button className="card-button" onClick={onStartRain}>Start Now</button>
    </div>
  );
};

export default RainNoiseCard;
