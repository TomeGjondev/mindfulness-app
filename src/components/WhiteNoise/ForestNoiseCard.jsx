import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NoiseCard.css'


const ForestNoiseCard = ({ onStartForest }) => {
  return (
    <div className="noise-card">
      <h3 className="card-title">Forest White Noise</h3>
      <p className="card-description">Soothe your senses with relaxing forest sounds for better focus or sleep.</p>
      <button className="card-button" onClick={onStartForest}>Start Now</button>
    </div>
  );
};

export default ForestNoiseCard;
