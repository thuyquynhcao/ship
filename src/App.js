import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {Button, Form, FormGroup, Label, Input}
from 'reactstrap';


class App extends Component{
  render() {
    return(
        <Form className="login-form">
            <h1>
                <span className="font-weight-bold">Login</span>
            </h1>
           <FormGroup>
               <Label>Username</Label>
               <Input type="username" placeholder="Username"/>
           </FormGroup>
            <FormGroup>
                <Label>Password</Label>
                <Input type="password" placeholder="Password"/>
            </FormGroup>

            <Label> Remember me? </Label>

            <Button className="btn-lg btn-dark btn-block">
                    Sign in
                </Button>
           <div className="text-center pt-3">New around here? Sign up</div>
            <div className="text-center pt-3">Forgot password?</div>


        </Form>
    );
  }
}

export default App;
