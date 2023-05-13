import { ModeMenu, TypeSection } from "../common/components";

const Home = () => {
  return (
    <div id="middle" className="wide125" style={{ height: "100%" }}>
      <div className="page pageTest active" style={{ opacity: 1 }}>
        <ModeMenu />
        <TypeSection />
      </div>
    </div>
  );
};

export default Home;
