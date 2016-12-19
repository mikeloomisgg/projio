var React = require('react');
var AltContainer = require('alt-container');

var TableStore = require('../stores/TableStore');
var TableActions = require("../actions/TableActions");
var Row = require('../components/RowComponent');
var Cell = require('../components/CellComponent');
var Table = require('../components/TableComponent');

var TableContainer = React.createClass({
  render() {
    return (
      <AltContainer
        store={TableStore}
        actions={TableActions}
      >
        <Table />
      </AltContainer>

    )
  }
})

module.exports = TableContainer
