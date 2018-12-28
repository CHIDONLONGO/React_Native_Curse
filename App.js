import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppButton from './components/AppButton'
import PreLoader from './components/PreLoader';
import BackgraundImage from './components/BackgroundImage';
import Start from './screens/start';
import firebaseConfig from './utils/firebase';
import * as firebase from 'firebase';
firebase.initializeApp(firebaseConfig);

export default class App extends React.Component {
  render() {
    return (

      <BackgraundImage
        source={require('./assets/images/reimi.jpg')}
      >
      <Start></Start>
      </BackgraundImage>

    );
  }
}


