import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaArrowDown } from "react-icons/fa";
import "../stylesheet/SubNavbar.css";

const SubNavbar = () => {
  const [crypto, setCrypto] = useState({});

  const APICALL = async () => {
    try {
      const response = await axios.get(
        "https://min-api.cryptocompare.com/data/price",
        {
          params: {
            fsym: "USD",
            tsyms: "ETH,BTC,BNB,ADA,AVAX,SHIB,LTC,DOT,LINK,XMR",
            api_key:
              "942a7ae1279dfa887a83afd9f73af30253d49665652b82c21bbc411d3ec21d16",
          },
        }
      );
      console.log(response.data);
      setCrypto(response.data);
    } catch (err) {
      console.log("Error in getting coin price", err);
    }
  };

  useEffect(() => {
    APICALL();
  }, []);

  return (
    <div className="p-2 w-full bg-slate-400 overflow-hidden">
      <div className="scrolling-wrapper">
        {Object.keys(crypto).length > 0 ? (
          Object.entries(crypto).map(([coin, price]) => (
            <div key={coin} className="flex items-center mx-4">
              <h1 className="flex items-center">
                {coin}: {price}
                <FaArrowDown className="ml-2 text-red-500" />
              </h1>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default SubNavbar;
