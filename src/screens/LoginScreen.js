import React, { Component } from 'react';
import {Button,Form} from 'react-bootstrap';

import CardComponent from '../components/CardComponent';


// klasskomponent till Login-fältet
class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
        value:""
       };
  this.handleChange = this.handleChange.bind(this);
  this.Login = this.Login.bind(this);
  }


  // Eventfunktion som ändrar statet på value när man skriver i inputfältet
  handleChange(event) {
  this.setState({value: event.target.value});
  }

  // Eventfunktion som lägger ihop den befintliga UserList med den nya användaren som
  // skrivs in i inputfältet och sparas i value-statet. Lagrar användaren i
  // localStorage
  Login(event) {
    localStorage.setItem('user', this.state.value);
    this.props.history.push('/dashboard');
    event.preventDefault();
  }

  render() {
      return (
        <CardComponent info={"You need to click on the button to login:)"}>
        
          <Form onSubmit={this.Login}>
            <Form.Control className="inputForm" size="lg" type="text" placeholder="User" value={this.state.value}  onChange={this.handleChange} />
            <br />
            <Button className="loginBtn" variant="success" type="submit">Login</Button>
          </Form>
            <br />

        </CardComponent>
      );
  }
}


export default LoginScreen;
