import React from 'react';
import {SafeAreaView, StyleSheet, Text, View, TextInput,FlatList, Button, AsyncStorage,TouchableOpacity } from 'react-native';
import User from '../User';
import styles from '../constants/styles'
import firebase from 'firebase'

export default class HomeScreen extends React.Component{
    static navigationOptions={
        title:'Chat Chat'
    }
    state={
        users:[]
    }
    componentDidMount(){
        let dbRef=firebase.database().ref('useers');
        dbRef.on('child_added',(val)=>{
            let person=val.val();
            person.phone=val.key;
            if(person.phone==User.phone){
                User.name=person.name;
            }else{
            console.log('person',person);
            this.setState((prevState)=>{
                return{
                    users:[...prevState.users,person]
                }
            })
        }
        })
    }

    _logOut=async()=>{
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
    }
    renderRow=({item})=>{
        return(
            
            <TouchableOpacity 
            onPress={()=>this.props.navigation.navigate('Chat',item)}
            style={{padding:10,borderBottomColor:'#ccc',borderBottomWidth:1}}>
                <Text style={{fontSize:20}}>{item.name}</Text>
              
            </TouchableOpacity>
           
        )
    }
    render(){
        return(
            <SafeAreaView>
                <FlatList
                data={this.state.users}
                renderItem={this.renderRow}
                keyExtractor={(item)=>item.phone}
                />
                 <Button onPress={this._logOut}
               >LogOut</Button>
            </SafeAreaView>
        )
    }
}
