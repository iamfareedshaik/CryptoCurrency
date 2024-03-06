import React from "react";
import { CryptoGraph } from "./components/graph/CryptoGraph";
import CryptoDetails from "./components/details/Crypto-details";
import Sentiment from "./components/sentiment-details/Sentiment";
import { Tokenomics } from "./components/Tokenomics";
import About from "./components/Summary/About";
import { TeamDetails } from "./components/Team-Details";
import "./index.css";
import { Advertisement } from "./components/Adevrtisement";

export const CryptoCurrenct = () => {
  return (
    <div className='w-11 m-auto mt-8 crypto-body'>
      <div className='grid'>
        <div className='col'>
          <CryptoGraph />
          <CryptoDetails />
          <Sentiment />
          <About />
          <Tokenomics />
          <TeamDetails />
        </div>
        <div className='col-4 full-width'>
          <div>
            <Advertisement />
          </div>
        </div>
      </div>
    </div>
  );
};
