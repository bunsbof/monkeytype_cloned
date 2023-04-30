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
  const charRef = useRef(null);

  const handleWordWrapperFocus = () => {
    inputRef.current.focus();
  };

  const handleInput = (event) => {
    const value = event.target.value;
    setInputValue(value);
    setOnActiveWord(value.length);
    // console.log(value.trim().split(" ").length - 1);
    // setOnActiveWord(value.trim().split(" ").length - 1);
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

  // useEffect(() => {
  //   const activeElement = document.querySelector(".word.active");
  //   const activeSpan = activeElement.querySelectorAll("span")[onActiveWord];
  //   if (activeSpan && beamRef.current) {
  //     const spanRect = activeSpan.getBoundingClientRect();
  //     const beamRect = beamRef.current.getBoundingClientRect();
  //     const top = spanRect.top - beamRect.height - 2; // adjust as needed
  //     const left = spanRect.left + window.pageXOffset;
  //     beamRef.current.style.top = `${top}px`;
  //     beamRef.current.style.left = `${left}px`;
  //   }
  // }, [onActiveWord]);

  useEffect(() => {
    const activeElement = document.querySelector(".word.active");
    const activeSpan = activeElement.querySelectorAll("span")[onActiveWord];
    if (activeSpan && beamRef.current) {
      const spanRect = activeSpan.getBoundingClientRect();
      const beamRect = beamRef.current.getBoundingClientRect();
      const spanWidth = spanRect.width;
      const newTop = `${spanRect.top - beamRect.top}px`;
      const newLeft = `${spanRect.left - beamRect.left + spanWidth / 2}px`;
      beamRef.current.style.top = newTop;
      beamRef.current.style.left = newLeft;
    }
  }, [inputValue, onActiveWord]);

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
        charRef,
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
