import React, { Component } from 'react';

class Header extends Component {
  state = {};
  render() {
    return (
      <header class="new-header new-cabinet">
        <div class="container header">
          <div class="logo">
            <a href="/" />
          </div>
          <div class="header__info-wrapper">
            <div class="header__your-balance">
              Баланс: <span>1429.87 грн.</span>
            </div>
            <div class="header__your-bonus">
              Бонусы: <span>48.14 грн.</span>
            </div>
            <div class="header__accordion">
              <div class="header__accordion-a">
                Полиграф Шариков<svg
                  width="14"
                  height="11"
                  viewBox="0 0 14 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 11L0.937823 0.499999L13.0622 0.5L7 11Z" fill="white" />
                </svg>
              </div>
            </div>
          </div>
          <div class="hamburger-menu hamburger-menu-new">
            <div class="bar" />
          </div>
          <div class="mobile-menu-wrapper">
            <div class="mobile-menu-wrapper__header">
              <div class="mobile-menu-wrapper__header-firstcolumn">
                <header>
                  <h5>Очень Широкое Имя Тут</h5>
                </header>
                <div class="mobile-menu-wrapper__balanse-wrapper">
                  <div class="mobile-menu-wrapper__balance">
                    <span>Баланс:</span>
                    <span>429.87 грн.</span>
                  </div>
                  <div class="mobile-menu-wrapper__bonus">
                    <span>Бонусы:</span>
                    <span>48.14 грн.</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="mobile-menu-wrapper__main-content-wrappper">
              <nav class="mobile-menu-wrapper__nav">
                <ul>
                  <li>
                    <a href="#">Сделать заказ</a>
                  </li>
                  <li>
                    <a class="active" href="#">
                      Мои заказы
                    </a>
                  </li>
                  <li>
                    <a href="#">Профиль</a>
                  </li>
                  <li>
                    <a href="#">Скидки</a>
                  </li>
                  <li>
                    <a href="#">Заработай</a>
                  </li>
                  <li>
                    <a href="#">Финансы</a>
                  </li>
                  <li>
                    <a href="#">FAQ</a>
                  </li>
                </ul>
              </nav>
            </div>
            <a class="exit" href="#">
              <svg width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M19.9367 8.84817C19.8942 8.74649 19.8333 8.65399 19.7558 8.57649L17.2567 6.07731C16.9308 5.75231 16.4042 5.75231 16.0783 6.07731C15.7525 6.40313 15.7525 6.93063 16.0783 7.25563L17.1558 8.33313H12.5008C12.04 8.33313 11.6675 8.70645 11.6675 9.16645C11.6675 9.62645 12.04 9.99977 12.5008 9.99977H17.1558L16.0783 11.0773C15.7525 11.4031 15.7525 11.9306 16.0783 12.2556C16.2408 12.4189 16.4541 12.4998 16.6675 12.4998C16.8808 12.4998 17.0942 12.419 17.2567 12.2556L19.7558 9.75641C19.8333 9.67973 19.8942 9.58723 19.9367 9.48473C20.0208 9.28149 20.0208 9.05149 19.9367 8.84817Z"
                  fill="white"
                />
                <path
                  d="M14.1671 11.6667C13.7063 11.6667 13.3338 12.04 13.3338 12.5V16.6667H10.0005V3.33332C10.0005 2.96582 9.75881 2.64082 9.40631 2.535L6.51213 1.66668H13.3338V5.83336C13.3338 6.29336 13.7063 6.66668 14.1671 6.66668C14.6279 6.66668 15.0004 6.29336 15.0004 5.83336V0.833359C15.0004 0.37332 14.6279 0 14.1671 0H0.833809C0.803809 0 0.777129 0.0125 0.747988 0.0158203C0.708809 0.02 0.672988 0.0266406 0.635488 0.0358203C0.547988 0.0583203 0.468809 0.0925 0.394668 0.139141C0.376348 0.15082 0.353848 0.151641 0.336348 0.164961C0.329629 0.17 0.327129 0.17918 0.320449 0.18418C0.229629 0.25582 0.153809 0.34332 0.0988086 0.4475C0.0871289 0.47 0.0846289 0.49418 0.0754883 0.5175C0.0488086 0.58082 0.019668 0.6425 0.00966797 0.7125C0.00548828 0.7375 0.0129883 0.76082 0.012168 0.785C0.0113477 0.80168 0.000488281 0.81668 0.000488281 0.83332V17.5C0.000488281 17.8975 0.281309 18.2392 0.670488 18.3167L9.00381 19.9834C9.05799 19.995 9.11299 20 9.16713 20C9.35795 20 9.54545 19.9342 9.69545 19.8109C9.88795 19.6525 10.0004 19.4167 10.0004 19.1667V18.3334H14.1671C14.6279 18.3334 15.0004 17.96 15.0004 17.5V12.5C15.0004 12.04 14.6279 11.6667 14.1671 11.6667Z"
                  fill="white"
                />
              </svg>
              <div class="button-to-exit">Выйти</div>
            </a>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
