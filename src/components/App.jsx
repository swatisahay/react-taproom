import React from 'react';

import { Switch, Route } from 'react-router-dom';

import About from './About';
import Keglist from './Keglist';

import Header from './Header';
import NewBeerKegControl from './NewBeerKegControl';
import Home from './Home';
import Error404 from './Error404';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterKegList: []
    };
    this.handleAddingNewKegToList = this.handleAddingNewKegToList.bind(this);
  }

  handleAddingNewKegToList(newKeg){
    var newMasterKegList = this.state.masterKegList.slice();
    newMasterKegList.push(newKeg);
    this.setState({masterKegList: newMasterKegList});
  }

  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route exact path='/keg' render={()=><Keglist kegList={this.state.masterKegList} />} />
          <Route path='/newkeg' render={()=><NewBeerKegControl onNewKegCreation={this.handleAddingNewKegToList} />} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }

}

export default App;
