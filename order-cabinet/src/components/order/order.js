import React, { Component } from 'react';

class Order extends Component {
  render() {
    return (
      <div>
        <h3>Please</h3>
      </div>
    );
  }
}
export default function Child({ match }) {
  return (
    <div>
      <h3>ID: {match.params.id}</h3>
    </div>
  );
}
