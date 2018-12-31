import React, { Component } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import BackgroundImage from "../../components/BackgroundImage";
import PreLoader from '../../components/PreLoader';
import {ListItem} from "react-native-elements";
import * as firebase from 'firebase';
import {NavigationActions} from 'react-navigation';
import RestaurantEmpty from "../../components/Restaurant/RestaurantEmpty";
import RestaurantAddButton from "../../components/Restaurant/RestaurantAddButton";



export default class Restaurant extends Component {
  constructor() {
   
  }

  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    );
  }
}
