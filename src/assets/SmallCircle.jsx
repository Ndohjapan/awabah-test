import React from "react";

const SmallCircle = () => {
  return (
    <svg width="80" height="80" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
      <circle cx="40" cy="40" r="20" fill="#F7D154" />
    </svg>
  );
};

export default SmallCircle;
