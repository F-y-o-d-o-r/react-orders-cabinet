import React, { Component } from 'react';
import classnames from 'classnames';
import './header.sass';

class Header extends Component {
  state = {
    balanse: '1429.88',
    bonus: '49.99',
    userName: 'Полиграф Шариков',
    showSmallMenu: false
  };
  showCabinetProfileExit = (params) => {
    this.setState({ showSmallMenu: !this.state.showSmallMenu });
  };
  render() {
    let { balanse, bonus, userName } = this.state;
    return (
      <React.Fragment>
        <header className="new-header new-cabinet">
          <div className="container header">
            <div className="logo">
              <svg width="107" height="23" viewBox="0 0 107 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g>
                  <path
                    className="st0"
                    d="M8.04 12.94H9.9C10.65 12.94 11.67 13 12.39 13.6C13.02 14.14 13.08 14.77 13.08 15.16C13.08 16.06 12.78 16.9 12 17.62C11.13 18.43 10.02 18.76 8.61 18.76C7.71 18.76 6.69 18.55 5.76 18.16C4.65 17.68 3.9 16.99 3.57 16.66L0.93 19.63C1.65 20.35 2.55 21.01 3.51 21.46C4.95 22.12 6.42 22.36 8.07 22.36C9.96 22.36 12.42 22.18 14.7 20.65C17.22 18.97 18 16.75 18 15.04C18 13.81 17.61 13 17.19 12.46C16.68 11.8 15.84 11.26 14.82 11.05L14.85 10.96C16.02 10.66 16.89 10.12 17.73 9.1C18.51 8.17 19.14 6.94 19.14 5.2C19.14 4.51 18.96 3.34 17.94 2.32C16.35 0.76 13.44 0.64 12.18 0.64C10.56 0.64 8.79 0.819999 7.11 1.72C4.59 3.1 4.23 5.11 4.23 6.13C4.23 6.46 4.29 6.67 4.29 6.76L8.25 7.15V7.06C8.25 5.95 8.88 5.14 9.57 4.72C10.29 4.3 11.16 4.24 11.64 4.24C12.18 4.24 12.93 4.3 13.47 4.87C13.71 5.14 13.95 5.59 13.95 6.25C13.95 7.03 13.59 7.96 12.93 8.59C12.15 9.34 11.28 9.49 10.47 9.49H8.7L8.04 12.94ZM31.4541 22.36H33.6441L34.0941 18.31L35.9541 8.65C35.1141 8.2 34.0041 7.72 33.0741 7.42C31.9941 7.09 30.6741 6.82 29.6241 6.82C27.6441 6.82 25.8141 7.39 24.4341 8.38C21.8241 10.27 20.5641 13.78 20.5641 16.69C20.5641 18.1 20.8641 19.33 21.4341 20.2C22.3341 21.52 23.9841 22.36 25.9641 22.36C27.3441 22.36 28.5741 21.94 29.4441 21.37C30.0441 20.98 30.5241 20.5 30.6441 20.38L31.4541 22.36ZM30.2841 15.31C30.0741 16.33 29.9241 17.56 28.9641 18.46C28.4841 18.91 27.8541 19.24 26.9841 19.24C26.0841 19.24 25.6341 18.82 25.4241 18.55C25.1241 18.16 25.0341 17.62 25.0341 17.08C25.0341 16.42 25.1841 15.73 25.2741 15.22L25.4841 14.08C25.6941 12.91 25.8741 11.74 27.0441 10.72C27.7641 10.09 28.3941 9.94 29.2041 9.94C29.7141 9.94 30.3741 10.06 31.1841 10.75L30.2841 15.31ZM52.4292 7.18H48.0492L46.8492 13.36C46.0392 13.6 45.2892 13.66 44.6592 13.66C43.6092 13.66 43.1292 13.39 42.9192 13.12C42.7092 12.85 42.6492 12.55 42.6492 12.28C42.6492 12.1 42.6792 11.92 42.7092 11.8L43.6092 7.18H39.2292L38.3292 11.8C38.2692 12.13 38.1492 12.67 38.1492 13.27C38.1492 13.96 38.2992 14.74 38.7792 15.37C39.5592 16.36 41.3292 16.84 42.9792 16.84C43.9092 16.84 45.1392 16.66 46.2492 16.39L45.1692 22H49.5492L52.4292 7.18ZM66.5255 17.98C65.8355 18.34 65.1755 18.61 64.3655 18.85C63.4955 19.12 62.8355 19.21 61.9655 19.21C61.2755 19.21 60.2555 19.06 59.6555 18.58C59.1155 18.13 58.9055 17.47 58.9055 16.66V16.51H59.3855C61.5155 16.51 64.6055 16.12 66.6755 14.65C68.3255 13.45 68.8055 12.07 68.8055 10.96C68.8055 9.76 68.3855 8.62 67.1555 7.78C66.0755 7.03 64.7855 6.82 63.4055 6.82C61.5755 6.82 59.3255 7.24 57.3455 9.13C55.3655 11.02 54.4055 13.9 54.4055 16.51C54.4055 18.34 55.0655 19.51 55.6655 20.26C57.0455 22 59.0555 22.36 60.8855 22.36C62.3855 22.36 63.6155 22.15 64.7555 21.79C65.6855 21.49 66.6455 21.07 67.5455 20.56L66.5255 17.98ZM59.1755 13.84C59.3255 12.52 59.9555 11.23 60.7655 10.45C61.3955 9.85 62.1455 9.58 62.8055 9.58C62.9255 9.58 63.5855 9.61 64.0355 10C64.2755 10.21 64.5455 10.57 64.5455 11.23C64.5455 12.73 63.1655 13.21 62.3255 13.45C60.9755 13.81 59.7455 13.84 59.1755 13.84ZM64.1855 3.28C64.1855 4.51 65.1755 5.5 66.4055 5.5C67.6355 5.5 68.6255 4.51 68.6255 3.28C68.6255 2.05 67.6355 1.06 66.4055 1.06C65.1755 1.06 64.1855 2.05 64.1855 3.28ZM57.5555 3.28C57.5555 4.51 58.5455 5.5 59.7755 5.5C61.0055 5.5 61.9955 4.51 61.9955 3.28C61.9955 2.05 61.0055 1.06 59.7755 1.06C58.5455 1.06 57.5555 2.05 57.5555 3.28ZM75.4896 22L77.6496 10.93C78.3996 10.39 79.1496 9.91 80.0496 9.91C80.7696 9.91 81.1296 10.21 81.2796 10.42C81.4296 10.6 81.5496 10.9 81.5496 11.35C81.5496 11.53 81.5196 11.74 81.4896 11.95L79.5396 22H83.9196L86.0796 10.93C86.8296 10.39 87.5796 9.91 88.4796 9.91C89.1996 9.91 89.5596 10.21 89.7096 10.42C89.8596 10.63 89.9796 10.93 89.9796 11.38C89.9796 11.56 89.9496 11.74 89.9196 11.95L87.9696 22H92.3496L94.2096 12.43C94.2696 12.07 94.3596 11.53 94.3596 10.9C94.3596 9.85 94.0896 8.56 92.9196 7.69C92.0196 7.03 90.6396 6.82 89.5296 6.82C88.6596 6.82 86.9196 7 85.4196 8.47C85.3296 8.32 84.9696 7.81 84.4296 7.45C83.5596 6.88 82.4796 6.82 82.0296 6.82C80.5296 6.82 78.9396 7.3 77.7396 8.2L77.3796 8.47L77.6196 7.18H72.2796L71.6796 10.3H73.3896L71.1096 22H75.4896ZM101.32 0.999999L99.2203 16.51H102.28L106.18 0.999999H101.32ZM101.77 22L102.52 18.1H98.3203L97.5703 22H101.77Z"
                  />
                </g>
              </svg>
            </div>
            <div className="header__info-wrapper">
              <div className="header__your-balance">
                Баланс: <span>{balanse} грн.</span>
              </div>
              <div className="header__your-bonus">
                Бонусы: <span>{bonus} грн.</span>
              </div>
              <div className="header__accordion">
                <div className="header__accordion-a" onClick={this.showCabinetProfileExit}>
                  {userName}
                  <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 11L0.937823 0.499999L13.0622 0.5L7 11Z" fill="white" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="hamburger-menu hamburger-menu-new">
              <div className="bar" />
            </div>
            <div className="mobile-menu-wrapper">
              <div className="mobile-menu-wrapper__header">
                <div className="mobile-menu-wrapper__header-firstcolumn">
                  <header>
                    <h5>Очень Широкое Имя Тут</h5>
                  </header>
                  <div className="mobile-menu-wrapper__balanse-wrapper">
                    <div className="mobile-menu-wrapper__balance">
                      <span>Баланс:</span>
                      <span>429.87 грн.</span>
                    </div>
                    <div className="mobile-menu-wrapper__bonus">
                      <span>Бонусы:</span>
                      <span>48.14 грн.</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mobile-menu-wrapper__main-content-wrappper">
                <nav className="mobile-menu-wrapper__nav">
                  <ul>
                    <li>
                      <a href="#!">Сделать заказ</a>
                    </li>
                    <li>
                      <a className="active" href="#!">
                        Мои заказы
                      </a>
                    </li>
                    <li>
                      <a href="#!">Профиль</a>
                    </li>
                    <li>
                      <a href="#!">Скидки</a>
                    </li>
                    <li>
                      <a href="#!">Заработай</a>
                    </li>
                    <li>
                      <a href="#!">Финансы</a>
                    </li>
                    <li>
                      <a href="#!">FAQ</a>
                    </li>
                  </ul>
                </nav>
              </div>
              <a className="exit" href="#!">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M19.9367 8.84817C19.8942 8.74649 19.8333 8.65399 19.7558 8.57649L17.2567 6.07731C16.9308 5.75231 16.4042 5.75231 16.0783 6.07731C15.7525 6.40313 15.7525 6.93063 16.0783 7.25563L17.1558 8.33313H12.5008C12.04 8.33313 11.6675 8.70645 11.6675 9.16645C11.6675 9.62645 12.04 9.99977 12.5008 9.99977H17.1558L16.0783 11.0773C15.7525 11.4031 15.7525 11.9306 16.0783 12.2556C16.2408 12.4189 16.4541 12.4998 16.6675 12.4998C16.8808 12.4998 17.0942 12.419 17.2567 12.2556L19.7558 9.75641C19.8333 9.67973 19.8942 9.58723 19.9367 9.48473C20.0208 9.28149 20.0208 9.05149 19.9367 8.84817Z"
                    fill="white"
                  />
                  <path
                    d="M14.1671 11.6667C13.7063 11.6667 13.3338 12.04 13.3338 12.5V16.6667H10.0005V3.33332C10.0005 2.96582 9.75881 2.64082 9.40631 2.535L6.51213 1.66668H13.3338V5.83336C13.3338 6.29336 13.7063 6.66668 14.1671 6.66668C14.6279 6.66668 15.0004 6.29336 15.0004 5.83336V0.833359C15.0004 0.37332 14.6279 0 14.1671 0H0.833809C0.803809 0 0.777129 0.0125 0.747988 0.0158203C0.708809 0.02 0.672988 0.0266406 0.635488 0.0358203C0.547988 0.0583203 0.468809 0.0925 0.394668 0.139141C0.376348 0.15082 0.353848 0.151641 0.336348 0.164961C0.329629 0.17 0.327129 0.17918 0.320449 0.18418C0.229629 0.25582 0.153809 0.34332 0.0988086 0.4475C0.0871289 0.47 0.0846289 0.49418 0.0754883 0.5175C0.0488086 0.58082 0.019668 0.6425 0.00966797 0.7125C0.00548828 0.7375 0.0129883 0.76082 0.012168 0.785C0.0113477 0.80168 0.000488281 0.81668 0.000488281 0.83332V17.5C0.000488281 17.8975 0.281309 18.2392 0.670488 18.3167L9.00381 19.9834C9.05799 19.995 9.11299 20 9.16713 20C9.35795 20 9.54545 19.9342 9.69545 19.8109C9.88795 19.6525 10.0004 19.4167 10.0004 19.1667V18.3334H14.1671C14.6279 18.3334 15.0004 17.96 15.0004 17.5V12.5C15.0004 12.04 14.6279 11.6667 14.1671 11.6667Z"
                    fill="white"
                  />
                </svg>
                <div className="button-to-exit">Выйти</div>
              </a>
            </div>
          </div>
        </header>
        <HeaderSmallMenu showHide={this.state.showSmallMenu} />
      </React.Fragment>
    );
  }
}

function HeaderSmallMenu(props) {
  let cabinetClassName = classnames({
    'cabinet-profile-exit': true,
    'cabinet-profile-exit-show': props.showHide
  });
  return (
    <div className={cabinetClassName}>
      <div className="container">
        <div className="cabinet-profile-exit__menu">
          <ul>
            <li>
              <a href="/profile">Мой профиль</a>
            </li>
            <li>
              <a className="exit" href="#!">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M19.9367 8.84817C19.8942 8.74649 19.8333 8.65399 19.7558 8.57649L17.2567 6.07731C16.9308 5.75231 16.4042 5.75231 16.0783 6.07731C15.7525 6.40313 15.7525 6.93063 16.0783 7.25563L17.1558 8.33313H12.5008C12.04 8.33313 11.6675 8.70645 11.6675 9.16645C11.6675 9.62645 12.04 9.99977 12.5008 9.99977H17.1558L16.0783 11.0773C15.7525 11.4031 15.7525 11.9306 16.0783 12.2556C16.2408 12.4189 16.4541 12.4998 16.6675 12.4998C16.8808 12.4998 17.0942 12.419 17.2567 12.2556L19.7558 9.75641C19.8333 9.67973 19.8942 9.58723 19.9367 9.48473C20.0208 9.28149 20.0208 9.05149 19.9367 8.84817Z"
                    fill="white"
                  />
                  <path
                    d="M14.1671 11.6667C13.7063 11.6667 13.3338 12.04 13.3338 12.5V16.6667H10.0005V3.33332C10.0005 2.96582 9.75881 2.64082 9.40631 2.535L6.51213 1.66668H13.3338V5.83336C13.3338 6.29336 13.7063 6.66668 14.1671 6.66668C14.6279 6.66668 15.0004 6.29336 15.0004 5.83336V0.833359C15.0004 0.37332 14.6279 0 14.1671 0H0.833809C0.803809 0 0.777129 0.0125 0.747988 0.0158203C0.708809 0.02 0.672988 0.0266406 0.635488 0.0358203C0.547988 0.0583203 0.468809 0.0925 0.394668 0.139141C0.376348 0.15082 0.353848 0.151641 0.336348 0.164961C0.329629 0.17 0.327129 0.17918 0.320449 0.18418C0.229629 0.25582 0.153809 0.34332 0.0988086 0.4475C0.0871289 0.47 0.0846289 0.49418 0.0754883 0.5175C0.0488086 0.58082 0.019668 0.6425 0.00966797 0.7125C0.00548828 0.7375 0.0129883 0.76082 0.012168 0.785C0.0113477 0.80168 0.000488281 0.81668 0.000488281 0.83332V17.5C0.000488281 17.8975 0.281309 18.2392 0.670488 18.3167L9.00381 19.9834C9.05799 19.995 9.11299 20 9.16713 20C9.35795 20 9.54545 19.9342 9.69545 19.8109C9.88795 19.6525 10.0004 19.4167 10.0004 19.1667V18.3334H14.1671C14.6279 18.3334 15.0004 17.96 15.0004 17.5V12.5C15.0004 12.04 14.6279 11.6667 14.1671 11.6667Z"
                    fill="white"
                  />
                </svg>
                <span>Выйти</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
