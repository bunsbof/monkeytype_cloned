import { useStateContext } from "../../contexts/ContextProvider";

const Word = ({ word, wordActiveIndex }) => {
  const { activeIndex, inputValue } = useStateContext();

  return (
    <div className={`word${wordActiveIndex === activeIndex ? " active" : ""}`}>
      {word.split("").map((char, index) => (
        <span key={index}>{char}</span>
      ))}
    </div>
  );
};

export default Word;
