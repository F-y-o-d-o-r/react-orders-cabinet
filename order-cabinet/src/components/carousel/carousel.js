import React, { Component } from 'react';
//import * as $ from 'jquery';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './carousel.sass';

export default class Carousel extends Component {
  render() {
    return (
      <section className="slider container">
        {/* <div className="slider-cabinet new-cabinet">
          <ul className="owl-carousel owl-theme order-slider">
            <li className="item-slider">
              <div className="icon" />
              <div className="content">
                <h2>День знаний!</h2>
                <div className="text">
                  <p>Слайд 1</p>
                </div>
              </div>
            </li>
            <li className="item-slider">
              <div className="icon" />
              <div className="content">
                <h2>День знаний!</h2>
                <div className="text">
                  <p>Слайд 2</p>
                </div>
              </div>
            </li>
            <li className="item-slider">
              <div className="icon" />
              <div className="content">
                <h2>День знаний!</h2>
                <div className="text">
                  <p>Слайд 3</p>
                </div>
              </div>
            </li>
          </ul>
        </div> */}
        <OwlCarousel className="owl-theme" loop margin={10} nav>
          <div class="item">
            <h4>1</h4>
          </div>
          <div class="item">
            <h4>2</h4>
          </div>
          <div class="item">
            <h4>3</h4>
          </div>
          <div class="item">
            <h4>4</h4>
          </div>
          <div class="item">
            <h4>5</h4>
          </div>
          <div class="item">
            <h4>6</h4>
          </div>
          <div class="item">
            <h4>7</h4>
          </div>
          <div class="item">
            <h4>8</h4>
          </div>
          <div class="item">
            <h4>9</h4>
          </div>
          <div class="item">
            <h4>10</h4>
          </div>
          <div class="item">
            <h4>11</h4>
          </div>
          <div class="item">
            <h4>12</h4>
          </div>
        </OwlCarousel>
      </section>
    );
  }
}
