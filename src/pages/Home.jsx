import { useSelector } from "react-redux";
import FunctionMenu from "../components/commons/FunctionMenu";

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

const Home = () => {
  const textColor = useSelector((state) => state.theme.textColor);

  return (
    <div id="middle" className="wide125" style={{ color: textColor, height: "100%" }}>
      <div className="page pageTest active" style={{ opacity: 1 }}>
        <div id="testConfig">
          <FunctionMenu />
        </div>
        <div id="typingTest" style={{ opacity: 1 }}>
          <input
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
            // style="height: 114px; overflow: hidden;"
            style={{ height: "114px", overflow: "hidden" }}
          >
            <div
              id="paceCaret"
              className="hidden default"
              // style="font-size: 1.5rem;"
              style={{ fontSize: "1.5rem" }}
            ></div>
            <div
              id="caret"
              className="default"
              // style="font-size: 1.5rem; animation-name: caretFlashHard; opacity: 1; display: block; top: 3.6px; left: 5px;"
              style={{
                fontSize: "1.5rem",
                opacity: 1,
                display: "block",
                top: "3.6px",
                left: "5px",
              }}
            ></div>
            <div
              id="words"
              // style="font-size: 1.5rem; transition: none 0s ease 0s; height: 152px; overflow: hidden; width: 100%; margin-left: unset;"
              style={{
                fontSize: "1.5rem",
                transition: "none 0s ease 0s",
                height: "152px",
                overflow: "hidden",
                width: "100%",
              }}
            >
              <div className="word active">
                <span>h</span>
                <span>o</span>
                <span>l</span>
                <span>d</span>
              </div>
              {words.map((word, index) => (
                <div key={index} className="word">
                  {word.split("").map((char, index) => (
                    <span key={index}>{char}</span>
                  ))}
                  {/* {index !== words.length - 1 && <span>&nbsp;</span>} */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
