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
  const [activeIndex, setActiveIndex] = useState(0);
  const [onActiveWord, setOnActiveWord] = useState(0);
  const wordsRef = useRef(null);
  const inputRef = useRef(null);
  const beamRef = useRef(null);

  const handleWordWrapperFocus = () => {
    inputRef.current.focus();
  };
  // const handleInput = (event) => {
  //   setInputValue(event.target.value);
  // };

  const handleInput = (event) => {
    const value = event.target.value;
    setInputValue(value);

    if (value.endsWith(" ")) {
      // The user has typed a complete word, so check if it matches the active word
      const words = wordsRef.current.children;
      const activeWord = words[activeIndex];
      const activeWordText = activeWord.textContent.trim();
      const isCorrect = value.trim() === activeWordText;

      // Update the active word's class based on whether it was typed correctly or not
      activeWord.className = `word ${isCorrect ? "correct" : "incorrect"}`;

      // Move on to the next word if this one was typed correctly
      if (isCorrect) {
        setActiveIndex((index) => index + 1);
        setInputValue("");
      }
    }
  };

  const handleInputKeyDown = (event) => {
    if (inputValue === "" && event.key === " ") {
      event.preventDefault();
    } else if (inputValue && event.key === " ") {
      event.preventDefault();
      setActiveIndex((index) => index + 1);
      setInputValue("");
      setOnActiveWord(0);
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
        onActiveWord,
        activeIndex,
        wordsRef,
        inputRef,
        beamRef,
        setInputValue,
        setActiveIndex,
        handleWordWrapperFocus,
        handleInputKeyDown,
        handleInput,
        setOnActiveWord,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
