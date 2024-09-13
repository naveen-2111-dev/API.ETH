import React, { useEffect, useState } from "react";
import axios from "axios";
import { Api } from "../Api";

const Hero = () => {
  const { address, connected } = Api();
  const [user, setUser] = useState("");
  const apikey = "C3EXS94DSSW8CJMUV34U3QZ8ER72MVTFV6";

  const Balance = async (address) => {
    try {
      const res = await axios.get(
        `https://api.etherscan.io/api?module=account&action=balance&address=${address}&tag=latest&apikey=${apikey}`
      );
      console.log(res);
    } catch (error) {
      console.log("Error in getting balance", error);
    }
  };

  useEffect(() => {
    if (address) {
      setUser(address);
    }
  }, [address]);

  useEffect(() => {
    if (user) {
      Balance(user);
    }
  }, [user]);

  return (
    <div>
      <div></div>
    </div>
  );
};

export default Hero;
