import { useSelector } from "react-redux";
import { FunctionMenu, TypeSection } from "../common/components";

const Home = () => {
  const textColor = useSelector((state) => state.theme.textColor);

  return (
    <div
      id="middle"
      className="wide125"
      style={{ color: textColor, height: "100%" }}
    >
      <div className="page pageTest active" style={{ opacity: 1 }}>
        <FunctionMenu />
        <TypeSection />
      </div>
    </div>
  );
};

export default Home;
