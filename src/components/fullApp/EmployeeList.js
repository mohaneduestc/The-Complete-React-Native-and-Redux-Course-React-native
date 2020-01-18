import _ from 'lodash';
import React, { Component } from 'react';
import { View, Text, FlatList, TouchableWithoutFeedback } from 'react-native';
import {connect} from 'react-redux';
import * as actions from '../theRedux/actions'
import {  Card, CardItem, Button} from 'native-base';
import { Actions } from 'react-native-router-flux';


class EmployeeList extends Component {

  componentDidMount(){
    this.props.employeeFetch();
    this.createDataSource(this.props)
  }
  componentWillReceiveProps(nextProps){
    this.createDataSource(nextProps)
  }
  createDataSource=({employees})=>{
    this.dataSource= employees
  }
  onRowPress=(item)=>{
    Actions.employeeCreate({employee:item});
  }
  render() {
    console.log( this.dataSource)
    return ( 
      <FlatList 
      data={this.dataSource}
      renderItem={({ item }) => <TouchableWithoutFeedback 
          onPress={()=>this.onRowPress(item)}>
        <CardItem>
        <Text>{item.name}</Text>
      </CardItem>
        </TouchableWithoutFeedback>}
      keyExtractor={item => item.uid}
    />
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  const employees = _.map(state.employees, (val,uid)=>{
    return {...val, uid};
  });
  return {employees}
}

export default connect(mapStateToProps, actions) (EmployeeList);
