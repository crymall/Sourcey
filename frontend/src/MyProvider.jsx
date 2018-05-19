import React, { Component } from 'react';
import axios from 'axios';

export const MyContext = React.createContext();

class MyProvider extends Component {
  constructor() {
    super();

    this.state = {
      users: ""
    };
  }

  componentDidMount() {
    axios.get('/users')
         .then((res) => {
           this.setState({
             users: res.data.data
           })
         })
         .catch((err) => {
           console.log(err)
         });
  }

  render() {
    return (
      <MyContext.Provider value={this.state}>
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export default MyProvider;
