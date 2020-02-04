import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {HashRouter as Router, Route} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';
import Landing from './components/home/Landing';
import Movie from './components/home/Movie';

import store from './store';

class App extends Component {
  render() {
    return(
      <Provider store={store}>
        <Router>
          <NavBar/>
          <Route exact path='/' component={Landing}/>
          <Route exact path='/movie/:id' component={Movie}/>
          <Footer/>
        </Router>
      </Provider>
    );
  }
}

export default App;
