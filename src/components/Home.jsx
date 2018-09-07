import React from 'react';
import taproom from '../assets/images/taproom.jpg';
function Home(){
  return(
    <div>
      <img src={taproom} />
      <style jsx>{`
        img {
          width: 100%;
        }
      `}</style>
      <style global jsx>{`
        body {
          background-color: #3f53c6;
        }
      `}</style>
    </div>
  );
}

export default Home;
