"use client";

import { useEffect, useState } from "react";

interface TypewriterProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenTexts?: number;
}

export function Typewriter({
  texts,
  typingSpeed = 50,
  deletingSpeed = 30,
  delayBetweenTexts = 2000,
}: TypewriterProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    const fullText = texts[currentTextIndex];

    if (isDeleting) {
      timer = setTimeout(() => {
        setCurrentText((prev) => prev.slice(0, -1));
        if (currentText.length === 0) {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }
      }, deletingSpeed);
    } else {
      timer = setTimeout(() => {
        setCurrentText(fullText.slice(0, currentText.length + 1));
        if (currentText.length === fullText.length) {
          timer = setTimeout(() => {
            setIsDeleting(true);
          }, delayBetweenTexts);
        }
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [
    currentText,
    isDeleting,
    currentTextIndex,
    texts,
    typingSpeed,
    deletingSpeed,
    delayBetweenTexts,
  ]);

  return (
    <span className="inline-block">
      {currentText}
      <span className="animate-pulse">_</span>
    </span>
  );
}
