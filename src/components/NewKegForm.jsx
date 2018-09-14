import React from 'react';
import taproom from '../assets/images/taproom.jpg';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';

function NewKegForm(props) {

    let _name = null;
    let _brewer = null;
    let _description = null;
    let _abv=null;
    let _price=null;
    let _kegremaining=null;


  function handleNewKegFormSubmit(event) {
    event.preventDefault();
    props.onNewKegCreation({name: _name.value, brewer: _brewer.value, description: _description.value, abv: _abv.value, price: _price.value, kegremaining: _kegremaining.value, id: v4()});
    _name.value = '';
    _brewer.value = '';
    _description.value = '';
    _abv.value='';
    _price.value='';
    _kegremaining.value='';
  }

  return (
    <div>
      <h3>Write a Post</h3>
      <form onSubmit={handleNewKegFormSubmit}>
        <input
          className="form-control"
          type='text'
          id='name'
          placeholder='Name'
          ref={(input) => {_name = input;}}/>
        <input
          className="form-control"
          type='text'
          id='brewer'
          placeholder='Brewer'
          ref={(input) => {_brewer = input;}}/>
        <textarea
          className="form-control"
          id='description'
          placeholder='Description'
          ref={(textarea) => {_description = textarea;}}/>
          <input
            className="form-control"
            type='text'
            id='abv'
            placeholder='ABV%'
            ref={(input) => {_abv = input;}}/>
            <input
              className="form-control"
              type='text'
              id='price'
              placeholder='Price'
              ref={(input) => {_price = input;}}/>
              <input
                className="form-control"
                type='number'
                id='kegremaining'
                placeholder='Pints remaining'
                ref={(input) => {_kegremaining = input;}}/>

        <button className="btn btn-dark" type='submit'>Add!</button>
      </form>
      <style jsx>{`
        .form-control {
          margin-bottom: 20px;
        }
        h3 {
          text-align: center;
        }
      `}</style>
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

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;
