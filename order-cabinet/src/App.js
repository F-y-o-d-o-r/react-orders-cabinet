import React, { Component } from 'react';
import Header from './components/layout/header/header';
import Footer from './components/layout/footer/footer';
import Carousel from './components/carousel/carousel';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Carousel />
        <Footer />
      </div>
    );
  }
}

export default App;
