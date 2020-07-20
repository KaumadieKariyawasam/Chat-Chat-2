import React from 'react';
import {SafeAreaView, View,Text,TextInput} from 'react-native';
import styles from '../constants/styles';


export default class ChatScreen extends React.Component {
   static navigationOptions=({navigation})=>{
       return{
           title:navigation.getParam('name',null)
       }
   }
   state={
       textMessage:''
   }
    render() {
        return (
            <SafeAreaView>
               <TextInput style={styles.input}
               value={this.state.textMessage}
               onChangeText={this.handleChange('textMsg')}
               />
            </SafeAreaView>
        );
    }
}

