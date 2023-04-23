import { useSelector } from "react-redux";
import FunctionMenu from "../components/commons/FunctionMenu";
import { useRef } from "react";
import Beam from "../components/Beam";

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
  const inputRef = useRef(null)
  const handleKeyPress = (event) => {
    if (event.key === " ") {
      // Handle space key press
      console.log("white space pressed")
    }
  };


  return (
    <div
      className="min-h-max flex flex-col items-center w-full"
      style={{ color: textColor }}
    >
      <FunctionMenu />
      <div className="flex flex-col justify-center w-full overflow-hidden">
        <div className="word-wrapper text-3xl font-semibold w-full flex flex-wrap gap-2 tracking-normal">
          {words.map((word, index) => (
            <div
              key={index}
              className="word inline-block whitespace-nowrap m-[8px]"
            >
              {word.split("").map((char, index) => (
                <span key={index}>{char}</span>
              ))}
              {/* {index !== words.length - 1 && <span>&nbsp;</span>} */}
            </div>
          ))}
          <Beam />
        </div>
      </div>
    </div>
  );
};

export default Home;
