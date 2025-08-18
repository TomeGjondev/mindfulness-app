import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NoiseCard.css'


const WavesNoiseCard = ({ onStartWaves }) => {
  return (
    <div className="noise-card">
      <h3 className="card-title">Waves White Noise</h3>
      <p className="card-description">Soothe your senses with relaxing wave sounds for better focus or sleep.</p>
      <button className="card-button" onClick={onStartWaves}>Start Now</button>
    </div>
  );s
};

export default WavesNoiseCard;
