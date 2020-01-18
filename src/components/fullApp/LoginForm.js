import React, { Component } from 'react';
import { View, Text, TextInput, ActivityIndicator } from 'react-native';
import {  Card, CardItem, Button} from 'native-base';
import {connect} from 'react-redux';
import * as actions from '../theRedux/actions';
// import { emailChanged, passwordChanged, loginUser } from '../theRedux/actions';


class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  onEmailChange=(text)=>{    
      this.props.emailChanged(text)
  }
  onPasswordChange=(pass)=>{
    this.props.passwordChanged(pass)
  }
  onLoginPress=()=>{
    const { email, password } = this.props
    this.props.loginUser({ email, password })
  }
  renderError=()=>{
    if (this.props.error) {
      return(
        <View>
            <Text style={{color:'red'}}>{this.props.error}</Text>
        </View>
      )
    }
  }
  renderButton=()=>{
    if (this.props.loading) {
      return <ActivityIndicator size='large'/>
      
    }
    return <Button light 
    style={{justifyContent:'center', alignItems:'center',width:300}}
    onPress={this.onLoginPress}>
    <Text style={{justifyContent:'center', alignItems:'center'}}>Login</Text>
</Button>
  }
  render() { 
    return ( 
      <Card>
          <CardItem>
              <Text style={{flex:1}}>Email</Text>
            <TextInput
                style={{flex:4}}
                placeholder='mohaned@uestc.com'
                onChangeText={this.onEmailChange}
                value={this.props.email} />
          </CardItem>

          <CardItem>
              <Text style={{flex:1}}>Password</Text>
            <TextInput
                style={{flex:4}}
                placeholder='password'
                secureTextEntry={true}
                onChangeText={this.onPasswordChange} 
                value={this.props.password}/>
          </CardItem>
          {this.renderError()}
          <CardItem style={{justifyContent:'center', alignItems:'center'}}>
              {this.renderButton()}
          </CardItem>
      </Card>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
    return {
        email: state.auth.email,
        password:state.auth.password,
        error:state.auth.error,
        loading:state.auth.loading,
    }
}

export default connect(mapStateToProps,actions) (LoginForm);
