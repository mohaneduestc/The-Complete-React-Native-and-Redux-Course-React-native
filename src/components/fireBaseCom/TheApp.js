import React, { Component } from 'react';
import { View, Text , ActivityIndicator} from 'react-native';
import { Header, Card, Button, Body, } from 'native-base';
import firebase from 'firebase'
import LoginForm from './LoginForm';


class TheApp extends Component {
 
    state={
        loggedIn:null
    }
    componentDidMount(){
        const firebaseConfig = {
            apiKey: "AIzaSyA0WQB3U_lkUKeCPFPNNOAbqP1KGrg1mVc",
            authDomain: "mohanedauth.firebaseapp.com",
            databaseURL: "https://mohanedauth.firebaseio.com",
            projectId: "mohanedauth",
            storageBucket: "mohanedauth.appspot.com",
            messagingSenderId: "255629528171",
            appId: "1:255629528171:web:75e62a040dc872efc9752e",
            measurementId: "G-W1X67YS23H"
          };
        firebase.initializeApp(firebaseConfig);
        firebase.auth().onAuthStateChanged((user)=>{
            if (user) {
                this.setState({loggedIn:true})
            } else {
                this.setState({loggedIn:false})
            }
        })
    }
    renderContent=()=>{
        switch (this.state.loggedIn) {
            case true:
                return <Button 
                            onPress={()=>firebase.auth().signOut()}
                            style={{justifyContent: 'center',alignContent:'center'}}>
                            <Text style={{fontSize:20}}>Log Out</Text>
                        </Button>
            case false:
                return <LoginForm/>
            default:
                return <ActivityIndicator size='large'/>
        }
    //     if (this.state.loggedIn) {
    //         return<Button style={{justifyContent: 'center',alignContent:'center'}}>
    //             <Text style={{fontSize:20}}>Log Out</Text>
    //         </Button>
    //     }
    //     return <LoginForm/>

    }
 
  render() {
    return (
        <View>
            <Card>
                <Header style={{backgroundColor:'#f8f8f8', elevation:2}}>
                    <Body style={{alignItems:'center', justifyContent: 'center',}}>
                        <Text style={{fontSize:15}}>Authentification</Text>
                    </Body>
                </Header>
            </Card>

                
                {this.renderContent()}
        </View>
    );
  }
}

export default TheApp;
