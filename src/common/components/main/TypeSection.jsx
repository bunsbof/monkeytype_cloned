import { useStateContext } from "../../../contexts/ContextProvider";
import Word from "./Word";
import Beam from "./Beam";
import Input from "./Input";
import { useSelector } from "react-redux";

function TypeSection() {
  const { wordsRef, handleWordWrapperFocus } = useStateContext();
  const words = useSelector((state) => state.main.words.value).getWords();

  return (
    <div id="typingTest" style={{ opacity: 1 }}>
      <Input />

      <div
        id="wordsWrapper"
        translate="no"
        style={{ height: "114px", overflow: "hidden" }}
      >
        <Beam />
        <div
          id="words"
          ref={wordsRef}
          onClick={handleWordWrapperFocus}
          style={{
            fontSize: "1.5rem",
            transition: "none 0s ease 0s",
            height: "152px",
            overflow: "hidden",
            width: "100%",
          }}
        >
          {words?.map((word, index) => (
            <Word key={index} word={word} wordActiveIndex={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TypeSection;
