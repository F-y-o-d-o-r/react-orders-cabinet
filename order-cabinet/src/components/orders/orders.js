import React, { Component } from 'react';
import { BrowserRouter as Route, Link } from 'react-router-dom';
import './orders.sass';

export default class Orders extends Component {
  render() {
    return (
      <div>
        <nav className="cabinet">
          <ul>
            <li>
              <Link to="/new-order" className="message">
                Сделать заказ
              </Link>
            </li>
            <li className="active">
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
        <h1>orders</h1>
      </div>
    );
  }
}
