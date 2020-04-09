import React from 'react';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import Routes from './Routes';

export default class App extends React.Component {
  render() {
    console.log('app being mounted');
    return (
      <Router>
        <Routes />
      </Router>
    );
  }
}
