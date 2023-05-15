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

const ModeMenu = () => {
  // const { menuColor, themeColor, mainButton, textColor } = useSelector(themeSelector);
  return (
    <div id="testConfig">
      <div className="row">
        <div className="puncAndNum">
          <div className="textButton punctuationMode">
            <FaAt /> punctuation
          </div>
          {/* <CustomButton
            icon={<FaAt />}
            title="punctuation"
            classNames="textButton punctuationMode"
          /> */}
          <div className="textButton numbersMode">
            <FaHashtag /> numbers
          </div>
        </div>
        <div className="spacer leftSpacer"></div>
        <div className="mode">
          <div className="textButton" mode="time">
            <FaClock /> time
          </div>
          <div className="textButton active" mode="words">
            <FaFont /> words
          </div>
          <div className="textButton" mode="quote">
            <FaQuoteLeft /> quote
          </div>
          <div className="textButton" mode="zen">
            <FaMountain /> zen
          </div>
          <div className="textButton" mode="custom">
            <FaWrench /> custom
          </div>
        </div>
        <div className="spacer rightSpacer"></div>
        <div className="time hidden" style={{ opacity: 1, width: "unset" }}>
          <div className="textButton active">
            <span>15</span>
          </div>
          <div className="textButton">
            <span>30</span>
          </div>
          <div className="textButton">
            <span>60</span>
          </div>
          <div className="textButton">
            <span>120</span>
          </div>
          <div className="textButton">
            <FaTools style={{ marginTop: ".1rem" }} />
          </div>
        </div>
        <div className="wordCount" style={{ opacity: 1, width: "unset" }}>
          <div className="textButton active">
            <span>10</span>
          </div>
          <div className="textButton">
            <span>25</span>
          </div>
          <div className="textButton">
            <span>50</span>
          </div>
          <div className="textButton">
            <span>100</span>
          </div>
          <div className="textButton">
            <FaTools style={{ marginTop: ".1rem" }} />
          </div>
        </div>
        <div className="quoteLength hidden">
          <div className="textButton">all</div>
          <div className="textButton">short</div>
          <div className="textButton">medium</div>
          <div className="textButton active">long</div>
          <div className="textButton">thicc</div>
          <div className="textButton favorite hidden">
            <FaHeart style={{ marginTop: ".1rem" }} />
          </div>
          <div className="textButton">
            <FaSearch style={{ marginTop: ".1rem" }} />
          </div>
        </div>
        <div className="zen hidden">
          <div
            className="textButton"
            style={{ width: "0", paddingLeft: "0", paddingRight: "0" }}
          >
             
          </div>
        </div>
        <div
          className="customText hidden"
          style={{ opacity: 1, width: "unset" }}
        >
          <div className="textButton">change</div>
        </div>
      </div>
    </div>
  );
};

export default ModeMenu;
