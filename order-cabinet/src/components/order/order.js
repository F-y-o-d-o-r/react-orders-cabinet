import React, { Component } from 'react';
import './order.sass';
import { Link } from 'react-router-dom';
export default class Order extends Component {
  state = {
    js: []
  };

  componentDidMount = () => {
    const { match, location, history } = this.props;
    fetch('https://jsonplaceholder.typicode.com/posts').then((response) => response.json()).then((json) =>
      this.setState({
        js: json[match.params.id]
      })
    );
  };

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
        <div className="container1">
          <Link to="/" className="back">
            Назад к заказам
          </Link>
          <div className="order blue-buttons">
            <div className="desc-wrapper">
              <div className="desc-header">Заказ №78346994</div>
              <div className="desc">
                <div className="desc__order-firstcolumn">
                  <div>
                    <span>Статус:</span>
                    <span>В обработке</span>
                  </div>
                  <div>
                    <span>ВУЗ:</span>
                    <span>КПІ им. И. Сикорського</span>
                  </div>
                  <div>
                    <span>Факультет:</span>
                    <span>МЭИМ</span>
                  </div>
                  <div>
                    <span>Курс:</span>
                    <span>4</span>
                  </div>
                  <div>
                    <span>Предмет:</span>
                    <span>Международная экономика</span>
                  </div>
                </div>
                <div className="desc__order-secondcolumn">
                  <div>
                    <span>Срок сдачи:</span>
                    <span>15.12.18 18:00</span>
                  </div>
                  <div>
                    <span>Тип работы:</span>
                    <span>{this.state.js.title}</span>
                  </div>
                  <div>
                    <span>Тема работы:</span>
                    <span>Ошибки бухгалтерии в эпоху марксизма и Ошибки бухгалтерии в эпоху марксизма</span>
                  </div>
                  <div>
                    <span>Документы:</span>
                    <span>Методичка.док, Методичка.док, Методичка.док</span>
                  </div>
                </div>
              </div>
              <div className="desc-footer">
                Требования к работе / Комментарий:<span>{this.state.js.body}</span>
                {/* <div className="show-more-wrapper">
                  <span>...</span>
                  <span className="show-more">Показать еще</span>
                </div> */}
              </div>
            </div>
            <div className="price">
              <div className="money-button-wrapper">
                <div className="price-money">
                  <div className="old">
                    <span>1700</span>
                    <span> грн</span>
                  </div>
                  <div className="new">
                    1250<span> грн</span>
                  </div>
                </div>
                <a className="pay" href="!#">
                  Скачать файл <span>(6)</span>
                </a>
              </div>
              <div className="date-of-order-wrapper">
                <div className="date-of-order-name">Дата поступления заказа:</div>
                <div className="date-of-order">13.11.18 22:00</div>
              </div>
            </div>
            <a className="pay small-pay-button" href="!#">
              Скачать файл <span>(6)</span>
            </a>
          </div>
          <div className="chat">
            <div className="chat__header">Чат с менеджером</div>
            <div className="chat__wrapper" />
          </div>
        </div>
      </div>
    );
  }
}
