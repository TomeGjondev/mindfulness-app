import React from 'react';
import '../WhiteNoise.css';

const StormNoise = ({ onBack }) => {
  return (
      <div className="audio-container">
    <div className='audioplayer'>
      <h1 className='ime'>Storm Sounds</h1>

      {/* Audio player */}
     <audio className='controls' controls loop>
  <source src={`${import.meta.env.BASE_URL}Sounds/storm.mp3`} type="audio/mp3" />
</audio>


      <button className='nazad1' onClick={onBack}>Back to White Noises</button>
    </div>
    </div>
  );
};

export default StormNoise;
