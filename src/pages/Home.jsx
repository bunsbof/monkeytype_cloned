import { useSelector } from "react-redux";
import FunctionMenu from "../components/commons/FunctionMenu";

const Home = () => {
  const textColor = useSelector((state) => state.theme.textColor);
  return (
    <div
      className="min-h-max flex flex-col items-center"
      style={{ color: textColor }}
    >
      <FunctionMenu />
      Home
    </div>
  );
};

export default Home;
