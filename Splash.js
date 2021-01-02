


import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import {NavigationActions, StackActions } from '@react-navigation/native';
import {CommonActions} from '@react-navigation/native';


export default class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    
    
  }

 
  componentDidMount(){
        
    var that = this;

    setTimeout(() => {
      this._navigateToScreen('LoginScreen');
      //this.props.navigation.navigate('LoginScreen');
    }, 1500)
      
   
          
       }
       _navigateToScreen(Login) {
        const resetAction = CommonActions.reset({
          index: 0,
          routes: [{name: Login}],
        });
        this.props.navigation.dispatch(resetAction);
      }

       
     

        
  render() {
    return (
      <View>
        <Image source={require('./hii.png')}
        style={{width:'100%', height: '100%', resizeMode: 'contain',backgroundColor:'black'}}/>
      </View>
    );
  }
}



//splash screen
