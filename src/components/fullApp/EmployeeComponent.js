import React, { Component } from 'react';
import { Text, TextInput, Picker } from 'react-native';
import {  Card, CardItem, Button} from 'native-base';
import {connect} from 'react-redux';
import * as actions from '../theRedux/actions'


class EmployeeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  onPressButton=()=>{
    const {name, phone, shift} = this.props;
    this.props.employeeCreate({name, phone, shift:shift||'Monday'})
  }
  render() {
    console.log(this.props.employee)
    return (
      <Card>
        <CardItem>
            <Text>Name</Text>
            <TextInput 
               placeholder='Mohaned'
               onChangeText={(text)=>this.props.employeeUpdate({prop:'name', value:text})}
               value={this.props.name} />
        </CardItem>

        <CardItem>
            <Text>Phone</Text>
            <TextInput 
               placeholder='098877445566'
               onChangeText={(num)=>this.props.employeeUpdate({prop:'phone',value:num})}
               value={this.props.phone} />
        </CardItem>

        <CardItem>
        <Picker
          selectedValue={this.props.shift}
          style={{flex:1}}
          onValueChange={value =>this.props.employeeUpdate({prop:'shift',value}) }>
          <Picker.Item label="Monday" value="Monday" />
          <Picker.Item label="Tuesday" value="Tuesday" />
          <Picker.Item label="Wednesday" value="Wednesday" />
          <Picker.Item label="Thurusday" value="Thurusday" />
          <Picker.Item label="Friday" value="Friday" />
          <Picker.Item label="Suterday" value="Suterday" />
          <Picker.Item label="Sunday" value="Sunday" />
        </Picker>
        </CardItem>

        <CardItem>
            <Button onPress={this.onPressButton}>
                <Text>Create</Text>
            </Button>
        </CardItem>

      </Card>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    name: state.form.name,
    phone: state.form.phone,
    shift: state.form.shift,
  }
}

export default connect(mapStateToProps,actions)(EmployeeComponent);
