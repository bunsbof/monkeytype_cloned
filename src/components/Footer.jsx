import { useSelector } from "react-redux";
import {
  FaTerminal,
  FaEnvelope,
  FaDonate,
  FaCode,
  BsFillPersonVcardFill,
  FaTwitter,
  FaFileContract,
  FaShieldAlt,
  FaLock,
  FaPalette,
  FaCodeBranch,
} from "../assets";

const Footer = () => {
  // const themeValue = useSelector((state) => state.theme.themeValue);
  return (
    <div id="bottom" className="">
      <div id="commandLineMobileButton">
        <FaTerminal />
      </div>
      <div className="keyTips">
        <kbd>tab</kbd> + <kbd>enter</kbd> - restart test
        <kbd>esc</kbd> or <kbd>ctrl</kbd>+<kbd>shift</kbd>+<kbd>p</kbd> -
        command line
      </div>
      <div className="leftright">
        <div className="left">
          <div tabIndex="0" className="textButton" id="contactPopupButton">
            <FaEnvelope />
            <div className="text">Contact</div>
          </div>
          <div tabIndex="0" id="supportMeButton" className="textButton">
            <FaDonate />
            <div className="text">Support</div>
          </div>
          <a
            href="https://github.com/bunsbof/monkeytype_cloned"
            className="textButton"
            target="_blank"
            rel="noreferrer"
          >
            <FaCode />
            <div className="text">GitHub</div>
          </a>
          <a
            href="https://bunsbof-s-portfolio.vercel.app/"
            className="textButton"
            target="_blank"
            rel="noreferrer"
          >
            <BsFillPersonVcardFill />
            <div className="text">Porfolio</div>
          </a>
          <a
            href="https://twitter.com/MrBunsBof"
            className="textButton"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter />
            <div className="text">Twitter</div>
          </a>
          <a
            href="#"
            className="textButton"
            target="_blank"
          >
            <FaFileContract />
            <div className="text">Terms</div>
          </a>
          <a
            href="#"
            className="textButton"
            target="_blank"
          >
            <FaShieldAlt />
            <div className="text">Security</div>
          </a>
          <a
            href="/./privacy-policy.html"
            className="textButton"
            target="_blank"
          >
            <FaLock />
            <div className="text">Privacy</div>
          </a>
        </div>
        <div className="right">
          <div
            className="current-theme textButton"
            aria-label="Shift-click to toggle custom theme"
            data-balloon-pos="left"
          >
            <FaPalette />
            <div className="text">serika dark</div>
          </div>
          <div id="versionGroup" className="">
            <div className="version textButton">
              <FaCodeBranch />
              <div className="text">v0.0.1</div>
            </div>
            <kbd id="newVersionIndicator" className="hidden">
              new
            </kbd>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
