import { useEffect, useRef } from "react";
import { useStateContext } from "../../../contexts/ContextProvider";
import Letter from "./Letter";

const Word = ({ word, wordActiveIndex }) => {
  const { activeIndex } = useStateContext();
  const wordRef = useRef(null);
  useEffect(() => {
    if (wordActiveIndex === activeIndex) {
      const wordRect = wordRef.current.getBoundingClientRect();
      console.log(wordRect);
      const beamLeft = wordRect.left;
      const beamTop = wordRect.top + window.pageYOffset;
    }
  }, [wordActiveIndex]);

  return (
    <div ref={wordRef} className={`word${wordActiveIndex === activeIndex ? " active" : ""}`}>
      {word.split("").map((char, index) => (
        <Letter
          key={index}
          char={char}
          isActive={wordActiveIndex === activeIndex}
          letterIndex={index}
        />
      ))}
    </div>
  );
};

export default Word;
