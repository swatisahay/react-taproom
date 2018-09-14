import React from 'react';
import PropTypes from 'prop-types';

function Keg(props){
  return(
    <div className = "card">
      <img className="card-img-top" src={props.image}/>
      <h3 className = "card-title">{props.name}</h3>
      <div className = "card-body">
        <p><strong>Brewer:</strong> {props.brewer}</p>
        <p><strong>Description:</strong> {props.description}</p>

        <p><strong>ABV:</strong> {props.abv}</p>
        <p><strong>Price:</strong> {props.price}</p>
        <p><strong>Pints Remaining:</strong> {props.kegremaining}</p>

      </div>
      <style jsx>
        {`h3 {
            font-size: 70px;
            text-align: center;
          }
          .card {
            background-color: #824c56;
            margin-bottom: 30px;
            border: 3px solid black;
            border-radius: 10px;
          }
          .card:hover{
            background-color: #c9808e;
          }
          img{
            object-fit: cover;
            width:100%;
            height: 60%;
          }
          .card-body{
            padding-left: 20%;
          }
          p, li{
            font-size: 30px;
          }
        `}

      </style>
    </div>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brewer: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  abv: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  kegremaining: PropTypes.number.isRequired
};

export default Keg;
