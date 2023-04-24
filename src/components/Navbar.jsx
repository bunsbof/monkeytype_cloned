import {
  logo,
  FiUser,
  FaKeyboard,
  FaCrown,
  FaInfo,
  FaCog,
  FaCircleNotch,
  FaUserAlt,
  FaBell,
  // FaRegUser,
} from "../assets";
// import { useSelector } from "react-redux";

// import CustomButton from "./commons/CustomButton";

const Navbar = () => {
  // const themeValue = useSelector((state) => state.theme.themeValue);
  // const textColor = useSelector((state) => state.theme.textColor);
  // const mainBtnColor = useSelector((state) => state.theme.mainBtnColor);

  return (
    <div id="top" className="w-full">
      <div className="logo cursor-pointer whitespace-nowrap">
        <div className="icon"><img src={logo} alt="logo" /></div>
        <h1 className="text">
          <div className="top">watch magic</div>magictypes
        </h1>
      </div>
      <div id="menu">
        <a
          id="startTestButton"
          className="textButton view-start"
          tabIndex="2"
          // href="/"
          // onclick="this.blur()"
          // router-link=""
        >
          <div className="icon">
            {/* <i className="fas fa-fw fa-keyboard"></i> */}
            <FaKeyboard />
          </div>
        </a>
        <div
          className="textButton leaderboards view-leaderboards"
          tabIndex="2"
          // onclick="this.blur()"
        >
          <div className="icon">
            {/* <i className="fas fa-fw fa-crown"></i> */}
            <FaCrown />
          </div>
        </div>
        <a
          className="textButton view-about"
          tabIndex="2"
          // href="/about"
          // onclick="this.blur()"
          // router-link=""
        >
          <div className="icon">
            {/* <i className="fas fa-fw fa-info"></i> */}
            <FaInfo />
          </div>
        </a>
        <a
          className="textButton view-settings"
          tabIndex="2"
          // href="/settings"
          // onclick="this.blur()"
          // router-link=""
        >
          <div className="icon">
            {/* <i className="fas fa-fw fa-cog"></i> */}
            <FaCog />
          </div>
        </a>
        <div></div>
        <a
          className="textButton hidden account view-account"
          tabIndex="2"
          // href="/account"
          // onclick="this.blur()"
          // router-link=""
          // style="opacity: 1; pointer-events: auto;"
          style={{ opacity: 1, pointerEvents: "auto" }}
        >
          <div className="loading hidden" style={{ opacity: 0 }}>
            {/* <i className="fas fa-fw fa-spin fa-circle-notch"></i> */}
            <FaCircleNotch />
          </div>
          <div className="user" style={{opacity: 1}}>
            {/* <i className="fas fa-fw fa-user"></i> */}
            <FaUserAlt />
          </div>
          <div className="avatar hidden"></div>
          <div className="text"></div>
          <div className="levelAndBar">
            <div className="level">1</div>
            <div className="xpBar">
              <div className="bar"></div>
              <div className="xpGain"></div>
              <div className="xpBreakdown"></div>
            </div>
          </div>
        </a>
        <div
          className="textButton showAlerts"
          tabIndex="2"
          // onclick="this.blur()"
        >
          <div className="icon">
            {/* <i className="fas fa-fw fa-bell"></i> */}
            <FaBell />
          </div>
          <div className="notificationBubble hidden">5</div>
        </div>
        <div
          className="textButton signInOut"
          tabIndex="2"
          // onclick="this.blur()"
        >
          <div className="icon">
            {/* <i className="far fa-fw fa-user"></i> */}
            <FiUser />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
