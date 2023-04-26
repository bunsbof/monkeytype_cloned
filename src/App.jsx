import { useSelector } from "react-redux";

import { Navbar, Footer } from "./common/components";
import { HomePage } from "./pages";

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
        <HomePage />
        <Footer />
      </div>
    </div>
  );
}

export default App;
