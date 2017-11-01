import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

class App extends Component {

  render() {
    return (
      <MuiThemeProvider>
        <Layout>
          <BurgerBuilder />
        </Layout>
      </MuiThemeProvider>
    );
  }
}

export default App;
