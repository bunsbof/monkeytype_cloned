import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { useDispatch } from "react-redux";
import { updateWordInput } from "../app/main/word/wordSlice";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  const [compareValue, setcompareValue] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLanguageRightToLeft, setIsLanguageRightToLeft] = useState(false);
  const wordsRef = useRef(null);
  const inputRef = useRef(null);
  const beamRef = useRef(null);
  const charRef = useRef(null);

  const handleWordWrapperFocus = () => {
    inputRef.current.focus();
  };

  const handleInput = (event) => {
    const value = event.target.value;
    setInputValue(value);
  };

  const handleInputKeyDown = (event) => {
    if (inputValue === "" && event.key === " ") {
      event.preventDefault();
    } else if (inputValue && event.key === " ") {
      event.preventDefault();
      dispatch(updateWordInput({ wordIndex: activeIndex, input: inputValue }));
      // to be fixed
      setcompareValue(inputValue);
      setActiveIndex((index) => index + 1);
      setInputValue("");
    } else if (event.key === "Backspace") {
      const wordsList = Array.from(document.querySelectorAll("#words .word"));
      const previousWordIndex = activeIndex - 1;

      if (previousWordIndex >= 0) {
        const previousWord = wordsList[previousWordIndex];
        if (compareValue.length > previousWord.textContent.length) return;
        if (
          inputValue === "" &&
          compareValue &&
          previousWord.matches(".error")
        ) {
          const activeWord = wordsList[activeIndex];
          activeWord.classList.remove("error");
          setActiveIndex((ind) => Math.max(0, ind - 1));
          setInputValue(compareValue);
        }
      }
    }
  };

  useEffect(() => {
    if (wordsRef.current && wordsRef.current.children[activeIndex]) {
      wordsRef.current.children[activeIndex].classList.add("active");
      if (activeIndex > 0) {
        wordsRef.current.children[activeIndex - 1].classList.remove("active");
      }
    }
  }, [activeIndex, wordsRef]);

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
        inputValue,
        activeIndex,
        isLanguageRightToLeft,
        compareValue,
        wordsRef,
        inputRef,
        beamRef,
        charRef,
        setcompareValue,
        setIsLanguageRightToLeft,
        setInputValue,
        setActiveIndex,
        handleWordWrapperFocus,
        handleInputKeyDown,
        handleInput,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
