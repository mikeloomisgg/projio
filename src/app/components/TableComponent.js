import React from 'react';
import Row from './RowComponent';
import Cell from './CellComponent';

var Table = React.createClass({
  render() {
    var Rows = this.props.tableData.rows.map(function(object, i) {
      return <Row
        rowData={object}
        selectCell={this.props.selectCell}
        editCell={this.props.editCell}
        updateCell={this.props.updateCell}
        key={i} />
    }, this);

    var Headers = this.props.tableData.fields.map(function(object, i) {
      return <th key={i}>{object.name}</th>
    });

    return (
      <div style={{height: '500px'}}>
        <div style={{overflow: 'scroll'}}>
          <table className="ui striped fixed selectable celled table">
            <thead>
              <tr>
                {Headers}
              </tr>
            </thead>
            <tbody>
              {Rows}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
});

export default Table;
