import React from 'react';
var CellStore = require('../stores/CellStore');

var Cell = React.createClass({
  render() {
    return (
      <div className="ui segment">
        {this.props.value}
      </div>
    );
  },
});

module.exports = Cell;
