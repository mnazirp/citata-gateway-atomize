import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider as StyletronProvider, DebugEngine } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";
import routes from "./components/pages/index";
import ProtectedRoute from "./components/common/ProtectedRoute";
import Unauthorized from "./components/common/Unauthorized";
import Login from "./components/Login";

const debug =
  process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();

// 1. Create a client engine instance
const engine = new Styletron();

import { StyleReset, ThemeProvider } from "atomize";

const theme = {
  colors: {
    green100: "#48977d",
    mainred100: "#E91E63",
    mainred200: "#F48FB1",
    mainred300: "#FF80AB",
    mainred400: "#F8BBD0",
    maingray400: "#BDBDBD",
    mainyellow100: "#FDD835",
    mainblack100: "#212121",
  },
  grid: {
    containerWidth: {
        xs: "540px",
        sm: "720px",
        md: "960px",
        lg: "1156px",
        xl: "1156px"
    },
    gutterWidth: "12px",
  }
};

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <StyletronProvider value={engine} debug={debug} debugAfterHydration>
        <ThemeProvider theme={theme}>
          <StyleReset />
          <BrowserRouter>
            {
              routes.map((data, idx) => (
                <ProtectedRoute exact path={data.path} user={this.props.auth.user} key={idx} component={data.component}></ProtectedRoute>
              ))
            }
            <Route exact path='/login' component={Login} />
            <Route exact path='/404' component={Unauthorized} />
          </BrowserRouter>
        </ThemeProvider>
      </StyletronProvider>
    );
  }
}

const mapStateToProps = (state) => (state);
export default connect(mapStateToProps)(App);
