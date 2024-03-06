import { Card } from "primereact/card";
import React from "react";
import "./index.css";

export const TeamDetails = () => {
  return (
    <div className='mt-3'>
      <Card title='Team'>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            esse sunt odio nam consectetur iure corrupti molestiae
            necessitatibus provident molestias dignissimos, veniam maxime cum.
            Earum distinctio fugiat, unde ipsam dolore sint magni iure saepe
            velit officiis nostrum alias ipsa. Non officia eum deleniti at sunt,
            dolorum quos natus nihil minima.
          </p>
        </div>
        <div className='grid mt-3 bg-blue-100 border-round'>
          <div className='col-2 full-width text-center'>
            <div className='m-2'>
              <img
                src='https://robbreport.com/wp-content/uploads/2021/05/Dorian_Nakamoto.jpg'
                className='w-12 h-5rem shadow-2 border-round'
              />
              <h4>Nakamoto</h4>
              <p>Designation here</p>
            </div>
          </div>
          <div className='col-9 full-width-inner'>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              facilis officia ipsum laudantium voluptatibus ducimus recusandae
              tenetur et, dignissimos aperiam impedit veniam inventore iusto,
              veritatis libero placeat ratione numquam neque nihil non debitis
              illum ipsa modi culpa. Quaerat error neque, alias fugit similique
              nihil a obcaecati commodi voluptatibus quam numquam?
            </div>
          </div>
        </div>
        <div className='grid mt-3 bg-blue-100 border-round'>
          <div className='col-2 full-width text-center'>
            <div className='m-2'>
              <img
                src='https://robbreport.com/wp-content/uploads/2021/05/Dorian_Nakamoto.jpg'
                className='w-12 h-5rem shadow-2 border-round'
              />
              <h4>Ellian Williams</h4>
              <p>Designation here</p>
            </div>
          </div>
          <div className='col-9 full-width-inner'>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              facilis officia ipsum laudantium voluptatibus ducimus recusandae
              tenetur et, dignissimos aperiam impedit veniam inventore iusto,
              veritatis libero placeat ratione numquam neque nihil non debitis
              illum ipsa modi culpa. Quaerat error neque, alias fugit similique
              nihil a obcaecati commodi voluptatibus quam numquam?
            </div>
          </div>
        </div>
        <div className='grid mt-3 bg-blue-100 border-round'>
          <div className='col-2 full-width text-center'>
            <div className='m-2'>
              <img
                src='https://robbreport.com/wp-content/uploads/2021/05/Dorian_Nakamoto.jpg'
                className='w-12 h-5rem shadow-2 border-round'
              />
              <h4>John Smith</h4>
              <p>Designation here</p>
            </div>
          </div>
          <div className='col-9 full-width-inner'>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              facilis officia ipsum laudantium voluptatibus ducimus recusandae
              tenetur et, dignissimos aperiam impedit veniam inventore iusto,
              veritatis libero placeat ratione numquam neque nihil non debitis
              illum ipsa modi culpa. Quaerat error neque, alias fugit similique
              nihil a obcaecati commodi voluptatibus quam numquam?
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};
