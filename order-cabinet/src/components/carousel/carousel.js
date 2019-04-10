import React, { Component } from 'react';
//import * as $ from 'jquery';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './carousel.sass';

export default class Carousel extends Component {
  render() {
    return (
      <section className="slider">
        <OwlCarousel className="owl-theme" loop margin={0} items="1">
          <div className="item">
            <div className="container">
              <img src="https://picsum.photos/200/300/?random" alt="lorem" />
              <div className="text-wrapper">
                <h4>Lorem, ipsum.</h4>
                <p>Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты.</p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="container">
              <img src="https://picsum.photos/200/300/?random2" alt="lorem" />
              <div className="text-wrapper">
                <h4>Далеко-далеко, за.</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit iste iusto distinctio!</p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="container">
              <img src="https://picsum.photos/200/300/?random3" alt="lorem" />
              <div className="text-wrapper">
                <h4>Далеко-далеко за словесными.</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi culpa dolor saepe iure aliquam esse.
                </p>
              </div>
            </div>
          </div>
        </OwlCarousel>
      </section>
    );
  }
}
