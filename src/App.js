import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyCv114llo6A13OdLooxHnMOERI2naQ45rk',
      authDomain: 'manager-90200.firebaseapp.com',
      databaseURL: 'https://manager-90200.firebaseio.com',
      projectId: 'manager-90200',
      storageBucket: 'manager-90200.appspot.com',
      messagingSenderId: '340340594184'
    };
    firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
