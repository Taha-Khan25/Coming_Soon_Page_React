import React from 'react';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css';

import Content from './Components/Content';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Navbar from './Components/Navbar';

class App extends React.Component {
  render = () => {
    return (
      <>
      <Navbar></Navbar>
    <Header></Header>
    <Content></Content>
    <Footer></Footer>
    </>
    );
  }
}

export default App;