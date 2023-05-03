import React, { useEffect, useRef, useState } from "react";
import { useStateContext } from "../../../contexts/ContextProvider";

const Input = () => {
  const {
    inputValue,
    inputRef,
    handleInput,
    handleInputKeyDown,
    wordsRef,
    compareValue,
  } = useStateContext();

  useEffect(() => {
    const handleInput = () => {
      const activeWord = document.querySelector("#words .active");
      const activeWordText = activeWord && activeWord.textContent;
      const previousWord = activeWord && activeWord.previousElementSibling;
      const previousWordText = previousWord?.textContent;

      // Handle extra input
      if (
        inputValue &&
        activeWordText &&
        inputValue !== activeWordText &&
        inputValue.length > activeWordText.length &&
        !activeWord.classList.contains("error")
      ) {
        activeWord.classList.add("error");
      }

      // Handle incorrect input
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

        if (
          hasIncorrectSpan ||
          hasSpanWithNoClass ||
          compareValue.length > previousWordText.length
        ) {
          previousWord.classList.add("error");
        } else {
          previousWord.classList.remove("error");
        }
      }
    };

    handleInput();

    const observer = new MutationObserver(handleInput);
    observer.observe(wordsRef.current, { attributes: true, childList: true });

    return () => {
      observer.disconnect(); // clean up observer
    };
  }, [inputValue, compareValue]);

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
