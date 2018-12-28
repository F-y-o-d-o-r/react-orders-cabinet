import React, { Component } from 'react';
/*eslint-disable */
import { BrowserRouter as Route, Link } from 'react-router-dom';
/*eslint-enable */
import './new-order.sass';

export default class NewOrder extends Component {
  render() {
    return (
      <div>
        <nav className="cabinet">
          <ul>
            {/* <li className="active">
              <Link to="/new-order" className="message">
                Сделать заказ
              </Link>
            </li> */}
            <li className="orders">
              <Link to="/" className="message">
                Мои заказы
              </Link>
            </li>
            <li>
              <Link to="/profile" className="message">
                Мой профиль
              </Link>
            </li>
          </ul>
        </nav>
        <h1>new order</h1>
      </div>
    );
  }
}
