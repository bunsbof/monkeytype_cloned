import React from "react";

function Letter({ children, correct, incorrect }) {
  return (
    <span>{children}</span>
  );
}

export default Letter;
