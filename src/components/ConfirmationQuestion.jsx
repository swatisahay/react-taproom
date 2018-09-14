import React from 'react';
import PropTypes from 'prop-types';

function ConfirmationQuestion(props){
  return (
    <div>
      <h3>Do you want to add a new beer keg?</h3>

      <button className="btn btn-warning" onClick={props.onConfirmationQuestion}>Yes!</button>
    </div>
  );
}
ConfirmationQuestion.propTypes = {
  onConfirmationQuestion: PropTypes.func
};
export default ConfirmationQuestion;
