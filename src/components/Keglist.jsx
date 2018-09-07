import React from 'react';
import Keg from './Keg';

import taproom from '../assets/images/taproom.jpg';
const keglist = [
    {
    name: 'Farmstrong cold beer',
    brewer: 'pilsner',
    description: 'Sparkling Wine & Grapefruit',
    abv: '6.8%',
    price: '8',
    kegremaining: '20'
    },
    {
    name: 'Tart N Juicy',
    brewer: 'Epic',
    description: 'Sour IPA',
    abv: '4.5%',
    price: '6',
    kegremaining: '60'
    },
    {
    name: 'Hamm\'s',
    brewer: 'Miller/Coors',
    description: 'American Lager',
    abv: '4.7%',
    price: '3',
    kegremaining: '65'
    },
    {
    name: 'Prismatic',
    brewer: 'Ninkasi',
    description: 'Juicy IPA',
    abv:  '5.9%',
    price: '6',
    kegremaining: '75'
    },
    {
    name: 'Juicy Haze',
    brewer: 'New Belgium',
    description: 'India Pale Ale',
    abv:  '7.5%',
    price: '6',
    kegremaining: '18'
    },
    {
    name: '8 Hop',
    brewer: 'New Belgium',
    description: 'Pale Ale',
    abv:  '5.5%',
    price: '6',
    kegremaining: '58'
    }
];

function Keglist(){
  return(
    <div>
      <h2>Keglist</h2>

      <hr/>
      {keglist.map((kegList, index) =>
        <Keg name={kegList.name}
          brewer={kegList.brewer}
          description={kegList.description}
          abv={kegList.abv}
          price={kegList.price}
          kegremaining={kegList.kegremaining}

          key ={index}/>
      )}
      <style jsx>{`
        img {
          width:100%;
          border-radius: 30px;
        }
        h2 {
          text-align: center;
          font-size: 100px;
          color: #824c56;
        }
      `}</style>
    <style global jsx>{`
        body {
          background-image: url(${taproom});
          background-size: cover;
          background-repeat:no-repeat;
        }
      `}</style>
    </div>
  );
}

export default Keglist;
