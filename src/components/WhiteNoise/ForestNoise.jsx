import React from 'react';
import '../WhiteNoise.css';

const ForestNoise = ({ onBack }) => {
  return (
    <div className="audio-container">
    <div className='audioplayer'>
      <h1 className='ime'>Forest Sounds</h1>

      {/* Audio player */}
      {/* Audio player */}
       <audio className='controls' controls loop>
  <source src={`${import.meta.env.BASE_URL}Sounds/forest.flac`} type="audio/flac" />
</audio>

      <button className='nazad1' onClick={onBack}>Back to White Noises</button>
    </div>
    </div>
  );
};

export default ForestNoise;
