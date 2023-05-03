import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
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
      setcompareValue(inputValue);
      setActiveIndex((index) => index + 1);
      setInputValue("");
    } else if (event.key === "Backspace") {
      const wordsContainer = document.querySelector("#words");
      const wordsList = Array.from(wordsContainer.querySelectorAll(".word"));
      const activeWord = wordsList[activeIndex];

      const previousWord = wordsList[activeIndex <= 0 ? 0 : activeIndex - 1];
      if (
        inputValue === "" &&
        compareValue &&
        previousWord.classList.contains("error")
      ) {
        activeWord.classList.remove("error");
        setActiveIndex((ind) => {
          if (ind <= 0) return 0;
          else return --ind;
        });
        setInputValue(compareValue);
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
