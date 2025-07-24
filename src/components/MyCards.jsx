import './MyCards.css';
import BreathingExerciseCard from './BreathingExerciseCard';
import MeditationCard from './MeditationCard';
import WhiteNoiseCard from './WhiteNoiseCard';

const MyCards = () => {
  return (
      <div className="thecards">
        <BreathingExerciseCard />
        <MeditationCard />
        <WhiteNoiseCard />
      </div>
  );
}

export default MyCards;
