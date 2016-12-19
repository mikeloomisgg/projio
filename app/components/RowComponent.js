import React from 'react';
var Cell = require('./CellComponent')

var Row = React.createClass({
  render() {
    var Cells = this.props.rowData.cells.map(function(object, i) {
      return <Cell
        cellData={object}
        rowIndex={this.props.rowData.index}
        cellIndex={i}
        selectCell={this.props.selectCell}
        editCell={this.props.editCell}
        key={i}/>
    }, this);

    return (
      <tr >
        {Cells}
      </tr>
    );
  }
});

module.exports = Row;
