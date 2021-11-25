import React from "react";
import { useWeb3React } from "@web3-react/core";

function AccountInformation() {
  const { account } = useWeb3React();
  return (
    <div className="bg-[#0F101A] rounded-[50px] h-16 flex items-center md:w-80 w-72 lg:mt-0 mt-24">
      <div className=" ml-3">
        <svg
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="25" cy="25" r="25" fill="#04050E" />
          <rect x="15" y="20" width="20" height="16" rx="4" fill="#3CFF7E" />
          <rect
            x="20.5"
            y="30.5"
            width="17"
            height="9"
            rx="4.5"
            transform="rotate(-90 20.5 30.5)"
            stroke="#3CFF7E"
            strokeWidth="3"
          />
          <circle
            cx="25"
            cy="28"
            r="3"
            fill="#3CFF7E"
            stroke="#04050E"
            strokeWidth="2"
          />
        </svg>
      </div>
      <div className="flex flex-col ml-3">
        <p className="font-semibold text-white">Account</p>
        <p className="text-[#4A4F6C] font-semibold">
          {shortenAddress(account)}
        </p>
      </div>
    </div>
  );
}

const shortenAddress = (address: string) => {
  return (
    address.substring(0, 6) +
    "..." +
    address.substring(address.length - 4, address.length)
  );
};

export default AccountInformation;
