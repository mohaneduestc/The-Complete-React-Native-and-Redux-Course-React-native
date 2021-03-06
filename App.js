import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Header from './src/components/Header';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './src/components/theRedux/reducers'
import firebase from 'firebase'
// import LoginForm from './src/components/fullApp/LoginForm';
import ReduxThunk from 'redux-thunk';
import Router from './src/components/fullApp/Router';



class App extends Component {
  
  componentDidMount(){
    const firebaseConfig = {
        apiKey: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
        authDomain: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
        databaseURL: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
        projectId: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
        storageBucket: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
        messagingSenderId: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
        appId: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
        measurementId: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
      };
    firebase.initializeApp(firebaseConfig);
}
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
        <Router />
      <Provider store={store} >
        {/* <LoginForm/> */}
      </Provider>
    );
  }
}

export default App;
