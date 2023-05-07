import { memo, useEffect, useRef, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setKeyValue } from "../../../app/main/input/inputSlice";
import { selectInputByWordIndex } from "../../../app/main/word/wordSlice";

const Word = memo(({ word, wordActiveIndex }) => {
  const { input, activeWordIndex } = useSelector((state) => ({
    input: state.main.input.value,
    activeWordIndex: state.main.words.activeWordIndex,
  }));

  const dispatch = useDispatch();

  const charRefs = useRef([]);
  const [classNames, setClassNames] = useState([]);

  const passedErrors = useSelector(
    selectInputByWordIndex(wordActiveIndex)
  ).passedErrors;
  const isError = useMemo(() => passedErrors > 0, [passedErrors]);

  useEffect(() => {
    if (wordActiveIndex === activeWordIndex) {
      const newClassNames = Array(word.length).fill("");
      dispatch(setKeyValue(word));
      word.split("").forEach((char, index) => {
        const charRef = charRefs.current[index];
        if (charRef.parentElement.classList.contains("active")) {
          if (char === input[index]) {
            newClassNames[index] = "correct";
          } else if (input[index]) {
            newClassNames[index] = "incorrect";
          }
        }
      });

      setClassNames(newClassNames);
    }
  }, [activeWordIndex, input, word, wordActiveIndex, dispatch]);

  return (
    <div
      className={`word${wordActiveIndex === activeWordIndex ? " active" : ""}${
        isError ? " error" : ""
      }`}
    >
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
