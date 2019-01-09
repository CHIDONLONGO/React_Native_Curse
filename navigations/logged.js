import React from 'react';
import RestaurantsScreen from "../screens/Restaurants/Restaurants";
import LogoutScreen from "../screens/Logout"

import { DrawerNavigator, StackNavigator } from "react-navigation";
import Icon from 'react-native-vector-icons/FontAwesome';

import AddRestaurantScreen from "../screens/Restaurants/AddRestaurant"
import DetailRestaurantScreen from "../screens/Restaurants/DetailRestaurant";
import EditRestaurantScreen from "../screens/Restaurants/EditRestaurant";
import ProfileScreen from "../screens/Profile";

const navigationOptions = {
    navigationOptions: {
        headerStyle: {
            backgroundColor: 'rgba(200,38,74,1)'
        },
        headerTitleStyle: {
            textAlign: 'center',
            alignSelf: 'center',
            fontSize: 20,
            color: '#fff',
            fontWeight: 'bold'
        }
    }
};

const leftIcon = (navigation, icon) => <Icon
    name={icon}
    style={{ marginLeft: 20 }}
    size={20}
    color="white"
    onPress={() => navigation.navigate('DrawerOpen')}
/>;

const rightIcon = (navigation, icon) => <Icon
    name={icon}
    style={{ marginRight: 20 }}
    size={20}
    color="white"
    onPress={() => navigation.navigate('ListRestaurants')}
/>;

const restaurantsScreenStack = StackNavigator(
    {
        ListRestaurants: {
            screen: RestaurantsScreen,
            navigationOptions: ({ navigation }) => ({
                title: 'Restaurantes',
                drawerIcon: ({ tintColor }) => (<Icon name="home" size={24} style={{ color: tintColor }} />),
                headerLeft: leftIcon(navigation, 'bars')
            })
        },
        AddRestaurant: {
            screen: AddRestaurantScreen,
            navigationOptions: ({ navigation }) => ({
                title: 'Añadir restaurante',
                headerRight: rightIcon(navigation, 'home'),
                headerLeft: leftIcon(navigation, 'bars')
            })
        },
        DetailRestaurant: {
            screen: DetailRestaurantScreen,
            navigationOptions: ({ navigation }) => ({
                title: 'Detalle del restaurante',
                headerRight: rightIcon(navigation, 'home'),
                headerLeft: leftIcon(navigation, 'bars')
            })
        },
        EditRestaurant: {
            screen: EditRestaurantScreen,
            navigationOptions: ({ navigation }) => ({
                title: 'Edit restaurante',
                headerRight: rightIcon(navigation, 'home'),
            })
        },
    },
    navigationOptions
);

const profileScreenStack = StackNavigator(
    {
        ProfileScreen:{
            screen: ProfileScreen,
            navigationOptions:({navigation}) =>({
                title: 'Perfil',
                drawerIcon: ({ tintColor }) => (<Icon name="user" size={24} style={{ color: tintColor }} />),
                headerLeft: leftIcon(navigation, 'bars'),
                headerRight: rightIcon(navigation, 'home')
            })
        }
    },
    navigationOptions
);

const logoutScreenStack = StackNavigator(
    {
        LogoutScreen: {
            screen: LogoutScreen,
            navigationOptions: ({ navigation }) => ({
                title: 'Cerrar sesion',
                drawerIcon: ({ tintColor }) => (<Icon name="sign-out" size={24} style={{ color: tintColor }} />)
            })
        }
    }
);

export default DrawerNavigator(
    {
        RestaurantsScreen: {
            screen: restaurantsScreenStack
        },
        ProfileScreen:{
            screen: profileScreenStack
        },
        LogoutScreen: {
            screen: logoutScreenStack
        }
    },
    {
        drawerBackgroundColor: 'rgba(128,35,60,0.7)',
        contentOptions: {
            activeTintColor: 'white',
            activeBackgroundColor: 'transparent',
            inactiveTintColor: 'white',
            itemsContainerStyle: {
                marginVertical: 0,
            }
        }
    }
)