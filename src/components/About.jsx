import React from 'react';
import beer from '../assets/images/beer.jpg';
function About(){
  return(
    <div>
      <h3>About Us</h3>
      <p>Taproom — a specialty brewpub and beer garden serving the West Seattle community with a rotating lineup of Washington only beer, ciders & wine on 30 taps — all in a comfortable, yet trendy indoor / outdoor space open to all ages (and pets).</p>
      <img src={beer} />
      <style jsx>{`
        img {
          width: 100%;
        }
      `}</style>
      <style global jsx>{`
        body {
          background-color: #cc6600;
        }
      `}</style>
    </div>
  );
}

export default About;
