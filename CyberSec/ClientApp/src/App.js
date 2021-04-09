import React, { Component } from 'react';
import './custom.css'
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-social/bootstrap-social.css';
import "./styles/common.css";

export default class App extends Component {
  render () {
    return (
      <div className="app">
          <div className="container-fluid">
              <Header />
              <Body />
              <Footer />
          </div>
      </div>
    );
  }
}
