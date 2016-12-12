import React from 'react';
var Cell = require('./CelLComponent')

var Row = React.createClass({
  render() {
    return (
      <tr>
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
      </tr>
    );
  }
});

module.exports = Row;
