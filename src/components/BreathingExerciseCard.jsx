import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BreathingExerciseCard.css'


const BreathingExerciseCard = () => {
  return (
    <div className="breathing-exercise-card">
      <h3 className="card-title">Breathing Exercises</h3>
      <p className="card-description">Calm your mind with guided breathing techniques.</p>
      <button className="card-button">Start Now</button>
    </div>
  );
};

export default BreathingExerciseCard;
