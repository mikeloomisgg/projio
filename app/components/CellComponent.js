import React from 'react';

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
        <td className={className}>
          <div className="ui fluid input focus" >
            <input type="text"
              ref={(input) => { this.textInput = input; }}
              defaultValue={this.props.cellData.value}
              onFocus={()=>{this.textInput.select()}}
              onChange={this.handleEdit}/>
          </div>
        </td>
      );
    } else {
      return (
        <td className={className} onClick={this.handleClick} onDoubleClick={this.handleDoubleClick}>
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

module.exports = Cell;
