import React from 'react';
import {ActivityIndicator,AsyncStorage,StatusBar,StyleSheet,View} from 'react-native';
import User from '../User';
import firebase from 'firebase';
export default class AuthLoadingScreen extends React.Component{
    constructor(props){
        super(props);
        this._bootstrapAsync();
    }
    componentWillMount(){
        var firebaseConfig = {
            apiKey: "AIzaSyBczwQD9GdbT8LxJ8rxvql0gLuuIui7N3c",
            authDomain: "chatchat-76ce0.firebaseapp.com",
            databaseURL: "https://chatchat-76ce0.firebaseio.com",
            projectId: "chatchat-76ce0",
            storageBucket: "chatchat-76ce0.appspot.com",
            messagingSenderId: "91118202027",
            appId: "1:91118202027:web:bc7f3c00d5929d2ed15bee",
            measurementId: "G-ZKVMTZSBD4"
          };
          // Initialize Firebase
          firebase.initializeApp(firebaseConfig);
    }
    _bootstrapAsync=async()=>{
        User.phone=await AsyncStorage.getItem('userPhone');
        this.props.navigation.navigate(User.phone?'App':'Auth');
        
    };
    render(){
        return(
            <View>
                <ActivityIndicator/>
                <StatusBar barStyle="default"/>
            </View>
        );
    }
}