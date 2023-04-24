import { useSelector } from "react-redux";
import CustomButton from "./CustomButton";
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
} from "../../assets";
// import { themeSelector } from "../../contexts/features/theme/themeSlice";

const FunctionMenu = () => {
  // const { menuColor, themeColor, mainButton, textColor } = useSelector(themeSelector);
  return (
    <div className="row">
      <div className="puncAndNum">
        <div className="textButton punctuationMode">
          <FaAt /> punctuation
        </div>
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
        <div
          className="textButton active"
          // timeconfig="15"
        >
          <span>15</span>
        </div>
        <div
          className="textButton"
          // timeconfig="30"
        >
          <span>30</span>
        </div>
        <div
          className="textButton"
          // timeconfig="60"
        >
          <span>60</span>
        </div>
        <div
          className="textButton"
          // timeconfig="120"
        >
          <span>120</span>
        </div>
        <div
          className="textButton"
          // timeconfig="custom"
        >
          {/* <i className="fas fa-fw fa-tools" style="margin-top:.1rem"></i> */}
          <FaTools style={{ marginTop: ".1rem" }} />
        </div>
      </div>
      <div
        className="wordCount"
        // style="opacity: 1; width: unset;"
        style={{ opacity: 1, width: "unset" }}
      >
        <div
          className="textButton active"
          // wordcount="10"
        >
          <span>10</span>
        </div>
        <div
          className="textButton"
          //  wordcount="25"
        >
          <span>25</span>
        </div>
        <div
          className="textButton"
          //  wordcount="50"
        >
          <span>50</span>
        </div>
        <div
          className="textButton"
          // wordcount="100"
        >
          <span>100</span>
        </div>
        <div
          className="textButton"
          //  wordcount="custom"
        >
          {/* <i className="fas fa-fw fa-tools" style="margin-top:.1rem"></i> */}
          <FaTools style={{ marginTop: ".1rem" }} />
        </div>
      </div>
      <div className="quoteLength hidden">
        <div
          className="textButton"
          // quotelength="-1"
        >
          all
        </div>
        <div
          className="textButton"
          // quotelength="0"
        >
          short
        </div>
        <div
          className="textButton"
          // quotelength="1"
        >
          medium
        </div>
        <div
          className="textButton active"
          //  quotelength="2"
        >
          long
        </div>
        <div
          className="textButton"
          //  quotelength="3"
        >
          thicc
        </div>
        <div
          className="textButton favorite hidden"
          // quotelength="-3"
        >
          {/* <i className="fas fa-heart" style="margin-top:.1rem"></i> */}
          <FaHeart style={{ marginTop: ".1rem" }} />
        </div>
        <div
          className="textButton"
          // quotelength="-2"
        >
          {/* <i className="fas fa-search" style="margin-top:.1rem"></i> */}
          <FaSearch style={{ marginTop: ".1rem" }} />
        </div>
      </div>
      <div className="zen hidden">
        <div
          className="textButton"
          // style="width:0;padding-left:0;padding-right:0"
          style={{ width: "0", paddingLeft: "0", paddingRight: "0" }}
        >
           
        </div>
      </div>
      <div
        className="customText hidden"
        // style="opacity: 1; width: unset;"
        style={{ opacity: 1, width: "unset" }}
      >
        <div className="textButton">change</div>
      </div>
    </div>
  );
};

export default FunctionMenu;
