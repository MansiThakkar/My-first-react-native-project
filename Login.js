//login screen

import React, { Component } from 'react';
import { View, Text,StyleSheet,TextInput,TouchableOpacity,Image,CheckBox} from 'react-native';
import { Icon } from 'react-native-elements'
//import BouncyCheckbox from "react-native-bouncy-checkbox";


export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email:'',
      pass:''

    };
  }

  validate_field = () =>{
    const{email,pass} = this.state
    if (email == ""){
      alert("please fill email")
      return false
    } else if (pass == ""){
      alert ("please fill password")
      return false
    }
    return true
  }

  navigation_call =() =>{
    if(this.validate_field()){
      this.props.navigation.navigate('Dashboard',{text: this.state.email});
    }
  }

  render() {
    return (
      <View style = {styles.container}>
              
              
              <Image source={require('./hii.png')}
                style={{width: 150, height: 150, marginLeft:100}}/>

              <View style={styles.SectionStyle}>
              
              <Image source={require('./email.png')} style={styles.ImageStyle} />

                <TextInput
                    style={{flex:1}}
                    placeholder="Email"
                    underlineColorAndroid="transparent"
                    placeholderTextColor = "#000"
                    autoCapitalize = "none"
                     onChangeText={text => {
                      this.setState({email:text});
                    }}
                />

              </View>
              <View style={styles.SectionStyle}>
              
              <Image source={require('./pass.png')} style={styles.ImageStyle} />

                <TextInput
                    secureTextEntry={true}
                    style={{flex:1}}
                    placeholder="Password"
                    underlineColorAndroid="transparent"
                    placeholderTextColor = "#000"
                    autoCapitalize = "none"
                    onChangeText={text => {
                      this.setState({pass:text});
                    }}
                    
                />

              </View>

         
                
                <View style={{ flexDirection: 'row' }}>
                  <CheckBox style = {{marginLeft:10}}
                    value={this.state.checked}
                    onValueChange={() => this.setState({ checked: !this.state.checked })}
                  />
                  <Text style={{marginTop: 5}}> Keep me Loggedin.</Text>
                </View>
              
                            
              {/* <Icon
                name='rowing' />
              
              <TextInput style = {styles.input}
                 underlineColorAndroid = "transparent"
                 placeholder = "Email"
                 placeholderTextColor = "#000"
                 autoCapitalize = "none"
                  onChangeText={text => {
                   this.setState({email:text});
                 }}/>
                
             
              <TextInput style = {styles.input}
                 underlineColorAndroid = "transparent"
                 placeholder = "Password"
                 placeholderTextColor = "#000"
                 autoCapitalize = "none"
                 onChangeText = {this.handlePassword}/> */}
               {/* <CheckBox
                  title='Click Here'
                  
                /> */}

              {/* <BouncyCheckbox
                isChecked
                textColor="#000"
                fillColor="red"
                iconComponent={your-own-component}
                fontFamily="JosefinSans-Regular"
                text="keep me loggedin."
              /> */}
             
              <TouchableOpacity
                 style = {styles.submitButton}
                 onPress={() => { this.navigation_call()}} >
                 <Text style = {styles.submitButtonText}> LOGIN </Text>
              </TouchableOpacity>
              <Text style={styles.baseText}>
                Forgot password?
              <Text style={styles.innerText}> Recover here</Text>
              </Text>
              <Text style={styles.baseText1}>
                  Don't have account?
              <Text style={styles.innerText1}> Signup here</Text>
              </Text>
              
              
           </View>
    );
  }
}

 const styles = StyleSheet.create({
   container: {
      paddingTop: 10
      
   
   },
   
   submitButton: {
      backgroundColor: '#000',
      padding: 10,
      marginLeft: 30,
      marginTop:30,
      height: 40,
      width: 300,
     
   },
   submitButtonText:{
      color: 'white',
      textAlign:'center'
   },

   checkbox: {

    marginTop:10,
    flex:1,
    flexDirection:"row"
  
  },
  
  innerText: {
    fontWeight:'bold',
    marginLeft:80
  },
  baseText:{
    marginTop:10,
    marginLeft:80
  },

  baseText1:{
    marginLeft:80,
    marginTop:120
  },
  innerText1: {
    marginTop:120,
    fontWeight:'bold',
    marginLeft:80
  },
  SectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    height: 40,
    borderRadius: 5 ,
    margin: 10
},
 
ImageStyle: {
    padding: 10,
    margin: 5,
    height: 15,
    width: 15,
    resizeMode : 'stretch',
    alignItems: 'center'
},


 })
