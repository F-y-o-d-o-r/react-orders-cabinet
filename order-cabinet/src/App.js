import React, { Component } from 'react';
import Header from './components/layout/header/header';
import Footer from './components/layout/footer/footer';
import Carousel from './components/carousel/carousel';
// import Menu from './components/menu/menu';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Orders from './components/orders/orders';
import Order from './components/order/order';
import NewOrder from './components/new-order/new-order';
import Profile from './components/profile/profile';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Carousel />
        <main>
          <section className="orders orders-order-wrapper">
            <div className="container">
              <Router>
                <div>
                  <Route path="/" exact component={Orders} />
                  <Route path="/new-order" exact component={NewOrder} />
                  <Route path="/profile" exact component={Profile} />
                  <Route exact path="/order/:id" component={Order} />
                </div>
              </Router>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
