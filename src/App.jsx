import { useEffect, useRef } from "react";
import { Navbar, Footer } from "./common/components";
import { HomePage } from "./pages";

function App() {
  const backgroundRef = useRef(null);
  useEffect(() => {
    const elementToRemove = backgroundRef.current;

    const timeoutId = setTimeout(() => {
      if (elementToRemove.parentNode) {
        elementToRemove.parentNode.removeChild(elementToRemove);
      }
    }, 2000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);
  return (
    <>
      <div id="backgroundLoader" ref={backgroundRef}></div>

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
    </>
  );
}

export default App;
