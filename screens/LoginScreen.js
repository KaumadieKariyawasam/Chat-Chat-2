import React from 'react';
import {Text, View, TextInput, Button,SafeAreaView, AsyncStorage } from 'react-native';
import User from '../User';
import styles from '../constants/styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import firebase from 'firebase';
//import { SafeAreaView } from 'react-navigation';
export default class LoginScreen extends React.Component {
    static navigationOptions={
        header:'LogIn'
    }
  state = { 
    phone:'',
    name:''
   }
   handleChange=key=>val=>{
     this.setState({[key]:val})
   }
   
   submitForm=async()=>{
     if(this.state.phone.length!=10){
       alert("Invalid Phone NUmber");
     }else{
      await AsyncStorage.setItem('userPhone',this.state.phone);
      User.phone=this.state.phone;
      firebase.database().ref('useers/'+User.phone).set({name:this.state.name});
      this.props.navigation.navigate('App');
     }
   }
  render() {
    return (
      
      <View style={StyleSheet.container}>
        <TextInput placeholder="Phone Number" keyboardType="number-pad" style={styles.input} 
        value={this.state.phone}
        onChangeText={this.handleChange('phone')}
        ></TextInput>
        <TextInput placeholder="Name" style={styles.input} 
         onChangeText={this.handleChange('name')}
        value={this.state.name}></TextInput>

        <TouchableOpacity onPress={this.submitForm}>
          <Text>Enter</Text>
        </TouchableOpacity>
      </View>
     
    );
  }
}

/*const styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#F5FCFF"
  },
  input:{
    padding:10,
    borderWidth:1,
    borderColor:"#ccc",
    width:'90%',
    marginBottom:10,
    borderRadius:5,
    
  }
});*/