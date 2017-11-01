import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Layout from './components/Layout/Layout';
import Burger from './components/Burger/Burger';

class App extends Component {

  state = {
    ingredients: {
      salad: 1,
      cheese: 1,
      meat: 2,
      bacon: 2
    }
  }

  render() {
    return (
      <MuiThemeProvider>
        <Layout>
          <Burger ingredients={this.state.ingredients}/>
        </Layout>
      </MuiThemeProvider>
    );
  }
}

export default App;
