import React, { Component } from 'react';
import './menu.sass';

export default class Menu extends Component {
  render() {
    return (
      <h1>menu</h1>
      // <Router>
      //   <div>
      //     <nav className="cabinet">
      //       <ul>
      //         <li className="active">
      //           <Link to="/new-order" className="message">
      //             Сделать заказ
      //           </Link>
      //         </li>
      //         <li className="orders">
      //           <Link to="/" className="message">
      //             Мои заказы
      //           </Link>
      //         </li>
      //         <li>
      //           <Link to="/profile" className="message">
      //             Мой профиль
      //           </Link>
      //         </li>
      //       </ul>
      //     </nav>
      //     <Route path="/" exact component={Orders} />
      //     <Route path="/new-order" exact component={NewOrder} />
      //     <Route path="/profile" exact component={Profile} />
      //   </div>
      // </Router>
    );
  }
}
