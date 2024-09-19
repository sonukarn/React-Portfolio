import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const TypingEffect = ({ words, speed = 100, pauseTime = 2000 }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isBlinking, setIsBlinking] = useState(true);
  //   const [index, setIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  useEffect(() => {
    if (currentCharIndex < words[currentWordIndex].length) {
      const typingTimeout = setTimeout(() => {
        setDisplayedText(
          (prev) => prev + words[currentWordIndex][currentCharIndex]
        );
        setCurrentCharIndex(currentCharIndex + 1);
      }, speed);
      return () => clearTimeout(typingTimeout);
    } else {
      const pauseTimeout = setTimeout(() => {
        setDisplayedText("");
        setCurrentCharIndex(0);
        setCurrentWordIndex((prevIndex) =>
          prevIndex === words.length - 1 ? 0 : prevIndex + 1
        );
      }, pauseTime);
      return () => clearTimeout(pauseTimeout);
    }
  }, [currentCharIndex, currentWordIndex, words, speed, pauseTime]);
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking((prev) => !prev);
    }, 500);
    return () => clearInterval(blinkInterval);
  }, []);
  return (
    <span>
      {displayedText}
      <span className={`cursor ${isBlinking ? "opacity-100" : "opacity-0"}`}>
        |
      </span>
    </span>
  );
};

export default TypingEffect;
