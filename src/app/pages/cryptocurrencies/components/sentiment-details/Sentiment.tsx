import React, { useState, useEffect } from "react";
import { Button } from "primereact/button";
import { Carousel } from "primereact/carousel";
import { ProgressBar } from "primereact/progressbar";
import { Card } from "primereact/card";

export default function Sentiment() {
  const responsiveOptions = [
    {
      breakpoint: "1400px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "1199px",
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: "767px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "575px",
      numVisible: 1,
      numScroll: 1,
    },
  ];
  const products = [
    {
      id: 1,
      name: "Product 1",
      price: 50,
      image: "product1.jpg",
      inventoryStatus: "In Stock",
    },
    {
      id: 2,
      name: "Product 2",
      price: 60,
      image: "product2.jpg",
      inventoryStatus: "Out of Stock",
    },
    {
      id: 3,
      name: "Product 3",
      price: 70,
      image: "product3.jpg",
      inventoryStatus: "Low Stock",
    },
    {
      id: 4,
      name: "Product 4",
      price: 80,
      image: "product4.jpg",
      inventoryStatus: "In Stock",
    },
    {
      id: 5,
      name: "Product 5",
      price: 90,
      image: "product5.jpg",
      inventoryStatus: "Out of Stock",
    },
    {
      id: 6,
      name: "Product 6",
      price: 100,
      image: "product6.jpg",
      inventoryStatus: "Low Stock",
    },
  ];

  const productTemplate = (product) => {
    return (
      <div className='border-1 surface-border border-round m-2 text-center py-5 bg-green-50'>
        <div className='flex'>
          <i
            className='pi pi-check-circle mr-2'
            style={{ fontSize: "2rem" }}
          ></i>
          <div className='text-justify'>
            <p>
              <b>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Dignissimos voluptatibus
              </b>
              <br />
              <br />
              quidem tempora, nisi nostrum facere earum molestiae minus commodi
              impedit eos sed libero ex quibusdam nesciunt debitis. Debitis eum,
              explicabo eligendi laudantium provident in voluptatum corrupti
              blanditiis quis saepe perferendis?
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className='mt-3'>
      <Card title='Sentiment'>
        <div className='mb-1 font-bold'>
          Key Events <i className='pi pi-info-circle'></i>
        </div>
        <div>
          <Carousel
            value={products}
            numVisible={2}
            numScroll={2}
            responsiveOptions={responsiveOptions}
            itemTemplate={productTemplate}
            showIndicators={false}
          />
        </div>
        <div className='mt-5 font-bold'>
          <div>
            Analyst Estimates<i className='pi pi-info-circle ml-2'></i>
          </div>
          <div className='flex mt-1 w-12'>
            <div className='col-1 mr-8'>
              <div className='border-circle w-6rem h-6rem mt-2 bg-green-50 font-bold flex align-items-center justify-content-center text-green-600'>
                76%
              </div>
            </div>
            <div className='col-5 mt-3 ml-5'>
              <div className='flex justify-content-between align-items-center mb-2'>
                <span className='mr-2'>Buy</span>
                <ProgressBar
                  value={50}
                  style={{ height: "0.5rem", width: "80%" }}
                  showValue={false}
                  color='green'
                />
                <span className='ml-2'>76%</span>
              </div>

              <div className='flex justify-content-between align-items-center mb-2'>
                <span className='mr-2'>Hold</span>
                <ProgressBar
                  value={8}
                  style={{ height: "0.5rem", width: "80%" }}
                  showValue={false}
                  color='grey'
                />
                <span className='ml-2'> 8%</span>
              </div>
              <div className='flex justify-content-between align-items-center'>
                <span className='mr-2'>Sell</span>
                <ProgressBar
                  value={16}
                  style={{ height: "0.5rem", width: "80%" }}
                  showValue={false}
                  color='red'
                />
                <span className='ml-2'>16%</span>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
