import { useState } from "react";
import { ethers } from "ethers";
import { Web3ReactProvider, useWeb3React } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import AccountInformation from "../components/AccountInformation";
import CurrentStock from "../components/CurrentStock";
import ConnectModal from "../components/ConnectModal";
import { ToastContainer, toast, ToastOptions } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const toastConfig: ToastOptions = {
  position: "bottom-left",
  autoClose: 5000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

function App() {
  const context = useWeb3React<Web3Provider>();
  const {
    connector,
    library,
    chainId,
    account,
    activate,
    deactivate,
    active,
    error,
  } = context;
  const [price, setPrice] = useState("0.00");
  const [stock, setStock] = useState(200);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [open, setOpen] = useState(false);
  const walletSelected = (wallet: string) => {
    //wallet selected is in wallet
    console.log(wallet);
    setLoggedIn(true);
  };

  return (
    <>
      <ToastContainer
        theme="dark"
        style={{ width: "400px" }}
        toastClassName="font-bold bg-transparent bg-opacity-80 backdrop-blur-[3px] border-[1px] border-[#23263D] rounded-[10px] w-2xl"
        toastStyle={{ background: "rgba(4, 5, 14, 0.82)" }}
      />
      {open ? (
        <ConnectModal setOpen={setOpen} walletSelected={walletSelected} />
      ) : (
        ""
      )}

      <div className="w-full md:h-screen h-screen flex flex-wrap justify-center md:items-center items-start bg-[#04050E] md:gap-20 gap-0">
        <div className="flex flex-col  w-full justify-center items-center px-4">
          {isLoggedIn && account ? <AccountInformation /> : ""}
        </div>

        {isLoggedIn ? (
          <button
            className="border-4 md:mt-16 mt-0 uppercase text-[#3BFF7E] font-semibold border-[#3BFF7E] w-[60%] h-[60px] rounded-[53px]"
            onClick={() => {
              let signer: any = library.getSigner(account) as any;
              // const contract = new ethers.Contract(
              //   contract_address,
              //   contract_abi,
              //   signer
              // );
              // contract
              //   .safeMint(account)
              //   .then((res) => {
              //     console.log(JSON.stringify(res));
              //     checkTransactionToast(res.hash, false);
              //   })
              //   .catch((err) => {
              //     if (isErrorNotWinner(err)) {
              //       notCrewCardWinnerToast();
              //     } else {
              //       unableToMintToast();
              //     }
              //   });
            }}
          >
            Mint
          </button>
        ) : (
          <button
            className="border-4 md:mt-16 mt-0 uppercase text-[#3BFF7E] font-semibold border-[#3BFF7E] w-[60%] h-[60px] rounded-[53px]"
            onClick={(e) => setOpen(true)}
          >
            Connect Wallet
          </button>
        )}
      </div>
    </>
  );
}

function getLibrary(provider: any): Web3Provider {
  const library = new Web3Provider(provider);
  library.pollingInterval = 12000;
  return library;
}

export default function Named() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <App />
    </Web3ReactProvider>
  );
}
