import React, { Component } from 'react';
import axios from 'axios';

export const MyContext = React.createContext();

class MyProvider extends Component {
  constructor() {
    super();

    this.state = {
      user: ""
    };
  }

  componentDidMount() {
    // axios.get('/users')
    //      .then((res) => {
    //        this.setState({
    //          users: res.data.data
    //        })
    //      })
    //      .catch((err) => {
    //        console.log(err)
    //      });
  }

  loginUser = (user) => {
    this.setState({
      user: user
    })
  }

  render() {
    return (
      <MyContext.Provider value={{state: this.state, funcs: {loginUser: this.loginUser}}}>
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export default MyProvider;
