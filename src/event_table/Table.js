import React from 'react';
import AltContainer from 'alt-container';

import TableStore from './TableStore';
import TableActions from './TableActions';

var win = require('electron').remote;

var Cell = React.createClass({
  render() {
    var className = "";

    if(this.props.cellData.isSelected) {
      className = "active";
    } else {
      className = "";
    }

    if(this.props.cellData.isBeingEditted) {
      return (
        <td style={{padding: '0'}} className={className}>
          <div className="ui fluid input focus" >
            <input style={{padding: '0'}} type="text"
              ref={(input) => { this.textInput = input; }}
              defaultValue={this.props.cellData.value}
              onFocus={()=>{this.textInput.select()}}
              onChange={this.handleEdit}/>
          </div>
        </td>
      );
    } else if(this.props.cellData.value == "") {
      return (
        <td style={{padding: '11px'}} className={className} onClick={this.handleClick} onDoubleClick={this.handleDoubleClick}>
          {this.props.cellData.value}
        </td>
      );
    } else {
      return (
        <td style={{padding: '0px'}} className={className} onClick={this.handleClick} onDoubleClick={this.handleDoubleClick}>
          {this.props.cellData.value}
        </td>
      );
    }
  },

  handleClick() {
    this.props.selectCell({rowIndex: this.props.rowIndex, cellIndex: this.props.cellIndex});
  },

  handleDoubleClick() {
    this.props.editCell({rowIndex: this.props.rowIndex, cellIndex: this.props.cellIndex});
  },

  handleEdit() {
    this.props.updateCell({rowIndex: this.props.rowIndex, cellIndex: this.props.cellIndex, value: this.textInput.value});
  },

  componentDidUpdate() {
    if(this.props.cellData.isBeingEditted){
      this.textInput.focus();
    }
  }
});

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

class TableContainer extends React.Component {
  constructor(props) {
    super(props);
  }

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
}

export {Cell}
export {Row}
export {Table}
export default TableContainer
