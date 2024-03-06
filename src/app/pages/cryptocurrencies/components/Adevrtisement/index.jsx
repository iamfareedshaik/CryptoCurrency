import React from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import koinx from "../../../../../Koinx.png";

export const Advertisement = () => {
  return (
    <>
      <div className='text-center advertise'>
        <Card>
          <div>
            <h2>Get Started with KoinX for Free</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              at reiciendis magnam repudiandae aliquid tempore?
            </p>
            <br />
            <img src={koinx} className='bg-white' />
            <br />
            <Button
              label='Get Started for Free'
              severity='secondary'
              text
              raised
            />
          </div>
        </Card>
      </div>
      <div className='mt-3'>
        <Card title='Trending Coins (24h)'>
          <div>
            <div className='mb-2 flex justify-content-between'>
              <span>Etherium(ETH)</span>
              <span className='bg-green-100'>
                <i className='pi pi-caret-up' style={{ color: "green" }}></i>
                8.21%
              </span>
            </div>
            <div className='mb-2 flex justify-content-between'>
              <span>Bitcoin(BTC)</span>
              <span className='bg-green-100'>
                <i className='pi pi-caret-up' style={{ color: "green" }}></i>
                5.26%
              </span>
            </div>
            <div className='mb-0 flex justify-content-between'>
              <span>Polygon(MATIC)</span>
              <span className='bg-green-100'>
                <i className='pi pi-caret-up' style={{ color: "green" }}></i>
                4.32%
              </span>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};
