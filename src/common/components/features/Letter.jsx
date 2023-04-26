import { memo, useEffect, useRef, useState } from "react";
import { useStateContext } from "../../../contexts/ContextProvider";

const Letter = ({ char, isActive, letterIndex }) => {
  const charRef = useRef(null);
  const [className, setClassName] = useState("");
  const { inputValue } = useStateContext();

  useEffect(() => {
    if (
      charRef.current &&
      isActive &&
      charRef.current.parentElement.classList.contains("active")
    ) {
      // compare the current character with the input value
      if (char === inputValue[letterIndex]) {
        setClassName("correct");
      } else if (inputValue[letterIndex]) {
        setClassName("incorrect");
      } else {
        setClassName("");
      }
    }
  }, [isActive, inputValue, letterIndex, char]);

  return (
    <span ref={charRef} className={className}>
      {char}
    </span>
  );
};

export default memo(Letter);
