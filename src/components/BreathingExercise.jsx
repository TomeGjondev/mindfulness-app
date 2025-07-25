import React from 'react';

const BreathingExercise = ({ onBack }) => {
  return (
    <div>
      <h2>Breathing Exercises</h2>
      <p>Exercise 1: Deep belly breathing</p>
      <p>Exercise 2: Box breathing</p>
      <p>Exercise 3: 4-7-8 breathing</p>
      <button onClick={onBack}>Back to Cards</button>
    </div>
  );
};

export default BreathingExercise;
