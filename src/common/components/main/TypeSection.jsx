import { memo, useEffect, useState } from "react";
import { useStateContext } from "../../../contexts/ContextProvider";
import Word from "./Word";
import Beam from "./Beam";
import Input from "./Input";

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
  "stamina",
  "interpretation",
  "fulsome",
  "businesswoman",
  "pause",
  "inaugurate",
  "slot",
  "immersion",
  "espouse",
  "exclusion",
  "accomplice",
  "revival",
  "complain",
  "cadaver",
  "away",
  "stall",
  "propagate",
  "elephant",
  "retaliation",
  "blank",
  "warrior",
  "apathy",
  "visual",
  "blatant",
  "miracle",
];

function TypeSection() {
  const { wordsRef, handleWordWrapperFocus } = useStateContext();

  return (
    <div id="typingTest" style={{ opacity: 1 }}>
      <Input />

      <div
        id="wordsWrapper"
        translate="no"
        style={{ height: "114px", overflow: "hidden" }}
      >
        <Beam />
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
            <Word key={index} word={word} wordActiveIndex={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default memo(TypeSection);
