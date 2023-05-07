import React, { useEffect, useRef, useState } from "react";
import { useStateContext } from "../../../contexts/ContextProvider";
import { useDispatch, useSelector } from "react-redux";
import {
  resetInputValue,
  setInputValue,
} from "../../../app/main/input/inputSlice";
import {
  activeWordIndexInc,
  updateWordInput,
} from "../../../app/main/word/wordSlice";

const Input = () => {
  const { input, key, activeWordIndex, errors } = useSelector((state) => ({
    input: state.main.input.value,
    key: state.main.input.key,
    activeWordIndex: state.main.words.activeWordIndex,
    errors: state.main.input.errors,
  }));

  const dispatch = useDispatch();

  const { inputRef, wordsRef } = useStateContext();

  const checkErrors = (word, userInput) => {
    const wordArray = word.split("");
    const userInputArray = userInput.split("");
    let errors = 0;
    for (let i = 0; i < wordArray.length; i++) {
      if (userInputArray[i] !== wordArray[i]) {
        errors++;
      }
    }

    return errors;
  };

  const handleInputValue = (event) => {
    const value = event.target.value;
    dispatch(setInputValue(value));
  };

  const handleInputKeyDown = (event) => {
    if (input === "" && event.key === " ") {
      event.preventDefault();
    } else if (input && event.key === " ") {
      event.preventDefault();

      dispatch(
        updateWordInput({
          word: key,
          wordIndex: activeWordIndex,
          input: input,
          errors: checkErrors(key, input),
        })
      );
      dispatch(activeWordIndexInc());
      dispatch(resetInputValue());
    }
    // else if (event.key === "Backspace") {
    //   const wordsList = Array.from(document.querySelectorAll("#words .word"));
    //   const previousWordIndex = activeWordIndex - 1;

    //   if (previousWordIndex >= 0) {
    //     const previousWord = wordsList[previousWordIndex];
    //     if (input.length > previousWord.textContent.length) return;
    //     if (
    //       inputValue === "" &&
    //       input &&
    //       previousWord.matches(".error")
    //     ) {
    //       const activeWord = wordsList[activeWordIndex];
    //       activeWord.classList.remove("error");
    //       setActiveIndex((ind) => Math.max(0, ind - 1));
    //       setInputValue(input);
    //     }
    //   }
    // }
  };

  useEffect(() => {
    const handleInput = () => {
      const activeWord = document.querySelector("#words .active");
      const activeWordText = activeWord && activeWord.textContent;
      const previousWord = activeWord && activeWord.previousElementSibling;
      const previousWordText = previousWord?.textContent;

      // Handle extra input
      // if (
      //   input &&
      //   activeWordText &&
      //   input !== activeWordText &&
      //   input.length > activeWordText.length &&
      //   !activeWord.classList.contains("error")
      // ) {
      //   activeWord.classList.add("error");
      // }

      // Handle incorrect input
      // if (
      //   previousWordText &&
      //   input &&
      //   previousWordText !== input
      // ) {
      //   const hasIncorrectSpan = previousWord.querySelector("span.incorrect");
      //   const spans = previousWord.querySelectorAll("span");
      //   const hasSpanWithNoClass = Array.from(spans).some(
      //     (span) => !span.classList.length
      //   );

      //   if (
      //     hasIncorrectSpan ||
      //     hasSpanWithNoClass ||
      //     input.length > previousWordText.length
      //   ) {
      //     previousWord.classList.add("error");
      //   } else {
      //     previousWord.classList.remove("error");
      //   }
      // }
    };

    handleInput();

    const observer = new MutationObserver(handleInput);
    observer.observe(wordsRef.current, { attributes: true, childList: true });

    return () => {
      observer.disconnect(); // clean up observer
    };
  }, [input]);

  return (
    <input
      value={input}
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
      onChange={handleInputValue}
    />
  );
};

export default Input;
