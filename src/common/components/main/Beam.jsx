import React, { useEffect, useRef, useState } from "react";
import { useStateContext } from "../../../contexts/ContextProvider";
import * as Misc from "../../../utils/misc";
import { useSelector } from "react-redux";

const Beam = () => {
  const { input } = useSelector((state) => ({
    input: state.main.input.value,
  }));
  const { beamRef, isLanguageRightToLeft, wordsRef } = useStateContext();
  const [caretWidth, setCaretWidth] = useState(0);
  const animationRef = useRef(null);
  const [animationObj, setAnimationObj] = useState({
    top: 0,
    left: 0,
    width: 0,
  });

  useEffect(() => {
    if (beamRef.current) {
      setCaretWidth(beamRef.current.offsetWidth);
    }
  }, []);

  useEffect(() => {
    const handleWordChange = () => {
      const newActiveWord = document.querySelector("#words .active");

      const inputLen = input.length;
      const currentLetterIndex = inputLen;

      const currentWordNodeList = newActiveWord?.querySelectorAll("span");
      // if (currentWordNodeList) console.log(currentWordNodeList);
      if (!currentWordNodeList) return null;

      const currentLetter = currentWordNodeList[currentLetterIndex];
      const previousLetter =
        currentWordNodeList[
          Math.min(currentLetterIndex - 1, currentWordNodeList.length - 1)
        ];

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
        4 *
          Misc.convertRemToPixel(1) *
          0.1; /* You'll need to define Config and Misc */
      let newLeft = letterPosLeft - caretWidth / 2;

      const newWidth =
        (currentLetter
          ? currentLetter.offsetWidth
          : previousLetter.offsetWidth) *
          0.2 +
        "px";

      let smoothlinescroll = document.querySelector(
        "#words .smoothScroller"
      )?.offsetHeight;
      if (!smoothlinescroll) smoothlinescroll = 0;
      setAnimationObj({ top: newTop, left: newLeft, width: newWidth });
    };

    handleWordChange(); // initialize active word on mount

    // listen for changes in active word
    const observer = new MutationObserver(handleWordChange);
    observer.observe(wordsRef.current, { attributes: true, childList: true });

    return () => {
      observer.disconnect(); // clean up observer
    };
  }, [input]);

  const handleAnimationEnd = () => {
    /* handle animation end */
  };

  // cancel any ongoing animation before starting a new one
  cancelAnimationFrame(animationRef.current);

  animationRef.current = requestAnimationFrame(() => {
    const caret = document.querySelector("#caret");

    if (caret) {
      // apply the animation to the caret
      caret
        .animate(
          {
            top: `${animationObj.top}px`,
            left: `${animationObj.left}px`,
            width: animationObj.width,
          },
          {
            duration: 100,
            fill: "forwards",
          }
        )
        .addEventListener("finish", handleAnimationEnd);
    }
  });

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
          animationName: "beamAnimation",
          animationDuration: "0.3s",
          animationFillMode: "forwards",
          fontSize: "1.5rem",
          opacity: 1,
          display: "block",
          top: `${animationObj.top}px`,
          left: `${animationObj.left}px`,
          width: animationObj.width,
          transition: "none",
        }}
        onAnimationEnd={handleAnimationEnd}
      ></div>
    </>
  );
};

export default Beam;
