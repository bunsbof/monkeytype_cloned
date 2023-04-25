import { useEffect, useRef, useState, memo } from "react";

const words = [
  "take",
  "fashion",
  "leather",
  "forensic",
  "marble",
  "divide",
  "unending",
  "banding",
  "broad",
  "subjugate",
  "determine",
  "inflate",
  "forthcoming",
  "climate",
  "make",
  "drunkenness",
  "yoke",
  "glumness",
  "paw",
  "predict",
];

function TypeSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef(null);
  const wordsRef = useRef(null);
  const beamRef = useRef(null);

  const handleWordWrapperFocus = () => {
    inputRef.current.focus();
  };

  const handleInput = () => {
    const currentWord = words[activeIndex];
    const inputValue = inputRef.current.value.trim();
    if (inputValue === currentWord) {
      setActiveIndex((prevIndex) => prevIndex + 1);
      inputRef.current.value = "";
      const wordsElements = document.querySelectorAll(".word");
      wordsElements[activeIndex].classList.remove("active");
      wordsElements[activeIndex + 1].classList.add("active");
    }
  };

  useEffect(() => {
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
    inputRef.current.addEventListener("input", handleInput);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    return () => inputRef.current.removeEventListener("input", handleInput);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div id="typingTest" style={{ opacity: 1 }}>
      <input
        ref={inputRef}
        id="wordsInput"
        tabIndex="0"
        autoComplete="off"
        autoCapitalize="off"
        autoCorrect="off"
        data-gramm="false"
        data-gramm_editor="false"
        data-enable-grammarly="false"
        list="autocompleteOff"
        style={{ left: 0, top: "94px" }}
      />

      <div
        id="wordsWrapper"
        translate="no"
        style={{ height: "114px", overflow: "hidden" }}
      >
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
            fontSize: "1.5rem",
            opacity: 1,
            display: "block",
            top: "0.6px",
            left: "5px",
          }}
        ></div>
        <div
          id="words"
          ref={wordsRef}
          onClick={handleWordWrapperFocus}
          style={{
            fontSize: "1.5rem",
            transition: "none 0s ease 0s",
            height: "152px",
            overflow: "hidden",
            width: "100%",
          }}
        >
          {words.map((word, index) => (
            <div
              key={index}
              className={`word ${index === activeIndex ? "active" : ""}`}
            >
              {word.split("").map((char, index) => (
                <span key={index}>{char}</span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default memo(TypeSection);
