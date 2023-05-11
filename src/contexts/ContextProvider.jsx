import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { useSelector } from "react-redux";

import * as Misc from "../utils/misc";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const { input, activeWordIndex, caretWidth } = useSelector((state) => ({
    input: state.main.input.value,
    activeWordIndex: state.main.words.activeWordIndex,
    caretWidth: state.main.beam.caretWidth,
  }));
  const [isLanguageRightToLeft, setIsLanguageRightToLeft] = useState(false);
  const [animationObj, setAnimationObj] = useState({
    top: 0,
    left: 0,
    width: 0,
  });
  const wordsRef = useRef(null);
  const inputRef = useRef(null);
  const beamRef = useRef(null);
  const charRef = useRef(null);

  const handleWordWrapperFocus = () => {
    inputRef.current.focus();
  };

  const handleWordChange = (activeELement) => {
    if (!activeELement) return null; //

    const currentLetter = activeELement.childNodes[input.length];
    const previousLetter =
      activeELement.childNodes[
        Math.min(input.length - 1, activeELement.childNodes.length - 1)
      ];

    const letterPosLeft =
      (currentLetter
        ? currentLetter.offsetLeft
        : previousLetter.offsetLeft + previousLetter.offsetWidth) +
      (isLanguageRightToLeft
        ? currentLetter
          ? currentLetter.offsetWidth
          : -previousLetter.offsetWidth
        : 0);

    const letterPosTop = currentLetter
      ? currentLetter.offsetTop
      : previousLetter.offsetTop;

    const newTop =
      letterPosTop -
      4 * Misc.convertRemToPixel(1) * 0.1; /* Sneed to define Config and Misc */
    let newLeft = letterPosLeft - caretWidth / 2;

    const newWidth =
      (currentLetter ? currentLetter.offsetWidth : previousLetter.offsetWidth) *
        0.2 +
      "px";
    setAnimationObj({ top: newTop, left: newLeft, width: newWidth });
  };
  useEffect(() => {
    if (wordsRef.current && wordsRef.current.children[activeWordIndex]) {
      wordsRef.current.children[activeWordIndex].classList.add("active");
      if (activeWordIndex > 0) {
        wordsRef.current.children[activeWordIndex - 1].classList.remove(
          "active"
        );
      }
    }
  }, [activeWordIndex, wordsRef]);

  useEffect(() => {
    document.getElementById("wordsInput").focus();

    function handleClickOutside(event) {
      if (wordsRef.current && wordsRef.current.contains(event.target)) {
        if (beamRef.current.classList.contains("hidden")) {
          beamRef.current.classList.remove("hidden");
        }
      } else {
        beamRef.current.classList.add("hidden");
      }
    }

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [wordsRef]);

  return (
    <StateContext.Provider
      value={{
        activeWordIndex,
        isLanguageRightToLeft,
        animationObj,
        wordsRef,
        inputRef,
        beamRef,
        charRef,
        setAnimationObj,
        setIsLanguageRightToLeft,
        handleWordWrapperFocus,
        handleWordChange,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
