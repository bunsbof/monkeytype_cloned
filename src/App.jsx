import { useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";

function App() {
  const themeValue = useSelector((state) => state.theme.themeValue);
  return (
    <div style={{ backgroundColor: themeValue, paddingTop: '32px', opacity: 1 }} className="max-w-1250px items-center grid gap-8 grid-flow-row auto-rows-auto p-8 transition duration-125 w-full z-50">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
