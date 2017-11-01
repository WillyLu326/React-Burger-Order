import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Layout from './components/Layout/Layout';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Layout>
          ddd
        </Layout>
      </MuiThemeProvider>
    );
  }
}

export default App;
