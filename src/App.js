import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shopage.component';
import Header from './components/header/header.component';
import SignAndSignOutPage from './pages/sign-in-and-sign-out/sign-in-and-sign-out.component'
import {auth, createUserProfileDocument} from './firebase/firebase.utils'
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.actions';

class App extends React.Component{

  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapshot) =>{
          this.props.setCurrentUser({
                id: snapshot.id,
                ...snapshot.data()
          });
        });
      } else {
        this.props.setCurrentUser(userAuth);
      }
    });
  }
  componentWillUnmount = () => {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header></Header>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" render={()=> this.props.currentUser ? <Redirect to='/' />:<SignAndSignOutPage/> } />
        </Switch>
      </div>
      );
  }  
}
const mapDispatchToParams = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
  });

const mapStateToParams = state => ({
  currentUser: state.user.currentUser
})
export default connect(mapStateToParams, mapDispatchToParams)(App);
