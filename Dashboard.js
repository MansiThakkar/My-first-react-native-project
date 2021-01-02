import React, { Component } from 'react';
import { View, Text, Image,ScrollView, SafeAreaView,RefreshControl,StyleSheet} from 'react-native';
import axios from 'axios';
import Card from './Card';
import CardSection from './CardSection';
import { TouchableOpacity } from 'react-native-gesture-handler';



export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
       results: [],
       refreshing: false,
    };
  }

  componentDidMount (){
    
   
     axios.get ('https://randomuser.me/api/?results=10')
      .then(response => this.setState({results: response.data.results}))
  
       .catch((error) => {
                 console.error(error);
              });
  }
 
 

  renderResults(){
   
    return this.state.results.map(results => {return ( 
      <SafeAreaView>
        
        <Card>
          <TouchableOpacity onPress = {() => alert(results.gender)}>
          <CardSection>
         <View style = {{ flexDirection: 'row' }}>
      
        <Image source={{ uri: results.picture.thumbnail }}
       style={{ width: 50, height: 50,borderRadius:15}} /> 
       <View style = {{ flexDirection: 'column' , marginLeft:10}}>
       <Text style = {{fontWeight: 'bold',fontSize:18}}>  {results.name.title} {results.name.first} {results.name.last}  </Text>
       <Text style = {{fontWeight: 'bold',fontSize:14}}>  {results.location.country} </Text>
       </View>
       </View>
       
       <Text> Gender: {results.gender} </Text>
       <Text> PhoneNo: {results.phone} </Text>
       <Text> Dob: {results.dob.date} </Text>
       <Text> Age: {results.dob.age} </Text>
       <Text> Email: {results.email} </Text>
 
       
       </CardSection>
       </TouchableOpacity>
       </Card>
       
       
       </SafeAreaView>
    )})
                              
  }

  _onRefresh = () => {
    this.setState({refreshing: true});
    axios.get ('https://randomuser.me/api/?results=20')
      .then(response => this.setState({results: response.data.results}))
  
       .catch((error) => {
                 console.error(error);
              });
  }

  render() {
    const {text} = this.props.route.params
    
     console.log(this.state.results);
    return (

      <View>
        
        <ScrollView 
          refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh}
          />
        }>
        {this.renderResults()}
        <Text style = {{alignContent:'center',justifyContent:'center',fontSize:20,fontWeight:'bold',marginLeft:150,marginTop:10}}>{text}</Text>
        <TouchableOpacity
                 style = {styles.submitButton}
                 onPress={() => {this.props.navigation.goBack()}} >
                 <Text style = {styles.submitButtonText}> LOGOUT </Text>
              </TouchableOpacity>
        </ScrollView>
       
      </View>
    );
  }
}



const styles = StyleSheet.create({

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
})