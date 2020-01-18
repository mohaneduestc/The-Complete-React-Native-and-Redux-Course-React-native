import React, { Component } from 'react';
import { View, Text,StyleSheet } from 'react-native';

class Header extends Component {
  

  render() {
    return (
      <View style={styles.Wrapper}>
            <Text style={{fontSize:20}}>{this.props.headerText}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    Wrapper:{
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems:'center',
        height:60,
        paddingTop:15,
        shadowColor:'#000',
        shadowOffset:{width:0, height:2},
        elevation:5
    }
})
export default Header;
