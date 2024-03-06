import React from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import Graph from "../../../../../Graph";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const CryptoGraph = () => {
  return (
    <>
      <Card>
        <div className='flex mb-4 text-center align-items-center'>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png'
            alt='placeholder'
            className='mr-1 w-2rem'
          />
          <div className='text-center'>
            <span className='text-2xl font-bold text-sm'>Bitcoin</span>
            <span>BTC</span>
          </div>
          <div className='ml-5'>
            <Button label='Rank #1' severity='secondary' size='small' />
          </div>
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <span className='text-2xl font-bold'>$46,953.04</span>{" "}
          <span className='bg-green-100 ml-3'>
            <i className='pi pi-caret-up' style={{ color: "green" }}></i>
            2.51%
          </span>
          <span>(24H)</span>
          <br />
          <span>&#8377;39,42,343</span>
        </div>

        <div className='h-25rem'>
          <Graph />
        </div>
      </Card>
    </>
  );
};
