import React from 'react';
import ConfirmationQuestion from './ConfirmationQuestion';
import NewKegForm from './NewKegForm';
import PropTypes from 'prop-types';

class NewBeerKegControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    this.handleConfirmationQuestion = this.handleConfirmationQuestion.bind(this);
  }

  handleConfirmationQuestion(){
    this.setState({formVisibleOnPage: true});
  }
  render(){
    let currentlyVisibleContent = null;
    if(this.state.formVisibleOnPage){
      currentlyVisibleContent = <NewKegForm onNewKegCreation={this.props.onNewKegCreation}/>;
    } else {
      currentlyVisibleContent = <ConfirmationQuestion onConfirmationQuestion={this.handleConfirmationQuestion}/>;
    }
    return (
      <div>
        {currentlyVisibleContent}
      </div>
    );
  }
}

NewBeerKegControl.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewBeerKegControl;
