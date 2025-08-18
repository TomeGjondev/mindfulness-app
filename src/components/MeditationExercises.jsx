import React from 'react';
import './MyCards.css';

const MeditationExercises = ({ onBack }) => {
  return (
    <div className="audio-container1">
    <div className='audioplayer1'>
      <h1 className='ime1'>Meditation</h1>
        {/* Audio player */}
       <audio className='controls1' controls loop>
  <source src={`${import.meta.env.BASE_URL}Sounds/meditation1.mp3`} type="audio/mp3" />
</audio>


      <button className='nazad1' onClick={onBack}>Back to Cards</button>
    </div>
    </div>
  );
};

export default MeditationExercises;
