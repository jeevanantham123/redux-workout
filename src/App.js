// import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import SampleOne from "./Samples/ReactReduxSample";
import ReduxToolKitSample from "./Samples/ReduxToolKit";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="flex h-14 items-center justify-center fixed top-0 w-full cursor-pointer bg-black">
            <div className="w-96 py-1 h-full items-center flex justify-center font-semibold text-white">
              {/* <Link
                className="flex px-4 rounded-lg h-full items-center"
                to="/react-redux"
              >
                React Redux Sample
              </Link> */}
              <Link
                className="flex px-4 rounded-lg h-full items-center"
                to="/redux-toolkit"
              >
                Redux toolkit
              </Link>
            </div>
          </div>
          <header className="App-header">
            <Switch>
              <Route path="/" exact component={ReduxToolKitSample} />
              <Route path="/redux-workout" component={ReduxToolKitSample} />
              <Route path="/react-redux" component={SampleOne} />
              <Route path="/redux-toolkit" component={ReduxToolKitSample} />
            </Switch>
          </header>
        </div>
      </Router>
    );
  }
}
export default App;
