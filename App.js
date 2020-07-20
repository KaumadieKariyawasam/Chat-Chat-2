import React from 'react';
import {createSwitchNavigator,createAppContainer} from 'react-navigation';
import { StyleSheet, Text, View, TextInput, Button, AsyncStorage,TouchableOpacity } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack'
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import AuthLoadingScreen from './screens/AuthLoadingScreen';
import ChatScreen from './screens/ChatScreen';

const AppStack=createStackNavigator({Home:HomeScreen, Chat:ChatScreen});
const AuthStack=createStackNavigator({Login:LoginScreen});


const switchNav=createSwitchNavigator(
 {
    AuthLoading:AuthLoadingScreen,
    App:AppStack,
    Auth:AuthStack,
    
  },
  {
    initialRouteName:'AuthLoading'
  }
);
export default createAppContainer(switchNav);