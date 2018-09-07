import React from 'react';
import taproom from '../assets/images/taproom.jpg';

function NewKegForm() {
  return (
    <div>
      <h1>Add a new beer keg</h1>
      <form>
        <label for="name">Name:</label><br/>
        <input type='text' id='name' /> <br/>
        <label for="brewer">Brewer:</label><br/>
        <input type='text' id='brewer' /> <br/>
        <label for="description">Description:</label><br/>
        <input type='text' id='description' /> <br/>
        <label for="abv">ABV%:</label><br/>
        <input type='text' id='abv' /> <br/>
        <label for="price">Price</label><br/>
        <input type='text' id='price' /> <br/>
        <label for="remaining">Pints remaining</label><br/>
        <input type='text' id='remaining' /> <br/><br/>
        <button type='submit'>Add Beer</button>
      </form>
      <style jsx>{`
        form{
          text-align: center;


        }
        h1{
          text-align: center;

        }

      `}

      </style>
      <style global jsx>{`
          body {
            background-color: #D2691E;
            background-size: cover;
            background-repeat:no-repeat;
          }
        `}</style>


    </div>

  );
}

export default NewKegForm;
