import { useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";

function App() {
  const themeValue = useSelector((state) => state.theme.themeValue);
  return (
    <div style={{ backgroundColor: themeValue, width: "100%", height: "100%" }} className="flex flex-col">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
