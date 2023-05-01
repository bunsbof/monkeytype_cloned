import React, { useEffect, useState } from "react";
import { useStateContext } from "../../../contexts/ContextProvider";
import * as Misc from "../../../utils/misc";

const Beam = () => {
  const { beamRef, inputValue, isLanguageRightToLeft, wordsRef } =
    useStateContext();
  const [caretWidth, setCaretWidth] = useState(0);
  const [findActiveWord, setFindActiveWord] = useState(null);

  useEffect(() => {
    if (beamRef.current) {
      setCaretWidth(beamRef.current.offsetWidth);
    }
  }, []);

  useEffect(() => {
    const handleWordChange = () => {
      const newActiveWord = document.querySelector("#words .active");
      setFindActiveWord(newActiveWord);
    };

    handleWordChange(); // initialize active word on mount

    // listen for changes in active word
    const observer = new MutationObserver(handleWordChange);
    observer.observe(wordsRef.current, { attributes: true, childList: true });

    return () => {
      observer.disconnect(); // clean up observer
    };
  });

  const inputLen = inputValue.length;
  const currentLetterIndex = inputLen;

  // insert temporary character so the caret will work in zen mode
  //   const activeWordEmpty =
  //     document.querySelector("#words .active")?.children.length === 0;
  //   if (activeWordEmpty) {
  //     const letter = document.createElement("letter");
  //     letter.style.opacity = "0";
  //     letter.textContent = "_";
  //     document.querySelector("#words .active")?.appendChild(letter);
  //   }

  const currentWordNodeList = findActiveWord?.querySelectorAll("span");
  if (!currentWordNodeList) return null;
  //   if (currentWordNodeList) console.log(currentWordNodeList);

  const currentLetter = currentWordNodeList[currentLetterIndex];
  const previousLetter =
    currentWordNodeList[
      Math.min(currentLetterIndex - 1, currentWordNodeList.length - 1)
    ];

  // const currentLanguage = await Misc.getCurrentLanguage(Config.language);
  //   const currentLanguage = Misc.getCurrentLanguage(Config.language);

  const letterPosLeft =
    (currentLetter
      ? currentLetter.offsetLeft
      : previousLetter.offsetLeft + previousLetter.offsetWidth) +
    (!isLanguageRightToLeft
      ? 0
      : currentLetter
      ? currentLetter.offsetWidth
      : -previousLetter.offsetWidth);

  const letterPosTop = currentLetter
    ? currentLetter.offsetTop
    : previousLetter.offsetTop;

  const newTop =
    letterPosTop -
    1.5 *
      Misc.convertRemToPixel(1) *
      0.1; /* You'll need to define Config and Misc */
  let newLeft = letterPosLeft - caretWidth / 2;

  //   const wordsWrapperWidth =
  //     document.querySelector("#wordsWrapper")?.offsetWidth ?? 0;

  /* Config later
    if (Config.tapeMode === "letter") {
      newLeft = wordsWrapperWidth / 2 - caretWidth / 2;
    } else if (Config.tapeMode === "word") {
      if (inputLen === 0) {
        newLeft = wordsWrapperWidth / 2 - caretWidth / 2;
      } else {
        let inputWidth = 0;
        for (let i = 0; i < inputLen; i++) {
          inputWidth += currentWordNodeList[i]?.offsetWidth ?? 0;
        }
        newLeft = wordsWrapperWidth / 2 + inputWidth - caretWidth / 2;
      }
    }
    */
  const newWidth =
    (currentLetter ? currentLetter.offsetWidth : previousLetter.offsetWidth) +
    "px";

    let smoothlinescroll = document.querySelector("#words .smoothScroller")?.offsetHeight;
    if (smoothlinescroll === undefined) smoothlinescroll = 0;

  // const animation: { top: number; left: number; width: string } = {
  //   top: newTop - smoothlinescroll,
  //   left: newLeft,
  //   width: newWidth,
  // };

    const animation = {
      top: newTop - smoothlinescroll,
      left: newLeft,
      width: newWidth,
    };

    const handleAnimationEnd = () => {
      /* handle animation end */
    };

  return (
    <>
      <div
        id="paceCaret"
        className="hidden default"
        style={{ fontSize: "1.5rem" }}
      ></div>
      <div
        id="caret"
        ref={beamRef}
        className="default"
        style={{
          fontSize: "1.5rem",
          opacity: 1,
          display: "block",
        //   top: "0.6px",
        //   left: "5px",
        }}
      ></div>
    </>
  );
};

export default Beam;
