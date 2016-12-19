import React from 'react';
var Row = require('./RowComponent');
var Cell = require('./CellComponent');

var Table = React.createClass({

  render() {
    var Rows = this.props.tableData.rows.map(function(object, i) {
      return <Row
        rowData={object}
        selectCell={this.props.selectCell}
        editCell={this.props.editCell}
        key={i} />
    }, this);

    return (
      <table className="ui striped selectable celled table" >
        <thead>
        </thead>
        <tbody>
          {Rows}
        </tbody>
      </table>
    );
  }
});

module.exports = Table;
