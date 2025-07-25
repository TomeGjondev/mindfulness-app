import React, { useState } from 'react';
import './MyCards.css';
import BreathingExerciseCard from './BreathingExerciseCard';
import MeditationCard from './MeditationCard';
import WhiteNoiseCard from './WhiteNoiseCard';
import MeditationExercises from './MeditationExercises';
import BreathingExercises from './BreathingExercise';
import WhiteNoise  from './WhiteNoise';



const MyCards = () => {
  const [showMeditationExercises, setShowMeditationExercises] = useState(false);

  const handleStartMeditation = () => {
    setShowMeditationExercises(true);
  };

  const handleBack = () => {
    setShowMeditationExercises(false);
  };
  const [showBreathingExercises, setShowBreathingExercises] = useState(false);

  const handleStartBreathing = () => {
    setShowBreathingExercises(true);
  };

  const handleBack1 = () => {
    setShowBreathingExercises(false);
  };
  
  const [showWhiteNoise, setShowWhiteNoise] = useState(false);

  const handleStartWhiteNoise = () => {
    setShowWhiteNoise(true);
  };

  const handleBack2 = () => {
    setShowWhiteNoise(false);
  };

  return (
  <div className="thecards">
        {showMeditationExercises ? (
      <MeditationExercises onBack={handleBack} />
    ) : showBreathingExercises ? (
      <BreathingExercises onBack={handleBack1} />
    ) : showWhiteNoise ? (
      <WhiteNoise onBack={handleBack2} />
    ) : (
      <>
        <BreathingExerciseCard onStartBreathing={handleStartBreathing} />
        <MeditationCard onStartMeditation={handleStartMeditation} />
       <WhiteNoiseCard onStartWhiteNoise={handleStartWhiteNoise} />
      </>
    )}
  </div>
);
};

export default MyCards;
