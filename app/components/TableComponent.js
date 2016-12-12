import React from 'react';
var Row = require('./RowComponent');

var Table = React.createClass({
  render() {
    return (
      <table className="ui celled table">
        <thead>
        </thead>
        <tbody>
          <Row />
          <Row />
          <Row />
          <Row />
          <Row />
          <Row />
        </tbody>
      </table>
    );
  }
});

module.exports = Table;
