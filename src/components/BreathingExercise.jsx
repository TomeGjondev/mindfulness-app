// BreathingExercise.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import './BreathingExercise.css';

const BreathingExercise = ({ onBack }) => {
  const [phase, setPhase] = useState("Inhale");
  const circles = Array.from({ length: 5 });

  useEffect(() => {
    const interval = setInterval(() => {
      setPhase((prev) => (prev === "Inhale" ? "Exhale" : "Inhale"));
    }, 4000); // matches animation timing
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">

      <div className="circles">
        {circles.map((_, i) => (
          <motion.div
  key={i}
  className="circle"
  animate={{ scale: [1, 1.3, 1] }}
  transition={{
    duration: 8,           // full inhale + exhale cycle
    repeat: Infinity,
    ease: "easeInOut",
    delay: i * 0.2,        // keeps the ripple effect
  }}
/>

        ))}
      </div>

      <div className="phase">{phase}</div>

      <button className="back-button" onClick={onBack}>
        Back to Cards
      </button>
    </div>
  );
};

export default BreathingExercise;
