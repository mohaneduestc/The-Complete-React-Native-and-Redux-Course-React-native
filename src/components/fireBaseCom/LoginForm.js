import React, { Component } from 'react';
import { View, Text, TextInput, ActivityIndicator } from 'react-native';
import {  Card, CardItem, Button} from 'native-base';
import firebase from 'firebase';

class LoginForm extends Component {
  state={
      email:'',
      password:'',
      error:'',
      loading:false
  }
   
  onButtonPress=()=>{
      const {email,password}= this.state;
      this.setState({error:'',loading:true})
      firebase.auth().signInWithEmailAndPassword(email,password)
      .then(this.onloginSuccess)
      .catch(()=>{
          firebase.auth().createUserWithEmailAndPassword(email,password)
          .then(this.onloginSuccess)
          .catch(this.onLoginFail);
      });
  }
  onLoginFail=()=>{
    this.setState({
        error:'Authentication Failed',
        loading:false
    })
  }
  renderButton=()=>{
      if (this.state.loading) {
          return<ActivityIndicator size="large"/>
      }
      return(
      <Button light 
                style={{width:300,alignContent:'center',justifyContent: 'center'}}
                onPress={this.onButtonPress}
                >
                <Text style={{fontSize:20}}>Login</Text>
            </Button>
      )
  }
  onloginSuccess=()=>{
      this.setState({
          email:'',
          password:'',
          error:'',
          loading:false
      })
  }
  render() {
    return (
      <Card>
          <CardItem>
              <Text style={{flex:1}} >Email</Text>
              <TextInput
                style={{flex:3}}
                value={this.state.email}
                placeholder='Email'
                // style={{height:20, width:100}}
                onChangeText={(email)=>this.setState({email})} />
          </CardItem>
          <CardItem>
          <Text style={{flex:1}}>password</Text>
              <TextInput
                style={{flex:3}}
                value={this.state.password}
                placeholder='password'
                secureTextEntry={true}
                // style={{height:20, width:100}}
                onChangeText={(password)=>this.setState({password})} />
          </CardItem>
            <Text>{this.state.error}</Text>
          <CardItem style={{alignContent:'center', justifyContent: 'center',}}>
            {this.renderButton()}
        </CardItem>
      </Card>
    );
  }
}

export default LoginForm;
