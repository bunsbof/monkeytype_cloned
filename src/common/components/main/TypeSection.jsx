import { useStateContext } from "../../../contexts/ContextProvider";
import Word from "./Word";
import Beam from "./Beam";
import Input from "./Input";
import { useSelector } from "react-redux";
import { useEffect, useRef } from "react";

function TypeSection() {
  const { wordsRef, handleWordWrapperFocus, scrollValuesRef } =
    useStateContext();

  const words = useSelector((state) => state.main.words.value).getWords();

  const scrollContainerRef = useRef(null);

  useEffect(() => {
    if (scrollValuesRef.current.length > 2 && scrollContainerRef.current) {
      const lineHeight = scrollValuesRef.current[1];
      const linesToScroll = 1;
      const scrollAmount = linesToScroll * lineHeight;

      scrollContainerRef.current.scrollTop += scrollAmount;
    }
  }, [scrollValuesRef.current.length]);

  return (
    <div id="typingTest" style={{ opacity: 1 }}>
      <Input />

      <div
        id="wordsWrapper"
        translate="no"
        style={{ height: "114px", overflow: "hidden", position: "relative" }}
      >
        <Beam />
        <div
          id="words"
          ref={(node) => {
            wordsRef.current = node;
            scrollContainerRef.current = node;
          }}
          onClick={handleWordWrapperFocus}
          style={{
            fontSize: "1.5rem",
            transition: "none 0s ease 0s",
            height: "152px",
            overflow: "hidden",
            width: "100%",
            paddingBottom: "100px",
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
