var React = require('react');
var AltContainer = require('alt-container');
var CellStore = require('../stores/CellStore');
var CellActions = require('../actions/CellActions');
var Cell = require('../components/CellComponent');

var CellContainer = React.createClass({
  render() {
    return (
      <AltContainer
        store={CellStore}
        actions={CellActions}
      >
        <Cell />
      </AltContainer>
    )
  }
})

module.exports = CellContainer
