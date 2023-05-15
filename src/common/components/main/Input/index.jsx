import React, { useEffect, useRef, useState } from "react";
import { useStateContext } from "../../../../contexts/ContextProvider";
import { useDispatch, useSelector } from "react-redux";
import {
  resetInputValue,
  setInputValue,
} from "../../../../app/main/input/inputSlice";
import {
  activeWordIndexDec,
  activeWordIndexInc,
  selectInputByWordIndex,
  updateWordInput,
} from "../../../../app/main/word/wordSlice";

const Input = () => {
  const { input, key, activeWordIndex } = useSelector((state) => ({
    input: state.main.input.value,
    key: state.main.input.key,
    activeWordIndex: state.main.words.activeWordIndex,
    errors: state.main.input.errors,
  }));

  const { passedInput, passedKey, passedErrors } = useSelector(
    selectInputByWordIndex(activeWordIndex - 1)
  );

  const dispatch = useDispatch();

  const { inputRef } = useStateContext();

  const checkErrors = (word, userInput) => {
    const wordArray = word.split("");
    const userInputArray = userInput.split("");
    let errors = 0;
    const length = Math.min(wordArray.length, userInputArray.length);

    for (let i = 0; i < length; i++) {
      if (userInputArray[i] !== wordArray[i]) {
        errors++;
      }
    }

    if (wordArray.length < userInputArray.length) {
      errors += userInputArray.length - wordArray.length;
    } else if (wordArray.length > userInputArray.length) {
      errors += wordArray.length - userInputArray.length;
    }

    return errors;
  };

  const handleInputValue = (event) => {
    const value = event.target.value.trim();
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
    } else if (
      event.key === "Backspace" &&
      !input &&
      activeWordIndex > 0 &&
      passedErrors > 0
    ) {
      dispatch(activeWordIndexDec());
      dispatch(setInputValue(passedInput + " "));
    } else if (event.key === "Delete") event.preventDefault();
  };

  // useEffect(() => {
  //   const handleInput = () => {
  //     const activeWord = document.querySelector("#words .active");
  //     const activeWordText = activeWord && activeWord.textContent;
  //     const previousWord = activeWord && activeWord.previousElementSibling;
  //     const previousWordText = previousWord?.textContent;

  //     Handle extra input
  //     if (
  //       input &&
  //       activeWordText &&
  //       input !== activeWordText &&
  //       input.length > activeWordText.length &&
  //       !activeWord.classList.contains("error")
  //     ) {
  //       activeWord.classList.add("error");
  //     }

  //     Handle incorrect input
  //     if (
  //       previousWordText &&
  //       input &&
  //       previousWordText !== input
  //     ) {
  //       const hasIncorrectSpan = previousWord.querySelector("span.incorrect");
  //       const spans = previousWord.querySelectorAll("span");
  //       const hasSpanWithNoClass = Array.from(spans).some(
  //         (span) => !span.classList.length
  //       );

  //       if (
  //         hasIncorrectSpan ||
  //         hasSpanWithNoClass ||
  //         input.length > previousWordText.length
  //       ) {
  //         previousWord.classList.add("error");
  //       } else {
  //         previousWord.classList.remove("error");
  //       }
  //     }
  //   };

  //   handleInput();

  //   const observer = new MutationObserver(handleInput);
  //   observer.observe(wordsRef.current, { attributes: true, childList: true });

  //   return () => {
  //     observer.disconnect(); // clean up observer
  //   };
  // }, [input]);

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
