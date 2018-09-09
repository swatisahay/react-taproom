import React from 'react';

import { Switch, Route } from 'react-router-dom';

import About from './About';
import Keglist from './Keglist';

import Header from './Header';
import NewKegForm from './NewKegForm';
import Home from './Home';
import Error404 from './Error404';


function App(){
  return(
    <div className="container">
      <Header/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/keg' component={Keglist} />
        <Route path='/beerform' component={NewKegForm} />
        <Route component={Error404} />



      </Switch>

    </div>

  );
}

export default App;
