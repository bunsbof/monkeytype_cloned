import { memo, useEffect, useRef, useState } from "react";
import { useStateContext } from "../../../contexts/ContextProvider";

const Word = memo(({ word, wordActiveIndex }) => {
  const charRefs = useRef([]);
  const [classNames, setClassNames] = useState([]);

  const { activeIndex, inputValue } = useStateContext();

  useEffect(() => {
    if (wordActiveIndex === activeIndex) {
      const newClassNames = Array(word.length).fill("");

      word.split("").forEach((char, index) => {
        const charRef = charRefs.current[index];
        if (charRef.parentElement.classList.contains("active")) {
          if (char === inputValue[index]) {
            newClassNames[index] = "correct";
          } else if (inputValue[index]) {
            newClassNames[index] = "incorrect";
          }
        }
      });

      setClassNames(newClassNames);
    }
  }, [activeIndex, inputValue, word, wordActiveIndex]);

  return (
    <div className={`word${wordActiveIndex === activeIndex ? " active" : ""}`}>
      {word.split("").map((char, index) => (
        <span
          key={index}
          ref={(el) => (charRefs.current[index] = el)}
          className={classNames[index]}
        >
          {char}
        </span>
      ))}
    </div>
  );
});

export default Word;
