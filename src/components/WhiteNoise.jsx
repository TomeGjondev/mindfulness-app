import React from 'react';

const WhiteNoise = ({ onBack }) => {
  return (
    <div>
      <h2>White Noise</h2>
      <p>Relax with soothing white noise sounds:</p>
      <ul>
        <li>Rain sounds</li>
        <li>Ocean waves</li>
        <li>Forest ambiance</li>
      </ul>
      <button onClick={onBack}>Back to Cards</button>
    </div>
  );
};

export default WhiteNoise;
