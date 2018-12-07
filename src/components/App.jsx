import React from 'react';
//import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Data from './Data';

import { Link } from 'react-router-dom';
  <Link to="/">Home</Link> | <Link to="/newticket">Create Ticket</Link>;


function App(){
  var styles = {
  };
  return (
    <div style={styles}>
      <style jsx>{`
        font-family: Helvetica;
      `}</style>
      <Header/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/data' component={Data} />        
      </Switch>
    </div>
  );
}

//App.propTypes = {
//};

export default App;
