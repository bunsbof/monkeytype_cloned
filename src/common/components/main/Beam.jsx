import React, { useEffect, useRef } from "react";
import { useStateContext } from "../../../contexts/ContextProvider";
import { useDispatch, useSelector } from "react-redux";
import { setCaretWidth } from "../../../app/main/beam/beamSlice";

const Beam = () => {
  const { beamRef, animationObj } = useStateContext();
  const dispatch = useDispatch();
  const animationRef = useRef(null);
  const { input } = useSelector((state) => ({
    input: state.main.input.value,
  }));
  // if (animationObj) console.log(animationObj);

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
          animationName: input ? "none" : "caretFlashSmooth",
          animationDuration: "1s",
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
    </>
  );
};

export default Beam;
