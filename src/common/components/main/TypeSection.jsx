import { useStateContext } from "../../../contexts/ContextProvider";
import Word from "./Word";
import Beam from "./Beam";
import Input from "./Input";
import { useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";

function TypeSection() {
  const { wordsRef, handleWordWrapperFocus } = useStateContext();
  const { activeWordIndex } = useSelector((state) => ({
    activeWordIndex: state.main.words.activeWordIndex,
  }));
  const words = useSelector((state) => state.main.words.value).getWords();
  const wordsContainerRef = useRef(null);
  const [scrollEffectHeight, setScrollEffectHeight] = useState(0);

  useEffect(() => {
    if (wordsContainerRef.current) {
      setScrollEffectHeight(wordsContainerRef.current.scrollHeight);
    }
    // if(scrollEffectHeight !== undefined) console.log(scrollEffectHeight)
  }, [wordsContainerRef.current?.scrollHeight]);

  useEffect(() => {
    if (wordsContainerRef.current) {
      const activeWordElement =
        wordsContainerRef.current.querySelector(".active");
      if (activeWordElement) {
        activeWordElement.scrollIntoView({
          behavior: "instant",
          block: "nearest",
        });
      }
    }
  }, [activeWordIndex]);

  useEffect(() => {
    if (wordsContainerRef.current) {
      const secondLineWords = wordsContainerRef.current.querySelectorAll(
        ".word:nth-child(n+4):nth-child(-n+6)"
      );
      if (secondLineWords.length === 0) {
        const nextLineWord =
          wordsContainerRef.current.querySelector(".word:nth-child(7)");
        if (nextLineWord) {
          const wrapperHeight = wordsContainerRef.current.clientHeight;
          const lineHeight = nextLineWord.offsetHeight;
          const scrollAmount =
            Math.ceil(wrapperHeight / lineHeight) * lineHeight;
          wordsContainerRef.current.scrollTo({
            top: wordsContainerRef.current.scrollTop + scrollAmount,
            behavior: "instant",
          });
        }
      }
    }
  }, [activeWordIndex]);

  return (
    <div id="typingTest" style={{ opacity: 1 }}>
      <Input />

      <div
        ref={wordsContainerRef}
        id="wordsWrapper"
        translate="no"
        style={{ height: "114px", overflow: "hidden" }}
      >
        <Beam scrollEffectHeight={scrollEffectHeight} />
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
