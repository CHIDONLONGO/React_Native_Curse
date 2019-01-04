import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import {ScrollView } from "react-native";

import BackgroundImage from "../../components/BackgroundImage";
import Restaurant from '../../components/Restaurant/Restaurant';

export default class DetailRestaurant extends Component {
  constructor(props) {
    super(props);
    const {params} = props.navigation.state;
    this.state = {
        restaurant: params.restaurant
    };
  }

  editRestaurant(){

  }

  goHome(){

  }

  render() {
      const {restaurant}= this.state;
    return (
      <BackgroundImage source={require('../../assets/images/reimi.jpg')} >
          <ScrollView>
            <Restaurant
              goHome={this.goHome.bind(this)}
              editRestaurant={this.editRestaurant.bind(this)}
              restaurant={restaurant}
            />
          </ScrollView>
      </BackgroundImage>
    );
  }
}
