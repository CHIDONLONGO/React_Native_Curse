import React from 'react';
import PreLoader from './components/PreLoader';
import firebaseConfig from './utils/firebase';
import * as firebase from 'firebase';
firebase.initializeApp(firebaseConfig);

import GuestNavigation from './navigations/guest';

export default class App extends React.Component {
  render() {
    return (

      <GuestNavigation/>

    );
  }
}


