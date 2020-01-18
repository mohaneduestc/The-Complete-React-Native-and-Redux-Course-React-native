import React, { Component } from 'react';
import { View, 
  Text, 
  FlatList,
  TouchableWithoutFeedback,
  UIManager,
  LayoutAnimation } from 'react-native';
import {connect} from 'react-redux';
import {  Card, CardItem, Button} from 'native-base';
import * as actions from './actions';




class LibraryList extends Component {
  
  componentWillUpdate(){
    UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
    LayoutAnimation.spring();
  }
  renderDescription=(item)=>{
    const {selectedLibraryId} = this.props;
    if (item.id === selectedLibraryId) {
      return (
        <CardItem>
          <Text style={{flex:1}}>{item.description}</Text>
        </CardItem>
      )
    } 
  }
  render() {
    const {libraries,selectedLibraryId} = this.props;
    // alert( (libraries))
    return (
      <FlatList
        data={libraries}
        renderItem={({ item }) =><TouchableWithoutFeedback 
            onPress={()=>this.props.selectLibrary(item.id)}>
        <View>
          <CardItem >
            <Text >{item.title}</Text>
          </CardItem>
            {this.renderDescription(item)}
        </View>
      </TouchableWithoutFeedback>}
        keyExtractor={item => item.title}
      
      
      /> 
    );
  }
}

const mapStateToProps = (state) => {
  return {
    libraries: state.libraries,
    selectedLibraryId:state.selectedLibraryId
  }
}

export default connect(mapStateToProps, actions) (LibraryList);
