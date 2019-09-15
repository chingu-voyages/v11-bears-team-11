import React, { Component } from "react";
import PropTypes from "prop-types";

export const AppContext = React.createContext();
export const AppConsumer = AppContext.Consumer;

class ContextProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false,
      errors: null,
      userData: null,
      userAvatar: null
    };
  }

  render() {
    const { children } = this.props;
    return (
      <AppContext.Provider
        value={{
          state: this.state,
          setError: error => this.setState({ errors: error }),
          setUserData: userData => this.setState({ userData }),
          setAuth: isAuth => this.setState({ isAuthenticated: isAuth }),
          setUserAvatar: userAvatar => this.setState({ userAvatar })
        }}
      >
        {children}
      </AppContext.Provider>
    );
  }
}

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export default ContextProvider;
