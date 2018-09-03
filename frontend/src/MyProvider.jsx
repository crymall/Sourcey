import React, { Component } from 'react';

export const MyContext = React.createContext();

class MyProvider extends Component {
  constructor() {
    super();

    this.state = {
      user: "",
      allModules: ""
    };
  }

  componentDidMount() {
  }

  loginUser = (user) => {
    this.setState({
      user: user
    });
  }

  setModules = (modules) => {
    this.setState({
      allModules: modules
    });
  }

  render() {
    return (
      <MyContext.Provider value={{
                            state: this.state,
                            funcs: {loginUser: this.loginUser,
                                    setModules: this.setModules}}
                                }>
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export default MyProvider;
