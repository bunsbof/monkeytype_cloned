import { useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";

function App() {
  const themeValue = useSelector((state) => state.theme.themeValue);
  return (
    <div id="app" className="wide125">
      <div></div>
      <div
        id="centerContent"
        className="wide125"
        style={{ paddingTop: "32px", opacity: "1" }}
      >
        <Navbar />
        <Home />
        <Footer />
      </div>
    </div>
  );
}

export default App;
