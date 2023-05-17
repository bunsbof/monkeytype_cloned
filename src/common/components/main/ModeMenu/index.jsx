import { memo, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import CustomButton from "../CustomButton";
import {
  FaClock,
  FaFont,
  FaQuoteLeft,
  FaMountain,
  FaWrench,
} from "../../../../assets";
import "./ModeMenu.css";
import { changeMode } from "../../../../app/main/modes/modeSlice";

const modeList = [
  { name: "time", icon: <FaClock /> },
  { name: "words", icon: <FaFont /> },
  { name: "quotes", icon: <FaQuoteLeft /> },
  { name: "zen", icon: <FaMountain /> },
  { name: "custom", icon: <FaWrench /> },
];

const ModeMenu = () => {
  const modes = useSelector((state) => state.main.modes.value);
  const currentMode = useSelector((state) => state.main.modes.currentMode);
  const configured = useSelector((state) => state.main.modes.config);
  const dispatch = useDispatch();
  const { defaultMode, defaultValue } = useMemo(
    () => currentMode,
    [currentMode]
  );
  const { conditions, ...modeProps } = useMemo(
    () => modes.genMode(defaultMode),
    [modes, defaultMode]
  );

  console.log(defaultMode, defaultValue, configured);

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
              activeMode={defaultMode}
              handleClick={() =>
                dispatch(
                  changeMode({ key: val.name, value: configured[defaultMode] })
                )
              }
            />
          ))}
        </div>
        {modeProps[defaultMode].control && (
          <>
            <div className="spacer rightSpacer"></div>

            {modeProps[defaultMode].name && modeProps[defaultMode].control && (
              <div
                className={`${modeProps[defaultMode].name}`}
                style={{ opacity: 1, width: "unset" }}
              >
                {modeProps[defaultMode].control.options.map((option, index) => (
                  <div
                    className={`textButton${
                      option === defaultValue ? " active" : ""
                    }`}
                    key={index}
                    onClick={() =>
                      dispatch(changeMode({ key: defaultMode, value: option }))
                    }
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
