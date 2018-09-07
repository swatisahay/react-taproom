import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return(
    <div className="jumbotron">
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css?family=Permanent+Marker');
        h1 {
          font-family: 'Permanent Marker', cursive;
          text-align: center;
          font-size: 90px;
        }
        h2 {
          text-align: center;
          font-size: 70px;
        }
        .links {
          text-align: center;
        }
      `}</style>
      <h1>Taproom</h1>

      <div className="links"><Link to="/">Home</Link> | <Link to="/keg">Beer Keg List</Link> | <Link to="/about">About Us</Link> | <Link to="/beerform">New Beer Keg Form</Link> </div>
    </div>

  );
}

export default Header;
