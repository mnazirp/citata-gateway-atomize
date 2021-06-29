import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider as StyletronProvider, DebugEngine } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";
import Login from "./components/Login";
import routes from "./components/pages/index"
import ProtectedRoute from "./components/common/ProtectedRoute"

const debug =
  process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();

// 1. Create a client engine instance
const engine = new Styletron();

import { StyleReset, ThemeProvider} from "atomize";

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
            <Route exact path='/login' component={Login}/>
          </BrowserRouter>
        </ThemeProvider>
      </StyletronProvider>
    );
  }
}

const mapStateToProps = (state) => (state);
export default connect(mapStateToProps)(App);
