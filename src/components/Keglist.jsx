import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';
import taproom from '../assets/images/taproom.jpg';


function Keglist(props){
  return(
    <div>
      <h2>Keglist</h2>

      <hr/>
      {props.kegList.map((kegList) =>
        <Keg name={kegList.name}
          brewer={kegList.brewer}
          description={kegList.description}
          abv={kegList.abv}
          price={kegList.price}
          kegremaining={kegList.kegremaining}
          id={kegList.id}
          onClickBuy={kegList.onClickBuy}

          key ={kegList.id}/>
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
Keglist.propTypes = {
  kegList: PropTypes.array,
  onClickBuy: PropTypes.func
};
export default Keglist;
