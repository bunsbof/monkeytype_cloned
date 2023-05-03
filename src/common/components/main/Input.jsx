import React, { useEffect, useRef, useState } from "react";
import { useStateContext } from "../../../contexts/ContextProvider";

const Input = () => {
  const {
    inputValue,
    inputRef,
    handleInput,
    handleInputKeyDown,
    wordsRef,
    previousState,
    compareValue,
  } = useStateContext();

  useEffect(() => {
    const handlePreviousDetect = () => {
      const activeWord = document.querySelector(".word.active");
      const previousWord = activeWord && activeWord.previousElementSibling;
      const previousWordText = previousWord?.textContent;

      if (
        previousWordText &&
        compareValue &&
        previousWordText !== compareValue
      ) {
        const hasIncorrectSpan = previousWord.querySelector("span.incorrect");
        const spans = previousWord.querySelectorAll("span");
        const hasSpanWithNoClass = Array.from(spans).some(
          (span) => !span.classList.length
        );

        if (hasIncorrectSpan || hasSpanWithNoClass) {
          previousWord.classList.add("error");
          //   console.log(hasIncorrectSpan, " ", hasSpanWithNoClass);
        } else if (!hasIncorrectSpan || !hasSpanWithNoClass) {
          previousWord.classList.remove("error");
        }
        if (previousWordText.length !== previousWordText.length) {
          previousWord.classList.add("error");
        }
      }
    };
    handlePreviousDetect();

    const observer = new MutationObserver(handlePreviousDetect);
    observer.observe(wordsRef.current, { attributes: true, childList: true });

    return () => {
      observer.disconnect(); // clean up observer
    };
  }, [compareValue]);

  return (
    <input
      value={inputValue}
      ref={inputRef}
      id="wordsInput"
      tabIndex="0"
      autoComplete="off"
      autoCapitalize="off"
      autoCorrect="off"
      data-gramm="false"
      data-gramm_editor="false"
      data-enable-grammarly="false"
      list="autocompleteOff"
      style={{ left: 0, top: "94px" }}
      onKeyDown={handleInputKeyDown}
      onChange={handleInput}
    />
  );
};

export default Input;
