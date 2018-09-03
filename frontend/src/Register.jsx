import React, { Component } from 'react';
import axios from 'axios';
import { MyContext } from './MyProvider';

class Register extends Component {
  constructor() {
    super()

    this.state = {
      usernameInput: '',
      passwordInput: '',
      message: '',
      status: 'pending'
    }
  }

  handleUsernameChange = (e) => {
    this.setState({
      usernameInput: e.target.value
    });
  }

  handlePasswordChange = (e) => {
    this.setState({
      passwordInput: e.target.value
    })
  }

  submitForm = (contextConfirm) => {
    const { usernameInput, passwordInput } = this.state;

    axios
      .post("/users/new", {
        username: usernameInput,
        password: passwordInput
      })
      .then((res) => {
        contextConfirm(usernameInput);
        this.setState({
          usernameInput: "",
          passwordInput: "",
          message: res.data.message,
          status: "success"
        })
      })
      .catch((err) => {
        this.setState({
          usernameInput: "",
          passwordInput: "",
          message: err.message,
          status: "error"
        })
      })
  }

  render() {
    const { usernameInput, passwordInput, message } = this.state

    return (
      <MyContext.Consumer>
        {
          (context) => {
            return (
              <div className='register'>
                <h3>Register</h3>

                Username:
                <input type="text" value={usernameInput} onChange={this.handleUsernameChange}/>

                Password:
                <input type="text" value={passwordInput} onChange={this.handlePasswordChange}/>

                <button onClick={() => {
                    this.submitForm(context.funcs.loginUser);
                  }}>Register</button>

                {message}
              </div>
            )
          }
        }
      </MyContext.Consumer>
    )
  }
};

export default Register;
