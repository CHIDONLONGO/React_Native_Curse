import React, { Component } from 'react';
import { Card, Divider, Text } from 'react-native';
import PreLoader from "../PreLoader";
import { StyleSheet, FlatList, View } from 'react-native';
import BackgroundImage from "../BackgroundImage";
import * as firebase from 'firebase';

export default class CommentList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments:[],
            loaded: false
        };
    }

    
}
