import React, { useContext, createContext, useState } from "react";
import Moralis from "moralis";
import { ethers } from "ethers";

const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const [address, setAddress] = useState("");
  const [chain, setChain] = useState("");
  const [connected, setConnected] = useState(false);

  const Connect = async () => {
    try {
      if (window.ethereum != undefined) {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const provider = new ethers.BrowserProvider(window.ethereum);
        const Signers = await provider.getSigner();
        const Address = await Signers.getAddress();
        console.log(Address);
        setAddress(Address);
        await window.ethereum
          .request({ method: "eth_chainId" })
          .then((chain) => {
            setChain(chain);
            console.log(chain)
          })
          .catch((error) => {
            console.log("error in getting chain id", error);
          });
      }
      setConnected(!connected);
    } catch (error) {
      console.log("error in metamask popping", error);
    }
  };

  const WalletHistory = async (chainId, address) => {
    try {
      await Moralis.start({
        apiKey: process.env.REACT_APP_MORALIS_API_KEY,
      });

      const response = await Moralis.EvmApi.wallets.getWalletHistory({
        chain: chainId,
        order: "DESC",
        address: address,
      });
      console.log(response.raw);
    } catch (err) {
      console.log(err, "in getting wallet history");
    }
  };

  const values = { WalletHistory, Connect, address, chain, connected };
  return <ApiContext.Provider value={values}>{children}</ApiContext.Provider>;
};

export const Api = () => {
  const context = useContext(ApiContext);
  if (context == undefined) {
    throw new console.error("error in context file");
  }
  return context;
};
