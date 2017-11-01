import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Layout from './components/Layout/Layout';
import Burger from './components/Burger/Burger';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Layout>
          <Burger />
        </Layout>
      </MuiThemeProvider>
    );
  }
}

export default App;
