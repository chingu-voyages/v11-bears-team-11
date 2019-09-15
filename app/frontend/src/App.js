import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ContextProvider, { AppConsumer } from "./ContextProvider";
import { Layout } from "./components/layout";
// import { socket } from "./utils/Chatting";
import { PrivateRout } from "./components/routes";
import { Home, SignUp, Landing, Login } from "./components/pages";

function App() {
  useEffect(() => {
    // Update the document title using the browser API
    // socket.connect();
  });
  return (
    <ContextProvider>
      <Router>
        <Layout className="App">
          <>
            <Switch>
              <Route exact path="/" render={props => <Landing {...props} />} />
              {/* <Route path="/call" component={Call} /> */}

              <Route path="/login" render={props => <Login {...props} />} />

              <Route path="/signup" render={props => <SignUp {...props} />} />

              <PrivateRout exact path="/home" component={Home} />
              {/* <PrivateRoute exact path="/profile" component={Profile} />
              <Route path="*" component={NotFound} /> */}
            </Switch>
          </>
        </Layout>
      </Router>
    </ContextProvider>
  );
}

export default App;
