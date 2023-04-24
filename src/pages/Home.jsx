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
    <div className="w-full" style={{ color: textColor }}>
      <div className="page pageTest active" style={{ opacity: 1 }}>
        <div id="testConfig">
          <FunctionMenu />
        </div>
        <div id="typingTest" style={{opacity: 1}}>
          
        </div>
      </div>
    </div>
  );
};

export default Home;
