import React, { Component } from 'react';
/*eslint-disable */
import { Link } from 'react-router-dom';
/*eslint-enable */
import './profile.sass';

export default class Profile extends Component {
  render() {
    return (
      <div>
        <nav className="cabinet">
          <ul>
            {/* <li>
              <Link to="/new-order" className="message">
                Сделать заказ
              </Link>
            </li> */}
            <li>
              <Link to="/" className="message">
                Мои заказы
              </Link>
            </li>
            <li className="active">
              <Link to="/profile" className="message">
                Мой профиль
              </Link>
            </li>
          </ul>
        </nav>
        <h1>Profile</h1>
      </div>
    );
  }
}
