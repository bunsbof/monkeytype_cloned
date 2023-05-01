import { memo, useEffect, useState } from "react";
import { useStateContext } from "../../../contexts/ContextProvider";
import Word from "./Word";
import Beam from "./Beam";

const words = [
  "take",
  "fashion",
  "leather",
  "forensic",
  "marble",
  "divide",
  "unending",
  "banding",
  "broad",
  "subjugate",
  "determine",
  "inflate",
  "forthcoming",
  "climate",
  "make",
  "drunkenness",
  "yoke",
  "glumness",
  "paw",
  "predict",
];

function TypeSection() {
  const {
    inputRef,
    inputValue,
    wordsRef,
    handleInputKeyDown,
    handleInput,
    handleWordWrapperFocus,
  } = useStateContext();

  return (
    <div id="typingTest" style={{ opacity: 1 }}>
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
          {words.map((word, index) => (
            <Word key={index} word={word} wordActiveIndex={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default memo(TypeSection);
