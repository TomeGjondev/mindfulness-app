import React from 'react';

const MeditationExercises = ({ onBack }) => {
  return (
    <div>
      <h2>Meditation Exercises</h2>
      {/* Your actual meditation exercises go here */}
      <p>Exercise 1: Mindful breathing</p>
      <p>Exercise 2: Body scan</p>
      <p>Exercise 3: Loving-kindness meditation</p>

      <button onClick={onBack}>Back to Cards</button>
    </div>
  );
};

export default MeditationExercises;
