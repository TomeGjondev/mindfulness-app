import React from 'react';
import { useNavigate } from 'react-router-dom';
import './WhiteNoiseCard.css'


const WhiteNoiseCard = ({ onStartWhiteNoise }) => {
  return (
    <div className="white-noise-card">
      <h3 className="card-title">White Noise</h3>
      <p className="card-description">Soothe your senses with relaxing white noise for better focus or sleep.</p>
      <button className="card-button" onClick={onStartWhiteNoise}>Start Now</button>
    </div>
  );
};

export default WhiteNoiseCard;
