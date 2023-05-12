import React, { useEffect, useRef } from "react";
import { useStateContext } from "../../../contexts/ContextProvider";
import { useDispatch } from "react-redux";
import { setCaretWidth } from "../../../app/main/beam/beamSlice";

const Beam = () => {
  const { beamRef, animationObj } = useStateContext();
  const dispatch = useDispatch();
  const animationRef = useRef(null);

  useEffect(() => {
    if (beamRef.current) {
      dispatch(setCaretWidth(beamRef.current.offsetWidth));
    }
  }, []);

  const handleAnimationEnd = () => {
    /* handle animation end */
  };

  // cancel any ongoing animation before starting a new one
  cancelAnimationFrame(animationRef.current);

  animationRef.current = requestAnimationFrame(() => {
    const caret = document.querySelector("#caret");

    if (caret) {
      // apply the animation to the caret
      caret
        .animate(
          {
            top: `${animationObj.top}px`,
            left: `${animationObj.left}px`,
            width: animationObj.width,
          },
          {
            duration: 100,
            fill: "forwards",
          }
        )
        .addEventListener("finish", handleAnimationEnd);
    }
  });

  return (
    <>
      <div
        id="paceCaret"
        className="hidden default"
        style={{ fontSize: "1.5rem" }}
      ></div>
      <div
        id="caret"
        ref={beamRef}
        className="default"
        style={{
          position: "absolute",
          animationName: "beamAnimation",
          animationDuration: "0.3s",
          animationFillMode: "forwards",
          fontSize: "1.5rem",
          opacity: 1,
          display: "block",
          top: `${animationObj.top}px`,
          left: `${animationObj.left}px`,
          width: animationObj.width,
          transition: "none",
        }}
        onAnimationEnd={handleAnimationEnd}
      ></div>
      {/* <div
        id="caret"
        ref={beamRef}
        className="default"
        // style="font-size: 1.5rem; animation-name: caretFlashSmooth; opacity: 1; display: block; top: 3.6px; left: 6px;"
        style={{
          fontSize: "1.5rem",
          animationName: "caretFlashSmooth",
          animationDuration: "1s", // Optionally, specify the duration of the animation
          opacity: 1,
          display: "block",
          top: "0.6px",
          left: "6px",
        }}
      ></div> */}
    </>
  );
};

export default Beam;
