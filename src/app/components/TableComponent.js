import React from 'react';

import Row from './RowComponent';
import Cell from './CellComponent';

var win = require('electron').remote;

class Table extends React.Component {
  constructor(props) {
    super(props);

    var prev_height = win.getCurrentWindow().getContentSize()[1];

    win.getCurrentWindow().prependListener('resize', (e) => {
      var height = win.getCurrentWindow().getContentSize()[1];
      if(prev_height != height){
        prev_height = height;
        this.props.updateViewHeight(height);
      }
    });
  }

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
      <div className="ui fluid container">
        <div className="ui fluid container" style={{top: 'inherit'}}>
          <table className="ui striped fixed selectable celled table">
            <thead>
              <tr style={{height:'50px'}}>
                {Headers}
              </tr>
            </thead>
          </table>
        </div>
        <div className="ui fluid container" style={{height:this.props.height + 'px' ,overflowY:'overlay', margin:'0px', padding:'0px'}}>
          <table className="ui striped fixed selectable celled table">
            <tbody>
              {Rows}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Table;
