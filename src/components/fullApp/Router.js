import React, { Component } from 'react';
import {Scene, Router, Actions} from 'react-native-router-flux';
import LoginForm from './LoginForm';
import EmployeeList from './EmployeeList';
import EmployeeComponent from './EmployeeComponent';

const RouterComponent = () =>{
    return(
        <Router  >
            <Scene key="root" >
                <Scene key='login' component={LoginForm} title='please Login' />
                <Scene key='employeeList' 
                component={EmployeeList} 
                title='Employees' 
                renderLeftButton={null} 
                rightTitle="Add" 
                onRight={()=>Actions.employeeCreate()}/>
                <Scene key='employeeCreate' component={EmployeeComponent} title='Create Employee' />

            </Scene>
        </Router>
    );
};

export default RouterComponent;