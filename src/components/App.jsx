import React from 'react';

import { Switch, Route } from 'react-router-dom';

import About from './About';
import Keglist from './Keglist';

import Header from './Header';
import NewBeerKegControl from './NewBeerKegControl';
import Home from './Home';
import Error404 from './Error404';
import { v4 } from 'uuid';

class App extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
     masterKegList: [
      {
        name: 'Ruby Zozzle',
        brewer: 'Hi-Wheel',
        description: 'Sparkling Wine & Grapefruit',
        abv: '6.8%',
        price: '7',
        kegremaining: 20
      },
      {
        name: 'Tart N Juicy',
        brewer: 'Epic',
        description: 'Sour IPA',
        abv: '4.5%',
        price: '6',
        kegremaining: 60
      },
      {
        name: 'Hamm\'s',
        brewer: 'Miller/Coors',
        description: 'American Lager',
        abv: '4.7%',
        price: '3',
        kegremaining: 65
      },
      {
        name: 'Prismatic',
        brewer: 'Ninkasi',
        description: 'Juicy IPA',
        abv:  '5.9%',
        price: '6',
        kegremaining: 75
      },
      {
        name: 'Juicy Haze',
        brewer: 'New Belgium',
        description: 'India Pale Ale',
        abv:  '7.5%',
        price: '6',
        kegremaining: 18
      },
      {
        name: '8 Hop',
        brewer: 'New Belgium',
        description: 'Pale Ale',
        abv:  '5.5%',
        price: '6',
        kegremaining: 58
      }
    ]

    };
    this.handleAddingNewKegToList = this.handleAddingNewKegToList.bind(this);
    this.handleSellingPint = this.handleSellingPint.bind(this);
  }

  handleAddingNewKegToList(newKeg){
    var newMasterKegList = this.state.masterKegList.slice();
    newMasterKegList.push(newKeg);
    this.setState({masterKegList: newMasterKegList});
  }
  handleSellingPint(id){
    var newMasterKegList = this.state.masterKegList.slice();
    newMasterKegList.map((keg) => {
      if(keg.id === id) {
        keg.kegremaining -= 1;
      }
    });
    this.setState({masterKegList: newMasterKegList});
  }

  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route exact path='/keg' render={()=><Keglist kegList={this.state.masterKegList}
          onSellingPint={this.handleSellingPint} />} />
          <Route path='/newkeg' render={()=><NewBeerKegControl onNewKegCreation={this.handleAddingNewKegToList} />} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }

}

export default App;
