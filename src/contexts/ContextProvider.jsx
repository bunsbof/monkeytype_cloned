import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { useSelector } from "react-redux";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const { activeWordIndex } = useSelector((state) => ({
    activeWordIndex: state.main.words.activeWordIndex,
  }));
  const [isLanguageRightToLeft, setIsLanguageRightToLeft] = useState(false);
  const wordsRef = useRef(null);
  const inputRef = useRef(null);
  const beamRef = useRef(null);
  const charRef = useRef(null);

  const handleWordWrapperFocus = () => {
    inputRef.current.focus();
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
        wordsRef,
        inputRef,
        beamRef,
        charRef,
        setIsLanguageRightToLeft,
        handleWordWrapperFocus,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
