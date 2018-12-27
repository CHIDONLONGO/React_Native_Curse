import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppButton from './components/AppButton'
import PreLoader from './components/PreLoader';
import BackgraundImage from './components/BackgroundImage';

export default class App extends React.Component {
  render() {
    return (

      <BackgraundImage
        source={require('./assets/images/reimi.jpg')}
      >
      </BackgraundImage>

    );
  }
}


