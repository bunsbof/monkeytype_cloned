import { memo, useMemo, useState } from "react";
import { useSelector } from "react-redux";

import CustomButton from "../CustomButton";
import {
  FaAt,
  FaHashtag,
  FaClock,
  FaFont,
  FaQuoteLeft,
  FaMountain,
  FaWrench,
  FaTools,
  FaHeart,
  FaSearch,
} from "../../../../assets";
import "./ModeMenu.css";

const modeList = [
  { name: "time", icon: <FaClock /> },
  { name: "words", icon: <FaFont /> },
  { name: "quotes", icon: <FaQuoteLeft /> },
  { name: "zen", icon: <FaMountain /> },
  { name: "custom", icon: <FaWrench /> },
];

const ModeMenu = () => {
  const modes = useSelector((state) => state.main.modes.value);
  const [modeKey, setModeKey] = useState("words");
  const [modeType, setModeType] = useState(null);
  const { conditions, ...modeProps } = useMemo(
    () => modes.genMode(modeKey),
    [modes, modeKey]
  );
  console.log(conditions, modeProps[modeKey]);

  return (
    <div id="testConfig">
      <div className="row">
        {conditions && (
          <>
            <div className="puncAndNum">
              {Object.entries(conditions).map(([key, value]) => {
                if (key === "punctuation" || key === "numbers") {
                  const { icon: Icon } = value;
                  return (
                    <CustomButton
                      key={key}
                      classNames={`textButton`}
                      icon={<Icon />}
                      title={key}
                    />
                  );
                }
                return null;
              })}
            </div>
            <div className="spacer leftSpacer"></div>
          </>
        )}
        <div className="mode">
          {modeList.map((val, idx) => (
            <CustomButton
              key={idx}
              classNames="textButton"
              icon={val.icon}
              title={val.name}
              activeMode={modeKey}
            />
          ))}
        </div>
        {modeProps[modeKey].control && (
          <>
            <div className="spacer rightSpacer"></div>

            {modeProps[modeKey].name && modeProps[modeKey].control && (
              <div
                className={`${modeProps[modeKey].name}`}
                style={{ opacity: 1, width: "unset" }}
              >
                {modeProps[modeKey].control.options.map((option, index) => (
                  <div
                    className={`textButton${
                      option === modeProps[modeKey].control.defaultValue
                        ? " active"
                        : ""
                    }`}
                    key={index}
                  >
                    {typeof option === "number" ||
                    typeof option === "string" ? (
                      <span>{option}</span>
                    ) : (
                      <span>
                        <option.icon style={{ marginTop: ".1rem" }} />
                      </span>
                    )}
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default memo(ModeMenu);
