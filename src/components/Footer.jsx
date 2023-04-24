import { useSelector } from "react-redux";

const Footer = () => {
  // const themeValue = useSelector((state) => state.theme.themeValue);
  return (
    <div id="bottom" className="">
      <div id="commandLineMobileButton">
        <i className="fas fa-terminal"></i>
      </div>
      <div className="keyTips">
        <key>tab</key> + <key>enter</key> - restart test
        <key>esc</key> or <key>ctrl</key>+<key>shift</key>+<key>p</key> -
        command line
      </div>
      <div className="leftright">
        <div className="left">
          <div tabIndex="0" className="textButton" id="contactPopupButton">
            <i className="fas fa-fw fa-envelope"></i>
            <div className="text">Contact</div>
          </div>
          <div tabIndex="0" id="supportMeButton" className="textButton">
            <i className="fas fa-fw fa-donate"></i>
            <div className="text">Support</div>
          </div>
          <a
            href="https://github.com/monkeytypegame/monkeytype"
            className="textButton"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fas fa-fw fa-code"></i>
            <div className="text">GitHub</div>
          </a>
          <a
            href="https://www.discord.gg/monkeytype"
            className="textButton"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-fw fa-discord"></i>
            <div className="text">Discord</div>
          </a>
          <a
            href="https://twitter.com/monkeytypegame"
            className="textButton"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-fw fa-twitter"></i>
            <div className="text">Twitter</div>
          </a>
          <a
            href="/./terms-of-service.html"
            className="textButton"
            target="_blank"
          >
            <i className="fas fa-fw fa-file-contract"></i>
            <div className="text">Terms</div>
          </a>
          <a
            href="/./security-policy.html"
            className="textButton"
            target="_blank"
          >
            <i className="fas fa-fw fa-shield-alt"></i>
            <div className="text">Security</div>
          </a>
          <a
            href="/./privacy-policy.html"
            className="textButton"
            target="_blank"
          >
            <i className="fas fa-fw fa-lock"></i>
            <div className="text">Privacy</div>
          </a>
        </div>
        <div className="right">
          <div
            className="current-theme textButton"
            aria-label="Shift-click to toggle custom theme"
            data-balloon-pos="left"
          >
            <i className="fas fa-fw fa-palette"></i>
            <div className="text">serika dark</div>
          </div>
          <div id="versionGroup" className="">
            <div className="version textButton">
              <i className="fas fa-fw fa-code-branch"></i>
              <div className="text">v1.17.5</div>
            </div>
            <key id="newVersionIndicator" className="hidden">
              new
            </key>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
