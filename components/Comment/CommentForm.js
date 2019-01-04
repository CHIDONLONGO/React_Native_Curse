import React, { Component } from 'react';
import AppButton from "../AppButton";
import { Option, Comment } from "../../forms/comments";
import t from 'tcomb-form-native';
const Form = t.form.Form;
import { Card } from "react-native-elements";
import { View } from "react-native";
import * as firebase from 'firebase';
import Toast from 'react-native-simple-toast';

export default class componentName extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comment:{
                comment:'',
                rating:1
            }
        };
    }

    addComment(){

    }

    onChange(){
        
    }
}

