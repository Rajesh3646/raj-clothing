import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shopage.component';
import Header from './components/header/header.component';
import SignAndSignOutPage from './pages/sign-in-and-sign-out/sign-in-and-sign-out.component'
function App() {
  return (
    <div>
      <Header></Header>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={SignAndSignOutPage} />
      </Switch>
    </div>
    );
}

export default App;
