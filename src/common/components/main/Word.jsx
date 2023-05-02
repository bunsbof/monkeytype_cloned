import { useStateContext } from "../../../contexts/ContextProvider";
import Letter from "./Letter";

const Word = ({ word, wordActiveIndex }) => {
  const { activeIndex } = useStateContext();

  return (
    <div className={`word${wordActiveIndex === activeIndex ? " active" : ""}`}>
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
