import React, { Component } from 'react';
import { AsyncStorage, View, Text } from 'react-native';
import BackgroundImage from "../components/BackgroundImage";
import { Card, Input } from "react-native-elements";
import Appbutton from "../components/AppButton";
import Toast from 'react-native-simple-toast';

export default class Profile extends Component {
    constructor() {
        super();
        this.state = {
            user: {
                name: '',
                age: ''
            }
        };
    }

    componentDidMount() {
        this.fetch().then(() => {
            Toast.showWithGravity('Usuario obtenido', Toast.LONG, Toast.BOTTOM);
        })
    }

    updateName(val) {
        let state = this.state.user;
        this.setState({
            user: Object.assign({}, state, {
                name: val
            })
        });
    }

    updateAge(val) {
        let state = this.state.user;
        this.setState({
            user: Object.assign({}, state, {
                age: val
            })
        });
    }

    render(){
        const{user} = this.state;
        return(
            <BackgroundImage>
                
            </BackgroundImage>
        );
    }

    async save() {
        try {
            const user = {
                name: this.state.user.name,
                age: this.state.user.age
            };

            await AsyncStorage.setItem('user', JSON.stringify(user));
            Toast.showWithGravity('Usuario guardado correcto', Toast.LONG, Toast.BOTTOM);
        } catch (error) {
            Toast.showWithGravity('Error guardando', Toast.LONG, Toast.BOTTOM);
        }
    }

    async fetch() {
        try {
            let user = await AsyncStorage.getItem('user');
            if (user) {
                let parsed = JSON.parse(user);
                this.setState({ user: parsed });
            }
        } catch (error) {
            Toast.showWithGravity('Error obtenido', Toast.LONG, Toast.BOTTOM);
        }
    }

}
