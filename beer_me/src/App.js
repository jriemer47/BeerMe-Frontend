import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { isEmpty } from './utils/LangUtils';
import Navbar from './components/Navbar/Navbar';
import Login from './components/Login/Login';
import Main from './components/Main/Main';
import BeerPage from './components/BeerPage/BeerPage';

import Signup from './components/Signup/Signup';
import LoginPageContainer from './redux/containers/LoginPageContainer';
import { Provider } from 'react-redux';
import { fetchBeers } from './redux/actions/beers';
import { fetchBreweries } from './redux/actions/breweries';
import { featureBrewery } from './redux/actions/featureBrewery';
import { getAuth } from './redux/actions/auth_actions';
import auth_actions from './redux/actions/auth_actions';
import { connect } from 'react-redux';

import BreweryPage from './components/BreweryPage/BreweryPage';
import FeatureBreweryPage from './components/FeatureBreweryPage/FeatureBreweryPage';


import setupStore from './redux/store';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';


const store = setupStore();

store.dispatch(fetchBeers());
store.dispatch(getAuth());
store.dispatch(fetchBreweries());
store.dispatch(featureBrewery(1));

export default class App extends Component {
  render() {
    console.log(this.state);
    return (
      <div>
        <Provider store={store}>
          <Router>
            <div>
              <Navbar />
              <Route
                exact
                path="/"
                component={() => <Redirect to="/cheers" />}
              />
              <Route exact path="/login" component={LoginPageContainer} />
              <Route path="/cheers" render={props => <Main />} />
              <Route path="/beers" render={props => <BeerPage />} />
              <Route path="/signup" component={Signup} />
              <Route exact path="/breweries" render={props => <BreweryPage />} />
              <Route
                exact
                path="/breweries/:id"
                render={props => <FeatureBreweryPage />}
            </div>
          </Router>
        </Provider>
      </div>
    );
  }
}

const mapDispatchToProps = () => {
  return { auth: auth_actions.getAuth() };

connect(mapDispatchToProps)(App);
