import React from 'react';

import { Switch, Route } from 'react-router-dom';

// import About from './About';

import Header from './Header';
import Home from './Home';


function App(){
  return(
    <div className="container">
      <Header/>
      <Switch>
        <Route exact path='/' component={Home} />


      </Switch>

    </div>

  );
}

export default App;
