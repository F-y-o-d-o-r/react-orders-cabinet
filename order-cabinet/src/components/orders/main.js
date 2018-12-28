import React, { Component } from 'react';
// import { BrowserRouter as Route, Link } from 'react-router-dom';
import { Link } from 'react-router-dom';
export default class MainOrders extends Component {
  state = {
    js: [],
    orderVariant: 'order-all'
  };

  componentDidMount = () => {
    fetch('https://jsonplaceholder.typicode.com/posts').then((response) => response.json()).then((json) =>
      this.setState({
        js: json
      })
    );
  };

  changeTab = (e) => {
    e.preventDefault();
    let x = document.querySelectorAll('.status-order');
    this.setState({ orderVariant: e.currentTarget.parentNode.getAttribute('data-item') });
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove('active');
    }
    e.currentTarget.parentNode.classList.add('active');
  };

  render() {
    var id = this.state.orderVariant;
    const orderAll = this.state.js.map((js) => (
      <li className="order-waiting" key={js.id}>
        <Link
          to={{
            pathname: '/order/' + js.id
          }}
        >
          <div className="desc">
            <div className="desc__order-status">
              <div>
                <span>Заказ:</span>
                <span>{js.id}</span>
              </div>
              <div>
                <span>Статус:</span>
                <span className="order-color">В обработке</span>
              </div>
              <div className="desc__order-discount-message desc__order-discount-message-small">
                <span>!</span>
              </div>
            </div>
            <div className="desc__order-details">
              <div>
                <span>Срок сдачи:</span>
                <span>15.12.18 18:00</span>
              </div>
              <div>
                <span>Тип работы:</span>
                <span>{js.title.length > 45 ? js.title.slice(0, 40) + '...' : js.title}</span>
              </div>
              <div>
                <span>Предмет:</span>
                <span>{js.body.length > 45 ? js.body.slice(0, 40) + '...' : js.body}</span>
              </div>
              <div className="small-screen-price">
                <div className="price-money">
                  <div className="new">
                    100<span> грн</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="desc__order-discount">
              <div className="desc__order-discount-size" title="Самая лучшая скидка!">
                <span className="desc__order-discount-size-indent">Скидка</span>
                <span>-100%</span>
                <span className="desc__order-discount-sign">?</span>
              </div>
              <div className="desc__order-discount-message desc__order-discount-message-big">
                <span>!</span>
                <span>Новое сообщение</span>
              </div>
            </div>
          </div>
          <div className="price">
            <div className="price-money">
              <div className="old">
                <span>2501</span>
                <span> грн</span>
              </div>
              <div className="new">
                2300<span> грн</span>
              </div>
            </div>
            <button className="pay order-color">Изменить</button>
          </div>
        </Link>
      </li>
    ));
    var inWork = this.state.js.slice(5, 20);
    const orderInWork = inWork.map((js) => (
      <li className="order-in-work" key={js.id}>
        <Link
          to={{
            pathname: '/order/' + js.id
          }}
        >
          <div className="desc">
            <div className="desc__order-status">
              <div>
                <span>Заказ:</span>
                <span>{js.id}</span>
              </div>
              <div>
                <span>Статус:</span>
                <span className="order-color">В работе</span>
              </div>
              <div className="desc__order-discount-message desc__order-discount-message-small">
                <span>!</span>
              </div>
            </div>
            <div className="desc__order-details">
              <div>
                <span>Срок сдачи:</span>
                <span>15.12.18 18:00</span>
              </div>
              <div>
                <span>Тип работы:</span>
                <span>{js.title.length > 45 ? js.title.slice(0, 40) + '...' : js.title}</span>
              </div>
              <div>
                <span>Предмет:</span>
                <span>{js.body.length > 45 ? js.body.slice(0, 40) + '...' : js.body}</span>
              </div>
              <div className="small-screen-price">
                <div className="price-money">
                  <div className="new">
                    100<span> грн</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="desc__order-discount">
              <div className="desc__order-discount-size" title="Самая лучшая скидка!">
                <span className="desc__order-discount-size-indent">Скидка</span>
                <span>-100%</span>
                <span className="desc__order-discount-sign">?</span>
              </div>
              <div className="desc__order-discount-message desc__order-discount-message-big">
                <span>!</span>
                <span>Новое сообщение</span>
              </div>
            </div>
          </div>
          <div className="price">
            <div className="price-money">
              <div className="old">
                <span>2501</span>
                <span> грн</span>
              </div>
              <div className="new">
                2300<span> грн</span>
              </div>
            </div>
            <button className="pay order-color">Изменить</button>
          </div>
        </Link>
      </li>
    ));
    var inWait = this.state.js.slice(20, 33);
    const orderInWait = inWait.map((js) => (
      <li className="order-waiting" key={js.id}>
        <Link
          to={{
            pathname: '/order/' + js.id
          }}
        >
          <div className="desc">
            <div className="desc__order-status">
              <div>
                <span>Заказ:</span>
                <span>{js.id}</span>
              </div>
              <div>
                <span>Статус:</span>
                <span className="order-color">В обработке</span>
              </div>
              <div className="desc__order-discount-message desc__order-discount-message-small">
                <span>!</span>
              </div>
            </div>
            <div className="desc__order-details">
              <div>
                <span>Срок сдачи:</span>
                <span>15.12.18 18:00</span>
              </div>
              <div>
                <span>Тип работы:</span>
                <span>{js.title.length > 45 ? js.title.slice(0, 40) + '...' : js.title}</span>
              </div>
              <div>
                <span>Предмет:</span>
                <span>{js.body.length > 45 ? js.body.slice(0, 40) + '...' : js.body}</span>
              </div>
              <div className="small-screen-price">
                <div className="price-money">
                  <div className="new">
                    100<span> грн</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="desc__order-discount">
              <div className="desc__order-discount-size" title="Самая лучшая скидка!">
                <span className="desc__order-discount-size-indent">Скидка</span>
                <span>-100%</span>
                <span className="desc__order-discount-sign">?</span>
              </div>
              <div className="desc__order-discount-message desc__order-discount-message-big">
                <span>!</span>
                <span>Новое сообщение</span>
              </div>
            </div>
          </div>
          <div className="price">
            <div className="price-money">
              <div className="old">
                <span>2501</span>
                <span> грн</span>
              </div>
              <div className="new">
                2300<span> грн</span>
              </div>
            </div>
            <button className="pay order-color">Изменить</button>
          </div>
        </Link>
      </li>
    ));
    var inFinished = this.state.js.slice(34, 80);
    const orderInFinish = inFinished.map((js) => (
      <li className="order-finished" key={js.id}>
        <Link
          to={{
            pathname: '/order/' + js.id
          }}
        >
          <div className="desc">
            <div className="desc__order-status">
              <div>
                <span>Заказ:</span>
                <span>{js.id}</span>
              </div>
              <div>
                <span>Статус:</span>
                <span className="order-color">Завершен</span>
              </div>
              <div className="desc__order-discount-message desc__order-discount-message-small">
                <span>!</span>
              </div>
            </div>
            <div className="desc__order-details">
              <div>
                <span>Срок сдачи:</span>
                <span>15.12.18 18:00</span>
              </div>
              <div>
                <span>Тип работы:</span>
                <span>{js.title.length > 45 ? js.title.slice(0, 40) + '...' : js.title}</span>
              </div>
              <div>
                <span>Предмет:</span>
                <span>{js.body.length > 45 ? js.body.slice(0, 40) + '...' : js.body}</span>
              </div>
              <div className="small-screen-price">
                <div className="price-money">
                  <div className="new">
                    100<span> грн</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="desc__order-discount">
              <div className="desc__order-discount-size" title="Самая лучшая скидка!">
                <span className="desc__order-discount-size-indent">Скидка</span>
                <span>-100%</span>
                <span className="desc__order-discount-sign">?</span>
              </div>
              <div className="desc__order-discount-message desc__order-discount-message-big">
                <span>!</span>
                <span>Новое сообщение</span>
              </div>
            </div>
          </div>
          <div className="price">
            <div className="price-money">
              <div className="old">
                <span>2501</span>
                <span> грн</span>
              </div>
              <div className="new">
                2300<span> грн</span>
              </div>
            </div>
            <button className="pay order-color">Скачать файл</button>
          </div>
        </Link>
      </li>
    ));
    return (
      <div>
        <div className="container">
          <div className="sort-order">
            <ul>
              <li className="status-order active" data-item="order-all">
                <a href="!#" onClick={this.changeTab}>
                  Все ({this.state.js.length})
                </a>
              </li>
              <li className="status-order" data-item="order-waiting">
                <a href="!#" onClick={this.changeTab}>
                  В обработке ({orderInWait.length})
                </a>
              </li>
              <li className="status-order" data-item="order-in-work">
                <a href="!#" onClick={this.changeTab}>
                  В работе ({orderInWork.length})
                </a>
              </li>
              <li className="status-order" data-item="order-full-end">
                <a href="!#" onClick={this.changeTab}>
                  Завершен ({orderInFinish.length})
                </a>
              </li>
            </ul>
          </div>
          <div className="verticalCarousel-orders">
            <ul className="list-orders slider verticalCarouselGroup vc_list order-variant" id={id}>
              {id === 'order-all' ? orderAll : ''}
              {id === 'order-in-work' ? orderInWork : ''}
              {id === 'order-waiting' ? orderInWait : ''}
              {id === 'order-full-end' ? orderInFinish : ''}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
