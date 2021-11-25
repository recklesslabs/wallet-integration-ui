import React from "react";

function CurrentStock({ price, stock }) {
  return (
    <div className="flex mt-4">
      <p className="text-white font-medium text-4xl">{price}</p>{" "}
      <span className="text-[#9094BA] font-semibold ml-1 md:mr-8 mr-4 mt-1">
        ETH
      </span>{" "}
      <svg
        width="14"
        height="45"
        viewBox="0 0 14 45"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <rect
          x="9.52246"
          y="-0.236328"
          width="4.69914"
          height="45.2857"
          rx="2.34957"
          transform="rotate(12.254 9.52246 -0.236328)"
          fill="#3BFF7E"
        />
      </svg>
      <p className="text-white font-medium text-4xl md:ml-8 ml-4">{stock}</p>{" "}
      <span className="text-[#9094BA] font-semibold ml-1 mt-1">Cards</span>{" "}
    </div>
  );
}

export default CurrentStock;
