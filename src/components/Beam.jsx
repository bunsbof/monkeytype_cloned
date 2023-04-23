import { useState, useRef } from "react";

const Beam = () => {
  const [beamPos, setBeamPos] = useState(0);
  const inputRef = useRef(null);

  const handleInput = () => {
    const input = inputRef.current;
    const currentWord = input.value.split(" ").length - 1;
    const wordElements = document.querySelectorAll(".word");
    const currentWordWidth = wordElements[currentWord].offsetWidth;
    const previousWordsWidth = Array.from(wordElements)
      .slice(0, currentWord)
      .reduce((acc, word) => acc + word.offsetWidth, 0);
    const inputWidth = input.offsetWidth;
    const offset =
      currentWordWidth + previousWordsWidth - beamPos + inputWidth / 2;
    setBeamPos((currentPos) => currentPos + offset);
  };

  const handleKeyDown = (event) => {
    if (event.key === " ") {
      handleInput();
    }
  };

  const handleBlur = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <div className="relative">
        <div
          className="absolute top-0 left-0 h-full w-1 bg-black"
          style={{ transform: `translateX(${beamPos}px)` }}
        ></div>
        <input
          className="absolute text-transparent hidden"
          ref={inputRef}
          autoComplete="off"
          autoCapitalize="none"
          autoCorrect="off"
          spellCheck="false"
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
        />
      </div>
    </>
  );
};

export default Beam