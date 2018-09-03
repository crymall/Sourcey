import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-responsive-modal';
import axios from 'axios';
import { MyContext } from './MyProvider';

class HomeNavbar extends Component {
  constructor() {
    super();
    this.state = {
      usernameInput: '',
      passwordInput: '',
      open: false,
      message: ''
    };
  }

  toggleModal = () => {
    this.setState({
      open: !this.state.open
    })
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
      .post("/users/login", {
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
    let { usernameInput, passwordInput, message } = this.state;
    return (
      <MyContext.Consumer>
        {
          (context) => {
            return (
              <div className='home'>
                <div className='title-area'>
                  <Link to='/'><h1> Sourcey </h1></Link>

                  <div className='login-area'>
                    <Link to='/modules' className='log-link'>All Modules</Link>
                    <Link to='/register' className='log-link'>Register</Link>
                    <a onClick={this.toggleModal} className='log-link'>Log In</a>
                  </div>

                  <Modal open={this.state.open} onClose={this.toggleModal} showCloseIcon={false} center>
                    Username:
                    <input type="text" value={usernameInput} onChange={this.handleUsernameChange}/>
                    Password:
                    <input type="text" value={passwordInput} onChange={this.handlePasswordChange}/>

                    <button onClick={() => {
                        this.submitForm(context.funcs.loginUser);
                      }}>Log In</button>

                    {message}
                  </Modal>
                </div>
              </div>
            )
          }
        }
      </MyContext.Consumer>
    )
  }
}

export default HomeNavbar;
