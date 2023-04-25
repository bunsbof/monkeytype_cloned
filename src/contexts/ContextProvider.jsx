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
  const wordsRef = useRef(null);
  const inputRef = useRef(null);
  const beamRef = useRef(null);

  const handleWordWrapperFocus = () => {
    inputRef.current.focus();
  };
  const handleInput = (event) => {
    setInputValue(event.target.value);
  };

  // const handleInputKeyDown = (event) => {
  //   // Prevent the user from typing spaces if they haven't typed anything yet
  //   if (inputValue === "" && event.key === " ") {
  //     event.preventDefault();
  //   } else if (inputValue && event.key === " ") {
  //     event.preventDefault();
  //     const nextIndex = activeIndex + 1;
  //     setActiveIndex(nextIndex);
  //     setInputValue("");
  //     wordsRef.current.children[nextIndex - 1].classList.remove("active");
  //     wordsRef.current.children[nextIndex].classList.add("active");
  //   }
  // };

  const handleInputKeyDown = (event) => {
    if (inputValue === "" && event.key === " ") {
      event.preventDefault();
    } else if (inputValue && event.key === " ") {
      event.preventDefault();
      setActiveIndex((index) => index + 1);
      setInputValue("");
    }
  };

  // const handleInputKeyDown = (event) => {
  //   console.log(activeIndex); // log the current active index before updating
  //   if (inputValue === "" && event.key === " ") {
  //     event.preventDefault();
  //   } else if (inputValue && event.key === " ") {
  //     event.preventDefault();
  //     setActiveIndex((index) => index + 1);
  //     setInputValue("");
  //   }
  //   console.log(activeIndex); // log the updated active index
  // };

  // const handleInputKeyDown = (event) => {
  //   if (inputValue === "" && event.key === " ") {
  //     event.preventDefault();
  //   } else if (inputValue && event.key === " ") {
  //     event.preventDefault();
  //     setActiveIndex((index) => index + 1);
  //     setInputValue("");
  //     // console.log(activeIndex);
  //   }
  // };

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

  useEffect(() => {
    console.log(inputValue);
  }, [inputValue]);

  return (
    <StateContext.Provider
      value={{
        inputValue,
        wordsRef,
        activeIndex,
        inputRef,
        beamRef,
        setInputValue,
        setActiveIndex,
        handleWordWrapperFocus,
        // handleInputEvent,
        handleInputKeyDown,
        handleInput,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
