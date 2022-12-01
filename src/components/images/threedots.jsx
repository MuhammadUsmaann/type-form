import React from "react";

const Threedots = () => {
  return (
    <svg
      className="SVGInline-svg"
      width={14}
      height={4}
      viewBox="0 0 14 4"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g transform="rotate(90 7 7)" fillRule="evenodd">
        <circle cx={2} cy={2} r="1.5" />
        <circle cx={2} cy={7} r="1.5" />
        <circle cx={2} cy={12} r="1.5" />
      </g>
    </svg>
  );
};

export default Threedots;
