import React from 'react';
import Cell from './CellComponent';

var Row = React.createClass({
  render() {
    var Cells = this.props.rowData.cells.map(function(object, i) {
      return <Cell
        cellData={object}
        rowIndex={this.props.rowData.index}
        cellIndex={i}
        selectCell={this.props.selectCell}
        editCell={this.props.editCell}
        updateCell={this.props.updateCell}
        key={i}/>
    }, this);

    return (
      <tr>
        {Cells}
      </tr>
    );
  }
});

export default Row;
