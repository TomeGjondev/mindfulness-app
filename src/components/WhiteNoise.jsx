
import './WhiteNoise.css';
import React, { useState } from 'react';
import RainNoise from './WhiteNoise/RainNoise';
import RainNoiseCard from './WhiteNoise/RainNoiseCard';
import WavesNoise from './WhiteNoise/WavesNoise';
import WavesNoiseCard from './WhiteNoise/WavesNoiseCard';
import ForestNoise from './WhiteNoise/ForestNoise';
import ForestNoiseCard  from './WhiteNoise/ForestNoiseCard';
import StormNoise from './WhiteNoise/StormNoise';
import StormNoiseCard from './WhiteNoise/StormNoiseCard';


const WhiteNoise = ({ onBack }) => {
  const [showRain, setShowRain] = useState(false);
  const [showWaves, setShowWaves] = useState(false);
  const [showForest, setShowForest] = useState(false);
  const [showStorm, setShowStorm] = useState(false);

  const handleStartRain = () => setShowRain(true);
  const handleBackRain = () => setShowRain(false);

  const handleStartWaves = () => setShowWaves(true);
  const handleBackWaves = () => setShowWaves(false);

  const handleStartForest = () => setShowForest(true);
  const handleBackForest = () => setShowForest(false);

  const handleStartStorm = () => setShowStorm(true);
  const handleBackStorm = () => setShowStorm(false);

  return (
    <div>
      <div className="thecards1">
        {showRain ? (
          <RainNoise onBack={handleBackRain} />
        ) : showWaves ? (
          <WavesNoise onBack={handleBackWaves} />
        ) : showForest ? (
          <ForestNoise onBack={handleBackForest} />
        ) : showStorm ? (
          <StormNoise onBack={handleBackStorm} />
        ) : (
          <>
            <RainNoiseCard onStartRain={handleStartRain} />
            <WavesNoiseCard onStartWaves={handleStartWaves} />
            <ForestNoiseCard onStartForest={handleStartForest} />
            <StormNoiseCard onStartStorm={handleStartStorm} />
          </>
        )}
      </div>
      <button className='nazad' onClick={onBack}>Back to Cards</button>
    </div>
  );
};


export default WhiteNoise;
