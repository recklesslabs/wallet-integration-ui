import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useWeb3React } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import { injected, walletlink } from "../web3/connectors";

export default function ConnectModal({ setOpen, walletSelected }) {
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
  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={true} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-[#04050E] bg-opacity-80 transition-opacity backdrop-blur-[3px]" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div
              className="inline-block align-bottom backdrop-blur-[3px] bg-[#04050E] bg-opacity-80 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle max-w-sm sm:w-full"
              style={{
                border: "1.26536px solid #23263D",
              }}
            >
              <div className=" px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="flex-col flex justify-center items-center">
                  <p className="text-[#4A4F6C] font-semibold text-2xl">
                    Connect your wallet
                  </p>

                  <button
                    className="bg-[#0F101A] rounded-[63.2681px] h-[60px] w-9/12 mt-6 flex items-center"
                    onClick={() => {
                      activate(injected);
                      walletSelected("Metamask");
                      setOpen(false);
                    }}
                  >
                    <svg
                      width="48"
                      viewBox="0 0 64 65"
                      className="ml-4"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <circle
                        cx="31.9249"
                        cy="32.3963"
                        r="31.6341"
                        fill="white"
                      />
                      <rect
                        x="11.679"
                        y="13.416"
                        width="40.4916"
                        height="37.9609"
                        fill="url(#pattern0)"
                      />
                      <defs>
                        <pattern
                          id="pattern0"
                          patternContentUnits="objectBoundingBox"
                          width="1"
                          height="1"
                        >
                          <use
                            xlinkHref="#image0_0:1"
                            transform="translate(-0.121547 -0.149701) scale(0.00552486 0.00598802)"
                          />
                        </pattern>
                        <image
                          id="image0_0:1"
                          width="225"
                          height="225"
                          xlinkHref="data:image/png;base64,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"
                        />
                      </defs>
                    </svg>
                    <p className="text-white font-semibold ml-5 ">Metamask</p>
                  </button>
                  <button
                    className="bg-[#0F101A] rounded-[63.2681px] h-[60px] w-9/12 mt-4  flex items-center"
                    onClick={() => {
                      activate(walletlink);
                      walletSelected("Coinbase");
                      setOpen(false);
                    }}
                  >
                    <svg
                      width="48"
                      className="ml-4"
                      viewBox="0 0 64 64"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="31.9249"
                        cy="32.0755"
                        r="31.6341"
                        fill="#0A59FF"
                      />
                      <circle
                        cx="31.9248"
                        cy="32.0754"
                        r="20.2458"
                        fill="white"
                      />
                      <rect
                        x="25.5491"
                        y="25.6997"
                        width="12.7515"
                        height="12.7515"
                        rx="1.26536"
                        fill="#0A59FF"
                      />
                    </svg>
                    <p className="text-white font-semibold ml-5 ">Coinbase</p>
                  </button>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
