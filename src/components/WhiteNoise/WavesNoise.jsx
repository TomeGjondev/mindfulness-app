import React from 'react';
import '../WhiteNoise.css';

const WavesNoise = ({ onBack }) => {
  return (
      <div className="audio-container">
    <div className='audioplayer'>
      <h1 className='ime'>Wave Sounds</h1>
    {/* Audio player */}
       <audio className='controls' controls loop>
  <source src={`${import.meta.env.BASE_URL}Sounds/waves.wav`} type="audio/wav" />
</audio>
      <button className='nazad1' onClick={onBack}>Back to White Noises</button>
    </div>
    </div>
  );
};

export default WavesNoise;
