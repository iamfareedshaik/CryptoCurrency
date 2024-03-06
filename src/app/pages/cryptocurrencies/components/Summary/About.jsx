import React from "react";
import { Divider } from "primereact/divider";
import { Card } from "primereact/card";

export default function About() {
  return (
    <div className='mt-3'>
      <Card title='About Bitcoin'>
        <div className='card'>
          <p className='mb-3'>
            <b>What is Bitcoin?</b> <br />
            <div className='mt-2'>
              Bitcoin's price today is US$16,951.82, with a 24-hour trading
              volume of $19.14 B. BTC is +0.36% in the last 24 hours. It is
              currently -7.70% from its 7-day all-time high of $18,366.66, and
              3.40% from its 7-day all-time low of $16,394.75. BTC has a
              circulating supply of 19.24 M BTC and a max supply of 21 M BTC.
            </div>
          </p>
          <Divider />
          <p className='mb-3 mt-3'>
            <b>Lorem ipsum dolor sit, amet consectetur adipisicing elit</b>
            <br />
            <br />
            Labore nisi maiores nesciunt assumenda iure ipsum ad velit quas quis
            temporibus qui, a ipsam vitae, aut corrupti inventore dolores.
            Saepe, asperiores. Sed ut perspiciatis unde omnis iste natus error
            sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
            eaque ipsa quae ab illo inventore veritatis et quasi architecto
            beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
            voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
            magni dolores eos qui ratione voluptatem sequi nesciunt.
            Consectetur, adipisci velit, sed quia non numquam eius modi.
            <br />
            <br />
            Labore nisi maiores nesciunt assumenda iure ipsum ad velit quas quis
            temporibus qui, a ipsam vitae, aut corrupti inventore dolores.
            Saepe, asperiores. Sed ut perspiciatis unde omnis iste natus error
            sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
            eaque ipsa quae ab illo inventore veritatis et quasi architecto
            beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
            voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
            magni dolores eos qui ratione voluptatem sequi nesciunt.
            Consectetur, adipisci velit, sed quia non numquam eius modi.
            <br />
            <br />
            Labore nisi maiores nesciunt assumenda iure ipsum ad velit quas quis
            temporibus qui, a ipsam vitae, aut corrupti inventore dolores.
            Saepe, asperiores. Sed ut perspiciatis unde omnis iste natus error
            sit voluptatem accusantium doloremque laudantium,
          </p>
          <Divider />
          <div className='mt-3 mb-3 font-bold text-2xl'>
            <div>Already Holding Bitcoin?</div>
          </div>
          <Divider />
          <div className='mt-3 mb-3'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            magni placeat perferendis illo harum illum. Lorem ipsum dolor, sit
            amet consectetur adipisicing elit. Mollitia, eligendi doloribus
            adipisci quia quis modi!
          </div>
        </div>
      </Card>
    </div>
  );
}
