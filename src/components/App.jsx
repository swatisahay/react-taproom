import React from 'react';

import { Switch, Route } from 'react-router-dom';
import Keglist from './Keglist';
import About from './About';

import Header from './Header';
import Home from './Home';


function App(){
  return(
    <div className="container">
      <Header/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />

        <Route path='/keglist' component={Keglist} />

      </Switch>

    </div>

  );
}

export default App;
