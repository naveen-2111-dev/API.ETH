import React from "react";
import { FaSearch, FaExchangeAlt, FaWallet, FaLink } from "react-icons/fa";
import { Api } from "../Api";

const Navbar = () => {
  const { Connect, connected } = Api();

  const WalletConnector = async () => {
    try {
      await Connect();
    } catch (err) {
      console.log("error in wallet connection ", err);
    }
  };
  return (
    <div className="w-full bg-blue-950 text-gray-100 p-5">
      <div>
        <div className="flex justify-evenly items-center h-full">
          <h1 className="text-2xl font-bold">CryptoCore</h1>
          <div className="flex items-center">
            <input
              className="p-2 rounded-l-md bg-white text-gray-900 placeholder-gray-500 outline-none bordernone"
              type="text"
              placeholder="address"
            />
            <button className="p-2 h-10 bg-yellow-500 hover:bg-yellow-600 text-gray-900 rounded-r-md flex items-center">
              <FaSearch />
            </button>
          </div>
          <div className="flex gap-10">
            <h1 className="flex gap-2 items-center cursor-pointer hover:text-yellow-300">
              Transaction <FaExchangeAlt />
            </h1>
            <h1 className="flex gap-2 items-center cursor-pointer hover:text-yellow-300">
              End Receiver <FaWallet />
            </h1>
          </div>
          <button
            className="flex gap-2 items-center bg-yellow-500 hover:text-white font-mono hover:bg-yellow-600 text-gray-900 py-2 px-4 rounded-md"
            onClick={WalletConnector}
          >
            {connected ? "Connected" : "connect"} <FaLink />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
