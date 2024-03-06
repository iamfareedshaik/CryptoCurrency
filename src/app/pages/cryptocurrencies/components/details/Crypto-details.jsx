import React from "react";
import { TabView, TabPanel } from "primereact/tabview";
import { Card } from "primereact/card";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

import "./Cryptodetail.css";

export default function CryptoDetails() {
  const data = [
    { id: 1, row: "Bitcoin Price", value: "$16,815.46" },
    { id: 2, row: "24h Low / 24h High", value: "$16,382.07 / $16,874.12" },
    { id: 3, row: "7d Low / 7d High", value: "$16,382.07 / $16, 874.12" },
    { id: 4, row: "Trading Volume", value: "$23,249,202,782" },
    { id: 5, row: "Market Cap Rank", value: "#1" },
  ];

  const data2 = [
    { id: 1, row: "Market Cap", value: "$323,507,290,047" },
    { id: 2, row: "Market Cap Dominance", value: "38.343%" },
    { id: 3, row: "Volume / Market Cap", value: "0.0718" },
    { id: 4, row: "All-Time High", value: "$69,044.77" },
    { id: 5, row: "All-Time Low", value: "$67.81" },
  ];
  return (
    <div className='card mt-5'>
      <TabView>
        <TabPanel header='Overview'>
          <div>
            <Card title='Performance'>
              <div className='horizontal-row'>
                <div>
                  <div>Today's Low</div>
                  <div>46,930.22</div>
                </div>
                <img />
                <div>
                  <div>Today's High</div>
                  <div>49,343.83</div>
                </div>
              </div>
              <div className='horizontal-row'>
                <div>
                  <div>52W Low</div>
                  <div>16,930.22</div>
                </div>
                <img />
                <div>
                  <div>52W High</div>
                  <div>49,743.83</div>
                </div>
              </div>
              <div>
                Fundamentals <i className='pi pi-info-circle'></i>
              </div>
              <div className='horizontal-row-datatable'>
                <div>
                  <DataTable value={data}>
                    <Column field='row'></Column>
                    <Column field='value'></Column>
                  </DataTable>
                </div>
                <div>
                  <DataTable value={data2}>
                    <Column field='row' header=''></Column>
                    <Column field='value' header=''></Column>
                  </DataTable>
                </div>
              </div>
            </Card>
          </div>
        </TabPanel>
        <TabPanel header='Fundamentals'>
          <Card title='Simple Card'>
            <p className='m-0'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Inventore sed consequuntur error repudiandae numquam deserunt
              quisquam repellat libero asperiores earum nam nobis, culpa ratione
              quam perferendis esse, cupiditate neque quas!
            </p>
          </Card>
        </TabPanel>
        <TabPanel header='News Insights'>
          <Card title='Simple Card'>
            <p className='m-0'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Inventore sed consequuntur error repudiandae numquam deserunt
              quisquam repellat libero asperiores earum nam nobis, culpa ratione
              quam perferendis esse, cupiditate neque quas!
            </p>
          </Card>
        </TabPanel>
        <TabPanel header='Sentiments'>
          <Card title='Simple Card'>
            <p className='m-0'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Inventore sed consequuntur error repudiandae numquam deserunt
              quisquam repellat libero asperiores earum nam nobis, culpa ratione
              quam perferendis esse, cupiditate neque quas!
            </p>
          </Card>
        </TabPanel>
        <TabPanel header='Team'>
          <Card title='Simple Card'>
            <p className='m-0'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Inventore sed consequuntur error repudiandae numquam deserunt
              quisquam repellat libero asperiores earum nam nobis, culpa ratione
              quam perferendis esse, cupiditate neque quas!
            </p>
          </Card>
        </TabPanel>
        <TabPanel header='Technicals'>
          <Card title='Simple Card'>
            <p className='m-0'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Inventore sed consequuntur error repudiandae numquam deserunt
              quisquam repellat libero asperiores earum nam nobis, culpa ratione
              quam perferendis esse, cupiditate neque quas!
            </p>
          </Card>
        </TabPanel>
        <TabPanel header='Tokenomics'>
          <Card title='Simple Card'>
            <p className='m-0'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Inventore sed consequuntur error repudiandae numquam deserunt
              quisquam repellat libero asperiores earum nam nobis, culpa ratione
              quam perferendis esse, cupiditate neque quas!
            </p>
          </Card>
        </TabPanel>
      </TabView>
    </div>
  );
}
